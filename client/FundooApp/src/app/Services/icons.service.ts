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
}
