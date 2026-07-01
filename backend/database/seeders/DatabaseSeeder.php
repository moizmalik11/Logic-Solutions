<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    public function run(): void {
        $this->call([
            HeroSeeder::class,
            AboutSeeder::class,
            ServiceSeeder::class,
            FeatureSeeder::class,
            PortfolioSeeder::class,
            TestimonialSeeder::class,
            TeamMemberSeeder::class,
            FaqSeeder::class,
            ContactMessageSeeder::class,
        ]);
    }
}
