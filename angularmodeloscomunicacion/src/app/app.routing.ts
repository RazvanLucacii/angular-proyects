import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { HomeComponent } from "./components/home/home.component";
import { PadrecochesComponent } from "./components/padrecoches/padrecoches.component";
import { DetalleproductoComponent } from "./components/detalleproducto/detalleproducto.component";
import { PadredeporteComponent } from "./components/padredeporte/padredeporte.component";
import { PadrecomicComponent } from "./components/padrecomic/padrecomic.component";
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "productos", component: ListaproductosComponent}, 
    {path: "detalleproducto/:nombre/:imagen/:precio", component: DetalleproductoComponent},
    {path: "coches", component: PadrecochesComponent},
    {path: "deportes", component: PadredeporteComponent},
    {path: "comics", component: PadrecomicComponent},

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
