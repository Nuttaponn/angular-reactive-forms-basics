import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomerInfoService } from "../services/customer-info.service";

import { CustomerInfo } from "./interface/customer-info.interface";

@Component({
  selector: "app-child-form-one",
  templateUrl: "./child-form-one.component.html",
  styleUrls: ["./child-form-one.component.css"]
})
export class ChildFormOneComponent implements OnInit {
  constructor(private custInfoService: CustomerInfoService) {}

  @Input() form: FormGroup;
  @Input() formTab: FormGroup;
  isShowInput = false;

  mockCustomer: CustomerInfo = {};

  ngOnInit() {
    this.form.get("child_one").statusChanges.subscribe(status => {
      console.log("child_one current status is >> ", status);
    });
    this.form.get("child_one").valueChanges.subscribe(value => {
      console.log("child_one current value is >> ", value);
    });

    this.getValue();

    this.formTab.setValue(
      this.custInfoService.setCustomerInfoTab(this.mockCustomer).value
    );
  }

  getValue() {
    //TODO: provide by back-end services
    this.mockCustomer = {
      customerProfile: {
        identNumber: "identNumber",
        registContry: "registContry",
        registDate: "registDate",
        titleTh: "titleTh",
        nameTh: "nameTh",
        titleEn: "titleEn",
        nameEn: "nameEn"
      },
      addressInfomation: {
        registAddress: "registAddress",
        officeAddress: "officeAddress",
        mailingAddress: "mailingAddress"
      }
    } as CustomerInfo;
  }

  onEdit() {
    this.isShowInput = !this.isShowInput;
  }

  public isTouched(elem: string): boolean {
    return this.form.get(elem).touched;
  }

  public isDirty(elem: string): boolean {
    return this.form.get(elem).dirty;
  }

  public isValid(elem: string): string {
    return this.form.get(elem).status;
  }

  onDone(event) {
    console.log("evnet ", event);
    let child = this.form.get("child_one");
    child.get("id").setValue(event.id);
    child.get("name").setValue(event.name);
    this.updateTouchedDirty();
  }

  updateTouchedDirty() {
    this.form.markAsTouched();
    this.form.markAsDirty();
    this.form.get("child_one").markAsTouched();
    this.form.get("child_one").markAsDirty();
  }
}
