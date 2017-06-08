import{ Injectable } from "@angular/core";
import{ Http,Headers,Response } from "@angular/http";
import 'rxjs/rx';
import{ Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class WelcomeService {
      private apiUrl="http://localhost:8000/api/";
    constructor(private http : Http,private _router: Router){}
    getChildren(parent: string) {
        return this.http.post(this.apiUrl+'parent/get',{parent:parent},
                {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}).
                map((response:Response) => {return response.json(); });
    }

	getNotes(eleve : string) {
		return this.http.post(this.apiUrl + 'notes/getNotes', {eleve:eleve},
						 {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
						 .map(
							 (response:Response) => { return response.json();}
							 );
	}
    getAbsences(eleve : string) {
        return this.http.post(this.apiUrl+'eleve/getAbsences',{eleve:eleve},
        {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
						 .map(
							 (response:Response) => { return response.json();}
							 );
    }
}