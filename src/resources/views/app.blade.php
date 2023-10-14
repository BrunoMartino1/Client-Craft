<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- PWA  -->
        <meta name="theme-color" content="#6777ef"/>
        <link rel="apple-touch-icon" href="{{ asset('logo.png') }}">
        {{--
             TEST - This was supposed to fix page loading on IOS (it shows a whitescreen while the
             content is not loaded vs a splash art) 
        --}}
        {{-- <link href="/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
        <link href="/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
        <link href="/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
        <link href="/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
        <link href="/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
        <link href="/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
        <link href="/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" /> --}}
        <link rel="manifest" href="{{ asset('/manifest.json') }}">

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <script src="{{ asset('/sw.js') }}"></script>
        <script>
            if (!navigator.serviceWorker.controller) {
                navigator.serviceWorker.register("/sw.js").then(function (reg) {
                    console.log("Service worker has been registered for scope: " + reg.scope);
                });
            }
        </script>
    </body>
</html>
