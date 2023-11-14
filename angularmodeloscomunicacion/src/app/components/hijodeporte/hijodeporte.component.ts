import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent {
  @Input() sport!: string;

  //debemos declarar el metodo que recibimos desde el parent
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = 
    new EventEmitter();

  //creamos un evento en el component hijo para poder realizar
  //la llamada en el component padre
  seleccionarFavoritoHijo(): void{
    //este metodo llamara al padre
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
