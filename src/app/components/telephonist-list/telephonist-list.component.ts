import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/servises/company.service';
import { TelephonistInCompanyDetails } from 'src/app/classes/TelephonistInCompanyDetails';
import { InWorkingService } from 'src/app/servises/in-working.service';
import { Telephonist } from 'src/app/classes/Telephonist';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TelephonistService } from 'src/app/servises/telephonist.service';


@Component({
  selector: 'app-telephonist-list',
  templateUrl: './telephonist-list.component.html',
  styleUrls: ['./telephonist-list.component.css']
})
export class TelephonistListComponent implements OnInit {
  degel: boolean = false;
  telephonistInCompanyDetails1: TelephonistInCompanyDetails[];
  telephonistDetails: TelephonistInCompanyDetails = new TelephonistInCompanyDetails();
  newtelephonist: Telephonist = new Telephonist()
  password: string
  update_telephonist: TelephonistInCompanyDetails = new TelephonistInCompanyDetails();
  constructor(private myServiseTelephonist: CompanyService, private myWorkerServise: InWorkingService, private MytelephonistServise: TelephonistService) { }


  ngOnInit(): void {
    // this.myServiseTelephonist.GetAllTelephonistByIDompany(this.myWorkerServise.company.id).subscribe(
    this.myServiseTelephonist.GetAllTelephonistByIDompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => { debugger; this.telephonistInCompanyDetails1 = data; console.log(); this.degel = true },
      err => console.log());
  }

  delet_telephonist_from_company() {
    this.myServiseTelephonist.GetAllTelephonistByIDompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => (this.telephonistInCompanyDetails1 = data, console.log(data)),
      err => console.log());
  }

  showDetails(id: number) {
    this.telephonistInCompanyDetails1.forEach(element => {
      if (element.idTelephonistInCompany == id)
        this.telephonistDetails = element;
    });
  }

  //הוספת טלפנית חדשה כולל הוספה לחברה
  addTelephonist() {
    this.MytelephonistServise.addTelephonist(this.newtelephonist, this.password).subscribe(
      data => (this.telephonistInCompanyDetails1 = data, console.log(data)),
      err => console.log());
  }

  upate_telephonist1() {
    this.MytelephonistServise.upate_telephonist(this.telephonistDetails).subscribe(
      data => (alert("הטלפנית עודכנה בההצלחה")),
      err => console.log(err));
    this.myServiseTelephonist.GetAllTelephonistByIDompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => { debugger; this.telephonistInCompanyDetails1 = data, console.log(data), this.degel == true },
      err => console.log());


  }
}
