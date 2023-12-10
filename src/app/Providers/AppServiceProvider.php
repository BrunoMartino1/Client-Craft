<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (env('APP_ENV') !== 'local') {
            URL::forceScheme('https');
        }

        /* Disabling lazy loading on development can help prevent relationship issues on Production later */
        /** @var \Illuminate\Foundation\Application $app */
        $app = $this->app;
        Model::preventLazyLoading(! $app->isProduction());
    }
}
