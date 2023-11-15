import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders} from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { CochesapiComponent } from "./components/cochesapi/cochesapi.component";
import { PlantillasapiComponent } from "./components/plantillasapi/plantillasapi.component";

const appRoutes : Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "comics", component: LibreriaComponent
    },
    {
        path: "personas", component: PersonasapiComponent
    },
    {
        path: "coches", component: CochesapiComponent
    },
    {
        path: "plantillas", component: PlantillasapiComponent
    },
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
