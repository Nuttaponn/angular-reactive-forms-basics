import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class GenerateFormService {
  constructor(private fb: FormBuilder) {}

  inputFormService(): FormGroup {
    return this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]]
    });
  }
}
