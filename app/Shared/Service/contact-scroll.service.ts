import { Injectable, signal } from '@angular/core';

export type ContactFormIntent = 'contact' | 'hire';

@Injectable({ providedIn: 'root' })
export class ContactScrollService {
  readonly highlight = signal(false);
  readonly intent = signal<ContactFormIntent>('contact');

  scrollToForm(intent: ContactFormIntent = 'contact'): void {
    this.intent.set(intent);
    document.querySelector('#contactMe')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      this.highlight.set(true);
      document.getElementById('contact-name')?.focus({ preventScroll: true });
      setTimeout(() => this.highlight.set(false), 2500);
    }, 700);
  }
}
