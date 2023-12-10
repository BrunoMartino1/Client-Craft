<?php

namespace App\Http\Middleware\Auth;

use Closure;
use Illuminate\Support\Facades\Auth;

class GuestMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::guard('sanctum')->check()) {
            // Authentication passed, redirect to intended URL or dashboard
            return redirect('/dashboard');
        }

        return $next($request);
    }
}
