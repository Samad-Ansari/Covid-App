import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  	AdminContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: []
})
export class dashboardModule { }
