import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { RootService } from '../../Services/root.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private rootservice: RootService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    console.log("Email ID"+this.loginForm.value.email)
    this.rootservice.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((response: any) => {

      console.log(response);
      localStorage.setItem('token', response.token);
      
      console.log("Token stored" + localStorage.getItem("token"));

      this.router.navigate(['/keepnotes']);
    },
      error => {
        console.log("Response From post data is", error);
      }



    )
  }
}
