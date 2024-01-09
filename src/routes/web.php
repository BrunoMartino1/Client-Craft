<?php

use Illuminate\Foundation\Application;
use App\Http\Controllers\LoginController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Route::get('/cobjects/{apiName}', function (string $apiName) {
    $builder = new App\Repositories\CObjectRepository();

    return $builder->getAllCObjectsWithTypeAndValues('Contact');
})->name('getCobjects');

Route::get('/cobject/fields/{apiName}', function (string $apiName) {
    $repository = new App\Repositories\CObjectRepository();

    return $repository->getCObjectFields($apiName);
})->name('getCobjectFields');

/**
 * Render login page
 */
Route::middleware(['web'])->get('/login', [LoginController::class, 'render']);
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

/**
 * Render login page
 */
Route::middleware(['web'])->get('/register', function () {
    return Inertia::render('Auth/CraftRegister');
});

// Routes that should only be accessible by auth:sanctum verified users
Route::middleware(['web', 'auth:sanctum'])->prefix('dashboard')->name('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('.index');

    Route::get('/cobject/{objectApiName}', function () {
        return Inertia::render('CObjectPage');
    });

});
