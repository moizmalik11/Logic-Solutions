<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class HeroSeeder extends Seeder {
    public function run(): void {
        DB::table('heroes')->insert([
            'title' => 'Smart Software Solutions for Ambitious Businesses',
            'subtitle' => 'We design, build, and scale websites, mobile apps, and AI-powered products for startups and enterprises worldwide.',
            'cta_text' => 'Start Your Project',
            'cta_url' => '#contact',
            'background_image' => 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
