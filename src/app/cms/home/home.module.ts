import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { FeedsComponent } from '../feeds/feeds.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { DonateComponent } from '../donate/donate.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeedsComponent,
    ContactComponent,
    DonateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
