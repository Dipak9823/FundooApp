import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { RootService} from '../../root.service';
import { NoteModel } from "../../model/notemodel";
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
popUp: boolean;
addNote:FormGroup;
noteModel:NoteModel=new NoteModel();

  constructor(
    private formbuilder:FormBuilder,
    private rootservice:RootService
  ) { }

  ngOnInit() {
    

  }

  popOut(){
    this.popUp=true;
  }
  onSubmit() {
   this.popUp=!this.popUp;
   // console.log("The Data is:-",this.addNote.value);
   console.log("Note is created"+this.noteModel.title)
     
   console.log("Note is created"+this.noteModel.description)

  }
}
