import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  {path:'form',component:MemberFormComponent},
  {path:'list',component:MemberListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
