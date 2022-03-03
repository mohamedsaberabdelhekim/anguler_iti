import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective {
  constructor(private elem:ElementRef)
  {
    elem.nativeElement.style.border='20px solid black rounded shadows ';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }


}
