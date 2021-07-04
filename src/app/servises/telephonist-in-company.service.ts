import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telephonist } from '../classes/Telephonist';
import { TelephonistInCompanies } from '../classes/TelephonistInCompanies';


@Injectable({
  providedIn: 'root'
})
export class TelephonistInCompanyService {
  baseURL="https://localhost:44382/";
  TelephonistURL="api/TelephonistCompanies";
    constructor( private http:HttpClient) {}

    GetTelephonistByIdTelephonistCompany(id:number):Observable<Telephonist>{
      return this.http.get<Telephonist>(this.baseURL+this.TelephonistURL+"/GetTelephonistByIdTelephonistCompany/"+id)
     }
     GetTelephonistinCompanyByIdTelephonistInCopmany(id:number):Observable<TelephonistInCompanies>{
      return this.http.get<TelephonistInCompanies>(this.baseURL+this.TelephonistURL+"/GetTelephonistinCompanyByIdTelephonistInCopmany/"+id)
     }
}
