<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <meta name="csrf-token" content="{{ csrf_token() }}"> --}}
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <!-- Scripts --> @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100"> @include('layouts.navigation')


        <!-- Page Heading --> 
        @if (isset($header)) 
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"> {{ $header }} </div>
        </header> 
        @endif



        <!-- Page Content -->
        <main> {{ $slot }} </main> 



        {{-- LOGIN ALERT --}} 
        <div x-data='{ show: {{session()->has('success') ? "true" : "false"}} }' x-show="show" id="toast" role="alert" class="fixed top-5 right-14 rounded-xl border
            border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 transition duration-700 " > <div class="flex items-start gap-4">
                <span class="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <div class="flex-1">
                    <strong class="block font-medium text-gray-900 dark:text-white"> {{ session()->get('success') }} </strong>
                    <p class="mt-1 text-sm text-gray-700 dark:text-gray-200"> {{ Auth::user()->name }} </p>
                </div>
                <button class="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500" @click="show = false">
                    <span class="sr-only">Dismiss popup</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div> 
    
    
    @stack('additional-scripts')
</body>

</html>