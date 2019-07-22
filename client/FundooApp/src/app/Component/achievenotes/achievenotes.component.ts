import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RootService } from '../../Services/root.service';
import { UpdateService} from '../../Services/update.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog'
//import { UpdateArchiveModel } from 'src/app/model/updatearchivemodel';
// import { UpdateTrashModel} from '../../model/trashmodel';
import { ReminderModel} from '../../model/remindermodel'
import { UpdatenoteComponent } from '../updatenote/updatenote.component'
import { LabelserviceService } from '../../Services/labelservice.service'
import { FunctionService } from 'src/app/Services/function.service';
import { IconsService } from 'src/app/Services/icons.service';
import { fadeInItems } from '@angular/material';
import { LabelModel } from 'src/app/model/labelmodel';

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
  noteid:any;
  noteDetailsArray = [];
  labelArray= [];
  reminderObj:any;
  searchInputValue : string;
  datetime:any;
  //archivemodel:UpdateArchiveModel=new UpdateArchiveModel();
  //trashmodel:UpdateTrashModel=new UpdateTrashModel();
  remindermodel:ReminderModel=new ReminderModel();
  labelmodel:LabelModel=new LabelModel();
  //aseUrl = 'http://34.213.106.173/api/notes/trashNotes'
  constructor( private service:RootService,private http:HttpClient,
               private updateservice: UpdateService,
               private dialog : MatDialog,
               private labelservice: LabelserviceService,
               private functionService: FunctionService,
               private iconservice:IconsService,
                
    ) {}
    toggle:any;
    token:any=localStorage.getItem('token');
  ngOnInit() {
    this.getAllNotes();
    this.view();
    this.getValue();
    
    console.log("Labels Array of service",this.labelArray);
  }

 
  getValue(){
    this.functionService.searchValue.subscribe((data:any) =>{
      console.log("achivenotes....",data);
      this.searchInputValue = data;
    })
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

  view() {
    this.functionService.change.subscribe(value=>{
        console.log(value);
        this.toggle=value;
        console.log("Achieve notes",this.toggle);
    })
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

  // trashLabel(id) {
  //   this.isTrash=!this.isTrash;
  //   console.log(id);
  //   this.trashmodel._id=id;
  //   this.trashmodel.trash=this.isTrash;
  //   console.log(this.trashmodel);
  //   this.updateservice.trash(this.token,this.trashmodel).subscribe(
  //     (response:any)=>{
  //       console.log(response);
  //     }
  //   )

  // }

  openDialog(items):void{
      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        
            data:{
              id:items._id,
              title:items.title,
              description:items.description,
              color:items.color,
              reminder:items.reminder,
              label:items.label
            }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log("Dialog was closed"); 
        
      });
    }


  getAllLabels() {
    this.labelArray=this.labelservice.getLabel()
    console.log("call in funciton",this.labelArray)
  }

  /**
   * @description :Add Reminder
   */
  reminder(){
    
    this.datetime=this.iconservice.remindervalue;
    this.noteid=this.iconservice.noteid;
    
    this.remindermodel.id=this.noteid;
    this.remindermodel.reminder=this.datetime;
    console.log(this.remindermodel);
    console.log(this.datetime);
    
    this.updateservice.addReminder(this.remindermodel).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }

  deleteReminder(_id,reminder){
      
      this.remindermodel.id=_id;
      this.remindermodel.reminder=reminder[0];
      console.log(reminder);
      this.updateservice.deleteReminder(this.remindermodel).subscribe(
        (res)=>{
          console.log(res);
        }
      );

  }

  deleteLabel(_id,label) {
      this.labelmodel.id=_id;
      this.labelmodel.label=label;
      console.log(this.labelmodel);
      this.updateservice.deleteLabel(this.labelmodel).subscribe(
        (res)=>{
          console.log(res)
        }
      )
  }  
  
  }

  



