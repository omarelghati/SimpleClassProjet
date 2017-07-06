<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use  App\Eleve;
 use DateTime;
 use App\Classe;
class ClasseController extends Controller
{
   
     public function getNotes(Request $request){

        $eleves = Eleve::where('nomcomplet',$request->eleve)->get()->first();
        $response;
        foreach($eleves->matieres as $matiere) {
            $tmp =array();
            // $id=$matiere->pivot->matiere_id;
                $tmp["nomMat"]=$matiere->nomMatiere;
            $tmp["note"] =$matiere->pivot->note;
            $tmp["id"]=$matiere->id;
            $response[]=$tmp;
        }    
    return response()->json([json_encode($response)],200);
    }    
    
}