<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestimonialRequest;
use App\Http\Resources\TestimonialResource;
use App\Services\TestimonialService;
use App\Http\Traits\ApiResponse;

class TestimonialController extends Controller
{
    use ApiResponse;

    protected $testimonialService;

    public function __construct(TestimonialService $testimonialService)
    {
        $this->testimonialService = $testimonialService;
    }

    public function index()
    {
        $testimonials = $this->testimonialService->getAllTestimonials();
        return $this->success(TestimonialResource::collection($testimonials));
    }

    public function show($id)
    {
        $testimonial = $this->testimonialService->getTestimonialById($id);
        if (!$testimonial) {
            return $this->error('Testimonial not found', null, 404);
        }
        return $this->success(new TestimonialResource($testimonial));
    }

    public function store(TestimonialRequest $request)
    {
        $testimonial = $this->testimonialService->createTestimonial($request->validated());
        return $this->success(new TestimonialResource($testimonial), 'Testimonial created successfully', 201);
    }

    public function update(TestimonialRequest $request, $id)
    {
        $testimonial = $this->testimonialService->updateTestimonial($id, $request->validated());
        if (!$testimonial) {
            return $this->error('Testimonial not found', null, 404);
        }
        return $this->success(new TestimonialResource($testimonial), 'Testimonial updated successfully');
    }

    public function destroy($id)
    {
        $deleted = $this->testimonialService->deleteTestimonial($id);
        if (!$deleted) {
            return $this->error('Testimonial not found', null, 404);
        }
        return $this->success(null, 'Testimonial deleted successfully');
    }
}
