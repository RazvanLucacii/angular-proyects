import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    DetalleproductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
