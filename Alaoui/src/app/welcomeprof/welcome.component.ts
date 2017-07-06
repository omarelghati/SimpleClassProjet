import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {WelcomepContent} from './welcomeContent.component';
import {PopupAdd} from './addEleve.component';
 @Component({
     selector:'welcome',
     templateUrl:'./welcome.component.html',
     styleUrls:['./welcome.component.css'],
     providers:[WelcomeService]
 })
 export class WelcomepComponent {
   classe_id: any;
   count: number = 0; 
   parents=[];
   lastAbsents;
   static notes = [];
    static addEleve = false;
   static professeur;
   static classes= [];
   static matiere;
   selectedClasse;
      labels=[];
      data =[];
      eleves = [];
     clicked=false;
     static elevesCount;
     //chart vars
    // static chartData;
    // static chartLabels;
     //endofit
   constructor(private _service: AuthService, private _requestService: WelcomeService) {
       this._service.checkCredentials();
       WelcomepComponent.professeur=this._service.user;
      this._requestService.getClasses(WelcomepComponent.professeur).subscribe(
            response => {
                  var classe = response.classes;
                  WelcomepComponent.matiere=response.matiere;
                  console.log(response.matiere);
                  WelcomepComponent.professeur=response.prof;
                  var length = Object.keys(classe).length;
                  for(var i=0;i<length;i++) {
                    console.log(classe[i]);
                    WelcomepComponent.classes.push(classe[i]); 
                  }  
            }
          );
     }
  getProfesseur() {
    return WelcomepComponent.professeur.nomcomplet;
  }
  getClasses() {
    return WelcomepComponent.classes;
  }
  getAllParents() {
      this._requestService.getParents().subscribe(
            response => {
              // console.log(response);
                  var resp = JSON.parse(response);
                  var length = Object.keys(resp).length;
                  for(var i=0;i<length;i++) {
                   this.setParents(resp[i]);
                   console.log(resp[i]);
                  }
            }
          );
  }
  getEleves(a,b) {
       this._requestService.getEleves(a,b).subscribe(
            response => {
                  var resp = JSON.parse(response);
                  var length = Object.keys(resp).length;
                  this.count= length;
                  WelcomepComponent.elevesCount=this.count;
                  for(var i=0;i<length;i++) {
                    this.setEleves(resp[i].eleve); 
                   this.setNotes(resp[i].note[0]);
                  }  
            }
          );
    }
     setEleves(a){
        this.eleves.push(a);
    }
     setNotes(a){
        WelcomepComponent.notes.push(a);
    }
    ajouterEleve(){
      if(this.parents.length==0)
      this.getAllParents();
      WelcomepComponent.addEleve=!WelcomepComponent.addEleve;
    }
    getAddEleve() {
      return WelcomepComponent.addEleve;
    }
    setParents(a) {
      this.parents.push(a);
    }
    //list des derniers absents
    setLastAbsents() {
        this._requestService.setLastAbsents().subscribe(
                response =>  {
                  var length = Object.keys(response).length;
                  for(var i=0;i<length;i++) {
                    this.lastAbsents.push(response[i]);
                  }  
                }
        )
    }
    public setEverything(root) {
        this.lastAbsents= new Array();
        this.setLastAbsents();
        this.selectedClasse=root.attributes['id'].value;this.clicked=true;
        if(this.eleves.length!=0)
          this.eleves= new Array();
        this.getEleves(this.selectedClasse,WelcomepComponent.matiere.id);
        this.classe_id=this.selectedClasse;
        this.selectedClasse=root.innerText;  
    }
    //dropped
    // setChart(){
    //   this._requestService.getAbsencesPerMonth(this.classe_id).subscribe();

    // }

   }
