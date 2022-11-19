import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    debugger;

    return this.http
      .get('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then((res) => {
        console.log(res);
      })

      .then((data) => {
        return data;
      });
  }
}
