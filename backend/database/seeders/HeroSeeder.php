<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Hero;

class HeroSeeder extends Seeder {
    public function run() {
        Hero::create([
            'title' => 'Transforming Ideas into Digital Reality',
            'subtitle' => 'We build scalable, high-performance web applications and enterprise software solutions tailored to your business needs.',
            'cta_text' => 'Get a Free Consultation',
            'cta_url' => '#contact',
            'background_image' => '/images/hero-bg.jpg',
            'is_active' => true,
        ]);
    }
}
