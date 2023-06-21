import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarCinesComponent } from './pages/productos/listar-cines/listar-cines.component';
import { CrearCinesComponent } from './pages/productos/crear-cines/crear-cines.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EditarCinesComponent } from './pages/productos/editar-cines/editar-cines.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CrearPeliculasComponent } from './pages/pelicula/crear-peliculas/crear-peliculas.component';
import { ListarPeliculasComponent } from './pages/pelicula/listar-peliculas/listar-peliculas.component';
import { EditarPeliculasComponent } from './pages/pelicula/editar-peliculas/editar-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarCinesComponent,
    CrearCinesComponent,
    NavbarComponent,
    EditarCinesComponent,
    CrearPeliculasComponent,
    ListarPeliculasComponent,
    EditarPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
