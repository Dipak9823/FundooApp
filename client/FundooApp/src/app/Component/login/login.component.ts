import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {RootService } from '../../root.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private rootservice: RootService
            ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }  
  onSubmit() {
      this.rootservice.login(this.loginForm.value.email,this.loginForm.value.email).subscribe((response)=>
        data=>{
          console.log("Response from post data is",response);
        },
        error=>{
          console.log("Response From post data is",error);
        }
        


      )
  }
}
