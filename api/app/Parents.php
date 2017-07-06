<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Parents extends Model{
    protected $table = "parents";
    public function eleves() {
        return $this->hasMany('App\eleve', 'parent_id');
    }
}
