import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo:"/empresa",
        pathMatch:"full"
    },
    {
        path: "empresa",
        title: "Registrar Empresa",
        loadComponent: () => import("../app/components/empresa-form/empresa-form.component")
    },
    {
        path: "solicitud",
        title: "Registrar Solicitud",
        loadComponent: () => import("../app/components/solicitud-form/solicitud-form.component")
    },
    {
        path: "solicitud/list",
        title: "Solicitudes por empresa",
        loadComponent: () => import("../app/components/listar-solicitudes/listar-solicitudes.component")
    }
];
