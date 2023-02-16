import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Step1 } from '../order-form.model';
import { OrderFormService } from '../order-form.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step1Component {
  orderFormService = inject(OrderFormService);
  step1Form: FormGroup<Step1>;

  ngOnInit(): void {
    this.step1Form = this.orderFormService.orderForm.controls['step1'];
    this.orderFormService.currentStep = 1;
  }
}
