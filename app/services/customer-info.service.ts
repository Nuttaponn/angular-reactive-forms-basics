import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomerInfo } from "../interface/customer-info.interface";

@Injectable()
export class CustomerInfoService {
  constructor(private fb: FormBuilder) { }

  getCustomerInfoTab(custProfile?: CustomerInfo): FormGroup {
    if (custProfile) {
      return this.fb.group({
        customerProfile: this.getCustomerProfile(custProfile?.customerProfile),
        addressInfomation: this.getAddressInfomation(custProfile?.addressInfomation)
      });
    } else {
      return this.fb.group({
        customerProfile: this.getCustomerProfile(),
        addressInfomation: this.getAddressInfomation()
      });
    }
  }

  getCustomerProfile(custProfile?: CustomerInfo): FormGroup {
    if (custProfile) {
    } else {
      return this.fb.group({
        identNumber: ["", [Validators.required]],
        registContry: ["", [Validators.required]],
        registDate: ["", [Validators.required]],
        titleTh: ["", [Validators.required]],
        nameTh: ["", [Validators.required]],
        titleEn: ["", [Validators.required]],
        nameEn: ["", [Validators.required]]
      });
    }
  }

  getAddressInfomation(): FormGroup {
    return this.fb.group({
      registAddress: ["", [Validators.required]],
      officeAddress: ["", [Validators.required]],
      mailingAddress: ["", [Validators.required]]
    });
  }
}
