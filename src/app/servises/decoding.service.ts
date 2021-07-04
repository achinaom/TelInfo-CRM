import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contribution } from '../classes/Contribution';
import { Respons } from '../classes/Respons';
@Injectable({
  providedIn: 'root'
})
export class DecodingService {
  baseURL="https://localhost:44382/";
  CallsURL="api/Text_decoding/";
  constructor( private http:HttpClient) {}
  Get_Call_By_transciption(transcript:string, id_phone_number:number):Observable<Respons>{
    debugger
  return this.http.get<Respons>(this.baseURL+this.CallsURL+"Get_Call_By_transciption/"+transcript)
   }
}
