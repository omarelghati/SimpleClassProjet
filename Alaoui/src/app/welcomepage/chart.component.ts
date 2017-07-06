import { Component, Input } from '@angular/core';
import { WelcomeComponent } from "./welcome.component";
@Component({
        selector:'chart-parent',
        template: `
                <div (close)="loaded?.value" *ngIf="loaded?.value">
                    <canvas baseChart
                        [data]="doughnutChartData"
                        [labels]="doughnutChartLabels"
                        [colors]="chartColors"
                        [chartType]="doughnutChartType"
                        (chartHover)="chartHovered($event)"
                        (chartClick)="chartClicked($event)">
                    </canvas>
                </div>
        `
})

export class Chart {
    @Input() doughnutChartData;
    @Input() doughnutChartLabels=[];
    @Input() chartColors;
    @Input() loaded;
    dataHere=false;
    doughnutChartType="doughnut";
    constructor(private welcome:WelcomeComponent) {
    }

    public chartClicked(e:any):void {
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
}