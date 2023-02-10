import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { CommonService } from 'src/app/Shared/Service/common.service';

/** Custom Validation for inout forms. */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-about-ayush',
  templateUrl: './about-ayush.component.html',
  styleUrls: ['./about-ayush.component.scss']
})
export class AboutAyushComponent implements OnInit {

  httpUrl: string = `https://anand-ayush-default-rtdb.firebaseio.com/`;

  ifClicked = false;
  count: any = 0;
  feedBackData = [];
  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    private _http: HttpClient) {
    // When we load the app if like count is there then please update this.
    this.getLikeCount();
  }

  ngOnInit(): void {
    this.getFeedbackDataResponse()
  }
  
  sendMessage(formData: NgForm) {
    this.spinner.show();
    this._http.post(`${this.httpUrl}/message.json`, formData.value).subscribe({
        next: () => {
          formData.reset();
          this.spinner.hide();
        },
        error: (error) => {
          formData.reset();
          this.spinner.hide();
          alert('Errro 404 : Failed to send message');
        },
        complete: () => {
          
        }
      })
  }
  increaseLike() {
    this.ifClicked = this.ifClicked ? false : true;
    this.count = this.ifClicked ? this.count + 1 : this.count - 1;
    const countObj = {
      _id: "l_Count",
      countNumber: this.count
    };
    // If clicked is true it means we try to like it but before that we need to check count is 0 or what.
    // If count is zero it meaans we need to update the count.
    // Or we just need to create an entry.
    if (this.ifClicked && this.count === 0) {
      this._http.post(`${this.httpUrl}/likeCount.json`, countObj).subscribe(resposne => {
        this.getLikeCount();
      }, err => {
        alert('Errro 404');
      })
    } else {
      this._http.put(`${this.httpUrl}likeCount/${'l_Count'}.json`, countObj).subscribe(data => {
        this.getLikeCount();
      }, err => {
        alert('Errro 404');;
      });
    }
  }

  getLikeCount() {
    this._http.get<any>(`${this.httpUrl}/likeCount.json`).subscribe(data => {
      const response: any = Object.values(data)[0];
      this.count = response.countNumber;
    }, err => {
      console.log(err);
    });
  };

  sendFeedback(formData: NgForm) {
    this.spinner.show();
    this._http.post(`${this.httpUrl}/feedback.json`, formData.value).subscribe({
      next: (response) => {
        formData.reset();
        this.spinner.hide();
      },
      error: (error) => {
        this.spinner.hide();
        this.spinner.hide();
        alert('Errro 404 : Failed to send message');
      },
      complete: () => {
        this.getFeedbackDataResponse();
      }
    })
  }

  getFeedbackDataResponse() {
    this._http.get<any>(`${this.httpUrl}/feedback.json`).subscribe({
      next: (response) => {
        this.feedBackData = Object.values(response);
        console.log(this.feedBackData);
      },
      error: (error) => {
        alert('404 Error : Faild to load the data');
      },
      complete: () => { },
    })
  }
}
