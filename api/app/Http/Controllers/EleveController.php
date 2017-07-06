<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use DB;
 use  App\Eleve;
 use App\Parents;
 use App\Classe;
 use DateTime;
use Carbon\Carbon;
class EleveController extends Controller
{
protected $fillable = ['nomcomplet', 'age', 'cne', 'classe_id','parent_id'];

    public function geteleves(Request $request) {
    $parent= Parents::where('nomcomplet',request('parent'))->first();
    $response= $parent->eleves;
    return response()->json([json_encode($response)],200);
    }
    public function getElevesPerClass(Request $request){
           $classe= Classe::find(request('classe_id'));
            foreach($classe->eleves as $eleve) {
                $result=array();
                $result['eleve']=$eleve;
                $note = $eleve->notes->where('matiere_id', request('matiere_id')); 
                $result['note'] = $note;
                $response[]=$result;
             }
             return response()->json([json_encode($response)],200);
        }
     public function store(Request $request)
     {
        $this->validate($request, [
    			'nomcomplet' => 'required|unique:eleves',
    			'age' => 'required',
    			'cne' => 'required',
    			'classe' => 'required',
    			'parent' => 'required'
    		]);


        $user = new Eleve;
        $user->nomcomplet = request('nomcomplet');
        $user->age = request('age');
        $user->cne = request('cne');
        $user->classe_id = request('classe');
        $user->parent_id = request('parent');
    	if($user->save())
            return response()->json(['response' =>'eleve cree'],200);   
    	else
            return response()->json(['response' =>'erreur'],500);
        //  $matieres = Matiere::all();
        // foreach($matieres as $matiere) {
        //      $note->matiere_id = $matiere->id;
        // }
    }
     

    public function getAbsences(Request $request) {
        $eleve = Eleve::where('nomcomplet',$request->eleve)->first();
        $absences=$eleve->absences;
        foreach ($eleve->absences as $absence) {
            $matiere = $absence->matiere;
        }
        return response()->json([json_encode($absences)],200);
    }   
}