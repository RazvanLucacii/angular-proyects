import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceLogin } from './services/service.login';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ServiceAlumnos } from './services/service.alumnos';
import { InsertaralumnoComponent } from './components/insertaralumno/insertaralumno.component';
import { EditaralumnoComponent } from './components/editaralumno/editaralumno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    AlumnosComponent,
    InsertaralumnoComponent,
    EditaralumnoComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule,
    
  ],
  providers: [appRoutingProvider, ServiceLogin, ServiceAlumnos],
  bootstrap: [AppComponent]
})
export class AppModule { }
