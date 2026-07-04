<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class FaqSeeder extends Seeder {
    public function run(): void {
        $faqs = [
            [
                'question' => 'What industries do you typically work with?',
                'answer' => 'We work primarily with startups and SMEs in e-commerce, logistics, legal tech, and SaaS, though our engineering process adapts well to almost any industry with a clear digital product need.',
                'category' => 'General',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'question' => 'Do you only build custom software, or do you also work with existing codebases?',
                'answer' => 'Both. We regularly take over existing codebases for feature additions, performance audits, or full rebuilds, in addition to greenfield projects.',
                'category' => 'General',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'question' => 'How long does a typical project take?',
                'answer' => 'A focused MVP typically takes 4 to 8 weeks. Larger platforms or ongoing product partnerships are scoped on a rolling sprint basis rather than a single fixed timeline.',
                'category' => 'General',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'question' => 'How does pricing work?',
                'answer' => 'We offer both fixed-scope pricing for well-defined projects and monthly retainers for ongoing product development. You\'ll always get a detailed quote before any work begins.',
                'category' => 'Working With Us',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'question' => 'Will I have direct access to the engineers working on my project?',
                'answer' => 'Yes. Every client gets direct Slack access to their assigned team, not just a single account manager relaying messages back and forth.',
                'category' => 'Working With Us',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'question' => 'What happens after the project launches?',
                'answer' => 'Every engagement includes a post-launch support window covering bug fixes and monitoring, plus a full knowledge-transfer session so your internal team can take over confidently.',
                'category' => 'Working With Us',
                'sort_order' => 6,
                'is_active' => true,
            ],
        ];
        foreach ($faqs as $f) {
            $f['created_at'] = now();
            $f['updated_at'] = now();
            DB::table('faqs')->insert($f);
        }
    }
}
