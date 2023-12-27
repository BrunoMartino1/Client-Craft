<?php

use App\Http\Controllers\LoginController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Route::get('/media/{fileName}', function (string $fileName) {
    return response()->file('images/'.$fileName);
});

Route::get('/signup', function () {
    return Inertia::render('Auth/Signup');
});

/**
 * Render login page
 */
Route::middleware(['web'])->get('/login', [LoginController::class, 'render']);

/**
 * Render login page
 */
Route::middleware(['web'])->get('/register', function () {
    return Inertia::render('Auth/CraftRegister');
});

Route::post('/login', [LoginController::class, 'authenticate'])->name('login');

Route::post('/logout', function (Request $request) {
    try {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route('login'));
    } catch (Throwable $e) {
        abort(500, 'Unexpected error logging out');
    }
})->name('logout');

// Routes that should only be accessible by auth:sanctum verified users
Route::middleware(['web', 'auth:sanctum'])->group(function () {
    Route::get('/dashboard', function () {
        // Mail::to('arthurnassar@gmail.com')->send(new Signup());
        // Auth::guard('web')->logout();

        return Inertia::render('Dashboard');
    })->name('dashboard');
});
