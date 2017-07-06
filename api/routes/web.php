<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
     $profs = App\Professeur::all();
    foreach($profs as $prof)
     {
         echo "prof : $prof<br/>";
         foreach($prof->classes as $classe) {
                 echo $classe."<br>";
             }
     }
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
