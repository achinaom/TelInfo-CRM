import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Calls } from 'src/app/classes/Calls';
import { Contribution } from 'src/app/classes/Contribution';
import { LeadAndCalls } from 'src/app/classes/LeadAndCalls';
import { PhoneNumbers } from 'src/app/classes/PhoneNumbers';
import { Respons } from 'src/app/classes/Respons';
import { Telephonist } from 'src/app/classes/Telephonist';
import { CallsService } from 'src/app/servises/calls.service';
import { ContributionService } from 'src/app/servises/contribution.service';
import { DecodingService } from 'src/app/servises/decoding.service';
import { InWorkingService } from 'src/app/servises/in-working.service';
import { LeadsService } from 'src/app/servises/leads.service';
import { TelephonistInCompanyService } from 'src/app/servises/telephonist-in-company.service';


@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  tK: number;
  arrSelect: string[] = []
  date_contribution: Date;
  sum_contribution: string;
  id2: string;
  date3: Date = new Date();
  nncall: Calls = new Calls();
  time_Call: Date;
  date1: Date
  date2: Date
  degel: boolean = false;
  modal_text: string;
  mail: string
  note: string;
  flag: number
  bool1: boolean = false;
  bool2: boolean = false;
  bool3: boolean = false;
  bool4: boolean = true;
  bool5: boolean = false;
  bool6: boolean = false;
  bool7: boolean = false;
  bool8: boolean = false;
  bool9: boolean = false;
  bool10: boolean = false;
  bool11: boolean = false;
  bool12: boolean = false;
  call_done: Calls = undefined;
  new_contribute: Contribution;
  time1: Time;
  text_call: string
  date_call: Date;
  date_return: Date;
  type_kesher: string
  name = "רינה אמסלם"
  phone_namber: PhoneNumbers = new PhoneNumbers();
  calls: Calls[] = [];
  contribution: Contribution[] = []
  newCall: Calls = new Calls();
  respons1: Respons;
  history_calls: Calls[];
  future_calls: Calls[];
  id: number = 1;
  cnew: Contribution = new Contribution();
  str: string = "";
  boolC: boolean = false;
  ndate: Date = new Date();
  ntime: Date = new Date();
  degelModalErr: boolean = false;
  degelModalOk: boolean = false;
  Password100: String;
  str1: String = "";
  str2: String = "";
  str4: String[] = [];
  modaltitle: string = "השיחה נוספה בהצלחה"
  telephonist1: Telephonist;
  id_call: number;
  status_lead: string;
  update_phoneNumber: PhoneNumbers = new PhoneNumbers();
  calls_with_transcript: Calls[] = [];
  today_date: string = new Date().toUTCString()
  str_time: String;
  str_time_arr: string[];
  id1: string

  constructor(private mrserviseL: LeadsService, private mytelephonistCservise: TelephonistInCompanyService, private a: ActivatedRoute, private MyDecodeServise: DecodingService,
    private myCallsService: CallsService, private myworkerServise: InWorkingService, private myContributionServise: ContributionService) { }

  ngOnInit(): void {
    debugger
    this.nncall = undefined;
    this.call_done = undefined;
    this.arrSelect.push("כל השיחות")
    this.arrSelect.push("הסטוריית שיחות")
    this.arrSelect.push("שיחות עתידיות")
    this.arrSelect.push("תרומות")
    this.arrSelect.push("הערות")
    this.a.params.subscribe(x => { this.id = x["id"] })
    this.a.params.subscribe(x => { this.id_call = x["idCall"] })
    this.mrserviseL.getPhone_number(this.id).subscribe(
      data => (this.phone_namber = data, console.log(data), this.change_type(data.type), this.change_status(data.status)),
      err => console.log());
    this.mytelephonistCservise.GetTelephonistByIdTelephonistCompany(parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.telephonist1 = data, console.log(data)),
      err => console.log());
    this.myCallsService.get_call_by_id_call(this.id_call).subscribe(
      data => (this.call_done = data, console.log(data)),
      err => console.log(err));
  }

  change_type(t: number) {
    if (t == 0)
      this.type_kesher = "ליד"
    if (t == 1)
      this.type_kesher = "מהטלפנית"
    if (t == 2)
      this.type_kesher = "נכנס אלינו"
  }

  change_status(t: number) {
    if (t == 0)
      this.status_lead = "לא עונים"
    if (t == 1)
      this.status_lead = "אשפה"
    if (t == 2)
      this.status_lead = "שיחה עתידית"
    if (t == 3)
      this.status_lead = "לא_טופל"

  }

  //חיצה על פרטים
  datails() {
    this.bool1 = true;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = false;
  }

  //לחיצה על תרומות
  trumot() {
    this.bool1 = false;
    this.bool2 = true;
    this.bool3 = false;
    this.bool4 = false;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = false;
    this.myContributionServise.get_contribution_for_phone_and_telephonist(this.id, parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.contribution = data),
      err => console.log());
  }

  // לחיצה על הערות
  notes() {
    debugger
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = true;
    this.bool4 = false;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = false;
    this.myCallsService.get_all_history_calls_for_phone_and_telephonist(this.id, parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.chooseNotNulCall(data), console.log(data)),
      err => console.log(err));
  }

  chooseNotNulCall(data: Calls[]) {
    debugger
    this.calls_with_transcript = [];
    data.forEach(element => {
      debugger
      if (element.transcriptCall != null) {
        this.calls_with_transcript.push(element);
      }
    })
    this.history_calls = this.calls_with_transcript;
  }

  // לחיצה על תבניות
  tavnit() {
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = true;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = false;
  }

  tavnit10(call: Calls) {
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = true;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = false;
    debugger
    this.call_done = call;
  }

  tavnit1() {
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = true;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = false;
    this.degel = true;
  }

  // לחיצה על היסטוריה
  history() {
    debugger
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
    this.bool5 = true;
    this.bool11 = false;
    this.bool12 = false;
    this.myCallsService.get_all_history_calls_for_phone_and_telephonist(this.id, parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.history_calls = data.sort((n1, n2) => {
        debugger
        if (n1.dateCall > n2.dateCall)
          return 1
        else if (n1.dateCall < n2.dateCall) {
          return -1;
        }
        else {
          if (n1.timeCall > n2.timeCall) {
            return 1;
          }
          if (n1.timeCall < n2.timeCall) {
            return -1;
          }
        }
        return 0;
      })),
      err => console.log(err));
  }

  future() {
    debugger
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
    this.bool5 = false;
    this.bool11 = true;
    this.bool12 = false;
    this.myCallsService.get_all_future_calls_for_phone_and_telephonist(this.id, parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.future_calls = data.sort((n1, n2) => {
        debugger
        if (n1.dateCall > n2.dateCall)
          return 1
        else if (n1.dateCall < n2.dateCall) {
          return -1;
        }
        else {
          if (n1.timeCall > n2.timeCall) {
            return 1;
          }
          if (n1.timeCall < n2.timeCall) {
            return -1;
          }
        }
        return 0;
      })),
      err => console.log(err));
  }

  all_calls() {
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
    this.bool5 = false;
    this.bool11 = false;
    this.bool12 = true;
    this.myCallsService.get_all_calls_for_phone_and_telephonist(this.id, parseInt(sessionStorage.getItem("id_telephonist"))).subscribe(
      data => (this.calls = data.sort((n1, n2) => {
        if (n1.dateCall > n2.dateCall)
          return 1
        else if (n1.dateCall < n2.dateCall) {
          return -1;
        }
        else {
          if (n1.timeCall > n2.timeCall) {
            return 1;
          }
          if (n1.timeCall < n2.timeCall) {
            return -1;
          }
        }
        return 0;
      })),
      err => console.log());
  }

  send_transcription() {
    this.MyDecodeServise.Get_Call_By_transciption(this.note, this.id).subscribe(
      data => { this.show_resons(data) },
      err => console.log());
    if (this.call_done != undefined) {
      this.call_done.transcriptCall = this.note;

      this.myCallsService.update_call1(this.call_done).subscribe(
        data => { this.call_done = data },
        err => { console.log(err) });
    }
    else {
      this.nncall.transcriptCall = String(this.note);
      this.myCallsService.update_call1(this.nncall).subscribe(
        data => { this.nncall = data },
        err => { console.log(err) });
    }
  }

  show_resons(data: Respons) {
    if (data == null)
      alert(".שים לב לשלוח תמלול תקין ללא מספרים ורווחים מיותרים")
    else {
      debugger
      this.respons1 = data
      this.str4 = data.text.split('הפרדה')
      this.str1 = this.str4[0];
      this.str2 = this.str4[1];
      this.date_call = data.dateCall
      this.flag = data.type_m
      this.change_flag(data.type_m)
      console.log("iii")
    }
  }

  change_flag(n: number) {
    if (this.respons1.type_m == 1) {
      this.bool6 = true;
      this.bool7 = true;
      this.bool8 = false;
      this.bool9 = false;
    }

    if (this.flag == 2) {
      this.bool6 = true;
      this.bool7 = true;
      this.bool8 = false
      this.bool9 = true;

    }
    if (this.flag == 3) {
      this.bool6 = false;
      this.bool7 = false;
      this.bool8 = true;
      this.bool9 = false;
    }
  }

  newcall1() {
    if (this.date1 == undefined)
      alert("אנא בחר תאריך")
    else if (this.date2 == undefined)
      alert("אנא בחר שעה")
    else {
      this.str_time = this.date2.toString();
      this.str_time_arr = this.str_time.split(':');
      this.id1 = this.id.toString()
      this.newCall.idPhoneNumber = parseInt(this.id1);
      this.newCall.idTelephonist = parseInt(sessionStorage.getItem("id_telephonist"));
      this.newCall.transcriptCall = null;
      this.newCall.dateCall = this.date1;
      this.newCall.done = 0;
      this.newCall.timeCall = new Date(2001, 1, 1, parseInt(this.str_time_arr[0]), parseInt(this.str_time_arr[1]), 0)
      debugger
      this.myCallsService.Add_call_for_telephonnist(this.newCall).subscribe(
        data => {
          this.modal_text = "השיחה נוספה בהצלחה לתאריך"; this.date_call = data[data.length - 1].dateCall; this.time_Call = data[data.length - 1].timeCall; this.calls = data.sort((n1, n2) => {
            if (n1.dateCall > n2.dateCall)
              return 1
            else if (n1.dateCall < n2.dateCall) {
              return -1;
            }
            else {
              if (n1.timeCall > n2.timeCall) {
                return 1;
              }
              if (n1.timeCall < n2.timeCall) {
                return -1;
              }
            }
            return 0;
          }); debugger;
        },
        err => { console.log(err); this.degelModalOk = true; this.modaltitle = "תקלה בשמירת השיחה"; debugger; });
    }
  }

  new_transkript() {
    this.date3 = new Date();
    this.degel = true;
    if (this.call_done != undefined) {
      this.call_done.done = 1;
      this.call_done.dateCall = this.date3;
      this.call_done.dateCall.setHours(this.call_done.dateCall.getHours() + 3)
      this.call_done.timeCall = this.date3;
      this.myCallsService.update_call(this.call_done).subscribe(
        data => {
          this.call_done = data
        },
        err => {
          console.log(err)
        });
      alert("התאריך והשעה של השיחה שנבחרה מעודכנים לתאריך והשעה העכשויים.")
    }
    else {
      this.date3 = new Date();
      this.nncall = new Calls();
      this.id2 = String(this.id);
      this.nncall.idPhoneNumber = parseInt(this.id2);
      this.nncall.idTelephonist = parseInt(sessionStorage.getItem("id_telephonist"));
      this.nncall.transcriptCall = null;
      this.nncall.timeCall = this.date3;
      this.nncall.dateCall = this.date3;
      this.nncall.done = 1;
      this.myCallsService.Add_call_for_telephonnist(this.nncall).subscribe(
        data => { debugger; this.nncall = data[data.length - 1], this.degelModalErr = true, alert("נוצרה שיחה חדשה") },
        err => { debugger; console.log(err), this.degelModalOk = true, this.modaltitle = "תקלה בשמירת השיחה" });
    }
  }

  ok_call() {
    debugger
    this.id1 = this.id.toString()
    this.newCall.idPhoneNumber = parseInt(this.id1);
    this.newCall.idTelephonist = parseInt(sessionStorage.getItem("id_telephonist"));
    this.newCall.transcriptCall = null;
    this.newCall.dateCall = this.date_call;
    this.newCall.timeCall = this.date_call;
    this.newCall.done = 0;
    this.myCallsService.Add_call_for_telephonnist(this.newCall).subscribe(
      data => {
        this.calls = data.sort((n1, n2) => {
          debugger
          if (n1.dateCall > n2.dateCall)
            return 1
          else if (n1.dateCall < n2.dateCall) {
            return -1;
          }
          else {
            if (n1.timeCall > n2.timeCall) {
              return 1;
            }
            if (n1.timeCall < n2.timeCall) {
              return -1;
            }
          }
          return 0;
        }); this.degelModalErr = true; this.note = ""; this.degel = false; this.nncall = undefined; this.call_done = undefined; debugger;
      },
      err => { debugger; console.log(err), this.degelModalOk = true, this.modaltitle = "תקלה בשמירת השיחה" });
  }

  add_contribute() {
    this.new_contribute = new Contribution();
    debugger
    this.id1 = this.id.toString();
    this.new_contribute.idPhone = parseInt(this.id1);
    this.new_contribute.sum_contribution = parseInt(this.sum_contribution);
    this.new_contribute.dateC = this.date_contribution;
    if (parseInt(this.sum_contribution) > 3000)
      this.str = " המערכת זיהתה תרומה עם סכום מכובד מאוד ועל כן קבעה שיחה לעוד כשנה תוכל לצפות בבשיחה זו בשיחות עתידיות"
    else if (parseInt(this.sum_contribution) > 2000)
      this.str = " המערכת זיהתה תרומה עם סכום מכובד  ועל כן קבעה שיחה לעוד כחצי שנה תוכל לצפות בשיחה זו בשיחות עתידיות"
    else
      this.str = " המערכת זיהתה תרומה עם סכום המתאים לו שיחה לעוד כשלושה חודשים ועל כן קבעה שיחה לתאריך זה תוכל לצפות בשיחה זו בשיחות עתידיות"
    this.new_contribute.idTelephonistCompany = parseInt(sessionStorage.getItem("id_telephonist"));;
    this.myContributionServise.Add_contribute(this.new_contribute).subscribe(
      data => (this.contribution = data.sort((n1, n2) => {
        debugger
        if (n1.dateC > n2.dateC)
          return 1
        else if (n1.dateC < n2.dateC) {
          return -1;
        }
        else {
          if (n1.sum_contribution > n2.sum_contribution) {
            return 1;
          }
          if (n1.sum_contribution < n2.sum_contribution) {
            return -1;
          }
        }
        return 0;
      }), console.log(data), this.show_call_becouse_contribute(data)),
      err => console.log("שגיאה"));
  }

  showMore(name: string) {
    debugger
    if (name == "כל השיחות")
      this.all_calls();
    if (name == "הסטוריית שיחות")
      this.history();
    if (name == "שיחות עתידיות")
      this.future();
    if (name == "תרומות")
      this.trumot()
    if (name == "הערות")
      this.notes()

  }

  show_call_becouse_contribute(contributeList1: Contribution[]) {
    debugger
    this.cnew = contributeList1[contributeList1.length];

  }

  changeDegel() {
    this.boolC = false;
  }

  saveChangForLead() {
    if (this.update_phoneNumber.firstName == null)
      this.update_phoneNumber.firstName = this.phone_namber.firstName;
    if (this.update_phoneNumber.lastName == null)
      this.update_phoneNumber.lastName = this.phone_namber.lastName;
    if (this.update_phoneNumber.mail == null)
      this.update_phoneNumber.mail = this.phone_namber.mail;
    if (this.update_phoneNumber.phone2 == null)
      this.update_phoneNumber.phone2 = this.phone_namber.phone2;
    if (this.update_phoneNumber.phone == null)
      this.update_phoneNumber.phone = this.phone_namber.phone;
    if (this.update_phoneNumber.address == null)
      this.update_phoneNumber.address = this.phone_namber.address;
    if (this.update_phoneNumber.city == null)
      this.update_phoneNumber.city = this.phone_namber.city;
    if (this.update_phoneNumber.placeWorking == null)
      this.update_phoneNumber.placeWorking = this.phone_namber.placeWorking;
    if (this.update_phoneNumber.status == null)
      this.update_phoneNumber.status = this.phone_namber.status;
    if (this.update_phoneNumber.type == null)
      this.update_phoneNumber.type = this.phone_namber.type;
    this.update_phoneNumber.id = this.phone_namber.id;
    this.update_phoneNumber.idCompanies = this.phone_namber.idCompanies;
    this.update_phoneNumber.creationDate = this.phone_namber.creationDate;
    if (this.status_lead == "1")
      this.update_phoneNumber.status = 0;
    if (this.status_lead == "2")
      this.update_phoneNumber.status = 1;
    if (this.status_lead == "3")
      this.update_phoneNumber.status = 2;
    if (this.status_lead == "4")
      this.update_phoneNumber.status = 3;
    this.tK = parseInt(this.type_kesher)
    this.update_phoneNumber.type = this.tK;
    this.mrserviseL.Update_phone(this.update_phoneNumber).subscribe(
      data => (this.phone_namber = data, console.log(data), this.change_type(data.type), this.change_status(data.status), alert("הלקוח עודכן בהצלחה")),
      err => console.log());
  }
  
  saveChangeStatus() {
    debugger
    if (this.status_lead == "1")
      this.phone_namber.status = 0;
    if (this.status_lead == "2")
      this.phone_namber.status = 1;
    if (this.status_lead == "3")
      this.phone_namber.status = 2;
    if (this.status_lead == "4")
      this.phone_namber.status = 3;
    this.mrserviseL.Update_phone(this.phone_namber).subscribe(
      data => (this.phone_namber = data, console.log(data), this.change_type(data.type), this.change_status(data.status)),
      err => console.log());
  }

  ashpa() {
    this.phone_namber.status = 1;
    this.mrserviseL.Update_phone(this.phone_namber).subscribe(
      data => (this.phone_namber = data, console.log(data), this.change_type(data.type), this.change_status(data.status)),
      err => console.log());
  }

  close_call() {
    debugger
    this.note = "";
    this.nncall = undefined;
    this.call_done = undefined;
    this.degel = false;
  }
}
