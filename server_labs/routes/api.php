<?php

use Illuminate\Http\Request;
// use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('test', function(){
	return response([1, 2, 3, 4], 200);
}); 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {	
    Route::get('user-list', 'UserController@getUserList');

    //chat urls
    Route::post('get-user-conversation', 'ChatController@getUserConversationById');
    Route::post('chat-save', 'ChatController@saveUserChat');

    //private messag urls
    Route::post('get-private-message-notification', 'PrivateMessageController@getUsernotifications');
    Route::post('get-private-messages', 'PrivateMessageController@getPrivateMessages');
    Route::post('get-private-message', 'PrivateMessageController@getPrivateMessagesById');
    Route::post('get-private-messages-sent', 'PrivateMessageController@getPrivateMessagesSent');
    Route::post('send-private-message', 'PrivateMessageController@sendPrivateMessage');
});