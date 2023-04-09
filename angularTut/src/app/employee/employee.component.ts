import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeDetail } from 'employee';
import { User } from '../home/home.component';
import { EmployeeService } from '../shared/employee.service';
import { BehaviorSubject, Subject, Subscription, filter, interval, map, take, takeUntil, tap } from 'rxjs';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('appEmp') appEmp!: EmployeeFormComponent;
  public userEmail: string = '';
  userPassword: string = '';
  public userModel: User = new User();

  public myDate: Date = new Date();
  public employeeList: EmployeeDetail[] = [];
  public employeeError: string = '';
  public errorFlag: boolean = false;

  public empServiceSub: Subscription = new Subscription;

  public $destory = new Subject()

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeList('');
    interval(1000).subscribe((timer) => {
      this.myDate = new Date();
    });
  }

  ngAfterViewInit() {
    debugger;
    console.log(this.appEmp);
  }

  fieldIsFocused(event: any) {
    debugger;
    console.log(event);
  }

  createEmployee() {
    // this.empService.saveEmployeeRecord()
  }

  clearForm() {
    debugger;
    this.appEmp.resetForm();
  }

  getEmployeeList(successResponse: any) {
    debugger;
    console.log(successResponse);
    this.empServiceSub = this.empService
      .getEmployeeList()
      .pipe(takeUntil(this.$destory))
      .pipe(map((employeeResponse) => {
        debugger;
        console.log(employeeResponse.message)
        return employeeResponse.data;
      }))
      .subscribe({
        next: (response: any) => {
          debugger;
          this.employeeList = response;
          this.employeeError = '';
          this.errorFlag = false;
        },
        error: (errorResponse) => {
          debugger;
          this.errorFlag = true;
          this.employeeError = errorResponse.error.message;
        },
        complete() {},
      });
  }

  editEmployee(empDetail: EmployeeDetail) {
    debugger;
    console.log(empDetail);
  }

  ngOnDestroy(): void {
    debugger;
    this.$destory.next(true);
    this.empServiceSub.unsubscribe();
  }
  
}
