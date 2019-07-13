import { Component, OnInit } from '@angular/core';
import { RootService} from '../../Services/root.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  notes:any;
  noteDetailsArray=[];
  constructor( private service:RootService) { }

  ngOnInit() {
    this.getAllNotes();
  }
getAllNotes(){
    var token=localStorage.getItem('token');
    this.service.trashnote(token).subscribe(res =>{
        
      this.notes=res;
      console.log(this.notes);
        var sample = this.notes.message;
      
        console.log("notes",sample);
        console.log("trash:",sample[0].trash);
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
