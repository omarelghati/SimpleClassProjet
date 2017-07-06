<?php
namespace App\Http\Controllers;
// header('Access-Control-Allow-Origin : *');
namespace App\Http\Controllers;
use Illuminate\Http\Request;
 use DB;
 use App\Parents;
 use App\Note;
class NoteController extends Controller
{  
    protected $fillable = ['eleve_id','matiere_id','note'];
    public function ajouterNote(Request $request){
        $noteexists = \DB::table('notes')->where('eleve_id',request('eleve_id'))
                                         ->where('matiere_id',request('matiere_id'))->first();
        if($noteexists){
    $note = \DB::table('notes')->where('eleve_id',request('eleve_id'))
                               ->where('matiere_id',request('matiere_id'))
                               ->update(array('note' =>request('note')));
    return response()->json(['response' =>'note modifiee'],200);
        }else
         {
             $note = new Note;
            $note->eleve_id = request('eleve_id');
            $note->matiere_id = request('matiere_id');
            $note->note = request('note');
            $note->save();
            return response()->json(['response' =>'note cree'],200);
         }
       return response()->json(['response' =>'rerror'],500);
    }
   
   }
    //  public function checkOut(Request $request) {
        // $note = \DB::table('notes')->where('eleve',$request->eleve)->first();
        // return response()->json(['note' => $note->note],200);
    //  }

