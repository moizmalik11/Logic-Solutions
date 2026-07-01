<?php

namespace App\Services;

use App\Models\Portfolio;

class PortfolioService
{
    public function getAllPortfolios()
    {
        return Portfolio::orderBy('sort_order')->get();
    }

    public function getPortfolioById($id)
    {
        return Portfolio::find($id);
    }

    public function createPortfolio(array $data)
    {
        return Portfolio::create($data);
    }

    public function updatePortfolio($id, array $data)
    {
        $portfolio = $this->getPortfolioById($id);
        if ($portfolio) {
            $portfolio->update($data);
        }
        return $portfolio;
    }

    public function deletePortfolio($id)
    {
        $portfolio = $this->getPortfolioById($id);
        if ($portfolio) {
            $portfolio->delete();
            return true;
        }
        return false;
    }
}
