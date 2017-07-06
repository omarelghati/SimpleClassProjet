<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    public function classes() {
        return $this->belongsToMany('App\Classe');
    }
    public function professeurs() {
        return $this->hasMany('App\Professeur');
    }
     
}
