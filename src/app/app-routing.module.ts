import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CallsForTodayComponent } from './components/calls-for-today/calls-for-today.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LeadComponent } from './components/lead/lead.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { NavComponent } from './components/nav/nav.component';
import { TelephonistListComponent } from './components/telephonist-list/telephonist-list.component';
import { CalendarTelephonistComponent } from './components/calendar-telephonist/calendar-telephonist.component';
import { LeadManagerComponent } from './components/lead-manager/lead-manager.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CallsListComponent } from './components/calls-list/calls-list.component';
import { PhoneNumberListComponent } from './components/phone-number-list/phone-number-list.component';
import { ContributionListComponent } from './components/contribution-list/contribution-list.component';
import { NewPhoneComponent } from './components/new-phone/new-phone.component';
import { PhoneListTelephonistComponent } from './components/phone-list-telephonist/phone-list-telephonist.component';
import { MainManagerComponent } from './components/main-manager/main-manager.component';
import { LogInManagerComponent } from './components/log-in-manager/log-in-manager.component';
import { CompanyComponent } from './components/company/company.component';
import { TelephonistInCompanyListComponent } from './components/telephonist-in-company-list/telephonist-in-company-list.component';


const routes: Routes = [
  {path:'log-in',component:LogInComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'CallsForToday',component:CallsForTodayComponent}
  ,{path:'nav',component:NavComponent}
  ,{path:'lead/:id/:idCall',component:LeadComponent}
  ,{path:'main-home',component:MainHomeComponent}
  ,{path:'about',component:AboutComponent}
  ,{path:'contact-us',component:ContactUsComponent}
  ,{path:'list_teleph',component:TelephonistListComponent}
  ,{path:'calendar',component:CalendarTelephonistComponent}
  ,{path:'lead-manager',component:LeadManagerComponent}
  ,{path:'forget-password',component:ForgetPasswordComponent}
  ,{path:'calls-list',component:CallsListComponent}
  ,{path:'phone-number-list',component:PhoneNumberListComponent}
  ,{path:'contribution-list',component:ContributionListComponent}
  ,{path:'new-phone',component:NewPhoneComponent}
  ,{path:'phone_list_telephonist',component:PhoneListTelephonistComponent}
,{path:'main-manager',component:MainManagerComponent}
,{path:'main-company',component:CompanyComponent}
 ,{path:'תרומות',component:TelephonistInCompanyListComponent}
,{path:'log_in_managet',component:LogInManagerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
