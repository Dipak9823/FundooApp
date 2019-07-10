import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RootService } from '../../Services/root.service';
import { UpdateService} from '../../Services/update.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-achievenotes',
  templateUrl: './achievenotes.component.html',
  styleUrls: ['./achievenotes.component.css']
})
export class AchievenotesComponent implements OnInit {
  notes:any;
  isArchive:boolean=false;
  
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
  noteDetailsArray = [];
  //aseUrl = 'http://34.213.106.173/api/notes/trashNotes'
  constructor( private service:RootService,private http:HttpClient,
               private updateservice: UpdateService    
    ) {}

    token:any=localStorage.getItem('token');
  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes(){
        var token=localStorage.getItem('token');
        this.service.achievenotes(token).subscribe(res =>{
            
            //console.log("response",res);
            this.notes=res;
            var sample = this.notes.result;
            
            console.log("notes",sample);
            sample.forEach(element => {
              this.noteDetailsArray.push(element);
              console.log(this.noteDetailsArray);
            });
          },
          (err)=>{
            console.log("Error in getting data",err);
          }
        )
  }

  changeColor(color){
    this.color = color;
  console.log(this.color);
    this.event.emit(this.color);
   // this.show = false;
   
  }

  Archive(){
    this.isArchive=!this.isArchive;
    this.updateservice.archive(this.token,this.isArchive).subscribe(
      (response:any)=>{
        console.log(response);
        
      }
    )
  }

  openDialog(){
      
  }  

  // deleteNote(noteId){
  //   this.service.deleteNote(noteId);
  // }



}
