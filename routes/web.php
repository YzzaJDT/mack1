<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // ✅ ADD THIS

// Route::get('/', function () {
//     return inertia('Home');
// });

Route::get('/', function () {
    return 'Laravel is working!';
});

Route::get('/Properties', function () {
    return inertia('Properties');
});
Route::get('/Location', function () {
    return inertia('Location');
});
Route::get('/About', function () {
    return inertia('About');
});
Route::get('/Blogs', function () {
    return inertia('Blogs');
});
Route::get('/ConsultationPage', function () {
    return inertia('ConsultationPage');
});

Route::get('/property-show', function (\Illuminate\Http\Request $request) {
    return Inertia::render('PropertyShow', [
        'property' => $request->all()
    ]);
});


// use App\Http\Controllers\CalendlyController;

// Route::get('/calendly/event-types', [CalendlyController::class, 'eventTypes']);

// Route::get('/calendly/availability', [
//     App\Http\Controllers\CalendlyController::class,
//     'availability'
// ]);