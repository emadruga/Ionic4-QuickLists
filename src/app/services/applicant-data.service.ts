import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApplicantDataService {

    constructor(private http: HttpClient) { 

    }

    saveApplicant(personData): void {

	let url = 'http://localhost:8080/api/rooms/reserve';

	this.http.post(url, JSON.stringify(personData)
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
