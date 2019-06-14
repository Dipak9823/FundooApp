import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  onSubmit():void {
    console.log(this.loginForm.controls.email.value);
    console.log(this.loginForm.get('password').value);
  }
}