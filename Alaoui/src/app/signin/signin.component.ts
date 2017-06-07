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

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
  	this.authService.signIn(form.value.username, form.value.password)
  		.subscribe(
  				response => console.log(response),
  				error => console.log(error)
  			);
        if(localStorage.getItem('token')) this.router.navigate(["/welcome"])
  }

}