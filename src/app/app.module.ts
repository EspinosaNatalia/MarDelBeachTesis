import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayasComponent } from './playas/playas.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { FiltroComponent } from './filtro/filtro.component';
import { LoginComponent } from './login/login.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { DetallePlayaComponent } from './detalle-playa/detalle-playa.component';
import { EspecificacionPlayaComponent } from './especificacion-playa/especificacion-playa.component';
import { ValorarComponent } from './valorar/valorar.component';
import { DetalleActividadComponent } from './detalle-actividad/detalle-actividad.component';
import { EspecificacionActividadComponent } from './especificacion-actividad/especificacion-actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PlayasComponent,
    ActividadesComponent,
    RecomendacionesComponent,
    FiltroComponent,
    LoginComponent,
    FavoritosComponent,
    DetallePlayaComponent,
    EspecificacionPlayaComponent,
    ValorarComponent,
    DetalleActividadComponent,
    EspecificacionActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
