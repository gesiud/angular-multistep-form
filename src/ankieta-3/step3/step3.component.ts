import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step3Component implements OnInit {
  step3Form: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.step3Form = this.controlContainer.control.get('step3') as FormGroup;
  }
}
