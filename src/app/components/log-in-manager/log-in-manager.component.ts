import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-manager',
  templateUrl: './log-in-manager.component.html',
  styleUrls: ['./log-in-manager.component.scss']
})
export class LogInManagerComponent implements OnInit {

  constructor(private route: Router) { }

  name: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  login() {
    if (this.name == "achinoam@gmail.com" && this.password == "12345") {
      this.route.navigate(['/main-manager'])
    }
    else {
      alert("שם משתמש או סיסמא שגויים")
      this.password = "";
      this.name = ""
    }
  }

}
