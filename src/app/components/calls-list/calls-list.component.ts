import { Component, OnInit } from '@angular/core';
import { LeadAndCalls } from 'src/app/classes/LeadAndCalls';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { Telephonist } from 'src/app/classes/Telephonist';
import { CallsService } from 'src/app/servises/calls.service';
import { LeadsService } from 'src/app/servises/leads.service';
import { TelephonistInCompanyService } from 'src/app/servises/telephonist-in-company.service';

@Component({
  selector: 'app-calls-list',
  templateUrl: './calls-list.component.html',
  styleUrls: ['./calls-list.component.scss']
})
export class CallsListComponent implements OnInit {
  AllCallsInCompany: LeadAndCalls[] = [];
  phone: PhoneNumbers = new PhoneNumbers();
  telephonist: Telephonist = new Telephonist();
  degel: boolean = false
  constructor(private MyCallsServise: CallsService, private MyTelephonistCompanyServise: TelephonistInCompanyService, private MyPhoneNumberServise: LeadsService) { }

  ngOnInit(): void {
    //  כל השיחות של חברה מסויימת של כל הטלפניות
    this.MyCallsServise.get_All_calls_for_Company(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => (console.log(data), this.showLeads(data), this.degel = true),
      err => console.log("hghghghgh"));
  }
  showDetailsPhone(id: number) {
    this.MyPhoneNumberServise.getPhone_number(id).subscribe(
      data => (this.phone = data, console.log(data)),
      err => console.log(err));
  }

  showLeads(dada: LeadAndCalls[]) {
    dada.forEach(element => {
      if (element.done != 2) {
        this.AllCallsInCompany.push(element);}});
  }

  ShowDetailsTelephonist(id: number) {
    this.MyTelephonistCompanyServise.GetTelephonistByIdTelephonistCompany(id).subscribe(
      data => (this.telephonist = data, console.log(data)),
      err => console.log(err));
  }

}
