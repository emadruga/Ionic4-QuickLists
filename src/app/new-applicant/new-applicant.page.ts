import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

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

    constructor(private personService: PersonService) {
	this.data_nasc = new Date().toISOString();

    }

    ngOnInit() {
    }

    doSave(): void {
	console.log("Sending info to database...");

	let personData = {
	    _id:  "5b8fcc0d53e00907f9cfa0b4"
	};
	
	this.personService.saveApplicant(personData);
    }

 
}
 
