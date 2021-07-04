import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.removeItem("id_telephonist")
    sessionStorage.removeItem("id_company")
    sessionStorage.removeItem("name_telephonist")
    sessionStorage.removeItem("name_compny")
    sessionStorage.removeItem("name_manager")
    sessionStorage.setItem("home","1")
  }

}
