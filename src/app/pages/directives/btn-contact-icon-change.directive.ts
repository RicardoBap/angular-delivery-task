import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[btnContactIconChange]',
})
export class BtnContactIconChangeDirective implements OnInit {

  // private elementSelected = false;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  private onClick() {
    this.el.nativeElement.classList.toggle('rk-change-icon');
    // this.elementSelected = !this.elementSelected;
    // if (this.elementSelected) {
    //   this.el.nativeElement.classList.add('rk-change-icon')
    // } else {
    //   this.el.nativeElement.classList.remove('rk-change-icon')
    // }
  }

  ngOnInit() { }

}