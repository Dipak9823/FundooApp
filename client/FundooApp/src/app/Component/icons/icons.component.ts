import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/Services/icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(private iconservice:IconsService ) { }

  ngOnInit() {
  }

  todayDate() {
    var date=new Date();
    console.log(date);
    //this.iconservice.reminder(date).subscribe( data=> console.log(data) )
  }

}
