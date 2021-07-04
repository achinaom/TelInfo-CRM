import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Telephonist } from '../classes/Telephonist';
import { TelephonistInCompanies } from '../classes/TelephonistInCompanies';
import { Companies } from '../classes/Companies';
import { TelephonistInCompanyDetails } from '../classes/TelephonistInCompanyDetails';
@Injectable({
  providedIn: 'root'
})
export class TelephonistService {
  baseURL="https://localhost:44382/";
  TelephonistURL="api/telephonist";
    constructor( private http:HttpClient) {

    }
    telephonist:Telephonist=new Telephonist();
    manager:Companies=new Companies();
    id:number=0;
    getTelephonist(mail:string,password:string):Observable<Telephonist>{
      return this.http.get<Telephonist>(this.baseURL+this.TelephonistURL+"/"+password+"/"+mail)
     }
     getTelephonistC(mail:string,password:string):Observable<TelephonistInCompanies>{
       debugger
      return this.http.get<TelephonistInCompanies>(this.baseURL+this.TelephonistURL+"/"+password+"/"+mail)
     }
     //
     addTelephonist(telephonist:Telephonist,password:string ) :Observable<TelephonistInCompanyDetails[]>{
      debugger
     return this.http.post<TelephonistInCompanyDetails[]>(this.baseURL+this.TelephonistURL+"/addtelephonist/"+sessionStorage.getItem("id_company")+"/"+password,telephonist)
    }
     getid(){
return this.telephonist;     }
upate_telephonist(telephonistInCompanyDetails:TelephonistInCompanyDetails):Observable<boolean>{
  debugger
 return this.http.put<boolean>(this.baseURL+this.TelephonistURL+"/upate_telephonist",telephonistInCompanyDetails)
}

}
