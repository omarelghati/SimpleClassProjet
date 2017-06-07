<?php
namespace App\Http\Controllers;
// header('Access-Control-Allow-Origin : *');
use Illuminate\Http\Request;
 use DB;
 use App\Eleve;
 use App\Matiere;
 use Tymon\JWTAuth\Exceptions\JWTException;
 use JWTAuth;
class MatiereController extends Controller
{
   
    public function getNotes(Request $request){

        $eleves = Eleve::where('nomcomplet',$request->eleve)->get()->first();
        $response;
        foreach($eleves->matieres as $matiere) {
            $tmp =array();
            // $id=$matiere->pivot->matiere_id;
                $tmp["nomMat"]=$matiere->nomMatiere;
            $tmp["note"] =$matiere->pivot->note;
            $response[]=$tmp;
        }    
    return response()->json([json_encode($response)],200);
    }
    //  public function checkOut(Request $request) {
        // $note = \DB::table('notes')->where('eleve',$request->eleve)->first();
        // return response()->json(['note' => $note->note],200);
    //  }
}