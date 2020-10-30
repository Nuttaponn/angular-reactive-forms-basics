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
import { ControlMessagesComponent } from "./control-messages/control-messages.component";
import { ValidationService } from "./services/validation.service";
import { ApplicationFormService } from './services/application-form.service';
import { CustomerInfoService } from './services/customer-info.service';
import { ProductInfoService } from './services/product-info.service';
import { ServiceInfoService } from './services/service-info.service';
import { FeeInfoService } from './services/fee-info.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule],
  declarations: [
    AppComponent,
    ChildFormOneComponent,
    ChildFormTwoComponent,
    InputComponent,
    ControlMessagesComponent
  ],
  bootstrap: [AppComponent],
  providers: [GenerateFormService, ValidationService, ApplicationFormService, CustomerInfoService, ProductInfoService, ServiceInfoService, FeeInfoService]
})
export class AppModule {}
