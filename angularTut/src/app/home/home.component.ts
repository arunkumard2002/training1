import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';
  public userModel: User = new User();
  constructor(){}
  ngOnInit(): void {
    debugger;
    console.log(this.userModel);
  }
  submitForm(event: any) {
    debugger;
    console.log(event);
    console.log(this.userModel);
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