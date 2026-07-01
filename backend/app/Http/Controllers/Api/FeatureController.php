<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FeatureRequest;
use App\Http\Resources\FeatureResource;
use App\Services\FeatureService;
use App\Http\Traits\ApiResponse;

class FeatureController extends Controller
{
    use ApiResponse;

    protected $featureService;

    public function __construct(FeatureService $featureService)
    {
        $this->featureService = $featureService;
    }

    public function index()
    {
        $features = $this->featureService->getAllFeatures();
        return $this->success(FeatureResource::collection($features));
    }

    public function show($id)
    {
        $feature = $this->featureService->getFeatureById($id);
        if (!$feature) {
            return $this->error('Feature not found', null, 404);
        }
        return $this->success(new FeatureResource($feature));
    }

    public function store(FeatureRequest $request)
    {
        $feature = $this->featureService->createFeature($request->validated());
        return $this->success(new FeatureResource($feature), 'Feature created successfully', 201);
    }

    public function update(FeatureRequest $request, $id)
    {
        $feature = $this->featureService->updateFeature($id, $request->validated());
        if (!$feature) {
            return $this->error('Feature not found', null, 404);
        }
        return $this->success(new FeatureResource($feature), 'Feature updated successfully');
    }

    public function destroy($id)
    {
        $deleted = $this->featureService->deleteFeature($id);
        if (!$deleted) {
            return $this->error('Feature not found', null, 404);
        }
        return $this->success(null, 'Feature deleted successfully');
    }
}
