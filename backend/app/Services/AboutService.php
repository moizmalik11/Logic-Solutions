<?php

namespace App\Services;

use App\Models\AboutSection;

class AboutService
{
    public function getActiveAbout()
    {
        return AboutSection::first();
    }

    public function updateAbout(array $data)
    {
        $about = AboutSection::first();
        if (!$about) {
            $about = new AboutSection();
        }
        
        $about->fill($data);
        $about->save();
        
        return $about;
    }
}
