import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path:'',pathMatch:'full',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
