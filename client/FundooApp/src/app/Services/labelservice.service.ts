import { Injectable } from '@angular/core';
import { RootService} from './root.service';
@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {
  sample:any;
  labelsArray:any[]=[];
  constructor(private service: RootService) { }

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
        console.log("Service result",this.sample.result);
      },
      (err) =>{
        console.log(err);
      }
    )
    return this.labelsArray;
  }
}
