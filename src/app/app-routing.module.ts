import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ClimaComponent } from './clima/clima.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PredictorDeEdadComponent } from './predictor-de-edad/predictor-de-edad.component';
import { PredictorDeGeneroComponent } from './predictor-de-genero/predictor-de-genero.component';
import { PredictorDeUniversidadComponent } from './predictor-de-universidad/predictor-de-universidad.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-principal',
    pathMatch: 'full'
  },
  {path: 'pagina-principal', component: PaginaPrincipalComponent},
  {path: 'predictor-de-genero', component: PredictorDeGeneroComponent},
  {path: 'predictor-de-edad', component: PredictorDeEdadComponent},
  {path: 'predictor-de-universidades', component: PredictorDeUniversidadComponent},
  {path: 'clima', component: ClimaComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
