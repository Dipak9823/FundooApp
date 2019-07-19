import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IconsService {
  constructor() { }
  //public remindervalue:EventEmitter<any>=new EventEmitter();
  public remindervalue:any
  reminder(date:any){
   this.remindervalue=date;
  }
}
