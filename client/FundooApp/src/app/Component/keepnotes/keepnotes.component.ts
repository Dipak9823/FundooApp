import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-keepnotes',
  templateUrl: './keepnotes.component.html',
  styleUrls: ['./keepnotes.component.css']
})
export class KeepnotesComponent implements OnInit {
  
  token:string;
  toggle:any= true;
  constructor(private router:Router)  { }

  ngOnInit() {
    this.token=localStorage.getItem('token');
    console.log(this.token);
  }
  list() {
    this.toggle=!this.toggle;
  }
  onlogout(){
    console.log("Logout");
    localStorage.removeItem('token');
    console.log(1); 
    this.router.navigate(['/login']);
    console.log(2)
  }
}
