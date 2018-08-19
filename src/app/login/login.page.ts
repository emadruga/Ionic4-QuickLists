import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public backgroundImage = 'assets/img/background/background-5.jpg';
    public username: string;
    
    constructor( private navCtrl: NavController ) { }

    ngOnInit() {
    }
    
    login() {
	if (this.username !== undefined &&
	    /^([a-z0-9]{5,})$/.test(this.username) ) {
	    console.log("Let's do login for " + this.username);
	    this.navCtrl.goForward('/checklists');
	} else {
	    console.log("No username set yet!");
	}
    }

    launchSignup() {
	console.log("Let's do signup...");
    }

}
