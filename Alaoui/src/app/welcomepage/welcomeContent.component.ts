import { Component, Input } from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {WelcomeComponent} from './welcome.component';
 @Component({
     selector:'welcome-content',
     templateUrl:'welcomeContent.component.html',
     providers:[WelcomeService],

     styles :[`
        .done{
            color:	#00FF00;
     } `]
 })
export class WelcomeContent {
    @Input() notes;
    @Input() eleve:string;
    @Input() absences=[];
    justified:boolean[]=[false];
     parent: string;
    @Input() remarques=[];
    constructor(private _welcome:WelcomeComponent,private _service:AuthService,private _requestService : WelcomeService) {
        this.parent = WelcomeComponent.parent;     
    }
  
    ngOnInit(){
    }
     
    justify(a,b) {
        this.justified[a]=!this.justified[a];
        this._requestService.justify(a,b).subscribe(
            response => { 
                 this.absences[a-1].justifie=!this.absences[a-1].justifie;
            },
            error => console.log(error)
                );
    }
    }
