import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { SeriesComponent } from "./components/series/series.component";
import { InsertarpersonajeComponent } from "./components/insertarpersonaje/insertarpersonaje.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";



const appRoutes : Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "insertar", component: InsertarpersonajeComponent
    },
    {
        path: "series/:id", component: SeriesComponent
    },
    {
        path: "personajes/:id", component: PersonajesComponent
    },
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);