import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class FeeInfoService {
  constructor(private fb: FormBuilder) {}

  initFormFeeInfoTab(): FormGroup {
    return this.fb.group({});
  }
}
