import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from '../classes/Companies';
import { PhoneNumbers } from '../classes/PhoneNumbers';
import { TelephonistInCompanyDetails } from '../classes/TelephonistInCompanyDetails';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseURL = "https://localhost:44382/";
  CompaniesURL = "api/commpanies";
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.baseURL + this.CompaniesURL)
  }
  GetAllTelephonistByIDompany(id:number): Observable<TelephonistInCompanyDetails[]> {
    debugger
    // return this.http.get<TelephonistInCompanyDetails[]>(this.baseURL+this.CompaniesURL+"/GetTelephonistByID/"+id)
    return this.http.get<TelephonistInCompanyDetails[]>("https://localhost:44382/api/companies/GetTelephonistByID/" +String(id))
  }

  DeleteTelephonistInCompanies(id: number): Observable<TelephonistInCompanyDetails[]> {
    debugger
    // return this.http.get<TelephonistInCompanyDetails[]>(this.baseURL+this.CompaniesURL+"/GetTelephonistByID/"+id)
    return this.http.delete<TelephonistInCompanyDetails[]>("https://localhost:44382/api/TelephonistCompanies/DeleteTelephonistInCompanies/" + id)
  }


  getAllPhoneForCompany(id: number): Observable<PhoneNumbers[]> {
    return this.http.get<PhoneNumbers[]>("https://localhost:44382/api/companies/getAllPhoneForCompany/" + id)
  }


  getAllCompanies(): Observable<Companies[]> {
    return this.http.get<Companies[]>("https://localhost:44382/api/companies/getAllCompanies")
  }

  addCompany(company: Companies): Observable<Companies[]> {
    return this.http.post<Companies[]>("https://localhost:44382/api/companies/addCompanies", company)
  }

  send_mail(mail: string, subject: string, body: string): Observable<string> {
    debugger
    return this.http.get<string>(this.baseURL + "api/sendmail" + "/sendemail/" + mail + "/" + subject + "/" + body)
  }

  SendEmail_subscribe(contactAddress: string): Observable<string> {
    debugger
    return this.http.get<string>(this.baseURL + "api/sendmail" + "/SendEmail_subscribe/" + contactAddress)
  }


  send_mail_pass(email: string, pass: string): Observable<boolean> {
    debugger
    return this.http.get<boolean>(this.baseURL + "api/sendmail" + "/sendMail/" + email + "/" + pass)
  }

  CheckPass(pass: string): Observable<boolean> {
    debugger
    return this.http.get<boolean>(this.baseURL + "api/sendmail" + "/CheckPass/"+ pass)
  }

  UpdateCompanies(company: Companies): Observable<Companies[]> {
    return this.http.put<Companies[]>("https://localhost:44382/api/companies/UpdateCompanies", company)
  }

  
}

