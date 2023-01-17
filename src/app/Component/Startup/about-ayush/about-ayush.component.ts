import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ayush',
  templateUrl: './about-ayush.component.html',
  styleUrls: ['./about-ayush.component.scss']
})
export class AboutAyushComponent implements OnInit {

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
