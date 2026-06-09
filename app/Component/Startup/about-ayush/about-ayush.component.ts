import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from 'src/app/Shared/local-storage.service';
import { AdminModeService } from 'src/app/Shared/Service/admin-mode.service';
import { CommonService } from 'src/app/Shared/Service/common.service';

export interface FeedbackRecord {
  id: string;
  feedback_Messager: string;
  feedback_Message: string;
  f_email?: string;
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
    selector: 'app-about-ayush',
    templateUrl: './about-ayush.component.html',
    styleUrls: ['./about-ayush.component.scss'],
    standalone: false
})
export class AboutAyushComponent implements OnInit {
  httpUrl: string = `https://anand-ayush-default-rtdb.firebaseio.com/`;
  ifClicked = false;
  count = 0;
  feedBackData: FeedbackRecord[] = [];

  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    private _http: HttpClient,
    private localStorageService: LocalStorageService,
    private translate: TranslateService,
    readonly adminMode: AdminModeService) {
    this.getLikeCount();
  }

  ngOnInit(): void {
    this.getFeedbackDataResponse();
  }

  tempCount = 0;
  checkLikedOrDisliked() {
    if (this.tempCount === 0 && this.localStorageService.getData('liked') != 'true') {
      this.tempCount = this.tempCount + 1;
      return true;
    }
    this.tempCount = 0;
    return false;
  }

  increaseLike() {
    if (this.checkLikedOrDisliked()) {
      this.localStorageService.setdata({ key: 'liked', value: true });
    } else {
      this.localStorageService.setdata({ key: 'liked', value: false });
    }

    this.ifClicked = this.localStorageService.getData('liked') == 'true';
    this.count = this.ifClicked ? this.count + 1 : this.count - 1;

    const countObj = { _id: 'l_Count', countNumber: this.count };

    if (this.ifClicked && this.count === 0) {
      this._http.post(`${this.httpUrl}/likeCount.json`, countObj).subscribe({
        next: () => this.getLikeCount(),
        error: () => alert(this.translate.instant('Alert_Like_Count_Failed'))
      });
    } else {
      this._http.put(`${this.httpUrl}likeCount/${'l_Count'}.json`, countObj).subscribe({
        next: () => this.getLikeCount(),
        error: () => alert(this.translate.instant('Alert_Like_Count_Failed'))
      });
    }
  }

  getLikeCount() {
    this._http.get<Record<string, { countNumber: number }>>(`${this.httpUrl}/likeCount.json`).subscribe({
      next: (data) => {
        const response = Object.values(data)[0];
        this.count = response?.countNumber ?? 0;
        this.ifClicked = this.localStorageService.getData('liked') == 'true';
      },
      error: () => { /* silently ignore on first visit */ }
    });
  }

  sendFeedback(formData: NgForm) {
    this.spinner.show();
    this.commonService.sendLoadingMessage.next('Msg_Thank_You');
    this._http.post(`${this.httpUrl}/feedback.json`, formData.value).subscribe({
      next: () => {
        formData.reset();
        this.spinner.hide();
        this.getFeedbackDataResponse();
      },
      error: () => {
        this.spinner.hide();
        alert(this.translate.instant('Alert_Feedback_Failed'));
      }
    });
  }

  getFeedbackDataResponse() {
    this._http.get<Record<string, Omit<FeedbackRecord, 'id'>>>(`${this.httpUrl}/feedback.json`).subscribe({
      next: (response) => {
        this.feedBackData = Object.entries(response ?? {}).map(([id, item]) => ({
          id,
          ...item
        }));
      },
      error: () => { /* no feedback data yet */ }
    });
  }

  deleteFeedback(record: FeedbackRecord): void {
    if (!this.adminMode.isAdmin()) {
      return;
    }

    if (!confirm(this.translate.instant('Confirm_Delete_Feedback'))) {
      return;
    }

    this.spinner.show();
    this._http.delete(`${this.httpUrl}/feedback/${record.id}.json`).subscribe({
      next: () => {
        this.spinner.hide();
        this.getFeedbackDataResponse();
      },
      error: () => {
        this.spinner.hide();
        alert(this.translate.instant('Alert_Feedback_Delete_Failed'));
      }
    });
  }
}
