import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/opener', pathMatch: 'full' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'checklists', loadChildren: './home/home.module#HomePageModule' },
  { path: 'checklists/:id', loadChildren: './checklist/checklist.module#ChecklistPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'opener', loadChildren: './opener/opener.module#OpenerPageModule' },
  { path: 'new-applicant', loadChildren: './new-applicant/new-applicant.module#NewApplicantPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
