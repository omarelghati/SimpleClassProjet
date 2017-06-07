<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    public function eleve() {
        return $this->belongsTo('App\Eleve');
    }
    public function matiere() {
        return $this->belongsTo('App\Matiere');
    }
}
