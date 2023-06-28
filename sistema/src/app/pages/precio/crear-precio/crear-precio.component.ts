import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Precio } from 'src/app/models/precio';
import { PrecioService } from 'src/app/services/precio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-precio',
  templateUrl: './crear-precio.component.html',
  styleUrls: ['./crear-precio.component.css']
})
export class CrearPrecioComponent implements OnInit {
  precioForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private precioService: PrecioService) {
    this.precioForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      // Agrega aquí los demás campos del formulario si los tienes
    });
  }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  agregarPrecio() {
    const precio: Precio = {
      codigo: this.precioForm.get('codigo')?.value,
      tipo: this.precioForm.get('tipo')?.value,
      valor: this.precioForm.get('valor')?.value,
    };

    Swal.fire({
      title: 'Creación de Precio',
      text: '¿Desea crear el precio?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.precioService.guardarPrecio(precio).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-precio']);
        });
      }
    });
  }
}
