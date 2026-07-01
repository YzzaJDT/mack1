<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalendlyController;

Route::get('/calendly/event-types', [CalendlyController::class, 'eventTypes']);
Route::post('/calendly/book-slot', [CalendlyController::class, 'bookSlot']);