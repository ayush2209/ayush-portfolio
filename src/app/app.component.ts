import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private spinner: NgxSpinnerService
  ) { }
  
  redirectToComponentPosition(event: any) {
    document.querySelector(event)?.scrollIntoView({ behavior: 'smooth'});
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);
  }
}
