<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use  App\Eleve;
 use  App\Absense;
 use  App\Matiere;
 use  App\Classe;
 use Carbon\Carbon;
 use Tymon\JWTAuth\Exceptions\JWTException;
 use JWTAuth;
class AbsenceController extends Controller
{
    public function lastAbsents() {
        $absences = Absense::orderBy('dateabs', 'DESC')->take(3)->get();
        $response;
        foreach($absences as $absence) {
            $tmp;
            $tmp['absence'] = $absence;
            $matiere = Matiere::find($absence->matiere_id);
            $tmp['matiere'] = $matiere->nomMatiere;
            $eleve = Eleve::find($absence->eleve_id);
            $tmp['eleve'] = $eleve->nomcomplet;
            $response[] = $tmp;
        }
        return response()->json($response,200);
    }
    public function absPerMonth(Request $request) {
//         SELECT count(id),Month(dateabs) FROM `absenses` WHERE 1
// GROUP BY Month(dateabs);
        $classe= Classe::find(request('classe_id'));
        $absencesAr=[];
         foreach($classe->eleves as $eleve) {
                $result=array();
                // $result['eleve']=$eleve;
                $note = $eleve->notes->where('matiere_id', request('matiere_id')); 
                 $absencesAr[]= Absense::where('matiere_id',request('matiere_id'))
                                    ->where('eleve_id',$eleve->id)
                                    ->select(DB::raw('count(id) as `data`'), DB::raw("dateabs"),  DB::raw('MONTH(dateabs) month'))
                                    ->groupby('month')
                                    ->get();
                                
//                  $result = Absense::select(DB::raw('count(id) as `data`'), DB::raw("dateabs"),  DB::raw('MONTH(dateabs) month'))

                // $result['note'] = $note;
                // $response[]=$result;
             }
             $absencesAr=json_decode($absencesAr[0]);
        return response()->json($absencesAr[0]->data,200);
                // ->groupBy('Month(dateabs)');
    }
    public function justifyAbs(Request $request){
        // $response=Eleve::where('id',$request->id)->update(array('justifie' => '1'));
       $just=1-$request->justified;   
       DB::table('absenses')
            ->where('id', $request->id)
            ->update(array('justifie' => $just));
        return response()->json(['response' => 'done justifying!'],200);
    }
    public function ajouterAbsence(Request $request) {
             $absence = new Absense;
             $absence->matiere_id = request('matiere_id');
             $dt=Carbon::now();
             $absence->dateabs = $dt;
            $absence->eleve_id = request('eleve_id');
            $absence->justifie = 0;
            $absence->save();
            return response()->json(['response' =>'absence cree'],200);
    
    }  
}