import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PredictorDeEdadComponent } from './predictor-de-edad/predictor-de-edad.component';
import { PredictorDeGeneroComponent } from './predictor-de-genero/predictor-de-genero.component';
import { PredictorDeUniversidadComponent } from './predictor-de-universidad/predictor-de-universidad.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ClimaComponent } from './clima/clima.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PredictorDeEdadComponent,
    PredictorDeGeneroComponent,
    PredictorDeUniversidadComponent,
    AcercaDeComponent,
    ClimaComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
