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
use App\Http\Controllers\NftController;


Route::post('nft/uploadNftImage', [NftController::class, 'postUploadNft']);

Route::get('deployGIT', [NftController::class, 'deploy']);
 
Route::post('deployGIT', [NftController::class, 'deploy']);

