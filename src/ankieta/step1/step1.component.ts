import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class Step1Component implements OnInit {
  step1Form: FormGroup;
 
  constructor(private controlContainer: ControlContainer) {
   }
  

   ngOnInit(): void {
    this.step1Form = this.controlContainer.control.get('step1') as FormGroup;
  }
}
