import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  sendLoadingMessage = new Subject<String>();

  downloadResume() {
    let link = document.createElement('a');
    link.download = "Ayush_Resume";
    link.href = "assets/aboutAyush.txt";
    link.click();
  }
}
