import { Component, OnInit } from '@angular/core';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { Telephonist } from 'src/app/classes/Telephonist';
import { TelephonistInCompanies } from 'src/app/classes/TelephonistInCompanies';
import { TelephonistInCompanyDetails } from 'src/app/classes/TelephonistInCompanyDetails';
import { LeadsService } from 'src/app/servises/leads.service';
import { TelephonistInCompanyService } from 'src/app/servises/telephonist-in-company.service';
import { TelephonistService } from 'src/app/servises/telephonist.service';

@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
  styleUrls: ['./new-phone.component.scss']
})
export class NewPhoneComponent implements OnInit {

  constructor( private mrserviseL:LeadsService,private mytelephonistCservise:TelephonistInCompanyService) { }
  phone_namber:PhoneNumbers;
  update_phoneNumber:PhoneNumbers=new PhoneNumbers();
  status_lead:string;
  type_kesher:string
telephonist1:Telephonist
telephonistInCompany1:TelephonistInCompanies;
bool1:boolean
date1:Date;
  ngOnInit(): void {
    this.mytelephonistCservise.GetTelephonistByIdTelephonistCompany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data=> (this.telephonist1=data, console.log(data)),
      err=>console.log());
      debugger;
      this.mytelephonistCservise.GetTelephonistinCompanyByIdTelephonistInCopmany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
        data=> { this.telephonistInCompany1=data; console.log(data); debugger},
        err=>console.log());
    debugger
    this.date1=new Date();
  }
  saveChangForLead(){
    debugger
    
    this.update_phoneNumber.idCompanies=this.telephonistInCompany1.idCompany;
    this.update_phoneNumber.type=1;
    this.update_phoneNumber.status=5;
    this.mrserviseL.Add_phone(this.update_phoneNumber).subscribe(
      data=> (this.phone_namber=data, console.log(data),alert("הלקוח נוסף בהצלחה")),
      err=>alert("שגיאה בהוספת האיש קשר"));
  }
}