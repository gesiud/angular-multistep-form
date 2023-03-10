import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsComponent } from './forms/forms.component';
import { AnkietaComponent } from './ankieta/ankieta.component';
import { provideRouter } from '@angular/router';
import { routes } from './ankieta/routes';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsComponent, AnkietaComponent],
  template: `
  <app-ankieta></app-ankieta>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
