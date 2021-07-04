import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Calls } from '../classes/Calls';
import { PhoneNumbers } from '../classes/PhoneNumbers';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  baseURL="https://localhost:44382/";
  TelephonistURL="api/phone_numbers/";
  constructor( private http:HttpClient) {}

  getPhone_numbers_for_today(id:Number):Observable<Calls[]>{
    return this.http.get<Calls[]>(this.baseURL+this.TelephonistURL+"/"+id)
   }
   getPhone_number(id:Number):Observable<PhoneNumbers>{
    debugger
   return this.http.get<PhoneNumbers>(this.baseURL+this.TelephonistURL+"get_phone"+"/"+id)
  }
  getLeadForTelephonist(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getLeadForTelephonist"+"/"+id)
  }
  getLeadForMonthForTelephonist(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getLeadForMonthForTelephonist"+"/"+id)
  }
  getLeadForDayForTelephonist(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getLeadForDayForTelephonist"+"/"+id)
  }
  getAllLeadForCompany(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getAllLeadForCompany"+"/"+id)
  }
  
  getLeadForMonthForCompany(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getLeadForMonthForCompany"+"/"+id)
  }
  Update_phone(phone:PhoneNumbers):Observable<PhoneNumbers>{
    debugger
   return this.http.put<PhoneNumbers>(this.baseURL+this.TelephonistURL+"Update_phone",phone)
  }
Add_phone(phone:PhoneNumbers):Observable<PhoneNumbers>{
    debugger
   return this.http.post<PhoneNumbers>(this.baseURL+this.TelephonistURL+"Add_phone/"+ sessionStorage.getItem("id_telephonist"),phone)
  }
//החזרת כל מספרי הטלפון של טלפנית מסויימת
getAllPhoneForTelephonistInCompany(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getAllPhoneForTelephonistInCompany"+"/"+id)
  }
  //החזרת כל הלידים של טלפנית מסויימת
  getLeadForTelephonistInCompany(id:Number):Observable<PhoneNumbers[]>{
  debugger
 return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getLeadForTelephonistInCompany"+"/"+id)
}


  //החזרת מספרי הטלפון שהטלפנית
  getPhoneForTelephonistInCompany(id:Number):Observable<PhoneNumbers[]>{
    debugger
    
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getPhoneForTelephonistInCompany"+"/"+id)
   
  }

  
  //החזרת מספרי הטלפון שהטלפנית
  getPhoneComForTelephonistInCompany(id:Number):Observable<PhoneNumbers[]>{
    debugger
   return this.http.get<PhoneNumbers[]>(this.baseURL+this.TelephonistURL+"getPhoneComForTelephonistInCompany"+"/"+id)
  }
}
