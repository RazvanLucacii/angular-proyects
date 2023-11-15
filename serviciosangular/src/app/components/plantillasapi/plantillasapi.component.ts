import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServicePlantilla } from 'src/app/services/service.plantilla';
import { Empleados } from 'src/app/models/plantilla';

@Component({
  selector: 'app-plantillasapi',
  templateUrl: './plantillasapi.component.html',
  styleUrls: ['./plantillasapi.component.css']
})
export class PlantillasapiComponent {
  @ViewChild("cajaempleados") cajaEmpleadosRef!: ElementRef;
  public empleados!: Array<Empleados>;
  public funciones!: Array<string>;
  
  constructor(private _serviceplantillas: ServicePlantilla) {}
  
  ngOnInit(): void {
    this._serviceplantillas.getPlantillaPromesa().then(response =>{
      this.funciones = response;
    })
  }
  mostrarEmpleados() {
    console.log(this.cajaEmpleadosRef.nativeElement)
    var funcion = this.cajaEmpleadosRef.nativeElement.value;
    this._serviceplantillas.getFuncionPromesa(funcion).then(response =>{
      this.empleados = response;
      console.log(this.empleados);
    })
  }
}
