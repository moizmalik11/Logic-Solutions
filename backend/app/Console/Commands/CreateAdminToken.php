<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class CreateAdminToken extends Command
{
    protected $signature = 'admin:token {email}';
    protected $description = 'Create an API token for an admin user';

    public function handle()
    {
        $user = User::where('email', $this->argument('email'))->first();

        if (!$user) {
            $this->error('User not found.');
            return;
        }

        $token = $user->createToken('admin-token')->plainTextToken;
        $this->info("Token created successfully: {$token}");
    }
}
