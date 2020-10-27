import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor() {}

  // @Input() childData: string;
  // @Output() childDataChange = new EventEmitter<string>();

  @Input() formChild: FormGroup;
  // @Output() formChildChange = new EventEmitter<FormControl>();

  ngOnInit() {
    console.log(this.formChild);
  }

  // formChildChange(value: FormControl) {
  //   this.formChildChange.emit(value);
  // }

  onDone() {}
}
