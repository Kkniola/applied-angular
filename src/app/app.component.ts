import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar";

@Component({
  selector: 'app-root',
  template: `
  <app-navbar />
    <main class="container mx-auto">
      <p>Our stuff ges here</p>
    </main>
  `,
  styles: [],
  imports: [NavbarComponent],
})
export class AppComponent {}
