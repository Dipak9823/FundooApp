import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconsService } from 'src/app/Services/icons.service';
import { ReminderModel } from 'src/app/model/remindermodel';
import { UpdateService } from 'src/app/Services/update.service';
import { ColorModel } from 'src/app/model/colormodel';
import { ArchiveModel } from 'src/app/model/archivemodel';
import { TrashModel } from 'src/app/model/trashmodel';
import { LabelserviceService } from 'src/app/Services/labelservice.service';
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
  remindermodel: ReminderModel=new ReminderModel();
  colormodel: ColorModel=new ColorModel();
  archivemodel: ArchiveModel=new ArchiveModel();
  trashmodel: TrashModel=new TrashModel();
  constructor(private iconservice:IconsService, 
              private updateservices: UpdateService,
              private labelservice:LabelserviceService) { }
  public defaultColors: string[] = [
    '#ffffff',
    '#000105',
    '#3e6158',
    '#3f7a89',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
  ];
  @Input() color:string;
  @Output() event = new EventEmitter();          
  isArchive:boolean=false;
  isTrash:boolean=false;
  labelArray:any=[];
  ngOnInit() {
    //console.log(this.id);
  }

 
  todayDate() {
    console.log(this.currentDate);
    console.log(this.id);
    this.remindermodel.id=this.id;
    this.remindermodel.reminder=this.currentDate;
    console.log(this.remindermodel);
    this.iconservice.reminder(this.remindermodel);
  }

  nextDate() {
    console.log(this.id);
    var date = this.tomorrowDate.getDate();
    this.tomorrowDate.setDate(date+1);
   console.log(this.tomorrowDate);
   this.remindermodel.id=this.id;
    this.remindermodel.reminder=this.tomorrowDate;
   this.iconservice.reminder(this.remindermodel);
  }

  nextWeekDate(){
    var date=this.nextWeek.getDate();
    this.nextWeek.setDate(date+7);
    console.log(this.nextWeek);
    this.remindermodel.id=this.id;
    this.remindermodel.reminder=this.nextWeek;
    this.iconservice.reminder(this.remindermodel);
  }

  changeColor(color){
    this.color = color;
    console.log("color is:",this.color);
    this.event.emit(this.color);
    this.colormodel.id=this.id;
    this.colormodel.color=this.color;
    this.iconservice.addColor(this.colormodel);
   // this.show = false;
  }  

  archive() { 
    this.isArchive=true;
    console.log("Archive:",this.isArchive);
    this.archivemodel.id=this.id;
    this.archivemodel.isArchive=this.isArchive;
    this.iconservice.addArchive(this.archivemodel);
  } 
  
  trashnote(){
    this.isTrash=!this.isTrash;
    console.log("Trash:",this.isTrash);
    this.trashmodel.id=this.id;
    this.trashmodel.trash=this.isTrash;
    this.iconservice.addTrash(this.trashmodel);
  }

  getAllLabels() {
    this.labelArray=this.labelservice.getLabel()
    console.log("call in funciton",this.labelArray.values)
   }

   
}
