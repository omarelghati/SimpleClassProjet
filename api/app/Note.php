<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{   
    public function matiere() {
        return $this->belongsTo('App\Matiere');
    }
}
