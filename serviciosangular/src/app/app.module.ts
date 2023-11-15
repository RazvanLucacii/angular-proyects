import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProvider } from './app.routing';
import { ServicePersonas } from './services/service.personas';
import { ServiceCoches } from './services/service.coches';
import { ServicePlantilla } from './services/service.plantilla';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { ServiceComics } from './services/services.comics';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';
import { PlantillasapiComponent } from './components/plantillasapi/plantillasapi.component';


@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    PersonasapiComponent,
    CochesapiComponent,
    PlantillasapiComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule,
  ],
  providers: [appRoutingProvider,ServiceComics, ServicePersonas, ServiceCoches, ServicePlantilla],
  bootstrap: [AppComponent]
})
export class AppModule { }
