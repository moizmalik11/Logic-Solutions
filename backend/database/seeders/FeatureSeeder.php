<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class FeatureSeeder extends Seeder {
    public function run(): void {
        $features = [
            [
                'title' => 'Dedicated Senior Engineers',
                'description' => 'No junior-heavy teams or outsourced subcontractors — every project is staffed with engineers who\'ve shipped production software before.',
                'icon' => 'user-check',
                'sort_order' => 1,
            ],
            [
                'title' => 'Agile, Transparent Process',
                'description' => 'Weekly sprint demos, a shared project board, and direct Slack access to your team — you always know exactly what\'s being built and why.',
                'icon' => 'kanban',
                'sort_order' => 2,
            ],
            [
                'title' => 'Built to Scale from Day One',
                'description' => 'We architect for your next 10x, not just your MVP — clean database design, sensible caching, and infrastructure that grows with you.',
                'icon' => 'trending-up',
                'sort_order' => 3,
            ],
            [
                'title' => 'Post-Launch Support',
                'description' => 'Every engagement includes a support window after launch — bug fixes, monitoring, and knowledge transfer so your team owns the codebase confidently.',
                'icon' => 'life-buoy',
                'sort_order' => 4,
            ],
        ];
        foreach ($features as $f) {
            $f['created_at'] = now();
            $f['updated_at'] = now();
            DB::table('features')->insert($f);
        }
    }
}
