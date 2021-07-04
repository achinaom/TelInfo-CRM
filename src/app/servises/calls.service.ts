import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Calls } from '../classes/Calls';
import { LeadAndCalls } from '../classes/LeadAndCalls';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
@Injectable({
  providedIn: 'root'
})
export class CallsService {
  baseURL="https://localhost:44382/";
  CallsURL="api/calls/";
  constructor( private http:HttpClient) {}
  get_Calls_for_today(id:number):Observable<LeadAndCalls[]>{
    debugger
    return this.http.get<LeadAndCalls[]>(this.baseURL+this.CallsURL+"get_calls_for_today/"+id)
   }
   get_calls_for_today_allcall(id:number):Observable<LeadAndCalls[]>{
    debugger
    return this.http.get<LeadAndCalls[]>(this.baseURL+this.CallsURL+"get_calls_for_today_allcall/"+id)
   }
   get_no_answer__calls(id:number):Observable<LeadAndCalls[]>{
   debugger
    return this.http.get<LeadAndCalls[]>(this.baseURL+this.CallsURL+"get_no_answer__calls/"+id)
   }
   Returned_from_the_system(id:number):Observable<LeadAndCalls[]>{
    debugger
    return this.http.get<LeadAndCalls[]>(this.baseURL+this.CallsURL+"Returned_from_the_system/"+id)
   }
   get_calls_of_a_certain_date(id:number,date1:Date):Observable<LeadAndCalls[]>{
     debugger
    return this.http.get<LeadAndCalls[]>(this.baseURL+this.CallsURL+"get_calls_of_a_certain_date/"+id+"/"+date1)
   }
   get_callsLead_by_id(id:number):Observable<LeadAndCalls>{
    debugger
   return this.http.get<LeadAndCalls>(this.baseURL+this.CallsURL+"get_callsLead_by_id/"+id)
  }
  delete_call(id:number,id_telephonist:number,date:Date):Observable<LeadAndCalls[]>{
    debugger
   return this.http.delete<LeadAndCalls[]>(this.baseURL+this.CallsURL+"delete_call/"+id)
  }

  get_all_calls_for_phone_and_telephonist(id_phone:number,id_telephonist:number):Observable<Calls[]>{
    debugger
   return this.http.get<Calls[]>(this.baseURL+this.CallsURL+"get_all_calls_for_phone_and_telephonist/"+id_phone+"/"+id_telephonist)
  }

  get_all_history_calls_for_phone_and_telephonist(id_phone:number,id_telephonist:number):Observable<Calls[]>{
    debugger
   return this.http.get<Calls[]>(this.baseURL+this.CallsURL+"get_all_history_calls_for_phone_and_telephonist/"+id_phone+"/"+id_telephonist)
  }
  get_all_future_calls_for_phone_and_telephonist(id_phone:number,id_telephonist:number):Observable<Calls[]>{
    debugger
   return this.http.get<Calls[]>(this.baseURL+this.CallsURL+"get_all_future_calls_for_phone_and_telephonist/"+id_phone+"/"+id_telephonist)
  }
  //החזרת כל השיחות של חברה מסויימת של כל הטלפניות

  get_All_calls_for_Company(id_company:number):Observable<LeadAndCalls[]>{
    debugger
   return this.http.get<LeadAndCalls[]>("https://localhost:44382/api/calls/get_All_calls_for_Company/"+id_company)
  }
  //החזרת כל השיחות של טלפנית מסויימת

  get_All_calls_for_telephonist(id_telephonist_in_company:number):Observable<LeadAndCalls[]>{
    debugger
   return this.http.get<LeadAndCalls[]>(this.baseURL+this.CallsURL+"get_All_calls_for_telephonist/"+id_telephonist_in_company)
  }

  //הוספת שיחה חדשה עלי ידי הטלפנית ידנית
  Add_call_for_telephonnist(call1:Calls):Observable<Calls[]>{
    debugger
    // let d:Date=new Date()
    // // call1.timeCall=null
    // //  call1.dateCall=null
    //  call1.transcriptCall=""
    // call1.idPhoneNumber=99
     console.log(call1);
debugger;     
   return this.http.post<Calls[]>("https://localhost:44382/api/Calls",call1)
  }
  get_time(ntime:Date,ndate:Date):Observable<Calls[]>{
    debugger
   return this.http.get<Calls[]>(this.baseURL+this.CallsURL+"get_time/"+ntime+"/"+ndate)
  }
  
  update_call(call:Calls):Observable<Calls>{
    debugger
   return this.http.put<Calls>(this.baseURL+this.CallsURL+"update_call",call)
  }

    
  update_call1(call:Calls):Observable<Calls>{
    debugger
   return this.http.put<Calls>(this.baseURL+this.CallsURL+"update_call_transcript",call)
  }
  get_call_by_id_call(id:number):Observable<Calls>{
    debugger
   return this.http.get<Calls>(this.baseURL+this.CallsURL+"get_call_by_id_call/"+id)
  }
  }

  