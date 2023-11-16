import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { SeriesComponent } from "./components/series/series.component";



const appRoutes : Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "insertar", component: HomeComponent
    },
    {
        path: "series/:id", component: SeriesComponent
    },
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);