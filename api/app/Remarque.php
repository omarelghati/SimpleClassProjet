<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Remarque extends Model
{
    public function professeur() {
        return $this->belongsTo('App\Professeur');
    }
}
