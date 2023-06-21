import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { Usuario } from 'src/app/models/users';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})

export class EditarCinesComponent implements OnInit {
  cineForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _cineService: CineService){
    this.cineForm = this.fb.group({
        nombre: ['', Validators.required],
        calle: ['', Validators.required],
        numero: ['', Validators.required],
        telefono: ['', Validators.required]
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.validarId()

  }

  validarId(){

    if(this.id !== null){
      this._cineService.viewCine(this.id).subscribe(data => {
        this.cineForm.setValue({
          nombre: data.nombre,
          calle: data.calle,
          numero: data.numero,
          telefono: data.telefono
        })
      })
    }

  }

  editarCine(){
    
    const CINE: Cine = {
      nombre: this.cineForm.get('nombre')?.value,
      calle: this.cineForm.get('calle')?.value,
      numero: this.cineForm.get('numero')?.value,
      telefono: this.cineForm.get('telefono')?.value,
    }

    Swal.fire({
          title: 'Actualizacion de Cine',
          text: "¿Desea actualizar el cine?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._cineService.actualizarCine(this.id, CINE).subscribe(data => {
                  console.log(CINE);
                  this.router.navigate(['/listar-cines']) 
              })
            }
          }
        })
    
           
  }

}
