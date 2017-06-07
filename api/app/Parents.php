<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Parents extends Model{
    public function eleves() {
        return $this->hasMany('App\eleve');
    }
}
