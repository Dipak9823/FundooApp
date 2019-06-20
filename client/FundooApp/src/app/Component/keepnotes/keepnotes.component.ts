import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-keepnotes',
  templateUrl: './keepnotes.component.html',
  styleUrls: ['./keepnotes.component.css']
})
export class KeepnotesComponent implements OnInit {
  email:string;
  token:string;

  constructor(private router:Router)  { }

  ngOnInit() {
    this.email=localStorage.getItem('email');
    this.token=localStorage.getItem('token');
  }

  onlogout(){
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.router.navigate['/login'];
  }
}
