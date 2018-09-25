import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { Person }        from '../interfaces/person';

@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.page.html',
  styleUrls: ['./new-applicant.page.scss'],
})

export class NewApplicantPage implements OnInit {

    
    private nome_completo: FormControl;
    private data_nasc    : FormControl;
    private rg_identidade: FormControl;
    private cpf          : FormControl;
    private sexo         : FormControl;
    private email        : FormControl;
    private cidade       : FormControl;
    private cep          : FormControl;
    private telefone     : FormControl;
    private deficiencia  : FormControl;
    private cotista      : FormControl;

    private signUpForm       : FormGroup;

    constructor(private personService: PersonService,
		private alertCtrl: AlertController,
		private formBuilder: FormBuilder,
	        private navCtrl: NavController) {

	this.nome_completo = this.formBuilder.control('', Validators.required);
	this.data_nasc     = this.formBuilder.control('', Validators.required);
	this.rg_identidade = this.formBuilder.control('', Validators.required);
	this.cpf           = this.formBuilder.control('', Validators.required);
	this.sexo          = this.formBuilder.control('', Validators.required);
	this.email         = this.formBuilder.control('', Validators.required);
	this.cidade        = this.formBuilder.control('', Validators.required);
	this.cep           = this.formBuilder.control('', Validators.required);
	this.telefone      = this.formBuilder.control('', Validators.required);
	this.deficiencia   = this.formBuilder.control('', Validators.required);
	this.cotista       = this.formBuilder.control('', Validators.required);
	
	this.signUpForm    = this.formBuilder.group({
	    nome_completo: this.nome_completo, 
	    data_nasc    : this.data_nasc    ,
	    rg_identidade: this.rg_identidade,
	    cpf          : this.cpf          ,
	    sexo         : this.sexo         ,
	    email        : this.email        ,
	    cidade       : this.cidade       ,
	    cep          : this.cep          ,
	    telefone     : this.telefone     ,
	    deficiencia  : this.deficiencia  ,
	    cotista      : this.cotista
	});
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
	    nome_completo: this.nome_completo.value,
	    data_nasc:     this.data_nasc.value,
	    rg_identidade: this.rg_identidade.value,
	    cpf:	   this.cpf.value,
	    sexo:	   this.sexo.value,
	    email:	   this.email.value,
	    cidade:	   this.cidade.value,
	    cep:	   this.cep.value,	    
	    telefone:	   this.telefone.value,	    
	    deficiencia:   this.deficiencia.value,
	    cotista:       this.cotista.value 
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
 
