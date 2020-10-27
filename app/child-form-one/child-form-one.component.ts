import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-child-form-one",
  templateUrl: "./child-form-one.component.html",
  styleUrls: ["./child-form-one.component.css"]
})
export class ChildFormOneComponent implements OnInit {
  constructor() {}

  @Input() form: FormGroup;
  isShowInput = false;

  ngOnInit() {
    this.form.get("child_one").statusChanges.subscribe(status => {
      console.log("child_one current status is >> ", status);
    });
    this.form.get("child_one").valueChanges.subscribe(value => {
      console.log("child_one current value is >> ", value);
    });
  }

  onEdit() {
    this.isShowInput = !this.isShowInput;
  }

  public isTouched(elem: string): boolean {
    return this.form.get(elem).touched;
  }

  public isDirty(elem: string): boolean {
    return this.form.get(elem).dirty;
  }

  public isValid(elem: string): string {
    return this.form.get(elem).status;
  }

  onDone(event) {
    console.log("evnet ", event);
    let child = this.form.get("child_one");
    child.get("id").setValue(event.id);
    child.get("name").setValue(event.name);
  }
}
