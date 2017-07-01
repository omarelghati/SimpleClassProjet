<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use  App\Eleve;
 use DateTime;
use Carbon\Carbon;
class EleveController extends Controller
{
    public function getAbsences(Request $request) {
        $eleve = Eleve::where('nomcomplet',$request->eleve)->first();
        $response=array();
        foreach($eleve->absences as $abs) {

            $tmp['dateAbs']=$abs->dateabs;
            $tmp['id']=$abs->id;
            $tmp['duree']=$abs->duree;
            $tmp['justifie']=$abs->justifie;
            $response[]=$tmp;
        }
        return response()->json([json_encode($response)],200);
    }



    public function getRemarques(Request $request) {
        $eleve = Eleve::where('nomcomplet',$request->eleve)->first();
        $response=array();
        foreach($eleve->professeurs as $prof) {
            $tmp['nomProf']=$prof->nomcomplet;
            $date_expire =$prof->pivot->created_at;
            $now = Carbon::now()->timezone('Africa/Casablanca');
            $date = Carbon:: parse($date_expire);
            $difference= Carbon::createFromTimeStamp(strtotime($date))->diffForHumans();
            $tmp['time']=$difference;
            $tmp['remarque']=$prof->pivot->remarque;
            $response[]=$tmp;
        }
        return response()->json([json_encode($response)],200);
    }
    
}