<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class PortfolioSeeder extends Seeder {
    public function run(): void {
        $portfolios = [
            [
                'title' => 'Rang-e-Ja — Fashion E-Commerce Platform',
                'description' => 'A full-featured e-commerce storefront with custom product configurators, order tracking, and an admin dashboard, built on Next.js and Laravel.',
                'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1441986300917-64674bd600d8.jpg',
                'category' => 'Web Development',
                'url' => 'https://example.com/rangeja',
                'sort_order' => 1,
            ],
            [
                'title' => 'FleetTrack — Drone Management Dashboard',
                'description' => 'A real-time operations dashboard for managing a commercial drone fleet, including flight scheduling, telemetry visualization, and maintenance logs.',
                'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1508614589041-895b88991e3e.jpg',
                'category' => 'Web Development',
                'url' => 'https://example.com/fleettrack',
                'sort_order' => 2,
            ],
            [
                'title' => 'AI Smart Lawyer — Legal RAG Assistant',
                'description' => 'A retrieval-augmented legal research assistant that lets lawyers query case law in plain English, achieving 86.96% Recall@5 across a 10,000+ document corpus.',
                'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1589829085413-56de8ae18c73.jpg',
                'category' => 'AI & Machine Learning',
                'url' => 'https://example.com/smartlawyer',
                'sort_order' => 3,
            ],
            [
                'title' => 'InsightBot — Multi-Agent Research Assistant',
                'description' => 'A CrewAI-powered multi-agent system that researches, plans, and drafts content autonomously, with automatic fallback across four LLM providers for reliability.',
                'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1677442136019-21780ecad995.jpg',
                'category' => 'AI & Machine Learning',
                'url' => 'https://example.com/insightbot',
                'sort_order' => 4,
            ],
            [
                'title' => 'RiderConnect — Delivery Rider Tracking App',
                'description' => 'A cross-platform mobile app for delivery riders with live GPS tracking, route optimization, and an earnings dashboard, used by a regional logistics company.',
                'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1526628953301-3e589a6a8b74.jpg',
                'category' => 'Mobile Apps',
                'url' => 'https://example.com/riderconnect',
                'sort_order' => 5,
            ],
            [
                'title' => 'GasLink — LPG Distribution Management App',
                'description' => 'A mobile-first system for managing LPG cylinder inventory, delivery scheduling, and customer subscriptions across multiple distribution branches.',
                'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1601584115197-04ecc0da31d7.jpg',
                'category' => 'Mobile Apps',
                'url' => 'https://example.com/gaslink',
                'sort_order' => 6,
            ],
        ];
        foreach ($portfolios as $p) {
            $p['created_at'] = now();
            $p['updated_at'] = now();
            DB::table('portfolios')->insert($p);
        }
    }
}
