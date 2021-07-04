import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/classes/Companies';
import { CompanyService } from 'src/app/servises/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companiesServise: CompanyService) { }
  
  degel1: boolean = false;
  companiesList: Companies[] = [];
  degel: boolean = false;
  Company_show: Companies = new Companies();

  ngOnInit(): void {
    this.companiesServise.getAllCompanies().subscribe(
      data => { this.companiesList = data; debugger; this.show(data), console.log(data); this.degel1 = true },
      err => console.log(err));
  }

  show(data: Companies[]) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].id == parseInt(sessionStorage.getItem("id_company"))) {
        this.Company_show = data[index]
        this.degel1 = true;
      }
    }
  }
}
