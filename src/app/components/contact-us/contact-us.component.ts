import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/servises/company.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private servies: CompanyService) { }

  mail: string = "";
  name: string = "";
  phone: string = "";
  company_name: string = "";
  massage: string = "";
  subject: string = "";
  body: string = "";
  str: string = ""
  ngOnInit(): void { }

  send() {
    debugger
    this.subject = "שלום התקבלה פניה בנוגע לחברה , מבקש שייצרו עימו קשר";
    this.body = "פלפון" + this.phone + "   שם המנהל   " + this.name + "   שם החברה  " + this.company_name + "  ההודעה שהשאירו   " + this.massage;
    this.servies.send_mail(this.mail, this.subject, this.body).subscribe(
      data => (this.str = data, console.log(data), alert("ההודעה נשלחה אנו ניצור עימך קשר בהקדם")),
      err => alert("הייתה בעיה בשליחת ההודעה בדוק את החיבור שלך לרשת"));
  }

}
