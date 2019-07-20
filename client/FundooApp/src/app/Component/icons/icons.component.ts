import { Component, OnInit, Input } from '@angular/core';
import { IconsService } from 'src/app/Services/icons.service';
import { ReminderModel } from 'src/app/model/remindermodel';
import { UpdateService } from 'src/app/Services/update.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  currentDate=new Date();
  tomorrowDate=new Date();
  nextWeek=new Date();
  @Input() id:any;
  model: ReminderModel=new ReminderModel();
  constructor(private iconservice:IconsService, 
              private updateservices: UpdateService) { }

  ngOnInit() {
    //console.log(this.id);
  }

 
  todayDate() {
    console.log(this.currentDate);
    console.log(this.id);
    this.model.id=this.id;
    this.model.reminder=this.currentDate;
    console.log(this.model);
    this.iconservice.reminder(this.model);
  }

  nextDate() {
    console.log(this.id);
    var date = this.tomorrowDate.getDate();
    this.tomorrowDate.setDate(date+1);
   console.log(this.tomorrowDate);
   this.iconservice.reminder(this.tomorrowDate,this.id);
  }

  nextWeekDate(){
    var date=this.nextWeek.getDate();
    this.nextWeek.setDate(date+7);
    console.log(this.nextWeek);
    this.iconservice.reminder(this.nextWeek,this.id);
  }

}
