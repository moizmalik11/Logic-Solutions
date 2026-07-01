<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TeamMemberRequest;
use App\Http\Resources\TeamMemberResource;
use App\Services\TeamMemberService;
use App\Http\Traits\ApiResponse;

class TeamMemberController extends Controller
{
    use ApiResponse;

    protected $teamService;

    public function __construct(TeamMemberService $teamService)
    {
        $this->teamService = $teamService;
    }

    public function index()
    {
        $teamMembers = $this->teamService->getAllTeamMembers();
        return $this->success(TeamMemberResource::collection($teamMembers));
    }

    public function show($id)
    {
        $teamMember = $this->teamService->getTeamMemberById($id);
        if (!$teamMember) {
            return $this->error('Team member not found', null, 404);
        }
        return $this->success(new TeamMemberResource($teamMember));
    }

    public function store(TeamMemberRequest $request)
    {
        $teamMember = $this->teamService->createTeamMember($request->validated());
        return $this->success(new TeamMemberResource($teamMember), 'Team member created successfully', 201);
    }

    public function update(TeamMemberRequest $request, $id)
    {
        $teamMember = $this->teamService->updateTeamMember($id, $request->validated());
        if (!$teamMember) {
            return $this->error('Team member not found', null, 404);
        }
        return $this->success(new TeamMemberResource($teamMember), 'Team member updated successfully');
    }

    public function destroy($id)
    {
        $deleted = $this->teamService->deleteTeamMember($id);
        if (!$deleted) {
            return $this->error('Team member not found', null, 404);
        }
        return $this->success(null, 'Team member deleted successfully');
    }
}
