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
    this.empleados = [];
    var options = [...this.cajaEmpleadosRef.nativeElement.selectedOptions];
    options.forEach(option => {
      var funcion = option.value;    
      this._serviceplantillas.getFuncionPromesa(funcion).then((response : Array<Empleados>) =>{        
        // response.forEach(empleado => {
        //   this.empleados.push(empleado);
        // });
        this.empleados.push(...response);
        
      })
    });
  }
}
