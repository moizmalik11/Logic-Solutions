<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\ContactMessage;

class ContactMessageSeeder extends Seeder {
    public function run() {
        ContactMessage::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '123-456-7890',
            'subject' => 'Project Inquiry',
            'message' => 'Hello, I would like to discuss a new web application project with your team.',
            'is_read' => false,
        ]);
        ContactMessage::create([
            'name' => 'Jane Smith',
            'email' => 'jane@example.com',
            'phone' => '098-765-4321',
            'subject' => 'Partnership Opportunity',
            'message' => 'We are looking for a reliable technical partner for our agency. Please get in touch.',
            'is_read' => true,
        ]);
    }
}
