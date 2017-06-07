	<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::resource('quotes', 'QuoteController')->middleware('jwt.auth');

Route::get('quotes', 'QuoteController@index');
Route::post('quotes', 'QuoteController@store')->middleware('jwt.auth');
Route::put('quotes/{quote}', 'QuoteController@update')->middleware('jwt.auth');
Route::delete('quotes/{quote}', 'QuoteController@destroy')->middleware('jwt.auth');




Route::post('/users/signup', 'UserController@singup');
Route::post('/users/signin', 'ParentController@signin');
Route::post('notes/getNotes','NoteController@getNotes');
Route::post('parent/get','ParentController@geteleves');
Route::post('users/getInformation','UserController@setInformation');
