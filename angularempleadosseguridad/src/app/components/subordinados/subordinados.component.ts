import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleados';
import { ServiceLogin } from 'src/app/services/service.empleados';
import { EmpleadoService } from 'src/app/services/service.subordinado';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrls: ['./subordinados.component.css']
})
export class SubordinadosComponent {
  subordinados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.obtenerSubordinados().subscribe((response) => {
        console.log()
        this.subordinados = response;
      },
    );
  }

  
}
