<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Absense extends Model
{
    public function matiere() {
        return $this->belongsTo('App\Matiere');
    }
}
