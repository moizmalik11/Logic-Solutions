<?php

namespace App\Services;

use App\Models\Faq;

class FaqService
{
    public function getAllFaqs()
    {
        return Faq::where('is_active', true)->orderBy('sort_order')->get();
    }

    public function getFaqById($id)
    {
        return Faq::find($id);
    }

    public function createFaq(array $data)
    {
        return Faq::create($data);
    }

    public function updateFaq($id, array $data)
    {
        $faq = $this->getFaqById($id);
        if ($faq) {
            $faq->update($data);
        }
        return $faq;
    }

    public function deleteFaq($id)
    {
        $faq = $this->getFaqById($id);
        if ($faq) {
            $faq->delete();
            return true;
        }
        return false;
    }
}
