import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ankieta',
  templateUrl: './ankieta.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AnkietaComponent {
  form = new FormGroup({
    firstname: new FormControl<string>(''),
    lastname: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    street: new FormControl<string>(''),
    city: new FormControl<string>(''),
    postCode: new FormControl<string>(''),
    deliveryMethod: new FormControl<string>(''),
    payment: new FormControl<string>(''),
  });
}
