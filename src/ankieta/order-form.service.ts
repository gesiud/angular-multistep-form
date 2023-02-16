import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderForm, Step1, Step2, Step3 } from './order-form.model';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
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
    step2: new FormGroup<Step2>({
      street: new FormControl<string>('', [Validators.required]),
      city: new FormControl<string>('', [Validators.required]),
      postCode: new FormControl<string>('', [Validators.required]),
    }),
    step3: new FormGroup<Step3>({
      deliveryMethod: new FormControl<string>('', [Validators.required]),
      payment: new FormControl<string>('', [Validators.required]),
    }),
  });
}
