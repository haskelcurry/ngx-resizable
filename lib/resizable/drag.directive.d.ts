import { EventEmitter } from '@angular/core';
export declare type Point = {
    x: number;
    y: number;
};
export declare class DragDirective {
    DragStart: EventEmitter<Point>;
    Drag: EventEmitter<Point>;
    DragEnd: EventEmitter<Point>;
    private dragging;
    onMousedown(e: MouseEvent): void;
    onTouchstart(e: TouchEvent): void;
    onMouseup(e: MouseEvent): void;
    onTouchend(e: TouchEvent): void;
    onMousemove(e: MouseEvent): void;
    onTouchmove(e: TouchEvent): void;
}
