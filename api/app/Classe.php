<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
       public function professeurs(){
        return $this->belongsToMany('App\Professeur');
    }
    public function matieres() {
        return $this->belongsToMany("App\Matiere");
    }
     public function eleves() {
        return $this->hasMany('App\eleve');
    }    
}
