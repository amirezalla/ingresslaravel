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

class NftController extends BaseController
{

    public function postUploadNft(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|file|mimetypes:image/*,video/*,application/octet-stream' // Add specific MIME types for 3D files
        ]);

        $file = $request->file('file');
        $folderPath = '/nfts/';
        $optimizedFilePath = $folderPath . 'optimized_' . $file->getClientOriginalName();
        $reducedFilePath = $folderPath . 'reduced_' . $file->getClientOriginalName();

        try {
            if ($this->isImage($file)) {
                // Handle image optimization
                $image = Image::make($file->getRealPath());
                $image->resize($image->width() * 0.5, $image->height() * 0.5)->save(storage_path('app/public' . $optimizedFilePath));
                $image->resize($image->width() * 0.2, $image->height() * 0.2)->save(storage_path('app/public' . $reducedFilePath));
            } else {
                // For non-image files (videos, 3D files, GIFs), you might need different handling
                Storage::disk('public')->put($optimizedFilePath, file_get_contents($file));
                // Apply any required optimization or resizing for other file types here
            }

            return response()->json(['success' => true, 'message' => 'File uploaded successfully']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'File upload failed: ' . $e->getMessage()]);
        }
    }

    private function isImage($file)
    {
        return in_array($file->getClientMimeType(), ['image/jpeg', 'image/png', 'image/gif']);
    }


    }

