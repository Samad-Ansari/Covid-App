import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './cms/home/home.component';
import { FeedsComponent } from './cms/feeds/feeds.component';
import { ContactComponent } from './shared/contact/contact.component';
import { DonateComponent } from './cms/donate/donate.component';
import { CardsComponent } from './shared/cards/cards.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FrontendComponent } from './layouts/frontend/frontend.component';
import { BackendComponent } from './layouts/backend/backend.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { FeedsListComponent } from './shared/feeds-list/feeds-list.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminFeedsDetailComponent } from './shared/admin-feeds-detail/admin-feeds-detail.component';

import { FeedsService } from './service/feeds.service';
import { CoronaDataService } from './service/corona-data.service';
import { TabsDataService } from './service/tabs-data.service';
import { AdminFeedsComponent } from './shared/admin-feeds/admin-feeds.component';
import { AdminContactComponent } from './dashboard/admin-contact/admin-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedsComponent,
    ContactComponent,
    DonateComponent,
    CardsComponent,
    DataTableComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FrontendComponent,
    BackendComponent,
    JumbotronComponent,
    FeedsListComponent,
    TabsComponent,
    SidebarComponent,
    DashboardComponent,
    AuthComponent,
    AdminFeedsDetailComponent,
    AdminFeedsComponent,
    AdminContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ CoronaDataService, TabsDataService, FeedsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
