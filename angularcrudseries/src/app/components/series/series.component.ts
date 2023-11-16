import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.series';
import { Params, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  public series!: Array<Serie>;
  public serie!: Serie;

  constructor(
    private _serviceSerie: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros) =>{      
      var id : string= parametros['id'];
      this._serviceSerie.getSerie(id).subscribe((response : Serie) => {
        console.log(response)
        this.serie = response;
      })
    })
  }
}
