<?php

use App\Http\Middleware\CheckIsAdmin;
use Illuminate\Support\Facades\Route;

// 
use Illuminate\Support\Facades\Auth;
// 

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/home/users', [App\Http\Controllers\UserConroller::class, 'index'])->name('users')->middleware(CheckIsAdmin::class);
