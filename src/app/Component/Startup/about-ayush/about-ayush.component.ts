import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';

/** Custom Validation for inout forms. */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-about-ayush',
  templateUrl: './about-ayush.component.html',
  styleUrls: ['./about-ayush.component.scss']
})
export class AboutAyushComponent implements OnInit {

  httpUrl:string = `https://anand-ayush-default-rtdb.firebaseio.com/`;

  constructor(private commonService: CommonService, private spinner: NgxSpinnerService, private _http: HttpClient) { }

  ngOnInit(): void {
  }

  addEmployee(formData:NgForm) {
    this.spinner.show();
    this._http.post(`${this.httpUrl}/message.json` , formData.value).subscribe(response => {
      formData.reset();
      this.spinner.hide();
    })
  }
}
