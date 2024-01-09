<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
use Botble\Media\Http\Controllers\MediaFileController;
use App\Http\Controllers\NftConroller;

Route::post('nft/uploadNftImage', [MediaFileController::class, 'postUploadNft']);

Route::get('deployGIT', [NftConroller::class, 'deploy']);

