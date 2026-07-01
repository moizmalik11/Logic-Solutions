<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder {
    public function run() {
        $faqs = [
            ['question' => 'What technologies do you specialize in?', 'answer' => 'We specialize in React, Next.js, Laravel, Node.js, and cloud platforms like AWS and Azure.', 'category' => 'Technical', 'sort_order' => 1],
            ['question' => 'How long does a typical project take?', 'answer' => 'Project timelines vary based on complexity, but a standard web application usually takes 8-12 weeks.', 'category' => 'General', 'sort_order' => 2],
            ['question' => 'Do you provide ongoing maintenance?', 'answer' => 'Yes, we offer flexible maintenance and support contracts post-launch to ensure your software remains secure and up-to-date.', 'category' => 'Services', 'sort_order' => 3],
            ['question' => 'How do you handle data security?', 'answer' => 'We follow industry best practices including encryption at rest and in transit, regular security audits, and strict access controls.', 'category' => 'Security', 'sort_order' => 4],
        ];
        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
