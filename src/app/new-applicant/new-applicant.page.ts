import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.page.html',
  styleUrls: ['./new-applicant.page.scss'],
})

export class NewApplicantPage implements OnInit {

    private nome_completo: string;
    private data_nasc    : string;
    private rg_identidade: string;
    private cpf          : string;
    private sexo         : string;
    private email        : string;
    private cidade       : string;
    private cep          : string;
    private telefone     : string;
    private deficiencia  : string;
    private cotista      : string;

    
    constructor() {
	this.ehPNE = false;
	this.sexo = 'm';
	this.data_nasc = new Date().toISOString();

    }

    ngOnInit() {
    }

    updatePNE(){
	this.ehPNE = !this.ehPNE;
	console.log("Sexo = " + this.sexo);
	console.log("PNE  = " + this.ehPNE);
    }

}
