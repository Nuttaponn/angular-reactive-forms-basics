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
      customerInfoTab: this.custInfoService.getCustomerInfoTab(),
      productInfoTab: this.productInfoService.getProductInfoTab(),
      serviceInfoTab: this.serviceInfoService.getServiceInfoTab(),
      feeInfoTab: this.feeInfoService.getFeeInfoTab()
    });
  }
}
