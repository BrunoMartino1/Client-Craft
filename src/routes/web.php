<?php

use App\Http\Controllers\LoginController;
use App\Mail\MailgunTeste;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    // Mail::to('arthurnassar@gmail.com')->send(new MailgunTeste());

    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

Route::post('/login', [LoginController::class, 'authenticate'])->name('login');
