import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayasComponent } from './playas/playas.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'playas', component: PlayasComponent }, // Playas
  { path: 'actividades', component: ActividadesComponent }, // Actividades
  { path: 'recomendaciones', component: RecomendacionesComponent }, // Recomendaciones
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
