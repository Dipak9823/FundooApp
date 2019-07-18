import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }
    else{
      args = args;
    }

    return value.filter(items =>{      
      return items.title.startsWith(args)==true
    },
    items =>{
      return items.description.startsWith(args) == true
    });
  }


}
