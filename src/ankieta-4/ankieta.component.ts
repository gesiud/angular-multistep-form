import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderForm } from './order-form.model';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@Component({
  selector: 'app-ankieta',
  templateUrl: './ankieta.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    Step1Component,
    Step2Component,
    Step3Component,
  ],
})
export class AnkietaComponent {
  currentStep = 1;

  orderForm = new FormGroup<Partial<OrderForm>>({});
}
