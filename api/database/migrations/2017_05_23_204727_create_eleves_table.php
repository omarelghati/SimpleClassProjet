<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateElevesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eleves', function (Blueprint $table) {
            $table->increments('Ideleve');
            $table->string('NomComplet');
            $table->Integer('age');
            $table->Integer('cne')->unique();
            $table->string('username')->unique();
            $table->string('password');
            $table->rememberToken();
            // $table->Integer('idclasse');
            // $table->Integer('idparent');s
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('eleves');
    }
}
