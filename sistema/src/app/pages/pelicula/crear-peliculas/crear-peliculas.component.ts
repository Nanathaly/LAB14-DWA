import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-peliculas',
  templateUrl: './crear-peliculas.component.html',
  styleUrls: ['./crear-peliculas.component.css']
})
export class CrearPeliculasComponent {

  peliculaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _peliculaService: PeliculaService){
    this.peliculaForm = this.fb.group({
        titulo:  ['', Validators.required],
        director: ['', Validators.required],
        clasificacion: ['', Validators.required],
        protagonista:  ['', Validators.required],
        genero:  ['', Validators.required]
    })
  }

  agregarPelicula(){

    const PELICULA: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      director: this.peliculaForm.get('director')?.value,
      clasificacion: this.peliculaForm.get('clasificacion')?.value,
      protagonista: this.peliculaForm.get('protagonista')?.value,
      genero: this.peliculaForm.get('genero')?.value,
    }

    console.log(PELICULA)

    Swal.fire({
      title: 'Creacion de Pelicula',
      text: "¿Desea crear el pelicula?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._peliculaService.guardarPelicula(PELICULA).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-peliculas'])
        }) 
      }
    })

    
  }

    //console.log(this.peliculaForm)
  

}
