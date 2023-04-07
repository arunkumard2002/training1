import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeePayload } from 'employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('signInForm') signInForm: Form | undefined;
  userEmail: string = '';
  userPassword: string = '';
  public userModel: User = new User();
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.signInForm = this.fb.group({
      userEmail:  new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl(''),
      checkMeOut: new FormControl(false),
      address: new FormGroup({
        street: new FormControl(''),
        landMark: new FormControl('')
      })
    })
  }
 
  ngOnInit(): void {
    debugger;
    console.log(this.userModel);
    console.log(this.signInForm);
    let emp: EmployeePayload = {
      name: '',
      salary: '',
      age: ''
    }
    console.log(emp);
  }
  submitForm(event: any) {
    debugger;
    console.log(event);
    console.log(this.userModel);
    console.log(this.signInForm.value);
  }
  resetForm() {
    this.signInForm.reset();
  }
  ngAfterViewInit(){
    console.log(this.signInForm);
  }

  setFormData() {
    // this.signInForm.patchValue({
    //   userEmail: 'karthik@gmail.com',
    //   userPassword: 'karthik@123',
    //   checkMeOut: true
    // })
    this.signInForm.setValue({
      userEmail: 'karthik@gmail.com',
      userPassword: 'karthik@123',
      checkMeOut: true,
      address: {
        street: '',
        landMark: ''
      }
    })
  }

  fieldIsFocused(event:any) {
    debugger;
    console.log(event);
  }
}


export class User {
  public name: string = '';
  public email: string = '';
  public username: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public checkMeOut: boolean = false;
}