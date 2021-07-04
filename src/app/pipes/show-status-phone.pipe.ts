import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showStatusPhone'
})
export class ShowStatusPhonePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    debugger
    if(value==0)
    return 'לא עונים'
    if(value==1)
    return 'אשפה' 
    if(value==2)
    return 'שיחה עתידית'
    if(value==3)
    return 'לא טופל'


// for (let index = 0; index < this.servise1.TypePhone.length; index++) {
// }     
    return null;
  }

}
