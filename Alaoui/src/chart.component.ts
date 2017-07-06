import {Component} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
    selector:'chart',
    template : ` <div class="panel-body">
                <div id="doughnut-chart"></div>
             </div>
             <script [src]="src"></script>
             `
})
export class Chart {
    src: SafeResourceUrl;
    haha;
    constructor(private sanitizer: DomSanitizer) {
        console.log('hello');
       this.src = sanitizer.bypassSecurityTrustResourceUrl('../../js/chart.js');
    }
}