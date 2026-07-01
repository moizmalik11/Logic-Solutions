<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfolioSeeder extends Seeder {
    public function run() {
        $portfolios = [
            ['title' => 'Fintech Dashboard', 'description' => 'A comprehensive analytics dashboard for a leading financial institution.', 'image' => '/images/portfolio/fintech.jpg', 'category' => 'Web App', 'url' => 'https://example.com/fintech', 'sort_order' => 1],
            ['title' => 'E-Commerce Platform', 'description' => 'A highly scalable e-commerce platform processing thousands of orders daily.', 'image' => '/images/portfolio/ecommerce.jpg', 'category' => 'E-Commerce', 'url' => 'https://example.com/ecommerce', 'sort_order' => 2],
            ['title' => 'Healthcare Mobile App', 'description' => 'A telemedicine app connecting patients with doctors instantly.', 'image' => '/images/portfolio/health.jpg', 'category' => 'Mobile App', 'url' => 'https://example.com/health', 'sort_order' => 3],
            ['title' => 'Logistics CRM', 'description' => 'Internal CRM system optimizing supply chain routes and deliveries.', 'image' => '/images/portfolio/crm.jpg', 'category' => 'Web App', 'url' => 'https://example.com/crm', 'sort_order' => 4],
        ];
        foreach ($portfolios as $portfolio) {
            Portfolio::create($portfolio);
        }
    }
}
