<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\AboutSection;

class AboutSeeder extends Seeder {
    public function run() {
        AboutSection::create([
            'title' => 'About Our Company',
            'body' => 'Founded in 2020, we are a team of passionate engineers and designers dedicated to building modern software solutions. We specialize in cutting-edge web technologies, cloud infrastructure, and mobile app development.',
            'image' => '/images/about-team.jpg',
            'mission' => 'To empower businesses through innovative and reliable technology solutions.',
            'vision' => 'To be the global leader in digital transformation and software engineering.',
        ]);
    }
}
