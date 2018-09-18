import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    public result: boolean;
    
    constructor(private http: HttpClient) { }

    saveApplicant(personData) : Promise<boolean> {

	console.log(personData);
	
	let url = 'http://localhost:8080/api/rooms/insert';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);

	let promise = new Promise( (resolve,reject) => {
	    this.http.post(url,JSON.stringify(personData),
			   {
			       headers: hdrs,
			   })
	        .toPromise()
		.then(
                    (res) => {
			this.result = true;
			console.log(res);
			resolve();
			
                    },
                    (err) => {
			this.result = false;
			reject(err);
                    }
		);
	});
	return promise;
	
    }

}
