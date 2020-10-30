import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { REG_EXP } from "../../constants/regExp.constant";
import { ValidationService } from "./validation.service";

@Injectable()
export class GenerateFormService {
  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {}

  inputFormService(): FormGroup {
    return this.fb.group({
      id: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.email,
          Validators.required,
          Validators.maxLength(100),
          this.validationService.forbiddenNameValidator(REG_EXP.KTB_EMAIL)
        ]
      ],
      name: ["", [Validators.required]]
    });
  }
}
