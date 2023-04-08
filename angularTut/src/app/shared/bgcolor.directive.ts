import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '.appBgcolor',
})
export class BgcolorDirective {
  constructor(private eleRef: ElementRef) {
    debugger;
  }

  @HostListener('click') onClick() {
    debugger;
    this.eleRef.nativeElement.style.backgroundColor = 'red';
    this.eleRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    debugger;
    this.eleRef.nativeElement.style.backgroundColor = 'black';
    this.eleRef.nativeElement.style.color = 'white';
  }
}
