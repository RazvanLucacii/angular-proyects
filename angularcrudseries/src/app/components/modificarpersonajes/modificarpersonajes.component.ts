import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.series';
import { Serie } from 'src/app/models/serie';
import { Personaje } from 'src/app/models/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarpersonajes',
  templateUrl: './modificarpersonajes.component.html',
  styleUrls: ['./modificarpersonajes.component.css']
})
export class ModificarpersonajesComponent {
  @ViewChild("cajaidserie") cajaIdSerieRef!: ElementRef;
  @ViewChild("cajaidserie") cajaIdPersoRef!: ElementRef;
  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;

  constructor(private _serviceSeries: ServiceSeries,
    private _router: Router
    ){}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
    })

    this._serviceSeries.getPersonajes().subscribe(response => {
      this.personajes = response;
    })
  }

  modificarSeries(): void{
    var idP = parseInt(this.cajaIdPersoRef.nativeElement.value);
    var idS = parseInt(this.cajaIdSerieRef.nativeElement.value);
    this._serviceSeries.update(idP, idS).subscribe(response =>{
      console.log(response)
      this._router.navigate(["/"]);
    })
  }
}
