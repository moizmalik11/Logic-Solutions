<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PortfolioRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|string',
            'category' => 'required|string|max:255',
            'url' => 'nullable|url',
            'sort_order' => 'integer'
        ];
    }
}
