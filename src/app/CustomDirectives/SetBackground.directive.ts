import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({ selector: "[setBackground]" })
export class setBackground implements OnInit {
  // @Input('setBackground') backColor: string = "#36454f";
  // @Input() textColor: string = "yellow";

  @Input("setBackground") changedTextAndBackColor: {
    backColor: string;
    textColor: string;
  };

  constructor(private element: ElementRef, private rederer: Renderer2) {
    // this.element = element;
  }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = "#36454f";
    // this.element.nativeElement.style.color = "white";
    this.rederer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      this.changedTextAndBackColor.backColor
    );
    this.rederer.setStyle(this.element.nativeElement, "color", this.changedTextAndBackColor.textColor);
    this.rederer.setAttribute(
      this.element.nativeElement,
      "title",
      "This is example title"
    );
  }
}
