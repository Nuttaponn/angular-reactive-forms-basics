import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-child-form-one",
  templateUrl: "./child-form-one.component.html",
  styleUrls: ["./child-form-one.component.css"]
})
export class ChildFormOneComponent implements OnInit {
  constructor() {}

  @Input() form: FormGroup;

  ngOnInit() {
    this.form.get("child_one").statusChanges.subscribe(status => {
      console.log("child_one current status is >> ", status);
    });
    this.form.get("child_one").valueChanges.subscribe(value => {
      console.log("child_one current value is >> ", value);
    });
  }
}
