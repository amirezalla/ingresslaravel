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
        dd($request->file('file'));
        if (! RvMedia::isChunkUploadEnabled()) {
            $result = RvMedia::handleUpload(Arr::first($request->file('file')), $request->input('folder_id', 0));

            return $this->handleUploadResponse($result);
        }

        try {
            // Create the file receiver
            $receiver = new FileReceiver('file', $request, DropZoneUploadHandler::class);
            // Check if the upload is success, throw exception or return response you need
            if ($receiver->isUploaded() === false) {
                throw new UploadMissingFileException();
            }
            // Receive the file
            $save = $receiver->receive();
            // Check if the upload has finished (in chunk mode it will send smaller files)
            if ($save->isFinished()) {
                $result = RvMedia::handleUpload($save->getFile(), $request->input('folder_id', 0));

                return $this->handleUploadResponse($result);
            }
            // We are in chunk mode, lets send the current progress
            $handler = $save->handler();

            return response()->json([
                'done' => $handler->getPercentageDone(),
                'status' => true,
            ]);
        } catch (Exception $exception) {
            return RvMedia::responseError($exception->getMessage());
        }


    }

    protected function handleUploadResponse(array $result): JsonResponse
    {
        if (! $result['error']) {
            return RvMedia::responseSuccess([
                'id' => $result['data']->id,
                'src' => RvMedia::url($result['data']->url),
            ]);
        }

        return RvMedia::responseError($result['message']);
    }
    public function deploy(){
        // Make sure this path points to the git directory in your cPanel
        $output = shell_exec('cd /home/ingressdefi/public_html && git pull 2>&1');
        return "<pre>$output</pre>";
    }
}
