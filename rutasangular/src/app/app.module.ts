import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { MenuComponent } from './components/menu/menu.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NumerodobleComponent,
    CollatzComponent,
    MenucollatzComponent
  ],
  imports: [
    BrowserModule, routing, NgbModule
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
