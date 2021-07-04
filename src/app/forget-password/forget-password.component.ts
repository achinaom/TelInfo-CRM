import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../servises/company.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private servies: CompanyService) { }
  mail: string = "";
  name: string = "";
  ss: boolean;
  passW: string = "";
  pass1: string = "";
  pass2: string = "";
  degel1: number = 1

  ngOnInit(): void {
  }
  send() {
    this.servies.send_mail_pass(this.mail, this.name).subscribe(
      data => (this.ss = data, console.log(data), this.degel1 = 2),
      err => console.log("נא כנס מייל ותעודת זהות תקינים"));
  }

  sendPass() {
    this.servies.CheckPass(this.passW).subscribe(
      data => (this.ss = data, this.degel1 = 3),
      err => alert("סיסמא שגויה"));
  }
  
  check() {
    if (this.pass1 != this.pass2)
      alert("הסיסמאות אינן תואמות")
    else {

    }
  }
}

