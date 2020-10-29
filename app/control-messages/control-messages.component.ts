import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ValidationService } from "../services/validation.service";

@Component({
  selector: "app-control-messages",
  templateUrl: "./control-messages.component.html",
  styleUrls: ["./control-messages.component.css"]
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  constructor() {}

  get errorMessage() {
    if (this.control && this.control.errors) {
      for (let propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched
        ) {
          return ValidationService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }

      return null;
    }
  }

  get touched() {
    return this.control && this.control.touched;
  }

  get errors() {
    return this.control ? this.control.errors || {} : {};
  }
}
