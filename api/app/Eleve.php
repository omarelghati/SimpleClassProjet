<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Eleve extends Model{
    
    public function parent() {
        return $this->belongsTo('App\Parents');
    }

    public function matieres() {
        return $this->belongsToMany("App\Matiere")->withPivot('note');
    }
    public function absences(){
        return $this->hasMany("App\Absense");
    }
    public function professeurs() {
        return $this->belongsToMany('App\Professeur')->withPivot('remarque')->withPivot('created_at');
    }

    public function remarques() {
        return $this->hasMany('App\Remarque');
    }

    public function notes() {
        return $this->hasMany('App\Note');
    }
}
