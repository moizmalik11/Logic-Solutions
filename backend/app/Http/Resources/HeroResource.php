<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeroResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'cta_text' => $this->cta_text,
            'cta_url' => $this->cta_url,
            'background_image' => $this->background_image,
            'video_url' => $this->video_url,
            'poster_url' => $this->poster_url,
            'is_active' => $this->is_active,
        ];
    }
}
