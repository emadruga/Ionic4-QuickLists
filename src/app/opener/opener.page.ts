import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.page.html',
  styleUrls: ['./opener.page.scss'],
})
export class OpenerPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    doForm() {
	console.log("Vamos criar nova ficha de pré-inscrição");
	this.navCtrl.goForward('/new-applicant');
    }

    doLogin() {
	console.log("Vamos atualizar dados de pré-inscrição de candidato existente");
	this.navCtrl.goForward('/login');
    }

}
