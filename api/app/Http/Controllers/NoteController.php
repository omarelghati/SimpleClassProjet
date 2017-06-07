<?php
namespace App\Http\Controllers;
// header('Access-Control-Allow-Origin : *');
use Illuminate\Http\Request;
 use DB;
 use App\Eleve;
 use App\Matiere;
 use Tymon\JWTAuth\Exceptions\JWTException;
 use JWTAuth;
class NoteController extends Controller
{
   
    public function getNotes(Request $request){

        $eleves = Eleve::where('nomcomplet',$request->eleve)->get()->first();
        // $classe = Classe::all()->first();
    $response;
// foreach($eleves as $eleve) {
    // foreach($eleve->classe as $classe){
        // foreach($classe->matieres as $matiere) {
            foreach($eleves->classe->matieres as $matiere) {
                $tmp =array();
                $id=$matiere->pivot->matiere_id;
                 $tmp["nomMat"]=$matiere->nomMatiere;
                $mat = Matiere::where('id',$id)->first();
               
                // foreach( $mat->note as $note) {
                    $tmp["note"] =$mat->note->note;
                    $response[]=$tmp;
                }


        //     foreach($matiere->note as $note) {
                
        //  }
        // $response[]=$eleve->classe;
        //  }
    //  }
// }
    
    return response()->json([json_encode($response)],200);
    }
    //  public function checkOut(Request $request) {
        // $note = \DB::table('notes')->where('eleve',$request->eleve)->first();
        // return response()->json(['note' => $note->note],200);
    //  }
}
