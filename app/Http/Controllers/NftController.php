<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use Botble\Media\Chunks\Exceptions\UploadMissingFileException;
use Botble\Media\Chunks\Handler\DropZoneUploadHandler;
use Botble\Media\Chunks\Receiver\FileReceiver;
use Botble\Media\Facades\RvMedia;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Models\Customer;
use Botble\Media\Models\MediaFile;
use Image; // Assuming you're using the Intervention Image library
use FFMpeg; // If using an FFMpeg library for video processing
use Symfony\Component\HttpFoundation\File\MimeType\MimeTypeGuesser;


class NftController extends BaseController
{




    public function postUploadNft(Request $request) {
        $allowedExtensions = ['jpeg', 'jpg', 'png', 'gif', 'mp4', 'obj']; // Allowed file extensions
    
        $file = $request->file('filepond');
        if (!$file) {
            return response()->json(['error' => true, 'message' => 'No file uploaded or file upload error.']);
        }
        $fileSize = $file->getSize(); // Returns file size in bytes

    
        $extension = strtolower($file->getClientOriginalExtension());
        if (!in_array($extension, $allowedExtensions)) {
            return response()->json(['error' => true, 'message' => 'Invalid file type.']);
        }
    
        
        $hashedName = $this->hashName($file);
        $originalPath = $file->storeAs('products', $hashedName, 'public');

        $fullImagePath = Storage::disk('public')->path($originalPath);

        try {
            // Crop the image
            $croppedImage = $this->fitImageInSquare($fullImagePath,500);
        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage();
        }
    
        // dd($originalPath);
        // if (in_array($extension, ['jpeg', 'jpg', 'png', 'gif'])) {
        //     $this->saveScaledVersions($file, $hashedName, 'nfts/scaled');
        // }    
    
        $MediaFile = new MediaFile();
        $MediaFile->user_id=0;
        $MediaFile->name=$hashedName;
        $MediaFile->alt=$hashedName;
        $MediaFile->size=$fileSize;
        $MediaFile->folder_id=3;
        $MediaFile->mime_type='image/'.strtolower($file->getClientOriginalExtension());
        $MediaFile->url='products/'.$hashedName;
        $MediaFile->save();

        return response()->json(['success' => true, 'path' => Storage::disk('public')->url($originalPath)]);
    }
    
    private function hashName($file) {
        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $extension = $file->getClientOriginalExtension();
        $hash = md5($originalName . microtime());
        return $hash . '.' . $extension;
    }
    
    private function saveScaledVersions($file, $hashedName, $directory) {
        $image = Image::make(Storage::disk('public')->path('nfts/original/' . $hashedName));
    
        // Save 0.5x scaled version
        $image->resize($image->width() * 0.5, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(Storage::disk('public')->path($directory . '/0.5x_' . $hashedName));
    
        // Save 0.2x scaled version
        $image->resize($image->width() * 0.2, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(Storage::disk('public')->path($directory . '/0.2x_' . $hashedName));
    }

    public function deploy(){
        // Make sure this path points to the git directory in your cPanel
        $output = shell_exec('cd /home/ingressdefi/public_html && git pull 2>&1');
        return "<pre>$output</pre>";
    }

    function cropImage($filePath, $cropWidth = 150, $cropHeight = 150) {
        // Check if the GD library is installed
        if (!extension_loaded('gd') || !function_exists('gd_info')) {
            throw new Exception('GD library is not installed');
        }
    
        // Get the size and MIME type of the image
        [$width, $height, $imageType] = getimagesize($filePath);
    
        // Create a new image from file 
        switch ($imageType) {
            case IMAGETYPE_GIF:
                $source = imagecreatefromgif($filePath);
                break;
            case IMAGETYPE_JPEG:
                $source = imagecreatefromjpeg($filePath);
                break;
            case IMAGETYPE_PNG:
                $source = imagecreatefrompng($filePath);
                break;
            default:
                throw new Exception('Unsupported image type');
        }
    
        // Calculate the crop size
        $minSize = min($width, $height);
        $cropWidth = $minSize < $cropWidth ? $minSize : $cropWidth;
        $cropHeight = $minSize < $cropHeight ? $minSize : $cropHeight;
    
        // Define the crop start coordinates
        $startX = ($width - $cropWidth) / 2;
        $startY = ($height - $cropHeight) / 2;
    
        // Create a new true color image
        $croppedImage = imagecreatetruecolor($cropWidth, $cropHeight);
    
        // Copy and resize part of an image with resampling
        imagecopyresampled($croppedImage, $source, 0, 0, $startX, $startY, $cropWidth, $cropHeight, $cropWidth, $cropHeight);
    
        // Extract the filename without extension and the file extension
        $filenameWithoutExtension = pathinfo($filePath, PATHINFO_FILENAME);
        $fileExtension = pathinfo($filePath, PATHINFO_EXTENSION);
    
        // Construct the new filename with the dimensions
        $newFilename = $filenameWithoutExtension . '-150x150.' . $fileExtension;
    
        // Use the same directory as the original file for the cropped file
        $directory = pathinfo($filePath, PATHINFO_DIRNAME);
    
        // Combine the directory, new filename, and extension
        $croppedFilePath = $directory . '/' . $newFilename;
    
        // Save the cropped image
        switch ($imageType) {
            case IMAGETYPE_GIF:
                imagegif($croppedImage, $croppedFilePath); // Save the image as a GIF
                break;
            case IMAGETYPE_JPEG:
                imagejpeg($croppedImage, $croppedFilePath, 100); // Save the image as a JPEG
                break;
            case IMAGETYPE_PNG:
                imagepng($croppedImage, $croppedFilePath); // Save the image as a PNG
                break;
        }
    
        // Free up memory
        imagedestroy($source);
        imagedestroy($croppedImage);
    
        return $croppedFilePath;
    }
    



    function fitImageInSquare($filePath, $squareSize = 500) {
        // Check if the GD library is installed
        if (!extension_loaded('gd') || !function_exists('gd_info')) {
            throw new Exception('GD library is not installed');
        }
    
        // Get the size and MIME type of the image
        [$width, $height, $imageType] = getimagesize($filePath);
    
        // Create a new image from file 
        switch ($imageType) {
            case IMAGETYPE_GIF:
                $source = imagecreatefromgif($filePath);
                break;
            case IMAGETYPE_JPEG:
                $source = imagecreatefromjpeg($filePath);
                break;
            case IMAGETYPE_PNG:
                $source = imagecreatefrompng($filePath);
                break;
            default:
                throw new Exception('Unsupported image type');
        }
    
        // Calculate the new size to maintain aspect ratio
        $ratio = min($squareSize / $width, $squareSize / $height);
        $newWidth = (int)($width * $ratio);
        $newHeight = (int)($height * $ratio);
    
        // Create a new true color image with a white background
        $squareImage = imagecreatetruecolor($squareSize, $squareSize);
        $white = imagecolorallocate($squareImage, 255, 255, 255);
        imagefilledrectangle($squareImage, 0, 0, $squareSize, $squareSize, $white);
    
        // Copy and resize the original image onto the center of the square
        $xOffset = (int)(($squareSize - $newWidth) / 2);
        $yOffset = (int)(($squareSize - $newHeight) / 2);
        imagecopyresampled($squareImage, $source, $xOffset, $yOffset, 0, 0, $newWidth, $newHeight, $width, $height);
    
        // Save the new image
        // Extract the filename without extension and the file extension
        $filenameWithoutExtension = pathinfo($filePath, PATHINFO_FILENAME);
        $fileExtension = pathinfo($filePath, PATHINFO_EXTENSION);

        // Construct the new filename with the dimensions
        $newFilename = $filenameWithoutExtension . '-150x150.' . $fileExtension;

        // Use the same directory as the original file for the cropped file
        $directory = pathinfo($filePath, PATHINFO_DIRNAME);

        // Combine the directory, new filename, and extension
        $newFilePath = $directory . '/' . $newFilename;
        imagejpeg($squareImage, $newFilePath, 100); // Save the image as a JPEG
    
        // Free up memory
        imagedestroy($source);
        imagedestroy($squareImage);
    
        return $newFilePath;
    }


    



    public function MintToImport(Request $request){
        
        // Find or create the seller and owner in the customer table
        $seller = Customer::firstOrCreate(['eth_address' => $request->seller_eth_address]);
        $owner = Customer::firstOrCreate(['eth_address' => $request->owner_eth_address]);

        // Create a new product (NFT) and associate it with the seller and owner
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;

        $baseUrlToRemove = 'https://apingressdefi.com/storage/';
        // Remove the base URL part from $request->image
        $relativeImagePath = str_replace($baseUrlToRemove, '', $request->image);
        
        // Now $relativeImagePath contains 'products/24.jpg'
        
        // Store the relative path as an array in JSON format in the 'images' column
        $product->images = json_encode([$relativeImagePath]);    

        $product->seller_eth_address = $seller->eth_address;
        $product->owner_eth_address = $owner->eth_address;
        $nft_id_hex = $request->input('nft_id.hex'); // This will retrieve the hex value from the request
        $nft_id_decimal = hexdec($nft_id_hex);
        $product->artist_name=$request->artist_name;
        $product->nft_id = $nft_id_decimal;
        $product->status = 'pending'; // Assuming the default status is 'pending'
        // Set other fields as needed
        $product->save();

        // Return a response, possibly the product info or a success message
        return response()->json([
            'message' => 'NFT imported successfully',
            'product' => $product,
        ], 201);
    }

    }

