import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeporte',
  templateUrl: './padredeporte.component.html',
  styleUrls: ['./padredeporte.component.css']
})
export class PadredeporteComponent {
  public deportes: Array<string>;
  public mensaje!: string;

  //tendremos un metodo para recibir datos desde el hijo
  seleccionarFavoritoPadre( event: any): void{
    this.mensaje = "Has seleccionado " + event;
  }

  constructor(){
    this.deportes = [
      "Petanca", "Futibol", "Tenis", "Baloncesto", "Surf", "Padel"
    ]
  }
}
