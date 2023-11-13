import { CineComponent } from "./components/cine/cine.component";
import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { Error404Component } from "./components/error404/error404.component";

//necesitamos los siguientes modulos para realizar la declaracion de
//navegacion
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

//definimos un array con nuestras rutas para los components
const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "numerodoble", component: NumerodobleComponent},
    {path: "numerodoble/:numero", component: NumerodobleComponent},
    {path: "collatz", component: CollatzComponent},
    {path: "collatz/:numero", component: CollatzComponent},
    {path: "cine", component: CineComponent},
    {path: "musica", component: MusicaComponent},
    {path: "**", component: Error404Component}
]

//desde routing debemos exportar dos caracteristicas para implementarlas
//dentro del module. El proveedor de rutas
export const appRoutingProvider: any[] = [];
//el modulo routing indicando el array de rutas declarado
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);