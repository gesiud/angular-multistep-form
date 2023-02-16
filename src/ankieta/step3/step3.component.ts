import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Step3 } from '../order-form.model';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step3Component {
  step3Form = new FormGroup<Step3>({
    deliveryMethod: new FormControl<string>('', [Validators.required]),
    payment: new FormControl<string>('', [Validators.required]),
  });

  constructor(private controlContainer: ControlContainer) {
    (controlContainer.control as FormGroup).addControl('step3', this.step3Form);
  }
}
