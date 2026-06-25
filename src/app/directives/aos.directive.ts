import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAos]',
  standalone: true
})
export class AosDirective implements OnInit {
  @Input('appAos') animation: string = 'fade-up';
  @Input() aosDelay: string = '0';
  @Input() aosDuration: string = '800';
  @Input() aosOffset: string = '0';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    element.setAttribute('data-aos', this.animation);
    element.setAttribute('data-aos-delay', this.aosDelay);
    element.setAttribute('data-aos-duration', this.aosDuration);
    element.setAttribute('data-aos-offset', this.aosOffset);
  }
}