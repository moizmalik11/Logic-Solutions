<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder {
    public function run() {
        $services = [
            ['title' => 'Custom Software Development', 'description' => 'Tailor-made software solutions designed to solve your unique business challenges.', 'icon' => 'CodeIcon', 'sort_order' => 1],
            ['title' => 'Web Application Development', 'description' => 'High-performance, responsive web applications built with modern frameworks.', 'icon' => 'GlobeIcon', 'sort_order' => 2],
            ['title' => 'Mobile App Development', 'description' => 'Native and cross-platform mobile apps for iOS and Android.', 'icon' => 'SmartphoneIcon', 'sort_order' => 3],
            ['title' => 'Cloud Architecture', 'description' => 'Scalable and secure cloud infrastructure setup and migration on AWS, Azure, or GCP.', 'icon' => 'CloudIcon', 'sort_order' => 4],
            ['title' => 'UI/UX Design', 'description' => 'Intuitive and engaging user interfaces focused on delivering the best user experience.', 'icon' => 'PenToolIcon', 'sort_order' => 5],
            ['title' => 'DevOps & Maintenance', 'description' => 'Continuous integration, deployment pipelines, and 24/7 application monitoring.', 'icon' => 'SettingsIcon', 'sort_order' => 6],
        ];
        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
