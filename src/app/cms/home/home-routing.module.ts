import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedsComponent } from '../feeds/feeds.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { DonateComponent } from '../donate/donate.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'feeds', component: FeedsComponent,
	},
	{
		path: 'donate', component: DonateComponent,
	}, 
	{
		path: 'contact', component: ContactComponent, 
	},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
