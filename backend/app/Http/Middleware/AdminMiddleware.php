<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Simple token check if sanctum is not fully configured, 
        // or expecting auth:sanctum to handle it first.
        if (!auth('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized Access.',
                'errors' => null,
                'data' => null
            ], 401);
        }

        return $next($request);
    }
}
