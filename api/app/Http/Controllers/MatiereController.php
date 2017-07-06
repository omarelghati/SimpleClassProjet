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

        $eleve= Eleve::where('nomcomplet',$request->eleve)->first();
        $notes =  $eleve->notes;
        foreach($notes as $note) {
            $matiere = $note->matiere;
        }
    return response()->json($notes,200);
    }
}