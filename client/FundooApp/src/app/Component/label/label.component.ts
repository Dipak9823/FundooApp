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
    sample:any;
    labelsArray:any[]=[];
    isUpdate:boolean=false;
            
  ngOnInit() {

    this.label=this.formBuilder.group({
      labelname:['']
    });
    
    //this.getLabel();
  }
 
  onSubmit(){
   console.log(this.label.value);
       var labelname=this.label.value
       console.log(labelname);
       var token=localStorage.getItem('token');
       console.log(token);
       this.service.addlabel(labelname,token).subscribe(
         (res)=>{
         console.log(res);
         },
       (err)=>{
         console.log(err);
      }
    )

  }

  getLabel() {

    var token=localStorage.getItem('token');
    console.log(token);
    this.service.getLabel(token).subscribe(
      (res)=>{
        this.sample=res;
        var labels=this.sample.result;
        labels.forEach(element => {
            this.labelsArray.push(element);         
        });
        console.log(this.sample.result);
      },
      (err) =>{
        console.log(err);
      }
    )
  }

  change() {
    this.isUpdate=!this.isUpdate;
  }

  update(){
    
  }

}
