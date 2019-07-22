import { Injectable,EventEmitter } from '@angular/core';
import { ReminderModel} from '../model/remindermodel'
import { UpdateService } from './update.service';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  model:ReminderModel=new ReminderModel();
  constructor(private updateservice:UpdateService) { }
  //public remindervalue:EventEmitter<any>=new EventEmitter();
  public remindervalue:any;
  public noteid:any;
  reminder(model){
   this.remindervalue=model.date;
   this.noteid=model.id;
   
   console.log(this.model)
    this.updateservice.addReminder(model).subscribe((res)=>{
      console.log(res);
    })
  }

  addColor(model) {
    console.log(this.model);

    this.updateservice.addColor(model).subscribe((res)=>{
      console.log(res);
    })
  }

  addArchive(model) {
    console.log(this.model);
    this.updateservice.addArchive(model).subscribe((res)=>{
      console.log(res);
    })
  }

  addTrash(model) {
    console.log(this.model);
    this.updateservice.updateTrash(model).subscribe((res)=>{
      console.log(res);
    })
  }
}
