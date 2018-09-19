import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person }     from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    constructor(private http: HttpClient) { }

    saveApplicant(personData) : Observable<Person> {

	console.log(personData);
	
	let url = 'http://localhost:8080/api/rooms/insert';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);

	return  this.http.post<Person>(url,JSON.stringify(personData),
			   {
			       headers: hdrs,
			   });
    }

}
