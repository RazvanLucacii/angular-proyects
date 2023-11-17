import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceLogin } from './services/service.empleados';
import { MenuComponent } from './components/menu/menu.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';
import { PerfilempleadoComponent } from './components/perfilempleado/perfilempleado.component';
import { AuthDataService } from './services/service.auth-data';
import { EmpleadoService } from './services/service.subordinado';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    SubordinadosComponent,
    PerfilempleadoComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider, ServiceLogin, AuthDataService, EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
