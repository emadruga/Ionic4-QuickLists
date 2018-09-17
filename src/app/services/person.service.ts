import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) { }

    saveApplicant(personData): void {

	console.log(personData);
	
	let url = 'http://localhost:8080/api/rooms/insert';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);
	
	this.http.post(url,JSON.stringify(personData),
		       {
			   headers: hdrs,
		       }
                      ).subscribe(
                          (res) => {
			      
                              console.log(res);

                          },
                          (err) => {
                              console.log(err);
                          }
                      );

    }

}
