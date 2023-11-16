import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";

const appRoutes : Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "insertar", component: InsertardepartamentoComponent
    },
    { 
        path: "edit/:id/:nombre/:localidad", component: EditardepartamentoComponent
    },
    {
        path: "delete/:id", component: HomeComponent
    }
    
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);