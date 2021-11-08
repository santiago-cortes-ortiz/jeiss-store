import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this._elementRef.nativeElement.style.backgroundColor = 'red'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this._elementRef.nativeElement.style.backgroundColor = ''
  }


  constructor(private _elementRef: ElementRef) {
    //this._elementRef.nativeElement.style.backgroundColor = 'red'
   }

}
