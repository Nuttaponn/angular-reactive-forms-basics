import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ForbiddenNameValidatorService } from "./forbidden-name-validator.service";
import { ValidationService } from "./validation.service";

@Injectable()
export class GenerateFormService {
  constructor(
    private fb: FormBuilder,
    private fnvService: ForbiddenNameValidatorService
  ) {}

  inputFormService(): FormGroup {
    return this.fb.group({
      id: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.email,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          this.fnvService.forbiddenNameValidator(/ktb/)
        ]
      ],
      name: ["", [Validators.required]]
    });
  }
}
