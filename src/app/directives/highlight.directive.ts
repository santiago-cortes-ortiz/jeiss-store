import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.backgroundColor = 'red'
   }

}
