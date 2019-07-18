import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ProfiledialogComponent } from '../profiledialog/profiledialog.component';
import { LabelComponent} from '../label/label.component'
import { MatDialog, MatDialogRef} from '@angular/material/dialog'
//import { EditlabelComponent } from '../editlabel/editlabel.component';
import { RootService } from 'src/app/Services/root.service';
import { FunctionService } from 'src/app/Services/function.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-keepnotes',
  templateUrl: './keepnotes.component.html',
  styleUrls: ['./keepnotes.component.css']
})
export class KeepnotesComponent implements OnInit {
  profile:any;
  email:any;
  token:string;
  toggle:any= true;
  change:any=false;
  constructor(private router:Router,private service:RootService,
              private dialog: MatDialog,
              private functionService:FunctionService
              )  { }

sample : any;
labels:any;
labelArray:any[]=[];
searchTerm:any;
search = new FormControl();

  ngOnInit() {

    this.getLabel()
    this.getSearch()
    this.token=localStorage.getItem('token');
    this.profile=localStorage.getItem('profile');
    this.email=localStorage.getItem('email');
    console.log(this.token);
  }

  getSearch(){
    // var searchTerm= this.search.value;
    console.log("keepnotes search term",this.searchTerm);
    this.functionService.getSearchValue(this.searchTerm);
  }

  list() {
    this.toggle=!this.toggle;
    console.log("keepnotes",this.toggle)
    this.functionService.setData(this.toggle);

  }

  openDialog():void{
    const dialogRef = this.dialog.open(ProfiledialogComponent, {
      width: '60%',
      height: '60%'
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed"); 
      
    });
  }

  labelDialog():void{
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '30%',
  });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed"); 
      
    });
  }

  

  onlogout(){
    console.log("Logout");
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('profile');
    console.log(1); 
    this.router.navigate(['/login']);
    console.log(2)
  }


  // editlabels(){
  //   this.dialog.open(EditlabelComponent);
  // }

  getLabel() {

    var token=localStorage.getItem('token');
    console.log(token);
    this.service.getLabel(token).subscribe(
      (res)=>{
        console.log(res);
        this.sample=res;
        var labels=this.sample.result;
        labels.forEach(element => {
          this.labelArray.push(element);
         
        });
        console.log(this.labelArray);
        //console.log(this.sample.result);
      },
      (err) =>{
        console.log(err);
      }
    )
  }


  labelnote(label) {
     console.log(label);
      
  }
}
