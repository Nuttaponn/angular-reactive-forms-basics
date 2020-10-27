import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ChildFormOneComponent } from "./child-form-one/child-form-one.component";
import { ChildFormTwoComponent } from './child-form-two/child-form-two.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, ChildFormOneComponent, ChildFormTwoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
