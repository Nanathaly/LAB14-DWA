import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-cines',
  templateUrl: './crear-cines.component.html',
  styleUrls: ['./crear-cines.component.css']
})
export class CrearCinesComponent {

  cineForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _cineService: CineService){
    this.cineForm = this.fb.group({
        nombre:  ['', Validators.required],
        calle: ['', Validators.required],
        numero: ['', Validators.required],
        telefono:    ['', Validators.required]
    })
  }

  agregarCine(){

    const CINE: Cine = {
      nombre: this.cineForm.get('nombre')?.value,
      calle: this.cineForm.get('calle')?.value,
      numero: this.cineForm.get('numero')?.value,
      telefono: this.cineForm.get('telefono')?.value,
    }

    console.log(CINE)

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
          this.router.navigate(['/listar-cines'])
        }) 
      }
    })


  }

    //console.log(this.cineForm)


}
