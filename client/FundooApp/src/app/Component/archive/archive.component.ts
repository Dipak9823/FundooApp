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
        this.notes=res;
        var sample = this.notes.message;
      
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
// archive(id){
//   this.isArchive=!this.isArchive;
//   console.log(id)
//   this.archivemodel._id=id;
//   this.archivemodel.archive=this.isArchive;
//   console.log(this.archivemodel);
//   this.updateservice.archive(this.token,this.archivemodel).subscribe(
//     (response:any)=>{
//       console.log(response);
      
//     }
//   )
// }


}
