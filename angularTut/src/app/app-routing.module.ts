import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageaccessGuard } from './shared/guards/pageaccess.guard';
import { RestrcitedComponent } from './restrcited/restrcited.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [PageaccessGuard],
  },
  {
    path: 'employee/:id',
    component: EmployeeComponent,
    canActivate: [PageaccessGuard],
  },
  { path: 'restricted', component: RestrcitedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
