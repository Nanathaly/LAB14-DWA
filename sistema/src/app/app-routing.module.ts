import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearCineComponent } from './pages/cine/crear-cine/crear-cine.component';
import { EditarCineComponent } from './pages/cine/editar-cine/editar-cine.component';
import { ListarCineComponent } from './pages/cine/listar-cine/listar-cine.component';

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

import { CrearPeliculasComponent } from './pages/pelicula/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './pages/pelicula/editar-peliculas/editar-peliculas.component';
import { ListarPeliculasComponent } from './pages/pelicula/listar-peliculas/listar-peliculas.component';

import { CrearPrecioComponent } from './pages/precio/crear-precio/crear-precio.component';
import { EditarPrecioComponent } from './pages/precio/editar-precio/editar-precio.component';
import { ListarPrecioComponent } from './pages/precio/listar-precio/listar-precio.component';

import { CrearProtagonistaComponent } from './pages/protagonista/crear-protagonista/crear-protagonista.component';
import { EditarProtagonistaComponent } from './pages/protagonista/editar-protagonista/editar-protagonista.component';
import { ListarProtagonistaComponent } from './pages/protagonista/listar-protagonista/listar-protagonista.component';

import { CrearProyeccionComponent } from './pages/proyeccion/crear-proyeccion/crear-proyeccion.component';
import { EditarProyeccionComponent } from './pages/proyeccion/editar-proyeccion/editar-proyeccion.component';
import { ListarProyeccionComponent } from './pages/proyeccion/listar-proyeccion/listar-proyeccion.component';



const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-cine', component: ListarCineComponent },
  { path: 'crear-cine', component: CrearCineComponent },
  { path: 'editar-cine/:id', component: EditarCineComponent },
  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-peliculas', component: CrearPeliculasComponent },
  { path: 'editar-peliculas/:id', component: EditarPeliculasComponent },
  { path: 'listar-precio', component: ListarPrecioComponent },
  { path: 'crear-precio', component: CrearPrecioComponent },
  { path: 'editar-precio/:id', component: EditarPrecioComponent },
  { path: 'listar-protagonista', component: ListarProtagonistaComponent },
  { path: 'crear-protagonista', component: CrearProtagonistaComponent },
  { path: 'editar-protagonista/:id', component: EditarProtagonistaComponent },
  { path: 'listar-proyeccion', component: ListarProyeccionComponent },
  { path: 'crear-proyeccion', component: CrearProyeccionComponent },
  { path: 'editar-proyeccion/:id', component: EditarProyeccionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
