<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Services\ServiceService;
use App\Http\Traits\ApiResponse;

class ServiceController extends Controller
{
    use ApiResponse;

    protected $serviceService;

    public function __construct(ServiceService $serviceService)
    {
        $this->serviceService = $serviceService;
    }

    public function index()
    {
        $services = $this->serviceService->getAllServices();
        return $this->success(ServiceResource::collection($services));
    }

    public function show($id)
    {
        $service = $this->serviceService->getServiceById($id);
        if (!$service) {
            return $this->error('Service not found', null, 404);
        }
        return $this->success(new ServiceResource($service));
    }

    public function store(ServiceRequest $request)
    {
        $service = $this->serviceService->createService($request->validated());
        return $this->success(new ServiceResource($service), 'Service created successfully', 201);
    }

    public function update(ServiceRequest $request, $id)
    {
        $service = $this->serviceService->updateService($id, $request->validated());
        if (!$service) {
            return $this->error('Service not found', null, 404);
        }
        return $this->success(new ServiceResource($service), 'Service updated successfully');
    }

    public function destroy($id)
    {
        $deleted = $this->serviceService->deleteService($id);
        if (!$deleted) {
            return $this->error('Service not found', null, 404);
        }
        return $this->success(null, 'Service deleted successfully');
    }
}
