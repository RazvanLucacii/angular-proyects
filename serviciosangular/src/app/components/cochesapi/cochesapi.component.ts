import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';
import { ServiceCoches } from 'src/app/services/service.coches';

@Component({
  selector: 'app-cochesapi',
  templateUrl: './cochesapi.component.html',
  styleUrls: ['./cochesapi.component.css']
})
export class CochesapiComponent implements OnInit {
  public coches!: Array<Coche>;

  constructor(private _servicecoches: ServiceCoches) {}
  
  ngOnInit(): void {
    this._servicecoches.getCochesPromesa().then(response =>{
      this.coches = response;
    })
  }
}
