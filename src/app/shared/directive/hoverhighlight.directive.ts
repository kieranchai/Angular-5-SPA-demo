import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverhighlightDirective {


  @Input('appHoverHighlight') highlightColor: {background:string, text:string};

  @Input('appExitHighlight') exitColor: {background:string, text:string};

  @HostBinding('style.color') textColor: string = "red";

  constructor(private elRef : ElementRef, private render : Renderer2) {

   }

   ngOnInit() {
   }

  @ HostListener('mouseenter') mouseOver( eventData: Event ) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color',
    this.highlightColor.background);
    this.textColor = this.highlightColor.text;
   }

   @ HostListener('mouseleave') mouseExit( eventData: Event ) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color',
     this.exitColor.background);
    this.textColor = this.exitColor.text;
   }
}