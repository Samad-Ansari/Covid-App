import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './cms/home/home.component';
import { CardsComponent } from './shared/cards/cards.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FRONTEND_ROUTES } from './routes/frontend-routes';
import { FrontendComponent } from './layouts/frontend/frontend.component';
import { BackendComponent } from './layouts/backend/backend.component';
import { BACKEND_ROUTES } from './routes/backend-routes';
import { DASHBOARD_ROUTES } from './routes/dashboard-routes';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
	{
		path: '', component: FrontendComponent, children: FRONTEND_ROUTES
	},
	{
		path: 'administration', component: BackendComponent, children: BACKEND_ROUTES
	},
	{
		path: 'admin-dashboard', component: AuthComponent, children: DASHBOARD_ROUTES
	},	
	{
		path: '**', component: PageNotFoundComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
