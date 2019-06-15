import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      name : new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl()
      }),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      pnumber: new FormControl(),
      address : new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zipcode: new FormControl()
      })
    })
  }
  onSubmit():void{
    console.log(this.registerForm.value);
  }

}
