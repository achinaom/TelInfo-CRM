import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCallsDone'
})
export class ShowCallsDonePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value==0)
    return 'לא בוצע'
    if(value==1)
    return 'בוצע' 
    
    return null;
  }

}
