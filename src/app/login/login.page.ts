import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public backgroundImage = 'assets/img/background/background-5.jpg'
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
