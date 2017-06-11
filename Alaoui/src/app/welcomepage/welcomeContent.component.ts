import { Component, Input } from '@angular/core';
import {AuthService} from '../auth.service';
import {WelcomeService} from './welcome.service';
import {WelcomeComponent} from './welcome.component';
 @Component({
     selector:'welcome-content',
     template:`<div class="container-fluid">

                <!-- Page Heading -->
               
                <!-- /.row -->
                <!--dok l3ibat 4-->
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                     <div class="col-xs-3">
                                        <i class="fa fa-tasks fa-4x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div>Notes</div>
                                        <div class="huge">{{notes.length}}</div>
                                    </div>
                                </div>
                            </div>
                            <a (click)="getRemarques()">
                                <div class="panel-footer" *ngFor="let note of notes">
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="pull-left">{{note?.note}}&nbsp;&nbsp;<span>{{note?.nomMat}}!</span></div>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge">12</div>
                                        <div>New Tasks!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <span class="pull-left">View Details</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-shopping-cart fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge">124</div>
                                        <div>New Orders!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <span class="pull-left">View Details</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                       <i class="fa fa-clock-o fa-fw"></i>
                                    </div>
                                    <div class="col-xs-9 text-right"> 
                                        <div class="huge">{{absences.length}}</div>
                                        <div>Absences</div>
                                    </div>
                                </div>
                            </div>
                            <a>
                                <div class="panel-footer">
                                    <span class="pull-left"></span>
                                    <span class="pull-right"><i class="icon-calendar"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                 <!--dok l3ibat 4 fin-->
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right fa-fw"></i>Pourcentage des absences</h3>
                            </div>
                            <div class="panel-body">
                                <div class="morris-donut-chart"></div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i>  Remarques des professeurs</h3>
                            </div>
                            <div class="panel-body">
                                <div class="list-group">
                                    <a *ngFor="let remarque of remarques" href="#" class="list-group-item">
                                        <span class="badge">{{remarque?.time}}</span>
                                        <i class="fa fa-fw fa-calendar"></i>{{remarque?.remarque}}
                                    </a>
                                </div>
                                <div class="text-right">
                                    <a href="#">View All Activity <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i>Liste detaillée des absences</h3>
                            </div>
                            <div class="panel-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>N° d'absence</th>
                                                <th>Date d'absence</th>
                                                <th>Durée d'absence</th>
                                                <th>justification</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr *ngFor="let absence of absences">
                                                <td>{{absence?.id}}</td>
                                                <td>{{absence?.dateAbs}}</td>
                                                <td>{{absence?.duree}}</td>
                                                <td><i (click)="justify(absence?.id)" class="glyphicon glyphicon-ok" [ngClass]="{'done': justified[absence?.id] }"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-right">
                                    <a href="#">View All Transactions <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                
            </div>`,
     providers:[WelcomeService],

     styles :[`
        .done{
            color:	#00FF00;
     }
        
     `]
 })
export class WelcomeContent {
    @Input() notes;
    @Input() eleve:string;
    absences=[];
    justified:boolean[]=[false];
     parent: string;
    remarques=[];
    constructor(private _welcome:WelcomeComponent,private _service:AuthService,private _requestService : WelcomeService) {
        this.parent = WelcomeComponent.parent;     
    }
    setAbsence(a) {
        this.absences.push(a);
    }
    ngOnInit(){
        if(this.eleve) {
            this.onClickAbs();
        }
        if(this.remarques) {
            this.getRemarques();
        }
    }
    onClickAbs() {
         this._requestService.getAbsences(this.eleve).subscribe(
            response => {
                 var absence = JSON.parse(response);
                  var length = Object.keys(absence).length;
                  for(var i=0;i<length;i++) {
                    this.setAbsence(absence[i]); 
                    console.log(absence[i])
            }
            error => console.log(error)}
                );
    }
    justify(a) {
        this.justified[a]=!this.justified[a];
        this._requestService.justify(a).subscribe(
            response => { 
                    console.log(response)
            },
            error => console.log(error)
                );
    }
    getRemarques() {
        this._requestService.getRemarques(this.eleve).subscribe(
            response => {
                 var remarque = JSON.parse(response);
                  var length = Object.keys(remarque).length;
                  for(var i=0;i<length;i++) {
                    this.setRemarques(remarque[i]); 
                    console.log(remarque[i])
            }
            error => console.log(error)}
                );
    }
    setRemarques(a){
        this.remarques.push(a);
    }
    }
