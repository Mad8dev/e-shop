import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  RendererFactory2,
} from "@angular/core";

@Directive({
  selector: "[appHover]",
})
export class AppHoverDirective {
  constructor(
    private element: ElementRef,
    private renderer: RendererFactory2
  ) {}
  @HostBinding("style.backgroundColor") backgroundColor: string = "#282828";
  @HostBinding("style.border") border: string = "none";
  @HostBinding('style.color')textColor:string='white'

  @HostListener('mouseenter')OnMouseEnter(){
    this.backgroundColor='white'
    this.textColor='#282828'
    this.border='#282828 3px solid'
  }

  @HostListener('mouseout')OnMouseOut(){
    this.backgroundColor='#282828'
    this.textColor='white'
    this.border='none'
  }
}
