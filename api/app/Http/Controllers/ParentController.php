<?php 

namespace App\Http\Controllers;
use Illuminate\Http\Request;
 use DB;
 use App\Parents;
 use App\Professeur;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
class ParentController extends Controller
{
    public function getParents(){
        $parents = Parents::all();
        return response()->json([json_encode($parents)],200);
    }
   public function getParent(Request $request)
    {
       $parent= \DB::table('parents')->where('nomcomplet',$request->parent)->first();
       return  response()->json(['say my name' => $parent->cin],200);
    }


    //signin
    public function signin(Request $request) {
		// \Config::set('auth.providers.users.model', Parents::class);
		// \Config::set('auth.providers.users.table', 'parents');

    	$this->validate($request, [
    			'username' => 'required',
    			'password' => 'required'
    		]);
    	$credentials = [
			"username" => request('username').'_pa',
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