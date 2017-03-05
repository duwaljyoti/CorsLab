<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function getUserList() {

    	$data = User::orderBy('name', 'dsc')->get();

    	return response([ 'data' => $data ], 200);
    }
}
