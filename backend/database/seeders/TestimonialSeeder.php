<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder {
    public function run() {
        $testimonials = [
            ['client_name' => 'Sarah Jenkins', 'role' => 'CTO', 'company' => 'TechCorp', 'quote' => 'They delivered an outstanding product ahead of schedule. Their technical expertise is unmatched.', 'avatar' => '/images/avatars/sarah.jpg', 'rating' => 5],
            ['client_name' => 'Michael Chen', 'role' => 'Founder', 'company' => 'StartupX', 'quote' => 'The UI/UX design and development quality completely transformed our user engagement metrics.', 'avatar' => '/images/avatars/michael.jpg', 'rating' => 5],
            ['client_name' => 'Emma Roberts', 'role' => 'Product Manager', 'company' => 'Global Retail', 'quote' => 'A truly professional team that understands enterprise requirements and scales gracefully.', 'avatar' => '/images/avatars/emma.jpg', 'rating' => 4],
        ];
        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
