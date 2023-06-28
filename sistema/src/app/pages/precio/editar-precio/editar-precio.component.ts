import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Precio } from 'src/app/models/precio';
import { PrecioService } from 'src/app/services/precio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-precio',
  templateUrl: './editar-precio.component.html',
  styleUrls: ['./editar-precio.component.css']
})
export class EditarPrecioComponent implements OnInit {
  precioForm: FormGroup;
  id: string | null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private precioService: PrecioService) {
    this.precioForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      tipo: ['', Validators.required],
      valor: ['', Validators.required],
     
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.precioService.viewPrecio(this.id).subscribe(data => {
        this.precioForm.patchValue(data);
      });
    }
  }

  actualizarPrecio() {
    const PRECIO: Precio = {
      codigo: this.precioForm.get('codigo')?.value,
      tipo: this.precioForm.get('tipo')?.value,
      valor: this.precioForm.get('valor')?.value,
    
    };
    console.log(PRECIO);

    Swal.fire({
      title: 'Actualización de Precio',
      text: "¿Desea actualizar el precio?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.precioService.actualizarPrecio(this.id, PRECIO).subscribe(data => {
            console.log(PRECIO);
            this.router.navigate(['/listar-precio']);
          });
        }
      }
    });
  }
}
