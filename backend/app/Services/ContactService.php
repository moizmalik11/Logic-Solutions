<?php

namespace App\Services;

use App\Models\ContactMessage;

class ContactService
{
    public function saveMessage(array $data)
    {
        // Sanitize inputs to prevent stored XSS
        $data['name'] = strip_tags($data['name']);
        $data['subject'] = strip_tags($data['subject']);
        $data['message'] = strip_tags($data['message']);

        return ContactMessage::create($data);
    }

    public function getPaginatedMessages($perPage = 15)
    {
        return ContactMessage::latest()->paginate($perPage);
    }

    public function markAsRead($id)
    {
        $message = ContactMessage::find($id);
        if ($message) {
            $message->update(['is_read' => true]);
        }
        return $message;
    }
}
