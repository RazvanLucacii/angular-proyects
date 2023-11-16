import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceSeries } from './services/service.series';
import { MenuComponent } from './components/menu/menu.component';
import { ModificarpersonajesComponent } from './components/modificarpersonajes/modificarpersonajes.component';
import { InsertarpersonajeComponent } from './components/insertarpersonaje/insertarpersonaje.component';
import { SeriesComponent } from './components/series/series.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ModificarpersonajesComponent,
    InsertarpersonajeComponent,
    SeriesComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
