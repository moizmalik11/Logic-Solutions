<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Feature;

class FeatureSeeder extends Seeder {
    public function run() {
        $features = [
            ['title' => 'Fast Delivery', 'description' => 'Agile methodologies ensure rapid deployment and continuous updates.', 'icon' => 'ZapIcon', 'sort_order' => 1],
            ['title' => 'High Security', 'description' => 'Enterprise-grade security practices embedded in every layer of development.', 'icon' => 'ShieldIcon', 'sort_order' => 2],
            ['title' => 'Scalable Solutions', 'description' => 'Our architectures are designed to handle massive growth seamlessly.', 'icon' => 'TrendingUpIcon', 'sort_order' => 3],
            ['title' => '24/7 Support', 'description' => 'Dedicated support team available around the clock to assist you.', 'icon' => 'PhoneCallIcon', 'sort_order' => 4],
        ];
        foreach ($features as $feature) {
            Feature::create($feature);
        }
    }
}
