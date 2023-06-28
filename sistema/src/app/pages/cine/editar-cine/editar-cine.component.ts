import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCinesComponent implements OnInit {
  cineForm: FormGroup;
  id: string | null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cineService: CineService) {
    this.cineForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
     
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.cineService.viewCine(this.id).subscribe(data => {
        this.cineForm.patchValue(data);
      });
    }
  }

  actualizarCine() {
    const CINE: Cine = {
      codigo: this.cineForm.get('codigo')?.value,
      nombre: this.cineForm.get('nombre')?.value,
      direccion: this.cineForm.get('direccion')?.value,
      telefono: this.cineForm.get('telefono')?.value,
    
    };
    console.log(CINE);

    Swal.fire({
      title: 'Actualización de Cine',
      text: "¿Desea actualizar el Cine?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.cineService.actualizarCine(this.id, CINE).subscribe(data => {
            console.log(CINE);
            this.router.navigate(['/listar-cine']);
          });
        }
      }
    });
  }
}
