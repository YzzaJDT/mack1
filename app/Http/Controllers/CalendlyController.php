<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Http;

class CalendlyController extends Controller
{
    public function eventTypes()
    {
        $token = env('CALENDLY_TOKEN');
        $eventType = env('CALENDLY_EVENT_TYPE');

        $start = Carbon::now('UTC')
            ->addHour()
            ->toIso8601String();

        $end = Carbon::now('UTC')
    ->addMonths(12)
    ->toIso8601String();

        $response = Http::withOptions([
            'verify' => false,
        ])
        ->withToken($token)
        ->get(
            'https://api.calendly.com/event_type_available_times',
            [
                'event_type' => $eventType,
                'start_time' => $start,
                'end_time' => $end,
            ]
        );

        return response()->json([
            'status' => $response->status(),
            'data' => $response->json(),
        ]);
    }

    public function bookSlot(Request $request)
{
    $request->validate([
        'start_time' => 'required',
    ]);

    // Prevent double booking
    $exists = Booking::where('start_time', $request->start_time)->exists();

    if ($exists) {
        return response()->json([
            'message' => 'Slot already taken'
        ], 409);
    }

    Booking::create([
        'start_time' => $request->start_time,
        'user_id' => auth()->id(),
    ]);

    return response()->json([
        'message' => 'Booked successfully'
    ]);
}
}