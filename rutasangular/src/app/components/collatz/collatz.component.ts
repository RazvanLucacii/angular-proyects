import { Component, OnInit } from '@angular/core';
//necesitamos una serie de clases para recuperar los parametros de la
//ruta
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit{
  public numero!: number;
  public resultado!: Array<number>;

  //este es el objeto que viene inyectado desde module
  constructor(private _activeRoute: ActivatedRoute, private _router: Router){
  }

  goToHome(): void{
    this._router.navigate(["/"]);
  }

  redirect(): void{
    var aleatorio = parseInt(String((Math.random() * 100) + 1));
    this._router.navigate(["/collatz", aleatorio]);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe( (parametros: Params) => {
      this.resultado = [];
      if (parametros["numero"] != null){
        this.numero = parseInt(parametros['numero']);
        this.TeoremaCollatz();
      }
    });
  }

  TeoremaCollatz(){          
      while(this.numero != 1){
        if(this.numero % 2 == 0){
            this.numero = this.numero / 2;
        }else{
            this.numero = (this.numero * 3) + 1;
        }
      this.resultado.push(this.numero);
    }
    
  }
}
