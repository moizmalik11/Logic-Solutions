<?php

namespace App\Services;

use App\Models\Hero;

class HeroService
{
    public function getActiveHero()
    {
        return Hero::where('is_active', true)->first();
    }

    public function updateHero(array $data)
    {
        $hero = Hero::first();
        if (!$hero) {
            $hero = new Hero();
        }
        
        $hero->fill($data);
        $hero->save();
        
        return $hero;
    }
}
