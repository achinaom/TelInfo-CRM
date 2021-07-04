import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeadAndCalls } from 'src/app/classes/LeadAndCalls';
import { CallsService } from 'src/app/servises/calls.service';
import { InWorkingService } from 'src/app/servises/in-working.service';
import { DatePipe } from '@angular/common';
import { Calls } from 'src/app/classes/Calls';


@Component({
  selector: 'app-calendar-telephonist',
  templateUrl: './calendar-telephonist.component.html',
  styleUrls: ['./calendar-telephonist.component.scss'],
  providers: [DatePipe]

})
export class CalendarTelephonistComponent implements OnInit {
  date1: Date = new Date();
  editField: string;
  chooseId: number = 0;
  today: Date = new Date();
  degel1: boolean = false;
  call_for_today_list: LeadAndCalls[] = [];
  id: number;
  date3: Date;
  date2: Date;
  str_time: String;
  str_time_arr: string[];
  call: Calls = new Calls();
  updateCallItem: LeadAndCalls = new LeadAndCalls();

  constructor(private datePipe: DatePipe,
     private myCallServise: CallsService, 
     private myWorkerServise: InWorkingService, 
     private router: Router) {
  }

  ngOnInit(): void {
    this.today = new Date();
    this.date1;
    this.myCallServise.get_calls_for_today_allcall(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.call_for_today_list = data.sort((n1, n2) => {
        debugger
        if (n1.timeCall > n2.timeCall)
          return 1
        else if (n1.timeCall < n2.timeCall) {
          return -1;
        }
        return 0;
      }), console.log(data), this.degel1 = true),
      err => console.log(err))
  }

  //הצגת כל השיחות בלחיצה על תאריך מסויים
  showCalls() {
    this.myCallServise.get_calls_of_a_certain_date(parseInt(sessionStorage.getItem("id_telephonist")), this.date1).subscribe(
      data => (this.call_for_today_list = data.sort((n1, n2) => {
        if (n1.timeCall > n2.timeCall)
          return 1
        else if (n1.timeCall < n2.timeCall) {
          return -1;
        }
        return 0;
      }), console.log(data)),
      err => console.log(err))
  }

  show_details(item: LeadAndCalls) {
    this.id = item.idCall;
  }

  updateC(c: LeadAndCalls) {

    this.updateCallItem = c;
  }

  update() {
    debugger
    this.call.dateCall = this.date3;
    this.str_time = this.date2.toString();
    this.str_time_arr = this.str_time.split(':');
    this.call.timeCall = new Date(2001, 1, 1, parseInt(this.str_time_arr[0]), parseInt(this.str_time_arr[1]), 0)
    this.call.id = this.updateCallItem.idCall;
    this.call.done = this.updateCallItem.done;
    this.call.idPhoneNumber = this.updateCallItem.leadId;
    this.call.transcriptCall = " ";
    this.call.idTelephonist = 1;
    this.myCallServise.update_call(this.call).subscribe(
      data => console.log(data),
      err => alert("שגיאה במהלך העדכון")
    )
    debugger
    this.myCallServise.get_calls_of_a_certain_date(parseInt(sessionStorage.getItem("id_telephonist")), this.date1).subscribe(
      data => (this.call_for_today_list = data.sort((n1, n2) => {
        debugger
        if (n1.timeCall > n2.timeCall)
          return 1
        else if (n1.timeCall < n2.timeCall) {
          return -1;
        }
        return 0;
      }), console.log(data)),
      err => console.log(err))
  }

  remove() {
    debugger
    this.myCallServise.delete_call(this.chooseId, parseInt(sessionStorage.getItem("id_telephonist")), this.date1).subscribe(
      data => (alert("השיחה נמחקה בהצלחה"), console.log(data)),
      err => alert("היתה עבעיה במחיקת השיחה"))
    this.myCallServise.get_calls_of_a_certain_date(parseInt(sessionStorage.getItem("id_telephonist")), this.date1).subscribe(
      data => (this.call_for_today_list = data.sort((n1, n2) => {
        debugger
        if (n1.timeCall > n2.timeCall)
          return 1
        else if (n1.timeCall < n2.timeCall) {
          return -1;
        }
        return 0;
      }), console.log(data)),
      err => console.log(err))
  }

  putid(id: number) {
    this.chooseId = id;
  }

  update_choosing_id() {
    this.chooseId = 0;
  }
}
