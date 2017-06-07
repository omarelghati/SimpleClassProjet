<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    public function note(){
        return $this->hasOne('App\Note');
    }
    public function classes() {
        return $this->belongsToMany('App\classe');
    }
     
}
