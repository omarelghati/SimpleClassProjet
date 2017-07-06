import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {ChartProf} from './chart.component';
import {WelcomepComponent} from './welcome.component';
import {PopupAdd} from './addEleve.component';
import { NgForm } from "@angular/forms";
@Component({
     selector:'welcome-prof-content',
     templateUrl:'welcomeContent.component.html',
     providers:[WelcomeService],
     styles :[`
        .done{
            color:	#00FF00;
     } `]
 })
export class WelcomepContent implements OnInit {
    notes: any;
    @Input() classe;
    @Input() eleves;
    title="ajouter";
    content="content";
    matiere:string;
    editing=false;
     static professeur;
     absenceData;
      ajouterAbs= false;
     absenceIsSet;
     successRem=false;
     @Input() lastAbsents;
    constructor(private _welcome:WelcomepComponent,private _service:AuthService,private _requestService : WelcomeService) {
    WelcomepContent.professeur=WelcomepComponent.professeur;
    this.matiere=WelcomepComponent.matiere;
    this.notes = WelcomepComponent.notes;
    }
    ngOnInit(){
    }
    saveit(id,note) {
        if(note.innerText) {
        if (note.innerText > 20 || note.innerText < 0) {
         alert("SVP entrer une note entre 0 et 20");
         }
         else {
            //  console.log(parseInt(note.innerText))
             this._requestService.saveNotes(parseInt(id.innerText),WelcomepComponent.matiere.id,parseInt(note.innerText)).subscribe(
                 response => {
                     console.log(response);
                 }
             );
         }
    }
        // console.log('la note de l\'eleve avec l id :'+parseInt(WelcomepComponent.matiere.id)+' a été changée');
    }
    getAddEleve() {
        return WelcomepComponent.addEleve;
    }
    setAbsent(i,id) {
        this.absenceIsSet[i]=true;
        this._requestService.saveAbsence(parseInt(id.innerText),WelcomepComponent.matiere.id).subscribe(
            response => console.log(response)
        );

    }
    loadAbsList() {
        this.ajouterAbs=!this.ajouterAbs;
        // if(WelcomepComponent.elevesCount)
        this.absenceIsSet = new Array(WelcomepComponent.elevesCount);
        this.absenceData=[0];
        console.log(this.absenceIsSet.length);
    }
    setRemarque(form:NgForm,e:Event) {
        e.preventDefault();
        this._requestService.setRemarque(WelcomepContent.professeur.id,form.value.eleve,form.value.remarque).subscribe(
            response => this.successRem=true
        );
        console.log('hey iam here');
    }
}
