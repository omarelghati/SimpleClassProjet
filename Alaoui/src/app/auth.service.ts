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
    signIn(username: string, password: string) {
		this.tmp = username;
		return this.http.post(this.apiUrl + 'users/signin', 
			{username: username, password: password},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
					(response: Response) => {
						return response.json().token;
					}
				)
			.do(
					tokenData => {
						localStorage.setItem('token', tokenData.token);
						// localStorage.setItem('Name', tokenData.username);
						// AuthService.localUsername=localStorage.getItem('Name');
						this._router.navigate(['welcome']);
					}
				);
	}
	checkCredentials() {
		if(localStorage.getItem("token") === null) {
			this._router.navigate(['']);
		}else {
			this.user =this.tmp;
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