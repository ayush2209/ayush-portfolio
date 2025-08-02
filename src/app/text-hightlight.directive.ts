import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appTextHightlight]',
    standalone: false
})
export class TextHightlightDirective {

  constructor(private _eleRef: ElementRef) {
    _eleRef.nativeElement.style.backgroundColor = 'red'
    _eleRef.nativeElement.style.fontSize = '25px'
  }
}
