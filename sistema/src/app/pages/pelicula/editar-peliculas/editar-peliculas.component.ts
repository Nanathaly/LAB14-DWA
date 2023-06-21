import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { Usuario } from 'src/app/models/users';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})

export class EditarPeliculasComponent implements OnInit {
  peliculaForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _peliculaService: PeliculaService){
    this.peliculaForm = this.fb.group({
        titulo: ['', Validators.required],
        director: ['', Validators.required],
        clasificacion: ['', Validators.required],
        protagonista: ['', Validators.required],
        genero: ['', Validators.required]

    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.validarId()

  }

  validarId(){

    if(this.id !== null){
      this._peliculaService.viewPelicula(this.id).subscribe(data => {
        this.peliculaForm.setValue({
          titulo: data.producto,
          director: data.categoria,
          clasificacion: data.ubicacion,
          protagonista: data.precio,
          genero: data.precio
        })
      })
    }

  }

  editarPelicula(){
    
    const PELICULA: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      director: this.peliculaForm.get('director')?.value,
      clasificacion: this.peliculaForm.get('clasificacion')?.value,
      protagonista: this.peliculaForm.get('protagonista')?.value,
      genero: this.peliculaForm.get('genero')?.value,
    }

    Swal.fire({
          title: 'Actualizacion de Pelicula',
          text: "¿Desea actualizar el pelicula?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._peliculaService.actualizarPelicula(this.id, PELICULA).subscribe(data => {
                  console.log(PELICULA);
                  this.router.navigate(['/listar-peliculas']) 
              })
            }
          }
        })
    
           
  }

}
