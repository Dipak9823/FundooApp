import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RootService } from '../../Services/root.service';
import { UpdateService} from '../../Services/update.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { UpdateArchiveModel } from 'src/app/model/updatearchivemodel';
import { UpdateTrashModel} from '../../model/trashmodel';
import { UpdatenoteComponent } from '../updatenote/updatenote.component'
@Component({
  selector: 'app-achievenotes',
  templateUrl: './achievenotes.component.html',
  styleUrls: ['./achievenotes.component.css']
})
export class AchievenotesComponent implements OnInit {
  notes:any;
  isArchive:boolean=false;
  isTrash:boolean=false;
  sample:any;
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
  archivemodel:UpdateArchiveModel=new UpdateArchiveModel();
  trashmodel:UpdateTrashModel=new UpdateTrashModel();
  //aseUrl = 'http://34.213.106.173/api/notes/trashNotes'
  constructor( private service:RootService,private http:HttpClient,
               private updateservice: UpdateService,
               private dialog : MatDialog    
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
             this.sample = this.notes.result;
            console.log("notes",this.sample);
            console.log("Print id ", this.sample[0]._id);
            for(let i=0;i<this.sample.length;i++) {
              if(this.sample[i].archive==false && this.sample[i].trash==false) {
                this.noteDetailsArray.push(this.sample[i]);
              }
            }
            // sample.forEach(element => {
            //   if(element.trash !== true) {
            //   this.noteDetailsArray.push(element);
            //   console.log(this.noteDetailsArray);
            //   }
            // });
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

  archive(id){
    this.isArchive=!this.isArchive;
    console.log(id)
    this.archivemodel._id=id;
    this.archivemodel.archive=this.isArchive;
    console.log(this.archivemodel);
    this.updateservice.archive(this.token,this.archivemodel).subscribe(
      (response:any)=>{
        console.log(response);
        
      }
    )
  }

  trashLabel(id) {
    this.isTrash=!this.isTrash;
    console.log(id);
    this.trashmodel._id=id;
    this.trashmodel.trash=this.isTrash;
    console.log(this.trashmodel);
    this.updateservice.trash(this.token,this.trashmodel).subscribe(
      (response:any)=>{
        console.log(response);
      }
    )

  }

      openDialog():void{
      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        height: '12vw',
        width: '60vw',
          
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log("Dialog was closed"); 
        
      });
    }
      
  }  

  // deleteNote(noteId){
  //   this.service.deleteNote(noteId);
  // }




