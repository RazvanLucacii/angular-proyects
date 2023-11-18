import { Component, ElementRef, ViewChild } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router, Params, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrl: './editaralumno.component.css'
})
export class EditaralumnoComponent {
  public alumno!: Alumno;
  public alumnos!: Array<Alumno>;
  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaapellidos") cajaApellidosRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("cajaactivo") cajaActivoRef!: ElementRef;
  @ViewChild("cajaidcurso") cajaIdCursoRef!: ElementRef;
  @ViewChild("cajaform") cajaForm!: ElementRef;

  constructor(
    private _serviceAlumnos: ServiceAlumnos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ){}
  
  ngOnInit(id: string): void {
    this.mostrarAlumnos(id);
  }

  updateAlumno(): void{
    var idalum = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var apell = this.cajaApellidosRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var activo = parseInt(this.cajaActivoRef.nativeElement.value);
    var idcurso = parseInt(this.cajaIdCursoRef.nativeElement.value);
    this.alumno.idAlumno = idalum;
    this.alumno.nombre = nom;
    this.alumno.apellidos = apell;
    this.alumno.imagen = img;
    this.alumno.activo = activo;
    this.alumno.idCurso = idcurso;
    this._serviceAlumnos.editarAlumno(this.alumno).subscribe(response =>{
      this._router.navigate(["/alumnos"]);
    })
  }

  mostrarAlumnos(id: string) {
    this._serviceAlumnos.getAlumno(id).then(response =>{
      this.alumno = response;
    })
  }
}
