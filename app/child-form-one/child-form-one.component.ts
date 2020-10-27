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
    console.log("childForm >>", this.form.get("child"));
  }
}
