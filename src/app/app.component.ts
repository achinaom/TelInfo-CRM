import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { LogInService } from './servises/log-in.service';
import { InWorkingService } from './servises/in-working.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public myLoginservise:LogInService,public myworkerServise:InWorkingService) {
   }
// id_telephonist:number;
// id_company:number;
// home:number=parseInt(sessionStorage.getItem("home"));
  ngOnInit(): void {
    
// if(!sessionStorage.getItem("id_telephonist")&& !sessionStorage.getItem("id_company"))
// {
// sessionStorage.setItem("home","1")
// this.home=1}
// if(sessionStorage.getItem("id_telephonist"))
// this.id_telephonist=1
// if(sessionStorage.getItem("id_company"))
// this.id_company=1
   

  //   this.results = this.searchText.pipe(
  //     startWith(''),
  //     map((value: string) => this.filter(value))
  //   );
  // }
  // title = 'mdb-angular-free';
  // searchText = new Subject();
  // results: Observable<string[]>;
  // data: any = [
  //   'red',
  //   'green',
  //   'blue',
  //   'cyan',
  //   'magenta',
  //   'yellow',
  //   'black',
  // ];

  // filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  // }
}


}


