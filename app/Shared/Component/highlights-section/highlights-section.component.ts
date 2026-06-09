import { Component, input } from '@angular/core';

@Component({
  selector: 'app-highlights-section',
  templateUrl: './highlights-section.component.html',
  styleUrls: ['./highlights-section.component.scss'],
  standalone: false
})
export class HighlightsSectionComponent {
  titleKey = input('Highlights_Title');
  subtitleKey = input('Highlights_Subtitle');

  stats = input<
    Array<{
      icon: string;
      value: string;
      labelKey: string;
    }>
  >([]);

  pillars = input<
    Array<{
      icon: string;
      titleKey: string;
      bodyKey: string;
    }>
  >([]);
}
