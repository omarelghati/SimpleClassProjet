<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professeur extends Model
{
    public function classes() {
        return $this->hasMany('App\Classe');
    }
    public function postes(){
            return $this->hasMany('App\Poste');
        }
        public function matiere() {
            return $this->belongsTo('App\Matiere');
        }

}
