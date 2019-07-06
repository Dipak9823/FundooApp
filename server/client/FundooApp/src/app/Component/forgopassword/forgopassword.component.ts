import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { RootService} from '../../root.service';
@Component({
  selector: 'app-forgopassword',
  templateUrl: './forgopassword.component.html',
  styleUrls: ['./forgopassword.component.css']
})
export class ForgopasswordComponent implements OnInit {
  forgotpassword: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private rootservice:RootService
  ) { 
   
  }

  ngOnInit() {
    this.forgotpassword=this.formBuilder.group({
      email:['',Validators.required]
    })
    console.log(this.forgotpassword.value);
  }

  onSubmit(){
    this.rootservice.forgotpassword(this.forgotpassword.value.email).subscribe(
      Response=>{
        console.log("The response provided by server is :-",Response);
      },
      error=>{
        console.log("Error Record In Sending Mail:",error);  
      }

    )
  }

}
