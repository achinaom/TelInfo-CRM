import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Companies } from 'src/app/classes/Companies';
import { Telephonist } from 'src/app/classes/Telephonist';
import { TelephonistInCompanyDetails } from 'src/app/classes/TelephonistInCompanyDetails';
import { CompanyService } from 'src/app/servises/company.service';
import { InWorkingService } from 'src/app/servises/in-working.service';
import { LogInService } from 'src/app/servises/log-in.service';
import { TelephonistService } from 'src/app/servises/telephonist.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TelephonistInCompanyService } from 'src/app/servises/telephonist-in-company.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private telephnistServise: TelephonistService,
     private companiesServise: CompanyService,
      public myLoginservise: LogInService,
    private telephonist_in_company_servise: TelephonistInCompanyService,
     public workingServise: InWorkingService) {
  }

  degel1: boolean = false;
  degel2: boolean = false;
  telephonistInCompanyDetails1: TelephonistInCompanyDetails[] = [];
  telephonistDetails: TelephonistInCompanyDetails = new TelephonistInCompanyDetails();
  newtelephonist: Telephonist = new Telephonist()
  password: string
  companiesList: Companies[] = [];
  degel: boolean = false;
  Company_show: Companies = new Companies();

  ngOnInit(): void {
    this.workingServise.n = 0;
    this.companiesServise.getAllCompanies().subscribe(
      data => { this.companiesList = data; debugger; console.log(data); },
      err => console.log(err));

  }


  log_in() {
    sessionStorage.removeItem("id_telephonist");
    sessionStorage.removeItem("id_company");
    this.workingServise.home = 1;
    this.workingServise.id_company = null;
    this.workingServise.id_telephonist = null;
  }

  show_my_account() {
    debugger
    if (sessionStorage.getItem("id_company")) {
      this.degel1 = true;
      debugger
      for (let index = 0; index < this.companiesList.length; index++) {
        if (this.companiesList[index].id == parseInt(sessionStorage.getItem("id_company"))) {
          this.Company_show = this.companiesList[index]
          this.degel1 = true;
          this.degel2 = false;

        }
      }
    }
    if (sessionStorage.getItem("id_telephonist")) {
      this.telephonist_in_company_servise.GetTelephonistinCompanyByIdTelephonistInCopmany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
        data => { this.hh(data.idCompany), console.log("hhhhhhhhhhhhh"), this.degel == true },
        err => console.log("777777777777"));

    }
  }

  hh(id_company: number) {
    this.companiesServise.GetAllTelephonistByIDompany(id_company).subscribe(
      data => { this.ss(data), console.log(data), this.degel == true },
      err => console.log(err));
  }

  ss(data: TelephonistInCompanyDetails[]) {
    this.telephonistInCompanyDetails1 = data;
    this.telephonistInCompanyDetails1.forEach(element => {
      debugger
      if (element.idTelephonistInCompany == parseInt(sessionStorage.getItem("id_telephonist"))) {
        this.telephonistDetails = element;
        this.degel2 = true;
        this.degel1 = false;

      }

    })
  }

  saveDetails_company() {
    this.companiesServise.UpdateCompanies(this.Company_show).subscribe(
      data => { this.companiesList = data; debugger; console.log(data); },
      err => console.log(err));

  }


  upate_telephonist1() {
    this.telephnistServise.upate_telephonist(this.telephonistDetails).subscribe(
      data => (alert("הטלפנית עודכנה בההצלחה")),
      err => console.log(err));
    this.companiesServise.GetAllTelephonistByIDompany(parseInt(sessionStorage.getItem("id_company"))).subscribe(
      data => { debugger; this.telephonistInCompanyDetails1 = data, console.log(data), this.degel == true },
      err => console.log());
  }
}
