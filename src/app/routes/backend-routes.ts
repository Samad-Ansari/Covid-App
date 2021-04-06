import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';


export const BACKEND_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../admin/admin-routing.module').then(m => m.AdminRoutingModule)
    },
]
