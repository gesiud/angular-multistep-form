import { FormControl, FormGroup } from '@angular/forms';

export type Step1 = Record<
  'firstname' | 'lastname' | 'email' | 'phone',
  FormControl<string>
>;

export type Step2 = Record<'street' | 'city' | 'postCode', FormControl<string>>;

export type Step3 = Record<'deliveryMethod' | 'payment', FormControl<string>>;

export type OrderForm = {
  step1: FormGroup<Step1>;
  step2: FormGroup<Step2>;
  step3: FormGroup<Step3>;
};
