import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AlumnosComponent } from "./components/alumnos/alumnos.component";
import { InsertaralumnoComponent } from "./components/insertaralumno/insertaralumno.component";
import { EditaralumnoComponent } from "./components/editaralumno/editaralumno.component";


const appRoutes : Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "alumnos", component: AlumnosComponent
    },
    {
        path: "insertar", component: InsertaralumnoComponent
    },
    { 
        path: "alumnos/edit", component: EditaralumnoComponent
    },
    
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);