import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { DashboardComponent } from './dashboard.component';
import { AdminFeedsDetailComponent } from '../shared/admin-feeds-detail/admin-feeds-detail.component';
import { AdminFeedsComponent } from '../shared/admin-feeds/admin-feeds.component';

const routes: Routes = [

	{
		path: '', component: DashboardComponent,
	},
	{
		path: 'admin-feeds', component: AdminFeedsComponent
	},
	{
		path: 'admin-feeds-details', component: AdminFeedsDetailComponent,
	},
	{
		path: 'admin-contact', component: AdminContactComponent, 
	},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
