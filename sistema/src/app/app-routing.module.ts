import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCinesComponent } from './pages/productos/crear-cines/crear-cines.component';
import { EditarCinesComponent } from './pages/productos/editar-cines/editar-cines.component';
import { ListarCinesComponent } from './pages/productos/listar-cines/listar-cines.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

import { CrearPeliculasComponent } from './pages/pelicula/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './pages/pelicula/editar-peliculas/editar-peliculas.component';
import { ListarPeliculasComponent } from './pages/pelicula/listar-peliculas/listar-peliculas.component';
const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-cines', component: ListarCinesComponent },
  { path: 'crear-cines', component: CrearCinesComponent },
  { path: 'editar-cines/:id', component: EditarCinesComponent },
  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-peliculas', component: CrearPeliculasComponent },
  { path: 'editar-peliculas/:id', component: EditarPeliculasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
