import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/servises/company.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mail2: string = "";
  constructor(private serviseC: CompanyService) { }
  ngOnInit(): void {
    sessionStorage.removeItem("id_telephonist")
    sessionStorage.removeItem("id_company")
    sessionStorage.setItem("home", "1")
  }
  send_sebscribe() {
    this.serviseC.SendEmail_subscribe(this.mail2).subscribe(
      data => (alert("כתובת המייל שלך נוסף לקבלת עדכונים")),
      err => alert("כתובת מייל לא תקינה"));
  }
}
