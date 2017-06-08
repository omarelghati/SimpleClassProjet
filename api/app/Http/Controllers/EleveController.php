<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use  App\Eleve;
class EleveController extends Controller
{
    public function getAbsences(Request $request) {
        $eleve = Eleve::where('nomcomplet',$request->eleve)->first();
        $response=array();
        foreach($eleve->absences as $abs) {
            $tmp['dateAbs']=$abs->dateabs;
            $tmp['duree']=$abs->duree;
            $tmp['justifie']=$abs->justifie;
            $response[]=$tmp;

        }
        return response()->json([json_encode($response)],200);
    }
    
}