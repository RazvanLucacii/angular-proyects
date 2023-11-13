import { Component } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent {
  constructor(private _activeRoute: ActivatedRoute, private _router: Router){
  }
  redirect(): void{
    
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe( (parametros: Params) => {
      
      
    });
  }
}
