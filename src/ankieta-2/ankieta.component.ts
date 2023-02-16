import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type Step1 = Record<
  'firstname' | 'lastname' | 'email' | 'phone',
  FormControl<string>
>;

type Step2 = Record<'street' | 'city' | 'postCode', FormControl<string>>;

type Step3 = Record<'deliveryMethod' | 'payment', FormControl<string>>;

type OrderForm = {
  step1: FormGroup<Step1>;
  step2: FormGroup<Step2>;
  step3: FormGroup<Step3>;
};

@Component({
  selector: 'app-ankieta',
  templateUrl: './ankieta.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AnkietaComponent {
  currentStep = 1;

  orderForm = new FormGroup<OrderForm>({
    step1: new FormGroup<Step1>({
      firstname: new FormControl<string>('', {
        nonNullable: false,
        validators: [Validators.required],
      }),
      lastname: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
    }),
    step2: new FormGroup({
      street: new FormControl<string>('', [Validators.required]),
      city: new FormControl<string>('', [Validators.required]),
      postCode: new FormControl<string>('', [Validators.required]),
    }),
    step3: new FormGroup({
      deliveryMethod: new FormControl<string>('', [Validators.required]),
      payment: new FormControl<string>('', [Validators.required]),
    }),
  });
}
