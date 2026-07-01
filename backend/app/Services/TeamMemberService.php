<?php

namespace App\Services;

use App\Models\TeamMember;

class TeamMemberService
{
    public function getAllTeamMembers()
    {
        return TeamMember::orderBy('sort_order')->get();
    }

    public function getTeamMemberById($id)
    {
        return TeamMember::find($id);
    }

    public function createTeamMember(array $data)
    {
        return TeamMember::create($data);
    }

    public function updateTeamMember($id, array $data)
    {
        $team = $this->getTeamMemberById($id);
        if ($team) {
            $team->update($data);
        }
        return $team;
    }

    public function deleteTeamMember($id)
    {
        $team = $this->getTeamMemberById($id);
        if ($team) {
            $team->delete();
            return true;
        }
        return false;
    }
}
