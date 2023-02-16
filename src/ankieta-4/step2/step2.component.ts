import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Step2 } from '../order-form.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step2Component {
  step2Form = new FormGroup<Step2>({
    street: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    postCode: new FormControl<string>('', [Validators.required]),
  });

  constructor(private controlContainer: ControlContainer) {
    (controlContainer.control as FormGroup).addControl('step2', this.step2Form);
  }
}
