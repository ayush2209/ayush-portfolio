import { ElementRef } from '@angular/core';
import { TextHightlightDirective } from './text-hightlight.directive';

describe('TextHightlightDirective', () => {
  it('should create an instance', () => {
    const elementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new TextHightlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
