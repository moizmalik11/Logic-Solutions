<?php

namespace App\Services;

use App\Models\Testimonial;

class TestimonialService
{
    public function getAllTestimonials()
    {
        return Testimonial::all();
    }

    public function getTestimonialById($id)
    {
        return Testimonial::find($id);
    }

    public function createTestimonial(array $data)
    {
        return Testimonial::create($data);
    }

    public function updateTestimonial($id, array $data)
    {
        $testimonial = $this->getTestimonialById($id);
        if ($testimonial) {
            $testimonial->update($data);
        }
        return $testimonial;
    }

    public function deleteTestimonial($id)
    {
        $testimonial = $this->getTestimonialById($id);
        if ($testimonial) {
            $testimonial->delete();
            return true;
        }
        return false;
    }
}
