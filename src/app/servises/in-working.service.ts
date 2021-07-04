import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from '../classes/Companies';
import { LeadAndCalls } from '../classes/LeadAndCalls';
import { Telephonist } from '../classes/Telephonist';

@Injectable({
  providedIn: 'root'
})
export class InWorkingService {

  constructor( private httpClient:HttpClient) { 
    this.id_telephonist=parseInt(sessionStorage.getItem("id_telephonist"));
    this.id_company=parseInt(sessionStorage.getItem("id_company"));
    if(!this.id_telephonist&& !this.id_company)
      this.home=1;

// if(this.n==1)
// {
//   debugger
//   this.id_telephonist=parseInt(sessionStorage.getItem("id_telephonist"));
//   this.id_company=null;
//   this.home=null;
// }
// if(this.n==2)
// {debugger
//       this.id_company=parseInt(sessionStorage.getItem("id_company"));
//       this.id_telephonist=null;
//       this.home=null;
// }
// if(this.n==0)
// {
//   debugger
//       this.home=1;
//       this.id_telephonist=null;
//       this.id_company=null;
// }
   }
   home:number=0;
   id_company:number=0;
   id_telephonist:number=0;
  telephonist:Telephonist=new Telephonist();
  company:Companies=new Companies()
  n:number=0;
getxl_file(formData){
  debugger
 return this.httpClient.post<LeadAndCalls[]>('https://localhost:44382/api/uplode/UploadExcel/'+parseInt(sessionStorage.getItem("id_company")), formData)
}
}
