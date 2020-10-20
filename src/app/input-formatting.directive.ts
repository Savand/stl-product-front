import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputFormatting]'
})
export class InputFormattingDirective {

  constructor(private el: ElementRef) {}

  @HostListener('change') onBlur(){
    let value: String = this.el.nativeElement.value;
    value = value.toLowerCase();
    this.el.nativeElement.value = value;
  }

}
