import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable()
export class ValidationService {
  constructor() {}

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  validateDuplicate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (/[-_.]{2}/g.test(control.value)) {
        return {
          duplicate: "duplicated"
        };
      }
    };
  }
}
