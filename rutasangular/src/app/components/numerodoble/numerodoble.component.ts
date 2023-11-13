import { Component, OnInit } from '@angular/core';
//necesitamos una serie de clases para recuperar los parametros de la
//ruta
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  //declaramos variables para nuestro dibujo
  public numero!: number;
  public doble!: number;

  //este es el objeto que viene inyectado desde module
  constructor(private _activeRoute: ActivatedRoute, private _router: Router){
  }

  goToHome(): void{
    this._router.navigate(["/"]);
  }

  redirect(num: number): void{
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //en este metodo es donde debemos suscribirnos a la recepcion
    //de los parametros de routing. Se utiliza el objeto ActivatedRoute
    this._activeRoute.params.subscribe( (parametros: Params) => {
      //dentro de Params se recuperan los nombres de parametros
      //con la siguiente sintaxis: parametros['parameter name']
      //nuestro parametro numero es opcional, por lo que vamos 
      //a realizar un if para ver si viene o no en la ruta
      if (parametros["numero"] != null){
        //los parametros siempre son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }

    })
  }
}
