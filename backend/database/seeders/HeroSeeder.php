<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class HeroSeeder extends Seeder {
    public function run(): void {
        DB::table('heroes')->insert([
            'title' => 'Where Logic Meets Innovation.',
            'subtitle' => 'We design, build, and scale websites, mobile apps, and AI-powered products for startups and enterprises worldwide.',
            'cta_text' => 'Start Your Project',
            'cta_url' => '#contact',
            'background_image' => 'http://127.0.0.1:8000/storage/images/unsplash_1504384308090-c894fdcc538d.jpg',
            'video_url' => 'http://127.0.0.1:8000/storage/hero_video_compressed.webm',
            'poster_url' => 'http://127.0.0.1:8000/storage/images/hero_poster.jpg',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
