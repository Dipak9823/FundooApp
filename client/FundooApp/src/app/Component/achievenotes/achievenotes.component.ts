import { Component, OnInit } from '@angular/core';
import { RootService } from '../../Services/root.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-achievenotes',
  templateUrl: './achievenotes.component.html',
  styleUrls: ['./achievenotes.component.css']
})
export class AchievenotesComponent implements OnInit {
  notes:any;

  noteDetailsArray = [];
  //aseUrl = 'http://34.213.106.173/api/notes/trashNotes'
  constructor( private service:RootService,private http:HttpClient,
                   
    ) {}

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

  openDialog(){
      
  }  

  // deleteNote(noteId){
  //   this.service.deleteNote(noteId);
  // }



}
