<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('home');
});

Route::post('/contact', function (Request $request) {
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'email', 'max:255'],
        'subject' => ['nullable', 'string', 'max:255'],
        'message' => ['required', 'string', 'max:5000'],
    ]);

    $payload = implode("\n", [
        "Name: {$validated['name']}",
        "Email: {$validated['email']}",
        "Subject: " . ($validated['subject'] ?? '(none)'),
        "Message:\n{$validated['message']}",
    ]);

    try {
        Mail::raw($payload, function ($message) use ($validated) {
            $message->to('morshedseu.49@gmail.com')
                ->from($validated['email'], $validated['name'])
                ->subject('Portfolio Contact: ' . ($validated['subject'] ?? 'New message'));
        });
    } catch (\Throwable $e) {
        report($e);
    }

    return response()->json(['message' => 'Message sent successfully! I will get back to you soon.']);
})->name('contact.send');
