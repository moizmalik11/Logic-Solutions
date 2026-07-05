<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HeroController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\FeatureController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\TeamMemberController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\ContactController;



use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Auth Routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('admin');

// Public routes
Route::get('/hero', [HeroController::class, 'show']);
Route::get('/about', [AboutController::class, 'show']);

Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

Route::get('/features', [FeatureController::class, 'index']);
Route::get('/features/{id}', [FeatureController::class, 'show']);

Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::get('/portfolio/{id}', [PortfolioController::class, 'show']);
Route::get('/testimonials', [TestimonialController::class, 'index']);
Route::get('/testimonials/{id}', [TestimonialController::class, 'show']);

Route::get('/team-members', [TeamMemberController::class, 'index']);
Route::get('/team-members/{id}', [TeamMemberController::class, 'show']);
Route::get('/faqs', [FaqController::class, 'index']);
Route::get('/faqs/{id}', [FaqController::class, 'show']);

// Rate limiting (5 per minute) and public endpoint for contact
Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:5,1');



// Admin Protected Routes
Route::middleware(['admin'])->group(function () {
    Route::put('/hero', [HeroController::class, 'update']);
    Route::put('/about', [AboutController::class, 'update']);
    
    // Services
    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{id}', [ServiceController::class, 'update']);
    Route::delete('/services/{id}', [ServiceController::class, 'destroy']);

    // Features
    Route::post('/features', [FeatureController::class, 'store']);
    Route::put('/features/{id}', [FeatureController::class, 'update']);
    Route::delete('/features/{id}', [FeatureController::class, 'destroy']);

    // Portfolio
    Route::post('/portfolio', [PortfolioController::class, 'store']);
    Route::put('/portfolio/{id}', [PortfolioController::class, 'update']);
    Route::delete('/portfolio/{id}', [PortfolioController::class, 'destroy']);
    // Testimonials
    Route::post('/testimonials', [TestimonialController::class, 'store']);
    Route::put('/testimonials/{id}', [TestimonialController::class, 'update']);
    Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy']);

    // Team Members
    Route::post('/team-members', [TeamMemberController::class, 'store']);
    Route::put('/team-members/{id}', [TeamMemberController::class, 'update']);
    Route::delete('/team-members/{id}', [TeamMemberController::class, 'destroy']);
    // FAQs
    Route::post('/faqs', [FaqController::class, 'store']);
    Route::put('/faqs/{id}', [FaqController::class, 'update']);
    Route::delete('/faqs/{id}', [FaqController::class, 'destroy']);

    // Contact Messages (Admin)
    Route::get('/contact', [ContactController::class, 'index']);
    Route::patch('/contact/{id}/read', [ContactController::class, 'markAsRead']);


});
