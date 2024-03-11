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
import { BookingsComponent } from './dashboard/bookings/bookings.component';
import { ActiveEntitiesComponent } from './dashboard/bookings/active-entities/active-entities.component';
import { TopBookingsComponent } from './dashboard/bookings/top-bookings/top-bookings.component';
import { TopSportsComponent } from './dashboard/bookings/top-sports/top-sports.component';
import { TopSportsPlacesComponent } from './dashboard/bookings/top-sports-places/top-sports-places.component';
import { TopProsComponent } from './dashboard/bookings/top-pros/top-pros.component';
import { BookingsOverPeriodsComponent } from './dashboard/bookings/bookings-over-periods/bookings-over-periods.component';
import { FinancesComponent } from './dashboard/finances/finances.component';
import { TopIncomeComponent } from './dashboard/finances/top-income/top-income.component';
import { RevenueAndExpencesComponent } from './dashboard/finances/revenue-and-expences/revenue-and-expences.component';
import { DonationsComponent } from './dashboard/finances/donations/donations.component';
import { CashflowComponent } from './dashboard/finances/cashflow/cashflow.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TrafficChartComponent } from './dashboard/traffic/traffic-chart/traffic-chart.component';
import { ActiveVisitorsComponent } from './dashboard/traffic/active-visitors/active-visitors.component';
import { TextFilterComponent } from './component/text-filter/text-filter.component';

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
    AmountFormatPipe,
    BookingsComponent,
    ActiveEntitiesComponent,
    TopBookingsComponent,
    TopSportsComponent,
    TopSportsPlacesComponent,
    TopProsComponent,
    BookingsOverPeriodsComponent,
    FinancesComponent,
    TopIncomeComponent,
    RevenueAndExpencesComponent,
    DonationsComponent,
    CashflowComponent,
    TrafficComponent,
    TrafficChartComponent,
    ActiveVisitorsComponent,
    TextFilterComponent
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
