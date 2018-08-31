<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Answer;

class AcceptAnswerController extends Controller
{
    public function __invoke(Answer $answer)
    {
        $this->authorize('accept', $answer);

        $answer->question->acceptBestAnswer($answer);

        if (request()->expectsJson()) {
            return response()->json([
                'message' => "You have accepted this answer as best answer"
            ]);
        }
        
        return back();
    }
}
