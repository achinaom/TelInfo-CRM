import { Component, OnInit } from '@angular/core';
import { Contribution } from 'src/app/classes/Contribution';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { Telephonist } from 'src/app/classes/Telephonist';
import { ContributionService } from 'src/app/servises/contribution.service';
import { LeadsService } from 'src/app/servises/leads.service';
import { TelephonistInCompanyService } from 'src/app/servises/telephonist-in-company.service';

@Component({
  selector: 'app-contribution-list',
  templateUrl: './contribution-list.component.html',
  styleUrls: ['./contribution-list.component.scss']
})
export class ContributionListComponent implements OnInit {
  contributionList: Contribution[];
  phone: PhoneNumbers = new PhoneNumbers();
  telephonist: Telephonist = new Telephonist();
  sum_for_month: number = 0;
  sum_for_day: number = 0;
  date1: Date = new Date
  
  constructor(private myContributeServise: ContributionService, 
    private MyTelephonistCompanyServise: TelephonistInCompanyService,
     private MyPhoneNumberServise: LeadsService) { }

  ngOnInit(): void {
    this.myContributeServise.get_contribution_for_company().subscribe(
      data => (this.contributionList = data, console.log(data), data.forEach(element => {
        this.sum_for_month += element.sum_contribution
        if (element.dateC == this.date1)
          this.sum_for_day += element.sum_contribution
      })
      ),
      err => console.log(err));
  }

  show11(cnt: Contribution[]) {
    cnt.forEach(element => {
      this.sum_for_month += element.sum_contribution;
    });
  }
  
  showDetailsPhone(id: number) {
    this.MyPhoneNumberServise.getPhone_number(id).subscribe(
      data => (this.phone = data, console.log(data)),
      err => console.log(err));
  }

  ShowDetailsTelephonist(id: number) {
    this.MyTelephonistCompanyServise.GetTelephonistByIdTelephonistCompany(id).subscribe(
      data => (this.telephonist = data, console.log(data)),
      err => console.log(err));
  }

}

