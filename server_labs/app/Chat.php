<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $fillable = [
         'sender_id', 'receiver_id', 'chat', 'read'
    	];

    protected $appends = ['sender', 'receiver'];


    function getSenderAttribute() {
      return User::where('id', $this->sender_id)->first();
    }

     function getReceiverAttribute() {
    	
      return User::where('id', $this->receiver_id)->first();
    }
}
