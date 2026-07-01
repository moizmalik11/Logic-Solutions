<?php

namespace App\Services;

use App\Models\Feature;

class FeatureService
{
    public function getAllFeatures()
    {
        return Feature::orderBy('sort_order')->get();
    }

    public function getFeatureById($id)
    {
        return Feature::find($id);
    }

    public function createFeature(array $data)
    {
        return Feature::create($data);
    }

    public function updateFeature($id, array $data)
    {
        $feature = $this->getFeatureById($id);
        if ($feature) {
            $feature->update($data);
        }
        return $feature;
    }

    public function deleteFeature($id)
    {
        $feature = $this->getFeatureById($id);
        if ($feature) {
            $feature->delete();
            return true;
        }
        return false;
    }
}
