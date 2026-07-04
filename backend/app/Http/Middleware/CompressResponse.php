<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CompressResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // If the browser supports gzip, compress the response
        if (in_array('gzip', $request->getEncodings()) && function_exists('gzencode')) {
            $content = $response->getContent();
            $response->setContent(gzencode($content, 9));
            $response->header('Content-Encoding', 'gzip');
        }

        return $response;
    }
}
