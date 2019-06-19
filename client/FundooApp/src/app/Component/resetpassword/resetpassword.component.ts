import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { RootService} from '../../root.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private rootservice: RootService
  ) { }

  ngOnInit() {
    this.resetpassword=this.formBuilder.group({
      password: ['',Validators.required],
      cpassword:['',Validators.required]
    })
    console.log("ngOnit",this.resetpassword.value);
  }
  isValid(){
    if(this.resetpassword.value.password===this.resetpassword.value.cpassword) {
       return true;
    }
    else {
      return false;
    }

  }

  onSubmit(){
    if(!this.isValid()) {
      console.log("Password and Confirm password does not match");
    }
    else {
      this.rootservice.resetpassword(this.resetpassword.value.password).subscribe((response)=>
       response=>{
        console.log("Password Reset Successfully",response);
       },
       error=>{
        console.log("Error in password reset",error);
       }

      )
    }

  }

}
