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
Route::post('/parent/signin', 'ParentController@signin');
Route::post('/professeur/signin', 'ProfesseurController@signin');
Route::post('notes/getNotes','MatiereController@getNotes');
Route::post('parent/get','EleveController@geteleves');
Route::post('users/getInformation','UserController@setInformation');
Route::post('eleve/getAbsences','EleveController@getAbsences');
Route::post('eleve/getRemarques','RemarqueController@getRemarques');
Route::post('eleve/setRemarque','RemarqueController@setRemarque');
Route::post('eleve/justifyAbs','AbsenceController@justifyAbs');
Route::post('professeur/getClasses','ProfesseurController@getClasses');
Route::post('classe/getEleves','EleveController@getElevesPerClass');
Route::post('eleve/ajouter', 'EleveController@store');
Route::post('parents/all', 'ParentController@getParents');
Route::post('note/ajouterNote', 'NoteController@ajouterNote');
Route::post('absence/ajouterabsence', 'AbsenceController@ajouterAbsence');
Route::post('absence/getLastAbsents', 'AbsenceController@lastAbsents');
Route::post('classe/getAbsperMonth', 'AbsenceController@absPerMonth');