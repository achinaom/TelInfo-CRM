
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CallsService } from './servises/calls.service';
import { AboutComponent } from './components/about/about.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LeadComponent } from './components/lead/lead.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ContributionService } from './servises/contribution.service';
import { CompanyService } from './servises/company.service';
import { LeadsService } from './servises/leads.service';
import { LogInService } from './servises/log-in.service';
import { TelephonistService } from './servises/telephonist.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TelephonistListComponent } from './components/telephonist-list/telephonist-list.component';
import { CalendarTelephonistComponent } from './components/calendar-telephonist/calendar-telephonist.component';
import { LeadManagerComponent } from './components/lead-manager/lead-manager.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContributionListComponent } from './components/contribution-list/contribution-list.component';
import { PhoneNumberListComponent } from './components/phone-number-list/phone-number-list.component';
import { CallsListComponent } from './components/calls-list/calls-list.component';
import { MainManagerComponent } from './components/main-manager/main-manager.component';
import { NewPhoneComponent } from './components/new-phone/new-phone.component';
import { PhoneListTelephonistComponent } from './components/phone-list-telephonist/phone-list-telephonist.component';
import { ShowTypePhonePipe } from './pipes/show-type-phone.pipe';
import { ShowStatusPhonePipe } from './pipes/show-status-phone.pipe';
import { ShowCallsDonePipe } from './pipes/show-calls-done.pipe';
import { LogInManagerComponent } from './components/log-in-manager/log-in-manager.component';
import { TelephonistInCompanyListComponent } from './components/telephonist-in-company-list/telephonist-in-company-list.component';

// // MDB Angular Pro
// import { TabsModule, WavesModule } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    //קומפוננטות
    TelephonistListComponent,
    AppComponent,
    AboutComponent,
    CompanyComponent,
   ContactUsComponent,
HomeComponent,
LeadComponent,
LogInComponent,
MainHomeComponent,
NavComponent,
SignInComponent,
CalendarTelephonistComponent,
LeadManagerComponent,
ForgetPasswordComponent,
ContributionListComponent,
PhoneNumberListComponent,
CallsListComponent,
MainManagerComponent,
NewPhoneComponent,
PhoneListTelephonistComponent,
ShowTypePhonePipe,
ShowStatusPhonePipe,
ShowCallsDonePipe,
LogInManagerComponent,
TelephonistInCompanyListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    CallsService,
    CompanyService,
    ContributionService,
    LeadsService,
    LogInService,
    TelephonistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
