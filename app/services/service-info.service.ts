import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class ServiceInfoService {
  constructor(private fb: FormBuilder) {}

  initFormServiceInfoTab(): FormGroup {
    return this.fb.group({});
  }
}
