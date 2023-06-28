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
import { CrearCineComponent } from './pages/cine/crear-cine/crear-cine.component';
import { EditarCineComponent } from './pages/cine/editar-cine/editar-cine.component';
import { ListarCineComponent } from './pages/cine/listar-cine/listar-cine.component';
import { CrearPrecioComponent } from './pages/precio/crear-precio/crear-precio.component';
import { EditarPrecioComponent } from './pages/precio/editar-precio/editar-precio.component';
import { ListarPrecioComponent } from './pages/precio/listar-precio/listar-precio.component';
import { CrearProtagonistaComponent } from './pages/protagonista/crear-protagonista/crear-protagonista.component';
import { EditarProtagonistaComponent } from './pages/protagonista/editar-protagonista/editar-protagonista.component';
import { ListarProtagonistaComponent } from './pages/protagonista/listar-protagonista/listar-protagonista.component';
import { CrearProyeccionComponent } from './pages/proyeccion/crear-proyeccion/crear-proyeccion.component';
import { EditarProyeccionComponent } from './pages/proyeccion/editar-proyeccion/editar-proyeccion.component';
import { ListarProyeccionComponent } from './pages/proyeccion/listar-proyeccion/listar-proyeccion.component';

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
    EditarPeliculasComponent,
    CrearCineComponent,
    EditarCineComponent,
    ListarCineComponent,
    CrearPrecioComponent,
    EditarPrecioComponent,
    ListarPrecioComponent,
    CrearProtagonistaComponent,
    EditarProtagonistaComponent,
    ListarProtagonistaComponent,
    CrearProyeccionComponent,
    EditarProyeccionComponent,
    ListarProyeccionComponent
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
