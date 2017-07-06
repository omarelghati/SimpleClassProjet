import{ Injectable } from "@angular/core";
import{ Http,Headers,Response } from "@angular/http";
import 'rxjs/rx';
import{ Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    private apiUrl="http://localhost:8000/api/";
    constructor(private http : Http,private _router: Router){}
	 private tmp;
	 user;
    signInParent(username: string, password: string) {
		this.tmp = username;
		return this.http.post(this.apiUrl + 'parent/signin', 
			{username: username, password: password},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
					(response: Response) => {
						return response.json().token;
					}
				)
			.do(
					tokenData => {
						localStorage.setItem('tokenParent', tokenData.token);
						localStorage.setItem('Name', username);
					
						this._router.navigate(['welcome']);
					}
				);
	}
    signInProf(username: string, password: string) {
		this.tmp = username;
		return this.http.post(this.apiUrl + 'professeur/signin', 
			{username: username, password: password},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
					(response: Response) => {
						return response.json().token;
					}
				)
			.do(
					tokenData => {
						localStorage.setItem('tokenProf', tokenData.token);
						localStorage.setItem('Name', username);
					
						this._router.navigate(['prof']);
					}
				);
	}
	checkCredentials() {
		if(localStorage["tokenProf"] == null && localStorage["tokenParent"]==null) {
			this._router.navigate(['']);
		}
		else {
			this.user =localStorage['Name'];
		}

	}
	// getInformation() {
	// 	var userTest = this.tmp;
	// 	return this.http.post(this.apiUrl + 'users/getInformation', 
	// 		{userTest},
	// 		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
	// 		.map(
	// 				(response: Response) => {
	// 					return response.json();
	// 				}
	// 			)
	// }


}