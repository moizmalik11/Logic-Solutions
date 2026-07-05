<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TestimonialSeeder extends Seeder {
    public function run(): void {
        $testimonials = [
            [
                'client_name' => 'Ayesha Raza',
                'role' => 'Founder & CEO',
                'company' => 'Rang-e-Ja',
                'quote' => 'LogicSolution didn\'t just build what we asked for — they pushed back on ideas that wouldn\'t scale and delivered a platform that\'s handled our biggest sale days without a single hiccup.',
                'avatar' => 'http://127.0.0.1:8000/storage/images/user_women_44.jpg',
                'rating' => 5,
            ],
            [
                'client_name' => 'Daniel Reyes',
                'role' => 'COO',
                'company' => 'FleetTrack Logistics',
                'quote' => 'The dashboard they built cut our fleet coordination time in half. Communication throughout the project was clear and honest, even when timelines got tight.',
                'avatar' => 'http://127.0.0.1:8000/storage/images/user_men_32.jpg',
                'rating' => 5,
            ],
            [
                'client_name' => 'Dr. Sana Khalid',
                'role' => 'Managing Partner',
                'company' => 'Khalid & Associates Law Firm',
                'quote' => 'The AI research assistant they built has genuinely changed how our junior associates work. It\'s accurate, fast, and easy for a non-technical team to trust.',
                'avatar' => 'http://127.0.0.1:8000/storage/images/user_women_68.jpg',
                'rating' => 5,
            ],
            [
                'client_name' => 'Michael Chen',
                'role' => 'Product Lead',
                'company' => 'InsightBot Labs',
                'quote' => 'We came to them with a rough idea for a multi-agent system and left with a production-ready product. Their engineering judgment saved us months.',
                'avatar' => 'http://127.0.0.1:8000/storage/images/user_men_46.jpg',
                'rating' => 4,
            ],
            [
                'client_name' => 'Bilal Ahmed',
                'role' => 'Operations Director',
                'company' => 'GasLink Distribution',
                'quote' => 'Reliable, communicative, and genuinely invested in our business outcomes, not just ticking off feature requests. Would work with them again without hesitation.',
                'avatar' => 'http://127.0.0.1:8000/storage/images/user_men_22.jpg',
                'rating' => 5,
            ],
        ];
        foreach ($testimonials as $t) {
            $t['created_at'] = now();
            $t['updated_at'] = now();
            DB::table('testimonials')->insert($t);
        }
    }
}
