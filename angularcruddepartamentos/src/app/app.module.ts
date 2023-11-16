import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { ServiceDepartamentos } from 'src/services/service.departamentos';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent,
    EditardepartamentoComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider, ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
