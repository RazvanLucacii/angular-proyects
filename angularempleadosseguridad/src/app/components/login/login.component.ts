import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleados';
import { Login } from 'src/app/models/login';
import { ServiceLogin } from 'src/app/services/service.empleados';
import { EmpleadoService } from 'src/app/services/service.subordinado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuarioRef!: ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!: ElementRef;
  public empleados!: Array<Empleado>;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _router: Router
  ){}
  

  iniciarUsuario(): void{
    var usuario = this.cajaUsuarioRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;
    var login = new Login(usuario, password);
    this._serviceLogin.getLogin(login).subscribe(response =>{
      var token = response.response;
      console.log(token);
      this._serviceLogin.setToken(response.access_token);
      this._serviceLogin.getEmpleados(token).subscribe(response =>{
        this.empleados = response;
      })
    })
  }
}
