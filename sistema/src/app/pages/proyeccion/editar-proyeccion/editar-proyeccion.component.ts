import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyeccion } from 'src/app/models/proyeccion';
import { ProyeccionService } from 'src/app/services/proyeccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyeccion',
  templateUrl: './editar-proyeccion.component.html',
  styleUrls: ['./editar-proyeccion.component.css']
})
export class EditarProyeccionComponent implements OnInit {
  proyeccionForm: FormGroup;
  id: string | null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private proyeccionService: ProyeccionService) {
    this.proyeccionForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      horarioPase: ['', Validators.required],
      pelicula: ['', Validators.required],
      genero: ['', Validators.required],
      clasificacion: ['', Validators.required],
      cine: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required]
     
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.proyeccionService.viewProyeccion(this.id).subscribe(data => {
        this.proyeccionForm.patchValue(data);
      });
    }
  }

  actualizarProyeccion() {
    const PROYECCION: Proyeccion = {
      codigo: this.proyeccionForm.get('codigo')?.value,
      horarioPase: this.proyeccionForm.get('horarioPase')?.value,
      pelicula: this.proyeccionForm.get('pelicula')?.value,
      genero: this.proyeccionForm.get('genero')?.value,
      clasificacion: this.proyeccionForm.get('clasificacion')?.value,
      cine: this.proyeccionForm.get('cine')?.value,
      direccion: this.proyeccionForm.get('direccion')?.value,
      precio: this.proyeccionForm.get('nombre')?.value,
    
    };
    console.log(PROYECCION);

    Swal.fire({
      title: 'Actualización de proyeccion',
      text: "¿Desea actualizar la proyeccion?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.proyeccionService.actualizarProyeccion(this.id, PROYECCION).subscribe(data => {
            console.log(PROYECCION);
            this.router.navigate(['/listar-proyeccion']);
          });
        }
      }
    });
  }
}

