import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predictor-de-genero',
  templateUrl: './predictor-de-genero.component.html',
  styleUrls: ['./predictor-de-genero.component.scss'],
})
export class PredictorDeGeneroComponent {
  name: string = '';
  gender: string= '';

  constructor(private http: HttpClient) {}


  checkGender() {
    this.http.get(`https://api.genderize.io?name=${this.name}`).subscribe((data: any) => {
      if (data.gender) {
        this.gender = data.gender;
      } else {
        this.gender = "desconocido";
      }
    });
  }

}
