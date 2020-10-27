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
      name: ["", [Validators.required, Validators.maxLength(500)]],
      child_one: this.fb.group({
        id: ["", [Validators.required]],
        name: ["", [Validators.required]]
      })
    });
  }

  public send() {
    // console.log("myForm >> ", this.myForm);
    const parent = this.myForm;
    const child_one = this.myForm.get("child_one");
    console.log(
      "parent >> " + parent.valid + "\n" + "child_one >> " + child_one.valid
    );
  }
}
