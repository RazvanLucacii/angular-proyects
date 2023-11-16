import { Component } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.series';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  public personajes!: Array<Personaje>;
  public series!: Array<Serie>;
  public personaje!: Personaje;

  constructor(
    private _servicePersonaje: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._servicePersonaje.getPersonajes().subscribe(response => {
      this.personajes = response;
    })
  }
}
