import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() formChild: any;
  @Output() onDone = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.formChild);
  }

  onSubmit(value) {
    console.log(value);
    this.onDone.emit(value);
  }
}
