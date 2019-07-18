import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }
  public change: EventEmitter<any>=new EventEmitter();
  public searchValue : EventEmitter<any> = new EventEmitter();
  public setData(value){
    this.change.emit(value);
  }

  getSearchValue(searchTerm){
    this.searchValue.emit(searchTerm);
  }
}
