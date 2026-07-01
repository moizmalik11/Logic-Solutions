<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FaqRequest;
use App\Http\Resources\FaqResource;
use App\Services\FaqService;
use App\Http\Traits\ApiResponse;

class FaqController extends Controller
{
    use ApiResponse;

    protected $faqService;

    public function __construct(FaqService $faqService)
    {
        $this->faqService = $faqService;
    }

    public function index()
    {
        $faqs = $this->faqService->getAllFaqs();
        return $this->success(FaqResource::collection($faqs));
    }

    public function show($id)
    {
        $faq = $this->faqService->getFaqById($id);
        if (!$faq) {
            return $this->error('FAQ not found', null, 404);
        }
        return $this->success(new FaqResource($faq));
    }

    public function store(FaqRequest $request)
    {
        $faq = $this->faqService->createFaq($request->validated());
        return $this->success(new FaqResource($faq), 'FAQ created successfully', 201);
    }

    public function update(FaqRequest $request, $id)
    {
        $faq = $this->faqService->updateFaq($id, $request->validated());
        if (!$faq) {
            return $this->error('FAQ not found', null, 404);
        }
        return $this->success(new FaqResource($faq), 'FAQ updated successfully');
    }

    public function destroy($id)
    {
        $deleted = $this->faqService->deleteFaq($id);
        if (!$deleted) {
            return $this->error('FAQ not found', null, 404);
        }
        return $this->success(null, 'FAQ deleted successfully');
    }
}
