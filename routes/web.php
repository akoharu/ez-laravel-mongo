<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [AuthController::class, 'showLogin'])->name('login-page');
Route::get('/password/reset', [AuthController::class, 'showForgotPassword'])->name('forgot-password-page');
Route::get('/password/reset/{token}', [AuthController::class, 'showResetPassword'])->name('reset-password-page');

// TODO: Add middleware for authenticated users
Route::get('/', [DashboardController::class, 'showDashboard'])->name('dashboard-page');
