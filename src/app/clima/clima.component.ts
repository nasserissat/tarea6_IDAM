import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent  implements OnInit {

  weather: any;
  apiKEY = '614bbcd2a89d732026da76ad3f56587a'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&units=metric&appid=${this.apiKEY}`)
      .subscribe(response => {
        this.weather = response;
      });
  }

}
