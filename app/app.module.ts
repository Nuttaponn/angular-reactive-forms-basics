import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ChildFormOneComponent } from "./child-form-one/child-form-one.component";
import { ChildFormTwoComponent } from "./child-form-two/child-form-two.component";
import { InputComponent } from "./input/input.component";
import { GenerateFormService } from "./services/generate-form.service";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule],
  declarations: [
    AppComponent,
    ChildFormOneComponent,
    ChildFormTwoComponent,
    InputComponent
  ],
  bootstrap: [AppComponent],
  providers: [GenerateFormService]
})
export class AppModule {}
