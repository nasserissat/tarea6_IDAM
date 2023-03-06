import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predictor-de-edad',
  templateUrl: './predictor-de-edad.component.html',
  styleUrls: ['./predictor-de-edad.component.scss'],
})
export class PredictorDeEdadComponent  {
  name: string = '';
  age!: number;

  constructor(private http: HttpClient) {}


  checkAge() {
    this.http.get<any>(`https://api.agify.io/?name=${this.name}`)
      .subscribe(response => {
        this.age = response.age;
      });
  }

}
