import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'src/app/classes/Companies';
import { Telephonist } from 'src/app/classes/Telephonist';
import { CompanyService } from 'src/app/servises/company.service';
import { InWorkingService } from 'src/app/servises/in-working.service';
import { LogInService } from 'src/app/servises/log-in.service';
import { TelephonistService } from 'src/app/servises/telephonist.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  mail: string = "";
  password: string = "";
  companies: Companies = new Companies();
  telephonist: Telephonist = new Telephonist();
  error: string = ""
  log_in_number: any = 0;

  constructor(private myTelephonistservice: TelephonistService,
     private myWorkerServise: InWorkingService,
      private myLoginservise: LogInService,
       private router: Router) {
  }
  
  ngOnInit() {
    sessionStorage.removeItem("id_company")
    sessionStorage.removeItem("id_telephonist")
    this.myWorkerServise.n = 0
  }

  login() {
    debugger
    this.myLoginservise.log_in(this.mail, this.password).subscribe(
      data => (this.check(data), this.log_in_number = data),
      err => (console.log(err), this.log_in_number = err))

  }

  check(data: number) {
    debugger
    if (data == 2) {
      this.log_incompany()
      console.log(data)
    }
    if (data == 1)
      this.log_in_telephonist();
    if (data == 0) {
      sessionStorage.removeItem("id_company")
      sessionStorage.removeItem("id_telephonist")
      sessionStorage.removeItem("name_telephonist")
      sessionStorage.removeItem("name_compny")
      sessionStorage.removeItem("name_manager")
      alert("שם משתמש או סיסמא שגויים! אנא נסה שוב")
      sessionStorage.setItem('home', "1")
    }
  }

  log_in_telephonist() {
    this.myLoginservise.get_telephonist(this.mail, this.password).subscribe(
      data => (console.log(data), this.telephonist = data, sessionStorage.setItem('id_telephonist', String(data.id)), this.myWorkerServise.id_telephonist = data.id, this.myWorkerServise.id_company = null, this.myWorkerServise.home = null),
      err => console.log(err))
    this.myWorkerServise.n = 1;
    sessionStorage.removeItem("id_company")
    sessionStorage.removeItem("home")
    this.router.navigate(['/home'])
  }

  log_incompany() {
    this.myLoginservise.get_companey(this.mail, this.password).subscribe(
      data => (console.log(data), this.companies = data, sessionStorage.setItem('id_company', String(data.id)), this.myWorkerServise.id_company = data.id, this.myWorkerServise.id_telephonist = null, this.myWorkerServise.home = null),
      err => console.log(err))
    sessionStorage.removeItem("id_telephonist")
    sessionStorage.removeItem("home")
    this.router.navigate(['/main-company']);
  }
}