import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { ColorPipe } from './shared/color.pipe';
import { BgcolorDirective } from './shared/bgcolor.directive';
import { PageaccessGuard } from './shared/guards/pageaccess.guard';
import { RestrcitedComponent } from './restrcited/restrcited.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ColorPipe,
    BgcolorDirective,
    RestrcitedComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, PageaccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
