import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/services/service.departamentos';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent {
  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef!: ElementRef;
  
  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router
  ) {}

  insertarDepartamento(): void {
    var num = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var loc = this.cajaLocalidadRef.nativeElement.value;
    var newDept = new Departamento(num, nom, loc);
    this._serviceDepartamentos.create(newDept).subscribe(response =>{
      this._router.navigate(["/"]);
    })
  }

  
}
