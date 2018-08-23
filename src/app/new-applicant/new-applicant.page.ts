import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.page.html',
  styleUrls: ['./new-applicant.page.scss'],
})

export class NewApplicantPage implements OnInit {

    private ehPNE: boolean;
    private sexo: string;
    
    constructor() {
	this.ehPNE = false;
	this.sexo = 'm';
    }

    ngOnInit() {
    }

    updatePNE(){
	this.ehPNE = !this.ehPNE;
	console.log("Sexo = " + this.sexo);
	console.log("PNE  = " + this.ehPNE);
    }

}
