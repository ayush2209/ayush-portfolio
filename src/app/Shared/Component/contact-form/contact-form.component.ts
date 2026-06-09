import { HttpClient } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactScrollService } from 'src/app/Shared/Service/contact-scroll.service';
import { GtmService } from 'src/app/Shared/Service/gtm.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: false
})
export class ContactFormComponent {
  private readonly http = inject(HttpClient);
  private readonly spinner = inject(NgxSpinnerService);
  private readonly translate = inject(TranslateService);
  private readonly gtmService = inject(GtmService);
  readonly contactScroll = inject(ContactScrollService);

  readonly httpUrl = 'https://anand-ayush-default-rtdb.firebaseio.com/';
  charCount = 0;
  messageSent = false;
  private successTimer?: number;

  readonly isHighlighted = computed(() => this.contactScroll.highlight());
  readonly isHireIntent = computed(() => this.contactScroll.intent() === 'hire');

  updateCharCount(event: Event): void {
    this.charCount = (event.target as HTMLTextAreaElement).value.length;
  }

  sendMessage(formData: NgForm): void {
    const payload = { ...formData.value };
    const isHire = this.contactScroll.intent() === 'hire';
    const endpoint = isHire ? 'hireMe.json' : 'message.json';

    if (isHire) {
      payload['formType'] = 'Hire_me';
      this.gtmService.hireMeGTMEvent(payload);
    }

    this.messageSent = false;
    this.spinner.show();

    this.http.post(`${this.httpUrl}/${endpoint}`, payload).subscribe({
      next: () => {
        formData.reset();
        this.charCount = 0;
        this.messageSent = true;
        // auto-hide success message after 5 seconds
        if (this.successTimer) {
          clearTimeout(this.successTimer);
        }
        this.successTimer = window.setTimeout(() => {
          this.messageSent = false;
          this.successTimer = undefined;
        }, 5000);
        this.contactScroll.intent.set('contact');
        this.spinner.hide();
        // ensure validation visuals are cleared
        Object.keys(formData.controls || {}).forEach(k => {
          const c = formData.controls[k];
          c.markAsPristine();
          c.markAsUntouched();
        });
      },
      error: () => {
        this.spinner.hide();
        alert(this.translate.instant('Alert_Send_Message_Failed'));
      }
    });
  }

  resetForm(form: NgForm): void {
    form.reset();
    this.charCount = 0;
    // clear any pending success message timer and hide message immediately
    if (this.successTimer) {
      clearTimeout(this.successTimer);
      this.successTimer = undefined;
    }
    this.messageSent = false;
    this.contactScroll.intent.set('contact');
    Object.keys(form.controls || {}).forEach(k => {
      const c = form.controls[k];
      c.markAsPristine();
      c.markAsUntouched();
    });
  }
}
