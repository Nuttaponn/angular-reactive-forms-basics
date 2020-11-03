import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomerInfoService } from "./customer-info.service";
import { FeeInfoService } from "./fee-info.service";
import { ProductInfoService } from "./product-info.service";
import { ServiceInfoService } from "./service-info.service";

@Injectable()
export class ApplicationFormService {
  constructor(
    private fb: FormBuilder,
    private custInfoService: CustomerInfoService,
    private productInfoService: ProductInfoService,
    private serviceInfoService: ServiceInfoService,
    private feeInfoService: FeeInfoService
  ) {}

  getMainForm(): FormGroup {
    return this.fb.group({
      customerInfoTab: this.custInfoService.initFormCustomerInfo(),
      productInfoTab: this.productInfoService.initFormProductInfoTab(),
      serviceInfoTab: this.serviceInfoService.initFormServiceInfoTab(),
      feeInfoTab: this.feeInfoService.initFormFeeInfoTab()
    });
  }

  save() {
    const target = { a: 1, b: 2, c: 1231, d: 0 };
    const source = { a: 4, b: 5, d: "sfd" };

    Object.keys(source).forEach(key =>
      key in target ? (target[key] = source[key]) : null
    );

    console.log("target", target);
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log("source", source);
  }
}
