<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chat;

class ChatController extends Controller
{
    public function getUserConversationById(Request $request)
    {
     	$userId = $request->input('id');
     	$authUserId = $request->user()->id;
     	$chat = Chat::whereIn('sender_id', [ $authUserId, $userId ])
     				->whereIn('receiver_id', [ $authUserId, $userId ])
     				->orderBy('created_at', 'asc')
     				->get();
     	return $chat;
    }
}
