import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Calls } from 'src/app/classes/Calls';
import { LeadAndCalls } from 'src/app/classes/LeadAndCalls';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { Telephonist } from 'src/app/classes/Telephonist';
import { CallsService } from 'src/app/servises/calls.service';
import { ContributionService } from 'src/app/servises/contribution.service';
import { InWorkingService } from 'src/app/servises/in-working.service';
import { LeadsService } from 'src/app/servises/leads.service';
import { LogInService } from 'src/app/servises/log-in.service';
import { TelephonistService } from 'src/app/servises/telephonist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private my_contrinutionS: ContributionService,
    private my_callsS: CallsService,
    private my_phonesS: LeadsService,
    private my_telephonistS: TelephonistService,
    private myWorksServise: InWorkingService) { }

  bool1: boolean = true;
  bool2: boolean = false;
  bool3: boolean = false;
  bool4: boolean = false;
  calls: Calls[] = [];
  phones_lead_today: PhoneNumbers[];
  phones_lead_month: PhoneNumbers[];
  phones_lead_today_count: number;
  phones_lead_month_count: number;
  telephonist: Telephonist = new Telephonist();
  no_answer_lead: LeadAndCalls[]
  for_today_lead: LeadAndCalls[]
  count_contribution_month: number = 0
  count_contribution_day: number = 0
  sum_contribution_day: number = 0
  sum_contribution_month: number = 0
  Returned_from_the_system: LeadAndCalls[] = [];
  degel1: boolean = false;
  id: number = 0;
  for_today_leadCount: number = 0;
  no_answer_leadCount: number = 0;
  Returned_from_the_systemCount: number = 0;

  ngOnInit() {
    this.telephonist = this.my_telephonistS.telephonist;
    this.my_callsS.get_Calls_for_today(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.sort(data), console.log(data)),
      err => console.log());

    this.my_callsS.get_Calls_for_today(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.for_today_leadCount = data.length, console.log(data)),
      err => console.log());

    this.my_phonesS.getLeadForDayForTelephonist(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.phones_lead_today = data, console.log(data), this.phones_lead_today_count = data.length, this.degel1 = true),
      err => console.log());

    this.my_phonesS.getLeadForMonthForTelephonist(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.phones_lead_month = data, console.log(data), this.phones_lead_month_count = data.length),
      err => console.log());

    this.telephonist = this.my_telephonistS.telephonist;

    this.my_callsS.get_no_answer__calls(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.no_answer_leadCount = data.length, console.log(data)),
      err => console.log());

    this.telephonist = this.my_telephonistS.telephonist;
    this.my_contrinutionS.get_count_Contribution_for_month(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.count_contribution_month = data),
      err => console.log());

    this.my_contrinutionS.get_count_Contribution_for_day(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.count_contribution_day = data),
      err => console.log());

    this.my_contrinutionS.get_sum_Contribution_for_day(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.sum_contribution_day = data),
      err => console.log());

    this.my_contrinutionS.get_sum_Contribution_for_month(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.sum_contribution_month = data),
      err => console.log());
  }

  sort(data: LeadAndCalls[]) {
    this.for_today_lead = data;
    this.for_today_lead = this.for_today_lead.sort((n1, n2) => {
      if (n1.timeCall > n2.timeCall) {
        return 1
      } else {
        if (n1.timeCall < n2.timeCall) {
          return -1;
        }
        return 0;
      }
    });
  }

  show_calls_for_today() {
    this.telephonist = this.my_telephonistS.telephonist;
    this.my_callsS.get_Calls_for_today(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.sort(data), console.log(data)),
      err => console.log());
    this.bool1 = true;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
  }

  no_answer() {
    this.telephonist = this.my_telephonistS.telephonist;
    this.my_callsS.get_no_answer__calls(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.no_answer_lead = data, console.log(data)),
      err => console.log());
    this.bool1 = false;
    this.bool3 = false;
    this.bool4 = false;
    this.bool2 = true;
  }

  backed() {
    this.telephonist = this.my_telephonistS.telephonist;
    this.my_callsS.Returned_from_the_system(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.Returned_from_the_system = data, console.log(data)),
      err => console.log());
    this.bool1 = false;
    this.bool2 = false;
    this.bool4 = false;
    this.bool3 = true;
  }

  month_Donations() {
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = true;
  }
}