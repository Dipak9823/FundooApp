import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { RootService } from '../../Services/root.service'
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  label:FormGroup;  
  constructor(private formBuilder:FormBuilder,
              private service: RootService) { }

            
  ngOnInit() {

    this.label=this.formBuilder.group({
      labelname:['']
    });

  }
 onSubmit(){
       var labelname=this.label.value
       console.log(labelname);
       var token=localStorage.getItem('token');
       this.service.label(labelname,token).subscribe(
         (res)=>{
         console.log(res);
         },
       (err)=>{
         console.log(err);
      }
    )

  }

}
