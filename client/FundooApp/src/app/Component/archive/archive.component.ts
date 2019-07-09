import { Component, OnInit } from '@angular/core';
import { RootService } from '../../Services/root.service' 

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  noteDetailsArray = [];
  notes:any;
  constructor( private service : RootService) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes(){
    var token=localStorage.getItem('token');
    this.service.archivenotes(token).subscribe(res =>{
        
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
}
