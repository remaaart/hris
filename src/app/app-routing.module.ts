import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { LoginComponent } from './module/login/login.component';
import { AddEmployeeComponent } from './module/employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './module/employees/employee-list/employee-list.component';
import { LeaveRequestComponent } from './module/request/leave-request/leave-request.component';
import { OvertimeRequestComponent } from './module/request/overtime-request/overtime-request.component';
import { TimecorrectionRequestComponent } from './module/request/timecorrection-request/timecorrection-request.component';
import { ChangeshiftRequestComponent } from './module/request/changeshift-request/changeshift-request.component';
import { RequestListComponent } from './module/request/request-list/request-list.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'add-employee',component:AddEmployeeComponent},
  {path: 'employee-list',component:EmployeeListComponent},
  {path: 'leave-request',component:LeaveRequestComponent},
  {path: 'overtime-request',component:OvertimeRequestComponent},
  {path: 'timecorrection-request',component:TimecorrectionRequestComponent},
  {path: 'changeshift-request',component:ChangeshiftRequestComponent},
  {path: 'request-list',component:RequestListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
