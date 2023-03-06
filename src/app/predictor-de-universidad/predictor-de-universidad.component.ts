import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predictor-de-universidad',
  templateUrl: './predictor-de-universidad.component.html',
  styleUrls: ['./predictor-de-universidad.component.scss'],
})
export class PredictorDeUniversidadComponent {
  country: string = '';
  universities!: any[];
  loading: boolean = false;
  constructor(private http: HttpClient) {}


  checkUni() {
    this.http.get<any[]>(`http://universities.hipolabs.com/search?country=${this.country}`)
      .subscribe(response => {
        this.universities = response;
        this.loading = false;
      });
  }

}
