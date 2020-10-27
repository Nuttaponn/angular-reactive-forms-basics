import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

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
    this.myForm.statusChanges.subscribe(str =>
      console.log("main >> ", str, this.myForm)
    );
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
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
