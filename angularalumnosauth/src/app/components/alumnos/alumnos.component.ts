import { Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  public alumnos!: Array<Alumno>;

  constructor(
    private _serviceAlumnos: ServiceAlumnos,
  ){}

    ngOnInit(): void {
      this.mostrarAlumnos();
    }

  mostrarAlumnos() {
    this._serviceAlumnos.getAlumnos().subscribe(response =>{
      this.alumnos = response;
    })
  }
}
