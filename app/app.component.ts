import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      child_one: this.fb.group({
        id: ["", [Validators.required]],
        name: ["", [Validators.required]]
      }),
      child_two: this.fb.group({
        id: ["", [Validators.required]],
        name: ["", [Validators.required]]
      })
    });
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
