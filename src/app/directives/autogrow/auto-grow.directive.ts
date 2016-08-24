import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector : '[autoGrow]',
    host: {
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective{

    constructor(private _el : ElementRef,private _renderer : Renderer){

    }

    onFocus(){
        this._renderer.setElementProperty(this._el.nativeElement,'size',100);
    }

    onBlur(){
        this._renderer.setElementProperty(this._el.nativeElement,'size',50);
    }

}