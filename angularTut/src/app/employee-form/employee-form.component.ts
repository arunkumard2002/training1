import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeDetail, EmployeePayload } from 'employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() employeeFormDate:any;
  @Output() employeeFormSuccess: EventEmitter<any> = new EventEmitter();
  public employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private empService: EmployeeService) {
    this.employeeForm = this.fb.group({
      employeeId: new FormControl(''),
      employeeName: new FormControl('', [Validators.required]),
      employeeAge: new FormControl('', [Validators.required]),
      employeeSalary: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  submitForm(event: any) {
    debugger;
    console.log(event);
    console.log(this.employeeForm.value);
    let savePayLoad: EmployeePayload = {
      name: this.employeeForm.value.employeeName,
      age: this.employeeForm.value.employeeAge,
      salary: this.employeeForm.value.employeeSalary,
    };
    this.empService.saveEmployeeRecord(savePayLoad).subscribe({
      next: (response) => {
        debugger;
        this.employeeFormSuccess.emit(response);
      },
      error: (error) => {
        debugger;
        console.log(error);
      },
      complete: () => {},
    });
  }
  resetForm() {
    this.employeeForm.reset();
  }

  editEmployee(empDetail: EmployeeDetail) {
    this.employeeForm.setValue({
      employeeId: empDetail.id,
      employeeName: empDetail.employee_name,
      employeeAge: empDetail.employee_age,
      employeeSalary: empDetail.employee_salary,
    })
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
  
}
