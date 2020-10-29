import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { GenerateFormService } from "./services/generate-form.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private generateFormService: GenerateFormService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      child_one: this.generateFormService.inputFormService(),
      child_two: this.generateFormService.inputFormService()
    });
    // this.myForm.statusChanges.subscribe(str =>
    //   console.log("main >> ", str, this.myForm)
    // );
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
