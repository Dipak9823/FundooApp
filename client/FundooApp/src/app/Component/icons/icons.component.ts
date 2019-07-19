import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/Services/icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  currentDate=new Date();
  tomorrowDate=new Date();
  nextWeek=new Date();
  constructor(private iconservice:IconsService ) { }

  ngOnInit() {
  }

  todayDate() {
    console.log(this.currentDate);
    this.iconservice.reminder(this.currentDate);

  }

  nextDate() {
    var date = this.tomorrowDate.getDate();
    this.tomorrowDate.setDate(date+1);
   console.log(this.tomorrowDate);
   this.iconservice.reminder(this.tomorrowDate);
  }

  nextWeekDate(){
    var date=this.nextWeek.getDate();
    this.nextWeek.setDate(date+7);
    console.log(this.nextWeek);
    this.iconservice.reminder(this.nextWeek);
  }

}
