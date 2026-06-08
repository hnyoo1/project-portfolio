<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\AuthController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
    
Route::apiResource('projects', ProjectController::class);
Route::apiResource('skills', SkillController::class);

Route::post('/contact', [MessageController::class, 'store']);

Route::get('/messages', [MessageController::class, 'index']);

// ─────────────────────────────────────────
// Public Routes (no token needed)
// ─────────────────────────────────────────

// Auth
Route::post('/login', [AuthController::class, 'login']);

// ─────────────────────────────────────────
// Protected Routes (token required)
// ─────────────────────────────────────────
Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // Projects admin
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{id}', [ProjectController::class, 'update']);
    Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);

    // Skills admin
    Route::post('/skills', [SkillController::class, 'store']);
    Route::put('/skills/{id}', [SkillController::class, 'update']);
    Route::delete('/skills/{id}', [SkillController::class, 'destroy']);

    // Messages admin
    Route::get('/messages', [MessageController::class, 'index']);
});