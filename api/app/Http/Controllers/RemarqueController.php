<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use App\Professeur;
 use App\Remarque;
 use App\Eleve;
 use Carbon\Carbon;
class RemarqueController extends Controller
{
    public function getRemarques(Request $request) {
        $eleve = Eleve::where('nomcomplet',request('name'))->first();
        if($eleve) {
            $remarques = $eleve->remarques;
            $time=array();
            foreach($eleve->remarques as $remarque)  {
                $dt=Carbon::instance($remarque->created_at);
            $remarque['time']=$dt->diffForHumans();
                $prof = $remarque->professeur;
            }
        }
        return response()->json($remarques,200);
    }
    public function setRemarque(Request $request) {
        $remarque = new Remarque;
        $remarque->professeur_id=request('professeur_id');
        $remarque->eleve_id=request('eleve_id');
        $remarque->remarque=request('remarque');
        if($remarque->save()) {
            return response()->json('remarque ajoutée',200);
        } else {
            return response()->json('erreur !',500);
        }
    }

}
 