import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from '../classes/Contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  baseURL = "https://localhost:44382/";
  CallsURL = "api/contribution/";
  constructor(private http: HttpClient) { }
  get_count_Contribution_for_month(id: number): Observable<number> {
    return this.http.get<number>(this.baseURL + this.CallsURL + "count_Contribution_for_month/" + id)
  }

  get_count_Contribution_for_day(id: number): Observable<number> {
    return this.http.get<number>(this.baseURL + this.CallsURL + "count_Contribution_for_day/" + id)
  }

  get_sum_Contribution_for_day(id: number): Observable<number> {
    return this.http.get<number>(this.baseURL + this.CallsURL + "sum_Contribution_for_day/" + id)
  }

  get_sum_Contribution_for_month(id: number): Observable<number> {
    return this.http.get<number>(this.baseURL + this.CallsURL + "sum_Contribution_for_month/" + id)
  }

  get_contribution_for_phone_and_telephonist(id_phone: number, id_telephonist: number): Observable<Contribution[]> {
    return this.http.get<Contribution[]>(this.baseURL + this.CallsURL + "get_contribution_for_phone/" + id_phone + "/" + id_telephonist)
  }

  //החזרת כל התרומות של חברה מסויימת
  //שולח מספר חברה
  get_contribution_for_company(): Observable<Contribution[]> {
    debugger
    //לטפל ברענון והמחיקה של הסשיין
    // return this.http.get<Contribution[]>(this.baseURL+this.CallsURL+"get_contribution_for_company/"+sessionStorage.getItem("id_company"))
    return this.http.get<Contribution[]>(this.baseURL + this.CallsURL + "get_contribution_for_company/" + sessionStorage.getItem("id_company"))

  }
  //החזרת כל התרומות של טלפנית מסויימת בחברה
  //שולח מספר טלפנית בחברה
  All_Contribution_for_Telephonist(): Observable<Contribution[]> {
    debugger
    return this.http.get<Contribution[]>(this.baseURL + this.CallsURL + "All_Contribution_for_Telephonist/1")
  }
  All_Contribution_for_TelephonistForMonth(): Observable<Contribution[]> {
    debugger
    return this.http.get<Contribution[]>(this.baseURL + this.CallsURL + "All_Contribution_for_TelephonistForMonth/" + parseInt(sessionStorage.getItem("id_telephonist")))
  }
  All_Contribution_for_TelephonistForYear(): Observable<Contribution[]> {
    debugger
    return this.http.get<Contribution[]>(this.baseURL + this.CallsURL + "All_Contribution_for_TelephonistForYear/" + parseInt(sessionStorage.getItem("id_telephonist")))
  }
  All_Contribution_for_TelephonistForyDay(): Observable<Contribution[]> {
    debugger
    return this.http.get<Contribution[]>(this.baseURL + this.CallsURL + "All_Contribution_for_TelephonistForyDay/" + parseInt(sessionStorage.getItem("id_telephonist")))
  }


  Add_contribute(new_contribute: Contribution): Observable<Contribution[]> {
    debugger
    // let d:Date=new Date()
    // // call1.timeCall=null
    // //  call1.dateCall=null
    //  call1.transcriptCall=""
    // call1.idPhoneNumber=99
    console.log(new_contribute);
    debugger;
    return this.http.post<Contribution[]>("https://localhost:44382/api/contribution", new_contribute)
  }
}
