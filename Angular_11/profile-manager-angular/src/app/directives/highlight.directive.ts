import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @Input('highlight')color:string;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        
    }
    ngOnInit():void{
        //console.log(this.color)
    }

    @HostListener('mousemove')
    applyStyle(){
        this.renderer.setStyle(this.el.nativeElement, "backgroundColor", this.color);
        this.renderer.setStyle(this.el.nativeElement, "border", "1px solid black");
    }

    @HostListener('mouseout')
    removeStyle(){
        this.renderer.removeStyle(this.el.nativeElement, "backgroundColor");
        this.renderer.removeStyle(this.el.nativeElement, "border");
    }
}
