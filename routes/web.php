<?php

use App\Http\Middleware\CheckIsAdmin;
use App\Http\Middleware\CheckIsUser;
use Illuminate\Support\Facades\Route;

// 
use Illuminate\Support\Facades\Auth;
// 

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware(CheckIsUser::class);

Route::get('/home/users', [App\Http\Controllers\UserConroller::class, 'index'])->name('users')->middleware(CheckIsAdmin::class);
