import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { HttpClientModule } from "@angular/common/http";
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberFormComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
