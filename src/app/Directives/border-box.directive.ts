import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective implements OnChanges {
@Input() default:string='orange';
@Input('BorderBox') hoverColor:string="gray"
  constructor(private elem:ElementRef) { 
    // this.elem.nativeElement.style.border=`2px solid ${this.default}`
  }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`5px dotted ${this.default}`;
  }



  @HostListener('mouseover') mouseOverFunc(){
    this.elem.nativeElement.style.border=`3px dashed ${this.hoverColor}`;
  }
  @HostListener('mouseout') mouseOutFunc(){
    this.elem.nativeElement.style.border=`5px dotted ${this.default}`;
  }

}
