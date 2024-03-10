import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { UsersComponent } from './dashboard/user-management/users/users.component';
import { UsersLocationsComponent } from './dashboard/user-management/users-locations/users-locations.component';
import { RegisteredUsersComponent } from './dashboard/user-management/registered-users/registered-users.component';
import { DemographyComponent } from './dashboard/user-management/demography/demography.component';
import { AgChartsAngular } from 'ag-charts-angular';
import { AmountFormatPipe } from './pipes/amount-format.pipe';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    UserManagementComponent,
    UsersComponent,
    UsersLocationsComponent,
    RegisteredUsersComponent,
    DemographyComponent,
    AmountFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgChartsAngular,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
