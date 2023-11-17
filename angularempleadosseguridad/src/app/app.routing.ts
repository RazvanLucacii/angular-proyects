import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SubordinadosComponent } from "./components/subordinados/subordinados.component";

const appRoutes : Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "subordinados", component: SubordinadosComponent
    },

]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);