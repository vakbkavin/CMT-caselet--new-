import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { CompareComponent } from './compare/compare.component';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './home/all/all.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'all', component:AllComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'details', component:DetailsComponent
  },
  {
    path:'compare', component:CompareComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'',pathMatch:'full',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
