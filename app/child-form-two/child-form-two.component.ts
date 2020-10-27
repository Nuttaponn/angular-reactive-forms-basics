import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-child-form-two",
  templateUrl: "./child-form-two.component.html",
  styleUrls: ["./child-form-two.component.css"]
})
export class ChildFormTwoComponent implements OnInit {
  constructor() {}

  @Input() form: FormGroup;

  ngOnInit() {
    this.form.get("child_two").statusChanges.subscribe(status => {
      console.log("child_two current status is >> ", status);
    });
    this.form.get("child_two").valueChanges.subscribe(value => {
      console.log("child_two current value is >> ", value);
    });
  }

  public isTouched(elem: string): boolean {
    return this.form.get(elem).touched;
  }

  public isValid(elem: string): string {
    return this.form.get(elem).status;
  }
}
