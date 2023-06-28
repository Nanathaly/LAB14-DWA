import { Component, OnInit } from '@angular/core';
import { PrecioService } from 'src/app/services/precio.service';
import { Precio } from 'src/app/models/precio';

@Component({
  selector: 'app-listar-precio',
  templateUrl: './listar-precio.component.html',
  styleUrls: ['./listar-precio.component.css']
})
export class ListarPrecioComponent implements OnInit {
  listPrecios: Precio[] = [];

  constructor(private precioService: PrecioService) {}

  ngOnInit() {
    this.loadPrecios();
  }

  loadPrecios() {
    this.precioService.getPrecios().subscribe(
      (response: Precio[]) => {
        this.listPrecios = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarPrecio(id: string) {
    this.precioService.deletePrecio(id).subscribe(
      (response: any) => {
        this.loadPrecios();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}