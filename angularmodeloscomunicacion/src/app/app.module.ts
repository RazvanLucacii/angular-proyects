import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {routing, appRoutingProviders} from './app.routing';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { PadredeporteComponent } from './components/padredeporte/padredeporte.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { PadrecomicComponent } from './components/padrecomic/padrecomic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    HomeComponent,
    MenuComponent,
    DetalleproductoComponent,
    HijococheComponent,
    PadrecochesComponent,
    HijodeporteComponent,
    PadredeporteComponent,
    HijocomicComponent,
    PadrecomicComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
