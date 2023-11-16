import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/services/service.departamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  public departamentos!: Array<Departamento>;
  constructor(private _serviceDepartamentos: ServiceDepartamentos) {}
  ngOnInit(): void {
    this._serviceDepartamentos.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    })
  }
  deleteDepartamento(id: number): void {
    this._serviceDepartamentos.delete(id.toString()).subscribe(response => {
      this.loadDepartamentos();
    })
  }
  loadDepartamentos(): void {
    this._serviceDepartamentos.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    })
  }
}