import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ClientComponent } from './component/client/client.component';
import { UpdateClientComponent } from './component/update-client/update-client.component';
import { BirthdayComponent } from './component/birthday/birthday.component';
import { MarriageComponent } from './component/marriage/marriage.component';
import { MarriagehalloneComponent } from './component/marriagehallone/marriagehallone.component';
import { DisplayprofileComponent } from './component/displayprofile/displayprofile.component';
import { BirthdayhalloneComponent } from './component/birthdayhallone/birthdayhallone.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'client/:id',component:ClientComponent},
  {path:'updateclient',component:UpdateClientComponent},
  {path:'birthday',component:BirthdayComponent},
  {path:'marriage',component:MarriageComponent},
  {path:'marriagehallone',component:MarriagehalloneComponent},
  {path:'birthdayhallone',component:BirthdayhalloneComponent},
  {path:'displayprofile',component:DisplayprofileComponent},
  
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
