import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayasComponent } from './playas/playas.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { LoginComponent } from './login/login.component'; // Importa el LoginComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'playas', component: PlayasComponent }, // Playas
  { path: 'actividades', component: ActividadesComponent }, // Actividades
  { path: 'recomendaciones', component: RecomendacionesComponent }, // Recomendaciones
  { path: 'login', component: LoginComponent }, // Login
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
