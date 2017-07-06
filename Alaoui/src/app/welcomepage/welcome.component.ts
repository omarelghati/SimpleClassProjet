import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {WelcomeContent} from './welcomeContent.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

 @Component({
     selector:'welcome',
     templateUrl:'./welcome.component.html',
     styleUrls:['./welcome.component.css'],
     providers:[WelcomeService]
 })
 export class WelcomeComponent { 
      static labels=[];
      static data =[];
   static eleves = [];
     static parent:string;
     setted;
     clicked=false;
     childNotes =[];
     remarques =[];
     absences =[];
     matieres  =[];
     selectedEleve;
     constructor(private _service:AuthService,private _requestService : WelcomeService) {
       this._service.checkCredentials();
        WelcomeComponent.parent=this._service.user;
           this.setted = false;
           if(WelcomeComponent.eleves.length==0) {
             this._requestService.getChildren(WelcomeComponent.parent).subscribe(
            response => {
                  var eleve = JSON.parse(response);
                  var length = Object.keys(eleve).length;
                  for(var i=0;i<length;i++) {
                    this.setFils(eleve[i]); 
                  }  
            }
          ); 
           }
     }
     getParent(){
       return WelcomeComponent.parent;
     }
     getEleves(){
       return WelcomeComponent.eleves;
     }
     setFils(a) {
        WelcomeComponent.eleves.push(a);
     }
     ngOnInit() {  
     } 
     setNotes(a) {
       this.childNotes.push(a);
     }
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  public getNotes(y) {
      if(this.childNotes.length!=0) 
        this.childNotes=[];
        this._requestService.getNotes(y).subscribe(
  				response => {
            // var note = JSON.parse(response);
                  var length = Object.keys(response).length;
                  for(var i=0;i<length;i++) {
                    // console.log(response[i]);
                    this.setNotes(response[i]); 
                    }
  				error => console.log(error)}
  			);
    }
    //la fonction qui prepare les données qui vont etre envoyés par injection de dep
    public setEverything(root) {
      this.selectedEleve=root.innerText;this.clicked=true;
      this.remarques= [];
      this.absences= [];
      this.getNotes(root.innerText);
      this.getRemarques();
      this.onClickAbs();
  
  }

    // absences et remarques :
    setAbsence(a) {
        this.absences.push(a);
    }
    onClickAbs() {
      if(this.absences.length!=0)
        this.absences=[];
         this._requestService.getAbsences(this.selectedEleve).subscribe(
            response => {
                 var absence = JSON.parse(response);
                  var length = Object.keys(absence).length;
                    WelcomeComponent.labels=new Array();
                    WelcomeComponent.data=new Array();
                    // this.setAbsence(absence[i]);
                     for(var i=0;i<length;i++) {
                       if(length)
                        this.setLabels(absence[i].matiere.nomMatiere);
                      this.absences.push(absence[i]);  
                       }
            error => console.log(error)}
                );
    }
    getRemarques() {
      if(this.remarques.length!=0)
        this.remarques=[];
      this._requestService.getRemarques(this.selectedEleve).subscribe(
            response => {
                 var remarque = response;
                  var length = Object.keys(remarque).length;
                  for(var i=0;i<length;i++) {
                    this.setRemarques(remarque[i]); 
                    console.log(remarque[i]);
            }
            error => console.log(error)}
                );
    }
    setRemarques(a){
        this.remarques.push(a);
    }
    setLabels(a) {
         WelcomeComponent.labels.push(a);
    }
    getLabels() {
      return WelcomeComponent.labels;
    }

     static setData() {
      var obj = [];
      for (var i = 0, j = WelcomeComponent.labels.length; i < j; i++) {
        obj[i] = (obj[WelcomeComponent.labels[i]] || 0) + 1;
        // console.log(WelcomeComponent.labels[i]);
      }
        WelcomeComponent.data=obj;
        // console.log(WelcomeComponent.data);
    }
  }
