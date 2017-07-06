<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use App\Professeur;
 use App\Classe;
 use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
class ProfesseurController extends Controller
{
       public function getClasses(Request $request){
           $result=array();
           $prof= Professeur::where('nomcomplet',request('professeur'))->first();
             return response()->json(['prof'=>$prof,'matiere'=>$prof->matiere,'classes'=>$prof->classes],200);
        }
         public function signin(Request $request) {

    	$this->validate($request, [
    			'username' => 'required',
    			'password' => 'required'
    		]);
    	$credentials = [
			"username" => request('username').'_pr',
			"password" => request('password')
		];

    	try{
    		if ( !$token = JWTAuth::attempt($credentials)) {
    			return response()->json([
    					'message' => 'Invalid credentials'
    				] ,401);
    		}
    	} catch (JWTException $e) {
    		return response()->json([
    				'message' => 'Could not create token'
    			],500);
    	}		
    	return response()->json(compact('token'), 200);

}
         
}