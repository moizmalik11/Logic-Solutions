<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AboutRequest;
use App\Http\Resources\AboutResource;
use App\Services\AboutService;
use App\Http\Traits\ApiResponse;

class AboutController extends Controller
{
    use ApiResponse;

    protected $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function show()
    {
        $about = $this->aboutService->getActiveAbout();
        if (!$about) {
            return $this->error('About section not found', null, 404);
        }
        return $this->success(new AboutResource($about));
    }

    public function update(AboutRequest $request)
    {
        $about = $this->aboutService->updateAbout($request->validated());
        return $this->success(new AboutResource($about), 'About updated successfully');
    }
}
