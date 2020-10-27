import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "my-app",
  template: `
    <div>
      <form [formGroup]="myForm" (ngSubmit)="send()" novalidate>
        <input type="text" name="name" formControlName="name" />
        <div class="panel panel-default" formGroupName="child">
          <input type="text" name="id" formControlName="id" />
          <input type="text" name="name" formControlName="name" />
        </div>
        <button class="btn btn-primary">send</button>
      </form>
    </div>
  `
})
export class AppComponent {
  myForm: FormGroup;
  email: AbstractControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(500)]],
      child: this.fb.group({
        id: ["", [Validators.required]],
        name: ["", [Validators.required]]
      })
    });
  }

  public send() {
    console.log(this.myForm);
    const parent = this.myForm;
    const child = this.myForm.get("child");
    // console.log(this.myForm)
    alert("parent >> " + parent.valid + "\n" + "child >> " + child.valid);
  }
}
