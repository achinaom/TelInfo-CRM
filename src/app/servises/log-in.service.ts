import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from '../classes/Companies';
import { Telephonist } from '../classes/Telephonist';
import { TelephonistInCompanies } from '../classes/TelephonistInCompanies';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  baseURL="https://localhost:44382/";
  TelephonistURL="api/all_employees";
    constructor( private http:HttpClient) {}
    id:number=0;
    check:string="0";
    show_telephonist:boolean=true;
    show_manager:boolean=false;
    show_home:boolean=true;
show_footer:boolean=true;

    change_nav(n:number){
      debugger
if(n==1)
{
  this.show_telephonist=true;
  this.show_manager=false;
  this.show_home=false;
  this.show_footer=false;
}
else if(n==2)
{
  this.show_telephonist=false;
  this.show_manager=true;
  this.show_home=false;
  this.show_footer=true;
}
else{
  this.show_telephonist=false;
  this.show_manager=false;
  this.show_home=true;
  this.show_footer=true;
}
    }

    log_in(mail:string,password:string):Observable<number>{
      debugger
      return this.http.get<number>(this.baseURL+this.TelephonistURL+"/log_in/"+password+"/"+mail)
      // return this.http.get<number>("https://localhost:44382/api/all_employees/log_in/1234/chaim@gmail.com")

     }

     get_telephonist(mail:string,password:string):Observable<TelephonistInCompanies>{
      // sessionStorage.setItem('id_telephonist','')

      return this.http.get<TelephonistInCompanies>(this.baseURL+this.TelephonistURL+"/log_in_telephonist/"+password+"/"+mail)
     }

     get_companey(mail:string,password:string):Observable<Companies>{
      return this.http.get<Companies>(this.baseURL+this.TelephonistURL+"/log_in_companey/"+password+"/"+mail)
     }
}