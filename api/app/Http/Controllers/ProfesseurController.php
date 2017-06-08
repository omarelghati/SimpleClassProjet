<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
class ProfesseurController extends Controller
{
        public function postes(){
            return $this->hasMany('App\Poste');
        }
       
}