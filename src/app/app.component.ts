import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pagina principal', url: 'pagina-principal', icon: 'home' },
    { title: 'Predictor de genero', url: 'predictor-de-genero', icon: 'male-female' },
    { title: 'Predictor de edad', url: 'predictor-de-edad', icon: 'paper-plane' },
    { title: 'Predictor de universidad', url: 'predictor-de-universidades', icon: 'heart' },
    { title: 'Clima', url: 'clima', icon: 'archive' },
    { title: 'Acerca de', url: 'acerca-de', icon: 'trash' },
  ];
  constructor() {}
}
