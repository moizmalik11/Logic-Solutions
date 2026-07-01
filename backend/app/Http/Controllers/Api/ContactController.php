<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactMessageResource;
use App\Services\ContactService;
use App\Http\Traits\ApiResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    use ApiResponse;

    protected $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    public function store(ContactRequest $request)
    {
        $message = $this->contactService->saveMessage($request->validated());
        return $this->success(new ContactMessageResource($message), 'Message sent successfully', 201);
    }

    public function index(Request $request)
    {
        $messages = $this->contactService->getPaginatedMessages();
        // Since paginator returns complex structure, we wrap the collection part
        // and append pagination metadata in the standard envelope data
        
        return response()->json([
            'success' => true,
            'message' => 'Messages retrieved successfully',
            'errors' => null,
            'data' => [
                'messages' => ContactMessageResource::collection($messages->items()),
                'pagination' => [
                    'current_page' => $messages->currentPage(),
                    'last_page' => $messages->lastPage(),
                    'per_page' => $messages->perPage(),
                    'total' => $messages->total(),
                ]
            ]
        ]);
    }

    public function markAsRead($id)
    {
        $message = $this->contactService->markAsRead($id);
        if (!$message) {
            return $this->error('Contact message not found', null, 404);
        }
        return $this->success(new ContactMessageResource($message), 'Message marked as read');
    }
}
