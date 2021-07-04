import { Pipe, PipeTransform } from '@angular/core';
import { ForPipeService } from '../servises/for-pipe.service';
import { LeadsService } from '../servises/leads.service';
import { TelephonistService } from '../servises/telephonist.service';

@Pipe({
  name: 'showTypePhone'
})
export class ShowTypePhonePipe implements PipeTransform {
constructor()
{
}
  transform(value: number, ...args: unknown[]): unknown {
    debugger
    if(value==0)
    return 'ליד'
    if(value==1)
    return 'מהטלפנית' 
    if(value==2)
    return 'נכנס אלינו'

// for (let index = 0; index < this.servise1.TypePhone.length; index++) {
// }     
    return null;
  }

}
