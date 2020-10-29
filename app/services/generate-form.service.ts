import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidationService } from "./validation.service";

@Injectable()
export class GenerateFormService {
  constructor(
    private fb: FormBuilder // private validationService: ValidationService
  ) {}

  inputFormService(): FormGroup {
    return this.fb.group({
      id: ["", [Validators.required]],
      email: ["", [Validators.required, ValidationService.emailValidator]],
      name: ["", [Validators.required]]
    });
  }
}
