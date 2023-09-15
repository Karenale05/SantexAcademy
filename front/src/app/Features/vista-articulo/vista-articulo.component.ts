import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-articulo',
  templateUrl: './vista-articulo.component.html',
  styleUrls: ['./vista-articulo.component.css']
})
export class VistaArticuloComponent implements OnInit {

  // uploadedImages: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // const imagenes = ("front/src/assets")
  }

  nomProd: string = 'Gazebo De Poliéster';
  nomCat: string = 'Categoría: Muebles de exterior';
  nomVen: string = 'Vendedor: Oscar García Lagos';
  desc: string = 'COLORES DISPONIBLES: - BLANCO - DETODOOUTLETARGENTINA Gazebo Plegable 3 x 3 Arma ble con Paredes LISAS (Incluye 3 Laterales) DETOD OOUTLETARG ENTINA'
  precio: string = '$25.550';

  // onFileSelected(event: any): void {
    
  //   //dejar de visualizar las imagenes cuando suba otra
  //   this.uploadedImages = [];
  //   const files = event.target.files;
  //   if (files) {
  //     for (let i = 0; i < files.length; i++) {
  //       const file = files[i];
  //       if (file.type.startsWith('image/')) {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file);

  //         reader.onload = () => {
  //           this.uploadedImages.push(reader.result as string);
  //         };
  //       }
  //     }
  //   }
  // }

  mensajeDias() {
    console.log("se llegó a la función")
    alert("Tanto para envío como para retiro tendrá su producto en un plazo de 2 días");
  }
}