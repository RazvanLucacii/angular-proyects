import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuarioRef!: ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!: ElementRef;

  constructor(
    private _serviceLogin: ServiceLogin,
  ){}

  login(): void{
    var usuario = this.cajaUsuarioRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;
    var login = new Login(usuario, password);
    this._serviceLogin.getLogin(login).subscribe(response =>{
      this._serviceLogin.setToken(response.response);
      console.log(response.response);
    })
  }
}
