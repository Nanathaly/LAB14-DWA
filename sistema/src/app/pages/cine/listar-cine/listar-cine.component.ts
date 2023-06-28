import { Component } from '@angular/core';
import { CineService } from 'src/app/services/cine.service'; // Replace 'path-to-your-vuelo-service' with the actual path to your VueloService
import { Cine } from 'src/app/models/cine';

@Component({
  selector: 'app-listar-cine',
  templateUrl: './listar-cine.component.html',
  styleUrls: ['./listar-cine.component.css']
})
export class ListarCineComponent {
  listCines: any[] = []; // Assuming listVuelos is an array of vuelos

  constructor(private cineService: CineService) {}

  ngOnInit() {
    this.loadCines();
  }

  loadCines() {
    this.cineService.getCines().subscribe(
      (response: any) => {
        this.listCines = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarCine(id: string) {
    this.cineService.deleteCine(id).subscribe(
      (response: any) => {
     
        this.loadCines();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


}
