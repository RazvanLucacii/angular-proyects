import { Component } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrls: ['./padrecoches.component.css']
})
export class PadrecochesComponent {
  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 25, false),
      new Coche("Volkswagen", "Escarabajo", 0, 7, false),
      new Coche("Lamborghini", "Diablo", 0, 30, false)
    ]
  }
}
