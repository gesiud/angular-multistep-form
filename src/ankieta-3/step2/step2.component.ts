import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step2Component implements OnInit {
  step2Form: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.step2Form = this.controlContainer.control.get('step2') as FormGroup;
  }
}
