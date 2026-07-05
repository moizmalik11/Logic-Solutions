<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TestimonialResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'client_name' => $this->client_name,
            'role'        => $this->role,
            'company'     => $this->company,
            'quote'       => $this->quote,
            'avatar'      => $this->storageUrl($this->avatar),
            'rating'      => $this->rating,
        ];
    }

    private function storageUrl(?string $path): ?string
    {
        if (!$path) return null;
        if (str_starts_with($path, 'http')) return $path;
        return rtrim(config('app.url'), '/') . '/storage/' . $path;
    }
}
