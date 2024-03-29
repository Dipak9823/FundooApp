import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { RootService} from '../../Services/root.service';
import { User} from '../../model/usermodel'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  u : User;
  errorMsg='';
  registerForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private rootservice:RootService) { }

  ngOnInit() {
    console.log("Register form")
     this.registerForm=new FormGroup({
       name : new FormGroup  ({
        firstname: new FormControl(''),
         lastname: new FormControl(''),
       }),

       username: new FormControl(''),
       email: new FormControl(''),
       password: new FormControl(''),
       phone_number: new FormControl(''),
       address : new FormGroup({
         street: new FormControl(''),
         city: new FormControl(''),
         state: new FormControl(''),
         zipcode: new FormControl('')
       })
     })
   
    console.log(this.registerForm.value);
  }
  onSubmit():void{

    console.log(this.u)
    this.rootservice.register(this.registerForm.value).subscribe((response)=>
    {
      console.log("Response from post data is",response);
    },(error)=>{
        //console.log('error during post is',error);
        this.errorMsg=error.statustext;
        console.log(this.errorMsg)
    })

    console.log(this.registerForm.value);
  }

}
