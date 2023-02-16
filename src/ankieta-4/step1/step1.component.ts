import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Step1 } from '../order-form.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step1Component {
  step1Form = new FormGroup<Step1>({
    firstname: new FormControl<string>('', {
      nonNullable: false,
      validators: [Validators.required],
    }),
    lastname: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [Validators.required]),
  });

  constructor(private controlContainer: ControlContainer) {
    (controlContainer.control as FormGroup).addControl('step1', this.step1Form);
  }
}
