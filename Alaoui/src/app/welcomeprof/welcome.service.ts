import{ Injectable } from "@angular/core";
import{ Http,Headers,Response } from "@angular/http";
import 'rxjs/rx';
import{ Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class WelcomeService {
      private apiUrl="http://localhost:8000/api/";
    constructor(private http : Http,private _router: Router){}
    getClasses(professeur: string) {
        return this.http.post(this.apiUrl+'professeur/getClasses',{professeur:professeur},
                {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}).
                map((response:Response) => {return response.json(); });
    }
	getParents() {
		return this.http.post(this.apiUrl + 'parents/all', {},
						 {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
						 .map(
							 (response:Response) => { return response.json();}
							 );
	}
	getEleves(classe_id :number,matiere_id :number) {
		return this.http.post(this.apiUrl + 'classe/getEleves', {matiere_id:matiere_id,classe_id:classe_id},
						 {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
						 .map(
							 (response:Response) => { return response.json();}
							 );
	}
    ajouterEleve(nomcomplet: string,age:number,cne:number,classe:number,parent:number) {
		return this.http.post(this.apiUrl + 'eleve/ajouter', 
			{nomcomplet: nomcomplet,age:age,cne:cne,classe:classe,parent:parent},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
					(response: Response) => {
						return response.json().token;
					}
				)
			.do(
					tokenData => {
						// localStorage.setItem('token', tokenData.token);
						// localStorage.setItem('Name', username);
					
						this._router.navigate(['/prof']);
					}
				);
	}
	saveNotes(eleve_id,matiere_id,note) {
		return this.http.post(this.apiUrl + 'note/ajouterNote', 
			{eleve_id:eleve_id,matiere_id:matiere_id,note:note},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
					(response: Response) => {
						return response.json();
					}
				)
	}
	saveAbsence(eleve_id,matiere_id) {
		return this.http.post(this.apiUrl + 'absence/ajouterabsence', 
			{eleve_id:eleve_id,matiere_id:matiere_id},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
					(response: Response) => {
						return response.json();
					}
				)
	}
	setLastAbsents(){
         return this.http.post(this.apiUrl+'absence/getLastAbsents',{},
         {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
						 .map(
							 (response:Response) => { return response.json();}
							 );
    }
	setRemarque(professeur_id:number,eleve_id:number,remarque:string) {
		return this.http.post(this.apiUrl+ 'eleve/setRemarque', {professeur_id,eleve_id,remarque},
         {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
						 .map(
							 (response:Response) => { return response.json();}
							 );
	}
	//dropped
	// getAbsencesPerMonth(classe_id) {
	// 	return this.http.post(this.apiUrl+ 'classe/getAbsperMonth', {classe_id:classe_id},
    //      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
	// 					 .map(
	// 						 (response:Response) => { return response.json();}
	// 						 );
	// }
}