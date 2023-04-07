import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeeDetail, EmployeePayload } from 'employee';
import { User } from '../home/home.component';
import { EmployeeService } from '../shared/employee.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  // @ViewChild('signInForm') signInForm: Form | undefined;
  public userEmail: string = '';
  userPassword: string = '';
  public userModel: User = new User();
  public employeeForm: FormGroup;
  public employeeList: EmployeeDetail[] = [];
  public employeeError: string = '';
  public errorFlag: boolean = false;
  public myDate: Date = new Date();

  constructor(private fb: FormBuilder, private empService: EmployeeService) {
    this.employeeForm = this.fb.group({
      employeeId: new FormControl(''),
      employeeName: new FormControl('', [Validators.required]),
      employeeAge: new FormControl('', [Validators.required]),
      employeeSalary: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    debugger;
    console.log(this.userModel);
    let emp: EmployeePayload = {
      name: '',
      salary: '',
      age: '',
    };
    console.log(emp);
    this.getEmployeeList();
    
    interval(1000).subscribe((timer) => {
      this.myDate = new Date();
    })
    // this.cdr.detectChanges();
  }
  submitForm(event: any) {
    debugger;
    console.log(event);
    console.log(this.userModel);
    console.log(this.employeeForm.value);
    let savePayLoad: EmployeePayload = {
      name: this.employeeForm.value.employeeName,
      age: this.employeeForm.value.employeeAge,
      salary: this.employeeForm.value.employeeSalary
    };
    this.empService.saveEmployeeRecord(savePayLoad).subscribe({
      next: (response) => {
        debugger;
        this.getEmployeeList();
      },
      error: () => {},
      complete: () => {}
    });

  }
  resetForm() {
    this.employeeForm.reset();
  }
  ngAfterViewInit() {
    console.log(this.employeeForm);
  }

  setFormData() {
    // this.employeeForm.patchValue({
    //   userEmail: 'karthik@gmail.com',
    //   userPassword: 'karthik@123',
    //   checkMeOut: true
    // })
    this.employeeForm.setValue({
      userEmail: 'karthik@gmail.com',
      userPassword: 'karthik@123',
      checkMeOut: true,
      address: {
        street: '',
        landMark: '',
      },
    });
  }

  fieldIsFocused(event: any) {
    debugger;
    console.log(event);
  }

  createEmployee() {
    // this.empService.saveEmployeeRecord()
  }

  editEmployee(empDetail: EmployeeDetail) {
    this.employeeForm.setValue({
      employeeId: empDetail.id,
      employeeName: empDetail.employee_name,
      employeeAge: empDetail.employee_age,
      employeeSalary: empDetail.employee_salary,
    })
  }

  getEmployeeList() {
    this.empService.getEmployeeList().subscribe({
      next: (employeeResponse) => {
        debugger;
        console.log(employeeResponse);
        this.employeeList = employeeResponse.data;
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
}
