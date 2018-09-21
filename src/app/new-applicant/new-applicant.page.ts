import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { PersonService } from '../services/person.service';
import { Person }        from '../interfaces/person';

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

    constructor(private personService: PersonService,
		private alertCtrl: AlertController,
	        private navCtrl: NavController) {
	this.data_nasc = new Date().toISOString();

    }

    ngOnInit() {
    }

    doCancel(): void {
	this.navCtrl.goBack("/opener");
    }

    async alertInsertOk(msg: string) {
	const alert = await this.alertCtrl.create({
	    header: 'Sucesso',
	    subHeader: 'Cadastro realizado',
	    message: msg,
	    buttons: ['OK']
	});

	await alert.present();
    }

    async alertConflict(msg: string) {
	const alert = await this.alertCtrl.create({
	    header: 'Conflito',
	    subHeader: 'CPF já existente',
	    message: msg,
	    buttons: ['OK']
	});

	await alert.present();
    }

    async alertServerFailure(msg: string) {
	const alert = await this.alertCtrl.create({
	    header: 'Problema',
	    subHeader: 'Serviço indisponível',
	    message: msg,
	    buttons: ['OK']
	});

	await alert.present();
    }
    
    doSave(): void {
	console.log("Sending info to database...");

	let personData = {
	    nome_completo: this.nome_completo,
	    data_nasc:     this.data_nasc,
	    rg_identidade: this.rg_identidade, 
	    cpf:	   this.cpf,
	    sexo:	   this.sexo,	    
	    email:	   this.email,	    
	    cidade:	   this.cidade,	    
	    cep:	   this.cep,	    
	    telefone:	   this.telefone,	    
	    deficiencia:   this.deficiencia,    
	    cotista:       this.cotista         
	};
	console.log(personData);
	
	this.personService.saveApplicant(personData)
	    .subscribe(
		(person: Person) => {
		    console.log("Id recebido: " + person._id);
		    this.alertInsertOk("Informações salvas!");

		},
		(err) => {
		    console.log(err);
		    if (err.status == 409) {
			this.alertConflict("Por favor, verifique dados fornecidos.");
		    } else {
			this.alertServerFailure("Por favor, tente mais tarde!");
		    }
		}
	    );
    }

 
}
 
