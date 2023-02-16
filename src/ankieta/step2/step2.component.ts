import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Step2 } from '../order-form.model';
import { OrderFormService } from '../order-form.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step2Component {
  orderFormService = inject(OrderFormService);
  step2Form: FormGroup<Step2>;

  ngOnInit(): void {
    this.step2Form = this.orderFormService.orderForm.controls['step2'];
    this.orderFormService.currentStep = 2;
  }
}
