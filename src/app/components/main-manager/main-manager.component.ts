import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/classes/Companies';
import { CompanyService } from 'src/app/servises/company.service';

@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.scss']
})
export class MainManagerComponent implements OnInit {

  constructor(private companiesServise: CompanyService) { }
  companiesList: Companies[] = [];
  degel: boolean = false;
  newCompany: Companies = new Companies();
  ngOnInit(): void {

  }
  showCompanies() {
    this.companiesServise.getAllCompanies().subscribe(
      data => (this.companiesList = data, console.log(data), this.degel = true
      ),
      err => console.log(err));
  }
  addCompany() {
    this.companiesServise.addCompany(this.newCompany).subscribe(
      data => (this.companiesList = data, console.log(data), this.degel = true, console.log("החברה נוספה בהצלחה")
      ),
      err => console.log(err));
  }

}
