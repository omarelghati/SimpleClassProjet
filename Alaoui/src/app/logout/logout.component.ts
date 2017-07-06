import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'',
    template:''
})
export class LogoutComponent {

  constructor(private router:Router) { 
    localStorage.removeItem('tokenParent');
    localStorage.removeItem('tokenProf');
     this.router.navigate([""]);
  }
  ngOnInit() {

  }

}