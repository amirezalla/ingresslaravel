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

class NftController extends BaseController
{




public function postUploadNft(Request $request){
    $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'application/octet-stream']; // Add other MIME types as needed
    $file = $request->file('filepond');
    if (!$file || !in_array($file->getMimeType(), $allowedMimeTypes)) {
        return response()->json(['error' => true, 'message' => 'Invalid file type.']);
    }

    try {
        $optimizedFile = $this->optimizeFile($file);
        $path = $optimizedFile->store('nfts', 'public'); // Store in storage/app/public/nfts

        return response()->json(['success' => true, 'path' => $path]);
    } catch (Exception $exception) {
        return response()->json(['error' => true, 'message' => $exception->getMessage()]);
    }
}

private function optimizeFile($file)
{
    // Determine file type and apply appropriate optimization
    $fileType = $file->getMimeType();

    switch ($fileType) {
        case 'image/jpeg':
        case 'image/png':
            // Optimize images using Intervention Image
            $image = Image::make($file);
            $image->resize($image->width() * 0.5, $image->height() * 0.5); // Example: resize to 50%
            return $image->stream(); // Return the optimized image stream
        case 'video/mp4':
            // Optimize video using FFMpeg or similar
            // Example: $video = FFMpeg::fromDisk('videos')->open($file);
            // Apply your video optimization logic here
            break;
        // Add cases for other file types (3D files, GIFs, etc.)
    }

    return $file; // Return the file as-is if not an image or video
}
public function deploy(){
    // Make sure this path points to the git directory in your cPanel
    $output = shell_exec('cd /home/ingressdefi/public_html && git pull 2>&1');
    return "<pre>$output</pre>";


}

    }

