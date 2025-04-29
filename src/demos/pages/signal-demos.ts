import {
  Component,
  ChangeDetectionStrategy,
  signal,
  effect,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-demos-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<p>Demos coming soon!</p>
    <p>{{ message() }}</p>
    <p>There are {{ numberOfLettersInMessage() }} letters in that.</p>
    <button (click)="embiggenate()" class="btn btn-primary">Embiggenate</button
    >, <button class="btn btn-warning">Does Nothing</button>`,
  styles: ``,
})
export class SignalDemosComponent {
  message = signal('This is the original message');
  numberOfLettersInMessage = computed(() => this.message().length);

  embiggenate() {
    // this.message.set(this.message().toUpperCase());
    this.message.update((old) => old.toUpperCase());
  }

  constructor() {
    effect(() => {
      setInterval(() => this.message.update((m) => m + 'x'), 1000);
    });
  }
}
