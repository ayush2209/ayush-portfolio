import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  redirectToComponentPosition(event: any) {
    document.querySelector(event)?.scrollIntoView({ behavior: 'smooth'});
  }
}
