<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PortfolioRequest;
use App\Http\Resources\PortfolioResource;
use App\Services\PortfolioService;
use App\Http\Traits\ApiResponse;

class PortfolioController extends Controller
{
    use ApiResponse;

    protected $portfolioService;

    public function __construct(PortfolioService $portfolioService)
    {
        $this->portfolioService = $portfolioService;
    }

    public function index()
    {
        $portfolios = $this->portfolioService->getAllPortfolios();
        return $this->success(PortfolioResource::collection($portfolios));
    }

    public function show($id)
    {
        $portfolio = $this->portfolioService->getPortfolioById($id);
        if (!$portfolio) {
            return $this->error('Portfolio not found', null, 404);
        }
        return $this->success(new PortfolioResource($portfolio));
    }

    public function store(PortfolioRequest $request)
    {
        $portfolio = $this->portfolioService->createPortfolio($request->validated());
        return $this->success(new PortfolioResource($portfolio), 'Portfolio created successfully', 201);
    }

    public function update(PortfolioRequest $request, $id)
    {
        $portfolio = $this->portfolioService->updatePortfolio($id, $request->validated());
        if (!$portfolio) {
            return $this->error('Portfolio not found', null, 404);
        }
        return $this->success(new PortfolioResource($portfolio), 'Portfolio updated successfully');
    }

    public function destroy($id)
    {
        $deleted = $this->portfolioService->deletePortfolio($id);
        if (!$deleted) {
            return $this->error('Portfolio not found', null, 404);
        }
        return $this->success(null, 'Portfolio deleted successfully');
    }
}
