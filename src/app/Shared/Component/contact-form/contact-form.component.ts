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
        this.contactScroll.intent.set('contact');
        this.spinner.hide();
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
    this.contactScroll.intent.set('contact');
  }
}
