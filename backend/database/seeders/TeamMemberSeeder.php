<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\TeamMember;

class TeamMemberSeeder extends Seeder {
    public function run() {
        $team = [
            ['name' => 'Alice Johnson', 'role' => 'CEO & Founder', 'bio' => '15+ years of experience in software engineering and executive leadership.', 'photo' => '/images/team/alice.jpg', 'linkedin_url' => 'https://linkedin.com/', 'twitter_url' => 'https://twitter.com/', 'sort_order' => 1],
            ['name' => 'David Lee', 'role' => 'Lead Engineer', 'bio' => 'Expert in scalable backend architectures and cloud deployments.', 'photo' => '/images/team/david.jpg', 'linkedin_url' => 'https://linkedin.com/', 'twitter_url' => null, 'sort_order' => 2],
            ['name' => 'Sophia Martinez', 'role' => 'Head of Design', 'bio' => 'Award-winning UI/UX designer obsessed with pixel perfection.', 'photo' => '/images/team/sophia.jpg', 'linkedin_url' => 'https://linkedin.com/', 'twitter_url' => 'https://twitter.com/', 'sort_order' => 3],
        ];
        foreach ($team as $member) {
            TeamMember::create($member);
        }
    }
}
