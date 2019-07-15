import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ProfiledialogComponent } from '../profiledialog/profiledialog.component';
import { LabelComponent} from '../label/label.component'
import { MatDialog, MatDialogRef} from '@angular/material/dialog'
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
  constructor(private router:Router,
              private dialog: MatDialog
              )  { }

  ngOnInit() {
    this.token=localStorage.getItem('token');
    this.profile=localStorage.getItem('profile');
    this.email=localStorage.getItem('email');
    console.log(this.token);
  }
  list() {
    this.toggle=!this.toggle;
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
}
