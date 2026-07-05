<?php

namespace Tests\Feature\Api;

use App\Models\User;
use App\Models\Hero;
use App\Models\AboutSection;
use App\Models\Service;
use App\Models\Feature;
use App\Models\Portfolio;
use App\Models\Testimonial;
use App\Models\TeamMember;
use App\Models\Faq;
use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LandingPageApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // HERO SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_hero_api_returns_correct_data(): void
    {
        Hero::create([
            'title' => 'Test Hero Title',
            'subtitle' => 'Test Subtitle',
            'cta_text' => 'Get Started',
            'cta_url' => '/test-url',
            'background_image' => 'hero.jpg',
            'is_active' => true
        ]);

        $response = $this->getJson('/api/hero');
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    'title' => 'Test Hero Title',
                    'subtitle' => 'Test Subtitle'
                ]
            ]);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // ABOUT SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_about_api_returns_correct_data(): void
    {
        AboutSection::create([
            'title' => 'Who We Are',
            'body' => 'We are a logic meets innovation agency.',
            'image' => 'about.jpg',
            'mission' => 'Build high performance apps',
            'vision' => 'Be the global leader'
        ]);

        $response = $this->getJson('/api/about');
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    'title' => 'Who We Are',
                    'body' => 'We are a logic meets innovation agency.'
                ]
            ]);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SERVICES SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_services_api_lists_all_services(): void
    {
        Service::create([
            'title' => 'Web Dev',
            'description' => 'Fast sites',
            'icon' => 'code',
            'sort_order' => 1,
            'is_active' => true
        ]);

        $response = $this->getJson('/api/services');
        $response->assertStatus(200)
            ->assertJsonCount(1, 'data');
    }

    public function test_guest_cannot_mutate_services(): void
    {
        $response = $this->postJson('/api/services', [
            'title' => 'Design',
            'description' => 'Great UI',
            'icon' => 'pen',
            'sort_order' => 2
        ]);
        $response->assertStatus(401);
    }

    public function test_admin_can_create_service(): void
    {
        $admin = User::factory()->create();

        $response = $this->actingAs($admin)->postJson('/api/services', [
            'title' => 'Design',
            'description' => 'Great UI',
            'icon' => 'pen',
            'sort_order' => 2,
            'is_active' => true
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'Service created successfully'
            ]);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // FEATURES SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_features_api_lists_all_features(): void
    {
        Feature::create([
            'title' => 'High Performance',
            'description' => 'Sleek speed',
            'icon' => 'rocket',
            'sort_order' => 1
        ]);

        $response = $this->getJson('/api/features');
        $response->assertStatus(200)
            ->assertJsonCount(1, 'data');
    }

    public function test_guest_cannot_mutate_features(): void
    {
        $response = $this->postJson('/api/features', [
            'title' => 'Scalable',
            'description' => 'Grows with you',
            'icon' => 'expand',
            'sort_order' => 2
        ]);
        $response->assertStatus(401);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PORTFOLIO SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_portfolio_api_lists_all_projects(): void
    {
        Portfolio::create([
            'title' => 'Assessment Portal',
            'description' => 'Full stack project',
            'image' => 'assess.jpg',
            'category' => 'Web',
            'url' => 'https://logic.com',
            'sort_order' => 1
        ]);

        $response = $this->getJson('/api/portfolio');
        $response->assertStatus(200)
            ->assertJsonCount(1, 'data');
    }

    public function test_guest_cannot_mutate_portfolio(): void
    {
        $response = $this->postJson('/api/portfolio', [
            'title' => 'New App',
            'description' => 'Cool app description',
            'image' => 'new.jpg',
            'category' => 'SaaS',
            'url' => 'https://saas.com',
            'sort_order' => 2
        ]);
        $response->assertStatus(401);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // TESTIMONIALS SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_testimonials_api_lists_all_testimonials(): void
    {
        Testimonial::create([
            'client_name' => 'Alice',
            'role' => 'CTO',
            'company' => 'TechCorp',
            'quote' => 'Unbelievable results!',
            'avatar' => 'alice.jpg',
            'rating' => 5
        ]);

        $response = $this->getJson('/api/testimonials');
        $response->assertStatus(200)
            ->assertJsonCount(1, 'data');
    }

    public function test_guest_cannot_mutate_testimonials(): void
    {
        $response = $this->postJson('/api/testimonials', [
            'client_name' => 'Bob',
            'role' => 'CEO',
            'company' => 'SaaS Inc',
            'quote' => 'Highly recommend.',
            'avatar' => 'bob.jpg',
            'rating' => 5
        ]);
        $response->assertStatus(401);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // TEAM MEMBERS SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_team_members_api_lists_all_members(): void
    {
        TeamMember::create([
            'name' => 'John Developer',
            'role' => 'Full-Stack Developer',
            'bio' => 'Likes coffee',
            'photo' => 'john.jpg',
            'linkedin_url' => 'https://linkedin.com/john',
            'twitter_url' => 'https://twitter.com/john',
            'sort_order' => 1
        ]);

        $response = $this->getJson('/api/team-members');
        $response->assertStatus(200)
            ->assertJsonCount(1, 'data');
    }

    public function test_guest_cannot_mutate_team_members(): void
    {
        $response = $this->postJson('/api/team-members', [
            'name' => 'Jane Product',
            'role' => 'Product Lead',
            'bio' => 'Designs product flows',
            'photo' => 'jane.jpg',
            'sort_order' => 2
        ]);
        $response->assertStatus(401);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // FAQ SECTION TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_faqs_api_lists_all_faqs(): void
    {
        Faq::create([
            'question' => 'What is dynamic grid?',
            'answer' => 'A customizable overlay grid layout.',
            'category' => 'General',
            'sort_order' => 1,
            'is_active' => true
        ]);

        $response = $this->getJson('/api/faqs');
        $response->assertStatus(200)
            ->assertJsonCount(1, 'data');
    }

    public function test_guest_cannot_mutate_faqs(): void
    {
        $response = $this->postJson('/api/faqs', [
            'question' => 'How does caching work?',
            'answer' => 'By storing compiled assets.',
            'category' => 'DevOps',
            'sort_order' => 2
        ]);
        $response->assertStatus(401);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // CONTACT FORM & MESSAGES TESTS
    // ─────────────────────────────────────────────────────────────────────────
    public function test_contact_form_submits_successfully_with_valid_data(): void
    {
        $payload = [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '1234567890',
            'subject' => 'Assessment Inquiry',
            'message' => 'Hello there, testing this form!'
        ];

        $response = $this->postJson('/api/contact', $payload);
        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'Message sent successfully'
            ]);

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '1234567890',
            'subject' => 'Assessment Inquiry',
            'message' => 'Hello there, testing this form!'
        ]);
    }

    public function test_contact_form_submission_fails_with_invalid_data(): void
    {
        $payload = [
            'name' => '', // missing name
            'email' => 'not-an-email',
            'phone' => '123', // too short
            'subject' => '',
            'message' => ''
        ];

        $response = $this->postJson('/api/contact', $payload);
        $response->assertStatus(422)
            ->assertJson([
                'success' => false,
                'message' => 'Validation Error'
            ]);
    }

    public function test_guest_cannot_view_messages(): void
    {
        $response = $this->getJson('/api/contact');
        $response->assertStatus(401);
    }

    public function test_admin_can_view_paginated_messages(): void
    {
        $admin = User::factory()->create();
        ContactMessage::create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '1234567890',
            'subject' => 'Assessment Inquiry',
            'message' => 'Hello there, testing this form!'
        ]);

        $response = $this->actingAs($admin)->getJson('/api/contact');
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Messages retrieved successfully'
            ]);
    }
}
