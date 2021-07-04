import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parse } from 'path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionSService {
  baseURL="https://localhost:44382/";
  TelephonistURL="api/sendmail";
    constructor( private http:HttpClient) {}
    send_mail(mail:string,subject:string,body:string):Observable<string>{
      return this.http.get<string>(this.baseURL+this.TelephonistURL+"/sendemail/"+mail+"/"+subject+"/"+body)
     }


  
}
