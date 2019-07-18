import { Component, OnInit,EventEmitter, Input, Output} from '@angular/core';

import { RootService} from '../../Services/root.service';
import { NoteModel } from "../../model/notemodel";
import { AchievenotesComponent} from "../achievenotes/achievenotes.component"
import { LabelserviceService } from "../../Services/labelservice.service"
import { IconsService } from 'src/app/Services/icons.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

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
 datetime:any;
 _id:any;
noteModel:NoteModel=new NoteModel();
  labelArray:any[];
  constructor(
    private service:RootService,
    private labelservice: LabelserviceService,
    private iconservice: IconsService
  ) { }

  ngOnInit() {
      

  }

  popOut(){
    this.popUp=true;
  }
  changeColor(color){
    this.color = color;
  console.log(this.color);
    this.event.emit(this.color);
   // this.show = false;
  }

  Archive() {
    this.isArchive=true;
  }

  label(id){
    console.log(id);
    this._id=id;
  }
  reminder(){
    this.datetime=this.iconservice.remindervalue;
  }

  onSubmit() {
   this.popUp=!this.popUp;
   this.noteModel.color=this.color;
   this.noteModel.archive=this.isArchive;
   this.noteModel.label=this._id;
   this.noteModel.reminder=this.datetime;
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

  getAllLabels() {
    this.labelArray=this.labelservice.getLabel()
    console.log("call in funciton",this.labelArray.values)
   }  
}
