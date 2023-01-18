import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  downloadResume() {
    let link = document.createElement('a');
    link.download = "Ayush_CV_3.5.pdf";
    link.href = "assets/Ayush_CV_Angular.pdf";
    link.click();
  }
}
