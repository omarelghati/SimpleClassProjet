import { Component, Input } from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {WelcomeComponent} from './welcome.component';
import {Popup} from './remarquePopup.component';
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
    // chart ts code
    loaded={'value':false};
    chartData;
    labels;
  // events
  setChart(){
      WelcomeComponent.data.length=0;
      WelcomeComponent.data=[];
      WelcomeComponent.setData();
      this.chartData=WelcomeComponent.data;
      this.labels=WelcomeComponent.labels;
      console.log(this.chartData);
      console.log(this.labels);
  }
  //chart ts code : end
    @Input() notes;
    //for the popup
    remarqueTitle:string;
    remarqueContent:string;
    static selectedRemarque:boolean=false;
    @Input() eleve:string;
    @Input() absences=[];
    justified:boolean[]=[false];
     parent: string;
    @Input() remarques=[];
    constructor(private _welcome:WelcomeComponent,private _service:AuthService,private _requestService : WelcomeService) {
        // console.log(this.loaded);
        this.parent = WelcomeComponent.parent;
        this.labels=WelcomeComponent.labels;
    }
    ngOnInit(){ 
    }
    setSelectedRemarque() {
         WelcomeContent.selectedRemarque=!WelcomeContent.selectedRemarque;
    }
     getSelectedRemarque() {
         return WelcomeContent.selectedRemarque;
     }
    justify(a,b) {
        // console.log(b);
        this.justified[a]=!this.justified[a];
        this._requestService.justify(a,b).subscribe(
            response => { 
                 this.absences[a-1].justifie=!this.absences[a-1].justifie;
            },
            error => console.log(error)
                );
    }
    setPop(a,b) {
        this.remarqueTitle=a;
        this.remarqueContent=b;
    }
    public chartColors: any[] = [
      { 
        backgroundColor:["#FF7360", "#6FC8CE", "#FA0002", "#FFFCC4", "#B9E8E0","#36BE0B","#0BBEAE"] 
      }];

    }