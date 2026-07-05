<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeroResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'               => $this->id,
            'title'            => $this->title,
            'subtitle'         => $this->subtitle,
            'cta_text'         => $this->cta_text,
            'cta_url'          => $this->cta_url,
            'background_image' => $this->storageUrl($this->background_image),
            'video_url'        => $this->storageUrl($this->video_url),
            'poster_url'       => $this->storageUrl($this->poster_url),
            'is_active'        => $this->is_active,
        ];
    }

    private function storageUrl(?string $path): ?string
    {
        if (!$path) return null;
        if (str_starts_with($path, 'http')) return $path;
        return rtrim(config('app.url'), '/') . '/storage/' . $path;
    }
}
