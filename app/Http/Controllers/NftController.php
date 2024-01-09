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
use Image; // Assuming you're using the Intervention Image library
use FFMpeg; // If using an FFMpeg library for video processing
use Symfony\Component\HttpFoundation\File\MimeType\MimeTypeGuesser;


class NftController extends BaseController
{




    public function postUploadNft(Request $request){
        $allowedExtensions = ['jpeg', 'jpg', 'png', 'gif', 'mp4', 'obj']; // Allowed file extensions
    
        $file = $request->file('filepond');
        if (!$file) {
            return response()->json(['error' => true, 'message' => 'No file uploaded or file upload error.']);
        }
    
        $extension = $file->getClientOriginalExtension();
        if (!in_array(strtolower($extension), $allowedExtensions)) {
            return response()->json(['error' => true, 'message' => 'Invalid file type.']);
        }
    
        // Generate a unique hashed name for the file
        $hashedName = $file->hashName();
    
        try {
            // Save original file with hashed name
            $originalPath = $file->storeAs('nfts/original', $hashedName, 'public');
    
            // Generate and save scaled versions for images
            if (in_array(strtolower($extension), ['jpeg', 'jpg', 'png', 'gif'])) {
                $this->saveScaledVersions($file, $hashedName, 'nfts/scaled');
            }
    
            return response()->json(['success' => true, 'path' => $originalPath]);
        } catch (Exception $exception) {
            return response()->json(['error' => true, 'message' => $exception->getMessage()]);
        }
    }

    private function saveScaledVersions($file, $hashedName, $directory)
    {
        $image = Image::make($file);
    
        // Save 0.5x scaled version
        $image->resize($image->width() * 0.5, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(storage_path('app/public/' . $directory . '/0.5x_' . $hashedName));
    
        // Save 0.2x scaled version
        $image->resize($image->width() * 0.2, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(storage_path('app/public/' . $directory . '/0.2x_' . $hashedName));
    }

    public function deploy(){
        // Make sure this path points to the git directory in your cPanel
        $output = shell_exec('cd /home/ingressdefi/public_html && git pull 2>&1');
        return "<pre>$output</pre>";


    }

    }

