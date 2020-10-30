import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ApplicationFormService } from "./services/application-form.service";
import { CustomerInfoService } from "./services/customer-info.service";
import { GenerateFormService } from "./services/generate-form.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myForm: FormGroup;
  mainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private generateFormService: GenerateFormService,
    private appFormService: ApplicationFormService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      child_one: this.generateFormService.inputFormService(),
      child_two: this.generateFormService.inputFormService()
    });
    this.mainForm = this.appFormService.getMainForm();
    console.log(this.mainForm);
  }

  public send() {
    const parent = this.myForm;
    const child_one = this.myForm.get("child_one");
    const child_two = this.myForm.get("child_two");
    console.log(
      "parent >> " +
        parent.valid +
        "\n" +
        "child_one >> " +
        child_one.valid +
        "\n" +
        "child_two >> " +
        child_two.valid
    );
  }
}
