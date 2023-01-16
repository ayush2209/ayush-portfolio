import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveResumeAsPDF() {
    let link = document.createElement('a');
    link.download = "Ayush_CV_3.5.pdf";
    link.href = "assets/Ayush_CV_Angular.pdf";
    link.click();
  }

}
