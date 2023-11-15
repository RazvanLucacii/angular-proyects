import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { ServicePersonas } from 'src/app/services/service.personas';


@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
  public personas!: Array<Persona>;


  constructor(private _servicePerosnas: ServicePersonas) {}
  
  ngOnInit(): void {
    this._servicePerosnas.getPersonasPromesa().then(response => {
      this.personas = response;
    })
    // this._servicePerosnas.getPersonas().subscribe(response =>{
    //   this.personas = response;
    // })
  }
}
