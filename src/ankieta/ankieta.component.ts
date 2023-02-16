import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderForm } from './order-form.model';
import { OrderFormService } from './order-form.service';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@Component({
  selector: 'app-ankieta',
  templateUrl: './ankieta.component.html',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    Step1Component,
    Step2Component,
    Step3Component,
  ],
})
export class AnkietaComponent implements OnInit {
  orderFormService = inject(OrderFormService);

  currentStep = 1;
  orderForm: FormGroup<OrderForm>;

  ngOnInit(): void {
    this.orderForm = this.orderFormService.orderForm;
    this.currentStep = this.orderFormService.currentStep;
  }
}
