<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Eleve extends Model{
    
    public function parent() {
        return $this->belongsTo('App\Parents');
    }

    public function matieres() {
        return $this->belongsToMany("App\Matiere")->withPivot('note');
    }
}
