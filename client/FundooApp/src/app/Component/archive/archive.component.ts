import { Component, OnInit } from '@angular/core';
import { RootService } from '../../Services/root.service'
import { UpdateService} from '../../Services/update.service'
//import { UpdateArchiveModel} from '../../model/updatearchivemodel'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  noteDetailsArray = [];
  notes:any;
  isArchive:any;
  sample:any;
  constructor( private service : RootService,
               // private archivemodel: UpdateArchiveModel,
                private updateservice: UpdateService) { }
                token=localStorage.getItem('token');
  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes(){
    
    this.service.archivenotes(this.token).subscribe(res =>{
        
        //console.log("response",res);
        console.log("Response",res);
        this.notes=res;
        console.log("Notes:-",this.notes);
        this.sample = this.notes.message;
      
        console.log("Sample:-",this.sample);

        // this.sample.forEach(element => {
        //   this.noteDetailsArray.push(element);
        //   console.log("NoteDetailsArray",this.noteDetailsArray);
        // });
        for(var i=0;i<this.sample.length;i++) 
           {
            
            this.noteDetailsArray.push(this.sample[i]);
            console.log(this.noteDetailsArray);
          }
          console.log("note Details array",this.noteDetailsArray)
      
    },
      (err)=>{
        console.log("Error in getting data",err);
      }
    )
}


}
