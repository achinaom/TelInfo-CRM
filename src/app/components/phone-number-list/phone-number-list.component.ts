import { Component, OnInit } from '@angular/core';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { CompanyService } from 'src/app/servises/company.service';
import { LeadsService } from 'src/app/servises/leads.service';

@Component({
  selector: 'app-phone-number-list',
  templateUrl: './phone-number-list.component.html',
  styleUrls: ['./phone-number-list.component.scss']
})
export class PhoneNumberListComponent implements OnInit {

  constructor(private myServiseCompany: CompanyService, private mrserviseL: LeadsService) { }
  phone_namber: PhoneNumbers;
  pgt: string = 'ahrv'
  type_kesher: string
  phoneNumberList1: PhoneNumbers[] = [];
  degel: boolean = false;
  update_phoneNumber: PhoneNumbers = new PhoneNumbers();
  status_lead: string;
  phoneList3: PhoneNumbers[] = []
  id1: Number;
  nameforSearch: string = "";
  phoneS: PhoneNumbers[] = [];
  phones1: PhoneNumbers[];
  phoneNUmberForShow: PhoneNumbers[];


  ngOnInit(): void {
    this.myServiseCompany.getAllPhoneForCompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => (this.phoneNumberList1 = data.sort(), this.phoneList3 = data.sort(), console.log(data), this.degel = true, this.phone_namber = data[0]
      ),
      err => console.log());
  }

  showw(phone: PhoneNumbers) {
    this.phone_namber = phone
    this.update_phoneNumber = new PhoneNumbers()
  }

  saveChangForLead() {
    debugger
    if (this.update_phoneNumber.firstName == null)
      this.update_phoneNumber.firstName = this.phone_namber.firstName;
    if (this.update_phoneNumber.lastName == null)
      this.update_phoneNumber.lastName = this.phone_namber.lastName;
    if (this.update_phoneNumber.mail == null)
      this.update_phoneNumber.mail = this.phone_namber.mail;
    if (this.update_phoneNumber.phone2 == null)
      this.update_phoneNumber.phone2 = this.phone_namber.phone2;
    if (this.update_phoneNumber.phone == null)
      this.update_phoneNumber.phone = this.phone_namber.phone;
    if (this.update_phoneNumber.address == null)
      this.update_phoneNumber.address = this.phone_namber.address;
    if (this.update_phoneNumber.city == null)
      this.update_phoneNumber.city = this.phone_namber.city;
    if (this.update_phoneNumber.placeWorking == null)
      this.update_phoneNumber.placeWorking = this.phone_namber.placeWorking;
    if (this.update_phoneNumber.status == null)
      this.update_phoneNumber.status = this.phone_namber.status;
    if (this.update_phoneNumber.type == null)
      this.update_phoneNumber.type = this.phone_namber.type;
    this.update_phoneNumber.id = this.phone_namber.id;
    this.update_phoneNumber.idCompanies = this.phone_namber.idCompanies;
    this.update_phoneNumber.creationDate = this.phone_namber.creationDate;

    this.mrserviseL.Update_phone(this.update_phoneNumber).subscribe(
      data => (this.phone_namber = data, console.log(data), this.change_type(data.type), this.change_status(data.status), alert("הלקוח עודכן בהצלחה")),
      err => alert("בעיה בעדכון הלקוח"));
    this.myServiseCompany.getAllPhoneForCompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => (this.phoneNumberList1 = data, console.log(data), this.phone_namber = data[0]
      ),
      err => console.log());

  }

  change_type(t: number) {
    if (t == 0)
      this.type_kesher = "ליד"
    if (t == 1)
      this.type_kesher = "מהטלפנית"
    if (t == 2)
      this.type_kesher = "נכנס אלינו"
  }

  change_status(t: number) {
    if (t == 0)
      this.status_lead = "לא עונים"
    if (t == 1)
      this.status_lead = "בטיפול במערכת"
    if (t == 2)
      this.status_lead = "אשפה"
    if (t == 3)
      this.status_lead = "שיחה עתידית"
    if (t == 4)
      this.status_lead = "התקבל_מהמערכת_ולא_טופל"
    if (t == 5)
      this.status_lead = "לא_טופל"
  }

  clo() {
    this.myServiseCompany.getAllPhoneForCompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => (this.phoneNumberList1 = data, console.log(data)
      ),
      err => console.log());
    this.phone_namber = new PhoneNumbers()
  }

  showLead() {
    this.phoneNumberList1 = [];
    this.phoneList3.forEach(element => {
      if (element.type == 0)
        this.phoneNumberList1.push(element);
    });
  }

  showAll() {
    this.phoneNumberList1 = this.phoneList3;
  }

  showCom() {
    this.phoneNumberList1 = [];
    this.phoneList3.forEach(element => {
      if (element.type == 2)
        this.phoneNumberList1.push(element);
    })
  }

  showPhoneT() {
    this.phoneNumberList1 = [];
    this.phoneList3.forEach(element => {
      if (element.type == 1)
        this.phoneNumberList1.push(element);
    })
  }


  changeValue() {
    this.phoneNumberList1 = []
    this.phoneList3.forEach(element => {
      if (element.firstName.startsWith(this.nameforSearch) || element.lastName.startsWith(this.nameforSearch)) {
        this.phoneNumberList1.push(element)
      }
    });

  }

  changeValue1() {
    this.phoneNumberList1 = []
    this.phoneList3.forEach(element => {
      if (element.id == this.id1) {
        this.phoneNumberList1.push(element)
      }
    });



  }
  
  updateList() {
    this.phoneNumberList1 = this.phoneList3;
  }

}
