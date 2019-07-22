import { Component, OnInit, Inject, Input,Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { NoteModel } from '../../model/notemodel'
import { RootService } from 'src/app/Services/root.service';
import { LabelserviceService } from 'src/app/Services/labelservice.service';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.css']
})
export class UpdatenoteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private service:RootService,
              private labelservice:LabelserviceService) { }
              currentDate=new Date();
              tomorrowDate=new Date();
              nextWeek=new Date();
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
  popUp: boolean;
  isArchive:boolean;
  noteModel:NoteModel=new NoteModel();
  labelArray:any[];
  _id:any;
  dateTime:any;
  ngOnInit() {
    console.log("DAta",this.data);
  }

  changeColor(color){
    this.color = color;
  console.log(this.color);
    this.event.emit(this.color);
   // this.show = false;
  }

  archive() {
    this.isArchive=true;
  }

  label(id){
    console.log(id);
    this._id=id;
  }

  todayDate() {
    console.log(this.currentDate);
    this.dateTime=this.currentDate;
  }

  nextDate() {
    //console.log(this.id);
    var date = this.dateTime.getDate();
    this.dateTime.setDate(date+1);
   console.log(this.dateTime);
   
  }

  nextWeekDate(){
    var date=this.dateTime.getDate();
    this.dateTime.setDate(date+7);
    console.log(this.dateTime);
    
  }

  getAllLabels() {
    this.labelArray=this.labelservice.getLabel()
    console.log("call in funciton",this.labelArray)
  }

  onSubmit() {

    
    //console.log("notes",this.datetime);
  
     this.popUp=!this.popUp;
     this.noteModel.color=this.color;
     this.noteModel.archive=this.isArchive;
     this.noteModel.label=this._id;
     this.noteModel.reminder=this.dateTime;
     // console.log("The Data is:-",this.addNote.value);
     console.log("Note is created"+this.noteModel.label)
     console.log("Note is created"+this.noteModel.description)
     console.log("Color is",this.noteModel.color);
     console.log("Archive=",this.noteModel.archive);
     console.log(this.noteModel);
     var token=localStorage.getItem('token');
     this.service.notes(this.noteModel,token).subscribe(
        (response:any)=>{
          console.log(response);
          if(response.status===200) {
            this.noteModel.label=null;
            this.noteModel.description=null;
            console.log("Data Save");
          }
        }
      )
      }  
  
}
