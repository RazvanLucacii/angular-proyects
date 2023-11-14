import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-hijocomic',
  templateUrl: './hijocomic.component.html',
  styleUrls: ['./hijocomic.component.css']
})
export class HijocomicComponent {
  @Input() comic!: Comic;
  @Input() index!: number;

  //debemos declarar el metodo que recibimos desde el parent
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();
  @Output() eliminarPadre: EventEmitter<any> = new EventEmitter();
  @Output() modificarPadre: EventEmitter<any> = new EventEmitter();

  //creamos un evento en el component hijo para poder realizar
  //la llamada en el component padre
  seleccionarFavoritoHijo(): void{
    //este metodo llamara al padre
    this.seleccionarFavoritoPadre.emit(this.comic);
  }
  eliminarHijo(): void{
    //este metodo llamara al padre
    this.eliminarPadre.emit(this.comic);
  }
  modificarHijo(): void{
    //este metodo llamara al padre
    this.modificarPadre.emit(this.index);
  }
}
