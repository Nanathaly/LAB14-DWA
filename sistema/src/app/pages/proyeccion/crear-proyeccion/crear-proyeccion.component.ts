import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyeccion } from 'src/app/models/proyeccion';
import { ProyeccionService } from 'src/app/services/proyeccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-proyeccion',
  templateUrl: './crear-proyeccion.component.html',
  styleUrls: ['./crear-proyeccion.component.css']
})
export class CrearProyeccionComponent implements OnInit {

  proyeccionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _proyeccionService: ProyeccionService) {
              this.proyeccionForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      horarioPase: ['', Validators.required],
      pelicula: ['', Validators.required],
      genero: ['', Validators.required],
      clasificacion: ['', Validators.required],
      cine: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required],
      });
  }

  ngOnInit() {
    // Puedes dejar el método ngOnInit() vacío o agregar lógica adicional si es necesario
  }

  agregarProyeccion() {
    // Lógica para agregar un vuelo
    const PROYECCION: Proyeccion = {
      codigo: this.proyeccionForm.get('codigo')?.value,
      horarioPase: this.proyeccionForm.get('horarioPase')?.value,
      pelicula: this.proyeccionForm.get('pelicula')?.value,
      genero: this.proyeccionForm.get('genero')?.value,
      clasificacion: this.proyeccionForm.get('clasificacion')?.value,
      cine: this.proyeccionForm.get('cine')?.value,
      direccion: this.proyeccionForm.get('direccion')?.value,
      precio: this.proyeccionForm.get('precio')?.value,
    }

    Swal.fire({
      title: 'Creación de la proyeccion',
      text: "¿Desea crear la proyeccion?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._proyeccionService.guardarProyeccion(PROYECCION).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-proyeccion'])
        }) 
      }
    })
  }
}

