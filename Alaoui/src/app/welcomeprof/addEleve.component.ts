import { Component, Input, OnInit } from '@angular/core'; 
import { NgForm } from "@angular/forms";
import { WelcomeService } from './welcome.service';
import {Router} from '@angular/router';
@Component({
    selector: 'popupAdd',
    template: `
         <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Ajouter un élève</h4>
        </div>
        <div class="modal-body">
          <form #f="ngForm" (ngSubmit)="onSignin(f.form)" >

        <div class="form-group">
          <label for="nomcomplet">Nom complet de l'élève</label>
          <input type="text" required class="form-control" id="nomcomplet" name="nomcomplet" placeholder="Entrer le nom" ngModel>
        </div>


        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" name="age" id="age" placeholder="l'age de l'élève" ngModel>
        </div>

        <div class="form-group">
          <label for="cne">CNE</label>
          <input type="text" class="form-control" id="cne" name="cne" placeholder="CNE de l'élève" ngModel>
        </div>

        <div class="form-group">
          <label for="classe">Selectionner une classe</label>
          <select class="form-control" name="classe" id="classe" ngModel>
            <option *ngFor="let classe of classes" [value]="classe?.id">{{classe.nomclasse}}</option>
          </select>
        </div>

         <div class="form-group">
          <label for="parent">Selectionner une classe</label>
          <select class="form-control" name="parent" id="parent" ngModel>
            <option *ngFor="let parent of parents" [value]="parent?.id">{{parent?.nomcomplet}}</option>
          </select>
        </div>

        <div class="form-group">
          <input type="submit" value="Ajouter"class="btn btn-primary"/>
        </div>
         <div *ngIf="success" class="alert alert-success">
            Elève ajouté avec succés
          </div>
    </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
    `

})
export class PopupAdd implements OnInit{
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
    // @Input() title:string;
    success=false;
    @Input() classes;
    @Input() parents;

    onSignin(form: NgForm) {
  	    this._welcome.ajouterEleve(form.value.nomcomplet,form.value.age,form.value.cne,form.value.classe,form.value.parent)
  		.subscribe(
  				response => {
             this.success=true;
          },
  				error => console.log(error)
  			);
        // if(localStorage.getItem('token')) this.router.navigate(["/welcome"]);
  }
    constructor(private _welcome:WelcomeService,private router:Router) {
    }
}