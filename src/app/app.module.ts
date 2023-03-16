import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './desgin/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './module/login/login.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSidebarComponent } from './layout/menu-sidebar/menu-sidebar.component';
import { MenuNavbarComponent } from './layout/menu-navbar/menu-navbar.component';
import { AddEmployeeComponent } from './module/employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './module/employees/employee-list/employee-list.component';
import { LeaveRequestComponent } from './module/request/leave-request/leave-request.component';
import { OvertimeRequestComponent } from './module/request/overtime-request/overtime-request.component';
import { TimecorrectionRequestComponent } from './module/request/timecorrection-request/timecorrection-request.component';
import { ChangeshiftRequestComponent } from './module/request/changeshift-request/changeshift-request.component';
import { RequestListComponent } from './module/request/request-list/request-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuSidebarComponent,
    MenuNavbarComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    LeaveRequestComponent,
    OvertimeRequestComponent,
    TimecorrectionRequestComponent,
    ChangeshiftRequestComponent,
    RequestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
