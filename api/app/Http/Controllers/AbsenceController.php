<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use  App\Eleve;
  use Tymon\JWTAuth\Exceptions\JWTException;
        use JWTAuth;
class AbsenceController extends Controller
{
    public function justifyAbs(Request $request){
        // $response=Eleve::where('id',$request->id)->update(array('justifie' => '1'));
       $just=1-$request->justified;
       
       DB::table('absences')
            ->where('id', $request->id)
            ->update(array('justifie' => $just));
        return response()->json(['this' => 'done','bool' => $just],200);

}  
}