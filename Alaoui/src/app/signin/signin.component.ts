import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { 
    if(localStorage.getItem('tokenParent')) this.router.navigate(["/welcome"]);
    if(localStorage.getItem('tokenProf')) this.router.navigate(["/prof"]);
  }
  ngOnInit() {

  }

  onSignin(form: NgForm) {
  	if(form.value.mode=="parent"){
      this.authService.signInParent(form.value.username, form.value.password)
  		.subscribe(
  				response => console.log(response),
  				error => console.log(error)
  			);
        if(localStorage.getItem('tokenParent')) this.router.navigate(["/welcome"]);
    } else if(form.value.mode=="professeur"){
      this.authService.signInProf(form.value.username, form.value.password)
  		.subscribe(
  				response => console.log(response),
  				error => console.log(error)
  			);
        if(localStorage.getItem('tokenProf')) this.router.navigate(["/prof"]);
    }
  }

}