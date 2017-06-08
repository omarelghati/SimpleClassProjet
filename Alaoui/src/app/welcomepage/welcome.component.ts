import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {WelcomeContent} from './welcomeContent.component';
 @Component({
     selector:'welcome',
     templateUrl:'./welcome.component.html',
     styleUrls:['./welcome.component.css'],
     providers:[WelcomeService]
 })


 export class WelcomeComponent { 
   static eleves = [];
     items= ["Note","Remarque","Absence","EDT"];
     static parent:string;
     setted;
     clicked=false;
     childNotes=[];
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
  public surprise(x,y) {
      if(this.childNotes.length!=0) 
       this.childNotes=[];
        this._requestService.getNotes(y).subscribe(
  				response => {
            var note = JSON.parse(response);
                  var length = Object.keys(note).length;
                  for(var i=0;i<length;i++) {
                    this.setNotes(note[i]); 
                    console.log(note[i]);
                    }
  				error => console.log(error)}
  			);
    }

  }
