<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\MessageController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
    
Route::apiResource('projects', ProjectController::class);
Route::apiResource('skills', SkillController::class);

Route::post('/contact', [MessageController::class, 'store']);

Route::get('/messages', [MessageController::class, 'index']);
