import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    
    login() {
	console.log("Let's do login...");
    }

    launchSignup() {
	console.log("Let's do signup...");
    }

}
