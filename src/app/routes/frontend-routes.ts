import { Routes } from '@angular/router';

export const FRONTEND_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../cms/home/home-routing.module').then(m => m.HomeRoutingModule)
    },

]