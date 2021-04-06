import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../service/auth.guard'

export const DASHBOARD_ROUTES: Routes = [
 	{
        path: '',
        loadChildren: () => import('../dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
		canActivate: [AuthGuard]

    },
]
