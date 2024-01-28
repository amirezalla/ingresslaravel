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
    
        $extension = strtolower($file->getClientOriginalExtension());
        if (!in_array($extension, $allowedExtensions)) {
            return response()->json(['error' => true, 'message' => 'Invalid file type.']);
        }
    
        $hashedName = $this->hashName($file);
        $originalPath = $file->storeAs('nfts/original', $hashedName, 'public');
    
        // dd($originalPath);
        // if (in_array($extension, ['jpeg', 'jpg', 'png', 'gif'])) {
        //     $this->saveScaledVersions($file, $hashedName, 'nfts/scaled');
        // }    
    
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


    public function MintToImport(Request $request){
        
        // Find or create the seller and owner in the customer table
        $seller = Customer::firstOrCreate(['eth_address' => $request->seller_eth_address]);
        $owner = Customer::firstOrCreate(['eth_address' => $request->owner_eth_address]);

        // Create a new product (NFT) and associate it with the seller and owner
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->images = $request->image; // Assuming this is a URL or a path to the image
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

