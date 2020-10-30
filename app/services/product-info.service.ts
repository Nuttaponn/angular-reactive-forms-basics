import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class ProductInfoService {
  constructor(private fb: FormBuilder) {}

  initFormProductInfoTab(): FormGroup {
    return this.fb.group({
      companyId: ["", [Validators.required]],
      productInfomation: this.getProductInfomation(),
      contactInfomation: this.getContactInfomation(),
      accountInfomation: this.getAccountInfomation(),
      userInfomation: this.getUserInfomation(),
      limit: this.getLimit(),
      periodFeeManagent: this.getPeriodFeeManagent()
    });
  }

  getProductInfomation(): FormGroup {
    return this.fb.group({
      packageName: ["", [Validators.required]],
      serviceDetail: ["", [Validators.required]]
    });
  }

  getContactInfomation(): FormArray {
    return this.fb.array([]);
  }

  getAccountInfomation(): FormArray {
    return this.fb.array([]);
  }

  getUserInfomation(): FormArray {
    return this.fb.array([]);
  }

  getLimit(): FormGroup {
    return this.fb.group({
      limitGroup: this.fb.array([]),
      dailyTransacLimit: this.fb.group({
        companyOverall: this.fb.array([]),
        billPayment: this.fb.array([]),
        transfer: this.fb.array([])
      })
    });
  }

  getPeriodFeeManagent(): FormArray {
    return this.fb.array([]);
  }
}
