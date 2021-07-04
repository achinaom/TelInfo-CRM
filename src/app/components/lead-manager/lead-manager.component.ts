import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeadAndCalls } from 'src/app/classes/LeadAndCalls';
import { InWorkingService } from 'src/app/servises/in-working.service';

@Component({
  selector: 'app-lead-manager',
  templateUrl: './lead-manager.component.html',
  styleUrls: ['./lead-manager.component.scss']
})
export class LeadManagerComponent implements OnInit {
  progress: number;
  selectFile: File = null;
  file: File;
  message: string;
  leadandcallslist: LeadAndCalls[];
  onUploadFinished: any;
  ccounnt: number;
  degel: boolean = false;
  constructor(private http: HttpClient, private myWorker_servise: InWorkingService) { }

  ngOnInit(): void {
  }
  public uploadFile1 = () => {
    debugger
    const formData = new FormData();
    formData.append('file', this.selectFile, this.selectFile.name);
    this.myWorker_servise.getxl_file(formData).subscribe(data => {
      console.log(data);
      this.leadandcallslist = data
    }
      , err => { debugger; console.log(err); console.log("555") });
  }

  uplode(event: any) {
    this.degel = true;
    this.file = event.target.files[0];
    this.selectFile = event.target.files[0];
  }

  okLead() {
    this.degel = false;
    this.leadandcallslist = []
  }
}
