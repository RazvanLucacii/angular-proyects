import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Alumno } from '../../models/alumno';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertaralumno',
  templateUrl: './insertaralumno.component.html',
  styleUrl: './insertaralumno.component.css'
})
export class InsertaralumnoComponent {
  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaapellidos") cajaApellidosRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("cajaactivo") cajaActivoRef!: ElementRef;
  @ViewChild("cajaidcurso") cajaIdCursoRef!: ElementRef;
  public login!: Login;

  constructor(
    private _serviceAlumnos: ServiceAlumnos,
    private _router: Router
  ){}

  insertarAlumno(){
    var idalum = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var apell = this.cajaApellidosRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var activo = parseInt(this.cajaActivoRef.nativeElement.value);
    var idcurso = parseInt(this.cajaIdCursoRef.nativeElement.value);
    var newAlumn = new Alumno(idalum, nom, apell, img, activo, idcurso);
    this._serviceAlumnos.insertAlumno(newAlumn).subscribe(response =>{
      this._router.navigate(["/alumnos"]);
    })
  }
}
