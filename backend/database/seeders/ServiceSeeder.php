<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ServiceSeeder extends Seeder {
    public function run(): void {
        $services = [
            [
                'title' => 'Web Application Development',
                'description' => 'Custom, high-performance web applications built with modern frameworks like React, Next.js, and Laravel — engineered for scale, speed, and long-term maintainability.',
                'icon' => 'code-browser',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Mobile App Development',
                'description' => 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter, from first prototype to App Store launch.',
                'icon' => 'device-mobile',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'AI & Machine Learning Solutions',
                'description' => 'Custom AI features — from RAG-powered chatbots to predictive models and intelligent automation — integrated directly into your existing product.',
                'icon' => 'cpu-chip',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'User research, wireframing, and pixel-perfect interface design that turns complex workflows into products people find genuinely easy to use.',
                'icon' => 'pencil-ruler',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Cloud & DevOps',
                'description' => 'CI/CD pipelines, containerized deployments, and cloud infrastructure on AWS, GCP, or Azure — built for reliability and painless scaling.',
                'icon' => 'cloud-server',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'Custom Software & SaaS Development',
                'description' => 'End-to-end SaaS platforms — multi-tenant architecture, billing integrations, and admin dashboards — built to be sold, not just used internally.',
                'icon' => 'layers',
                'sort_order' => 6,
                'is_active' => true,
            ],
        ];
        
        foreach ($services as $s) {
            $s['created_at'] = now();
            $s['updated_at'] = now();
            DB::table('services')->insert($s);
        }
    }
}
