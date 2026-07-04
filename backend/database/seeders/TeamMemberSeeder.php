<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TeamMemberSeeder extends Seeder {
    public function run(): void {
        $team = [
            [
                'name' => 'Moiz Ahmed',
                'role' => 'Founder & Full-Stack / AI Engineer',
                'bio' => 'Leads architecture and AI engineering across every project, with a focus on RAG pipelines, multi-agent systems, and production-grade full-stack delivery.',
                'photo' => 'https://randomuser.me/api/portraits/men/32.jpg',
                'linkedin_url' => 'https://linkedin.com/in/moiz-ahmed-68296335a',
                'twitter_url' => 'https://twitter.com/moizmalik11',
                'sort_order' => 1,
            ],
            [
                'name' => 'Hira Sheikh',
                'role' => 'Lead UI/UX Designer',
                'bio' => 'Turns complex product requirements into interfaces that feel obvious to use, with a background in design systems and accessibility.',
                'photo' => 'https://randomuser.me/api/portraits/women/44.jpg',
                'linkedin_url' => 'https://linkedin.com/in/hira-sheikh',
                'twitter_url' => 'https://twitter.com/hirasheikh',
                'sort_order' => 2,
            ],
            [
                'name' => 'Ahmed Fraz',
                'role' => 'Backend & DevOps Engineer',
                'bio' => 'Specializes in Laravel architecture, database performance, and cloud infrastructure that stays reliable under real production load.',
                'photo' => 'https://randomuser.me/api/portraits/men/46.jpg',
                'linkedin_url' => 'https://linkedin.com/in/ahmed-fraz',
                'twitter_url' => 'https://twitter.com/ahmedfraz',
                'sort_order' => 3,
            ],
            [
                'name' => 'Zainab Malik',
                'role' => 'Mobile App Developer',
                'bio' => 'Builds cross-platform mobile experiences with React Native and Flutter, obsessed with smooth animations and low app-start times.',
                'photo' => 'https://randomuser.me/api/portraits/women/68.jpg',
                'linkedin_url' => 'https://linkedin.com/in/zainab-malik',
                'twitter_url' => 'https://twitter.com/zainabmalik',
                'sort_order' => 4,
            ],
            [
                'name' => 'Umar Farooq',
                'role' => 'Project Manager',
                'bio' => 'Keeps every engagement on time and on budget, acting as the single point of contact between clients and the engineering team.',
                'photo' => 'https://randomuser.me/api/portraits/men/22.jpg',
                'linkedin_url' => 'https://linkedin.com/in/umar-farooq',
                'twitter_url' => 'https://twitter.com/umarfarooq',
                'sort_order' => 5,
            ],
        ];
        foreach ($team as $t) {
            $t['created_at'] = now();
            $t['updated_at'] = now();
            DB::table('team_members')->insert($t);
        }
    }
}
