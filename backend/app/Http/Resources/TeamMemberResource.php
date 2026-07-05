<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamMemberResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'name'         => $this->name,
            'role'         => $this->role,
            'bio'          => $this->bio,
            'photo'        => $this->storageUrl($this->photo),
            'linkedin_url' => $this->linkedin_url,
            'twitter_url'  => $this->twitter_url,
            'sort_order'   => $this->sort_order,
        ];
    }

    private function storageUrl(?string $path): ?string
    {
        if (!$path) return null;
        if (str_starts_with($path, 'http')) return $path;
        return rtrim(config('app.url'), '/') . '/storage/' . $path;
    }
}
