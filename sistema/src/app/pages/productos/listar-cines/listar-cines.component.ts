import { Component, OnInit } from '@angular/core';
import { Cine } from 'src/app/models/cine';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2'

//Libreria para crear el pdf
import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-cines',
  templateUrl: './listar-cines.component.html',
  styleUrls: ['./listar-cines.component.css']
})
export class ListarCinesComponent implements OnInit{
  
  listCines: Cine[] = [];
  elementos: number = 0;
  
  constructor(private _cineService: CineService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerCines();

  }

  openPdfTables() {
    
      const documentDefinition: any = {
        content: [
          {
            table: {
              
              headerRows: 1,
              widths: ['*', 'auto', 100, '*'],
  
              body: [
                [{ text: 'Nombre', bold: true }, { text: 'Calle', bold: true }, { text: 'Numero', bold: true }, { text: 'Telefono', bold: true }],
                [this.listCines[0].nombre, this.listCines[0].calle, this.listCines[0].numero, this.listCines[0].telefono],
                [this.listCines[1].nombre, this.listCines[1].calle, this.listCines[1].numero, this.listCines[1].telefono],
                [this.listCines[2].nombre, this.listCines[2].calle, this.listCines[2].numero, this.listCines[2].telefono]
              ]

              
            }
          }
        ]
      };
      pdfMake.createPdf(documentDefinition).open();
  }


  obtenerCines(){
    this._cineService.getCines().subscribe(data => {
      console.log(data);
      this.listCines = data;
      this.elementos = this.listCines.length;
    })
  }

  eliminarCine(id: any){
      Swal.fire({
        title: 'Eliminacion de Cine',
        text: "Â¿Desea eliminar el cine?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this._cineService.deleteCine(id).subscribe(data => {
          console.log(data);
          this.obtenerCines();
          this.elementos = this.listCines.length;
        });
      }
    });
  }

}