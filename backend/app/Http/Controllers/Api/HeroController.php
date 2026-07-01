<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\HeroRequest;
use App\Http\Resources\HeroResource;
use App\Services\HeroService;
use App\Http\Traits\ApiResponse;

class HeroController extends Controller
{
    use ApiResponse;

    protected $heroService;

    public function __construct(HeroService $heroService)
    {
        $this->heroService = $heroService;
    }

    public function show()
    {
        $hero = $this->heroService->getActiveHero();
        if (!$hero) {
            return $this->error('Hero not found', null, 404);
        }
        return $this->success(new HeroResource($hero));
    }

    public function update(HeroRequest $request)
    {
        $hero = $this->heroService->updateHero($request->validated());
        return $this->success(new HeroResource($hero), 'Hero updated successfully');
    }
}
