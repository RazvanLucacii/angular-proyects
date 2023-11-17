import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-insertarpersonaje',
  templateUrl: './insertarpersonaje.component.html',
  styleUrls: ['./insertarpersonaje.component.css']
})
export class InsertarpersonajeComponent {
  @ViewChild("cajaidperso") cajaIdPersoRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("cajaidserie") cajaIdSerieRef!: ElementRef;
  public series!: Array<Serie>;

  constructor(
    private _serviceSeries: ServiceSeries,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
    })
  }

  insertarPersonaje(): void {
    var idP = parseInt(this.cajaIdPersoRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var idS = parseInt(this.cajaIdSerieRef.nativeElement.value);
    var newPers = new Personaje(idP ,nom, img, idS);
    this._serviceSeries.create(newPers).subscribe(response =>{
      console.log(response)
      this._router.navigate(["/"]);
    })
  }
}
