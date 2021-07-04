import { Component, OnInit } from '@angular/core';
import { Contribution } from 'src/app/classes/Contribution';
import { ContributionService } from 'src/app/servises/contribution.service';

@Component({
  selector: 'app-telephonist-in-company-list',
  templateUrl: './telephonist-in-company-list.component.html',
  styleUrls: ['./telephonist-in-company-list.component.scss']
})
export class TelephonistInCompanyListComponent implements OnInit {

  constructor(private myContributionServise: ContributionService) { }
  contribution: Contribution[] = [];
  contribution1: Contribution[] = [];

  ngOnInit(): void {
    this.myContributionServise.All_Contribution_for_TelephonistForyDay().subscribe(
      data => (this.contribution = data, this.contribution1 = data, console.log(data)),
      err => console.log(err));
  }

  show_contribution_for_month() {
    this.myContributionServise.All_Contribution_for_TelephonistForMonth().subscribe(
      data => (this.contribution = data, this.contribution1 = data, console.log(data)),
      err => console.log(err));

  }
  show_contribution_for_year() {
    this.myContributionServise.All_Contribution_for_TelephonistForYear().subscribe(
      data => (this.contribution = data, this.contribution1 = data, console.log(data)),
      err => console.log(err));
  }
  show_contribution_for_day() {
    this.myContributionServise.All_Contribution_for_TelephonistForyDay().subscribe(
      data => (this.contribution = data, this.contribution1 = data, console.log(data)),
      err => console.log(err));
  }
}
