import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { GenerateFormService } from "../services/generate-form.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private generateFormService: GenerateFormService
  ) {}

  @Input() formChild: AbstractControl;
  @Output() onDone = new EventEmitter<FormGroup>();
  inputChildForm: FormGroup;

  ngOnInit() {
    console.log(this.formChild);
    this.inputChildForm = this.generateFormService.inputFormService();
    console.log(this.inputChildForm);
  }

  onSubmit(value) {
    console.log("value >> ", value);
    this.onDone.emit(value);
  }
}
