<?php

namespace App\Services;

use App\Models\Service;

class ServiceService
{
    public function getAllServices()
    {
        return Service::where('is_active', true)->orderBy('sort_order')->get();
    }

    public function getServiceById($id)
    {
        return Service::find($id);
    }

    public function createService(array $data)
    {
        return Service::create($data);
    }

    public function updateService($id, array $data)
    {
        $service = $this->getServiceById($id);
        if ($service) {
            $service->update($data);
        }
        return $service;
    }

    public function deleteService($id)
    {
        $service = $this->getServiceById($id);
        if ($service) {
            $service->delete();
            return true;
        }
        return false;
    }
}
