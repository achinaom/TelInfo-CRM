import { Component, OnInit } from '@angular/core';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { ShowTypePhonePipe } from 'src/app/pipes/show-type-phone.pipe';
import { ShowStatusPhonePipe } from 'src/app/pipes/show-status-phone.pipe';
import { LeadsService } from 'src/app/servises/leads.service';
import { TelephonistInCompanyService } from 'src/app/servises/telephonist-in-company.service';

@Component({
  selector: 'app-phone-list-telephonist',
  templateUrl: './phone-list-telephonist.component.html',
  styleUrls: ['./phone-list-telephonist.component.scss']
})
export class PhoneListTelephonistComponent implements OnInit {

  constructor(private mrserviseL: LeadsService, private mytelephonistCservise: TelephonistInCompanyService) { }
  date1 = new Date();
  id1: Number;
  nameforSearch: string = "";
  phoneNUmberForShow: PhoneNumbers[];
  phoneNumberAll: PhoneNumbers[];
  phoneNumberLead: PhoneNumbers[];
  phoneNumberCom: PhoneNumbers[];
  phoneNumberT: PhoneNumbers[];
  phoneS: PhoneNumbers[] = [];
  phones1: PhoneNumbers[];
  degel: boolean = false;

  ngOnInit(): void {
    debugger
    this.mrserviseL.getAllPhoneForTelephonistInCompany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.phoneNumberAll = data.sort((n1, n2) => {
        debugger
        if (n1.creationDate < n2.creationDate)
          return 1
        else if (n1.creationDate > n2.creationDate) {
          return -1;
        }
        return 0;
      }), this.phoneNUmberForShow = data, console.log(data), this.phones1 = data, this.degel = true),
      err => console.log(err));
    this.mrserviseL.getPhoneForTelephonistInCompany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.phoneNumberT = data.sort((n1, n2) => {
        debugger
        if (n1.creationDate < n2.creationDate)
          return 1
        else if (n1.creationDate > n2.creationDate) {
          return -1;
        }
        return 0;
      }), console.log(data)),
      err => console.log(err));
    this.mrserviseL.getPhoneComForTelephonistInCompany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.phoneNumberCom = data.sort((n1, n2) => {
        debugger
        if (n1.creationDate < n2.creationDate)
          return 1
        else if (n1.creationDate > n2.creationDate) {
          return -1;
        }
        return 0;
      }), console.log(data)),
      err => console.log(err));
    this.mrserviseL.getLeadForTelephonistInCompany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.phoneNumberLead = data.sort((n1, n2) => {
        debugger
        if (n1.creationDate < n2.creationDate)
          return 1
        else if (n1.creationDate > n2.creationDate) {
          return -1;
        }
        return 0;
      }), console.log(data)),
      err => console.log(err));

  }

  showLead() {
    this.phoneNUmberForShow = this.phoneNumberLead;
    this.phones1 = this.phoneNUmberForShow;
  }

  showAll() {
    this.phoneNUmberForShow = this.phoneNumberAll;
    this.phones1 = this.phoneNUmberForShow;
  }

  showCom() {
    this.phoneNUmberForShow = this.phoneNumberCom;
    this.phones1 = this.phoneNUmberForShow;
  }

  showPhoneT() {
    this.phoneNUmberForShow = this.phoneNumberT;
    this.phones1 = this.phoneNUmberForShow;
  }

  changeValue() {
    this.phoneS = [];
    this.phoneNUmberForShow = this.phones1;
    debugger
    this.phoneNUmberForShow.forEach(element => {
      debugger
      if (element.firstName.startsWith(this.nameforSearch) || element.lastName.startsWith(this.nameforSearch)) {
        this.phoneS.push(element)
      }
      this.phoneNUmberForShow = this.phoneS;
    });

  }
  
  changeValue1() {
    this.phoneS = [];
    this.phoneNUmberForShow = this.phones1;
    debugger
    this.phoneNUmberForShow.forEach(element => {
      debugger
      if (element.id == this.id1) {
        this.phoneS.push(element)
      }
      this.phoneNUmberForShow = this.phoneS;
    });
  }

  updateList() {
    this.phoneS = [];
    this.phoneNUmberForShow = [];
    debugger;
    this.phoneNUmberForShow = this.phones1;
  }
}
