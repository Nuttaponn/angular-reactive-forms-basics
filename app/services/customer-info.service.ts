import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomerInfo, CustomerProfile, AddressInfomation } from "../interface/customer-info.interface";

@Injectable()
export class CustomerInfoService {
  constructor(private fb: FormBuilder) { }

  initFormCustomerInfo(): FormGroup {
    return this.fb.group({
      customerProfile: this.getCustomerProfile(),
      addressInfomation: this.getAddressInfomation()
    });
  }

  setFormCustomerInfo(custProfile: CustomerInfo) {
    return this.fb.group({
      customerProfile: this.getCustomerProfile(custProfile?.customerProfile),
      addressInfomation: this.getAddressInfomation(custProfile?.addressInfomation)
    });
  }

  getCustomerProfile(customerProfile?: CustomerProfile): FormGroup {
    if (customerProfile) {
      return this.fb.group({
        identNumber: [customerProfile.identNumber || "", [Validators.required]],
        registContry: [customerProfile.registContry || "", [Validators.required]],
        registDate: [customerProfile.registDate || "", [Validators.required]],
        titleTh: [customerProfile.titleTh || "", [Validators.required]],
        nameTh: [customerProfile.nameTh || "", [Validators.required]],
        titleEn: [customerProfile.titleEn || "", [Validators.required]],
        nameEn: [customerProfile.nameEn || "", [Validators.required]]
      });
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

  getAddressInfomation(addressInfomation?: AddressInfomation): FormGroup {
    if (addressInfomation) {
      return this.fb.group({
        registAddress: [addressInfomation.registAddress || "", [Validators.required]],
        officeAddress: [addressInfomation.officeAddress || "", [Validators.required]],
        mailingAddress: [addressInfomation.mailingAddress || "", [Validators.required]]
      });
    } else {
      return this.fb.group({
        registAddress: ["", [Validators.required]],
        officeAddress: ["", [Validators.required]],
        mailingAddress: ["", [Validators.required]]
      });
    }
  }
}
