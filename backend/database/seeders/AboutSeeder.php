<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class AboutSeeder extends Seeder {
    public function run(): void {
        DB::table('about_sections')->insert([
            'title' => 'Who We Are',
            'body' => 'LogicSolution is a full-stack software and AI solutions agency founded in Karachi with a simple belief: great technology should be accessible to businesses of every size. Since our founding, we\'ve partnered with startups, SMEs, and enterprise teams to design, build, and scale digital products that people actually enjoy using. Our team blends deep engineering expertise with a product mindset, so every line of code we ship is tied to a real business outcome, including more signups, faster checkouts, fewer support tickets, and better decisions.',
            'mission' => 'To make world-class software engineering accessible to every ambitious business, regardless of size or budget.',
            'vision' => 'To be the most trusted technology partner for companies building their next chapter of digital growth.',
            'image' => 'http://127.0.0.1:8000/storage/images/unsplash_1522071820081-009f0129c71c.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
