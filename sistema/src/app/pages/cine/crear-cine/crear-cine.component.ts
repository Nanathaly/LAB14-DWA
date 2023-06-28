import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCinesComponent implements OnInit {

  cineForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _cineService: CineService) {
    this.cineForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  agregarCine() {
    const CINE: Cine = {
      codigo: this.cineForm.get('codigo')?.value,
      nombre: this.cineForm.get('nombre')?.value,
      direccion: this.cineForm.get('direccion')?.value,
      telefono: this.cineForm.get('telefono')?.value,
    }

    Swal.fire({
      title: 'Creacion de Cine',
      text: "¿Desea crear el cine?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._cineService.guardarCine(CINE).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-cine'])
        }) 
      }
    })
  }
}

