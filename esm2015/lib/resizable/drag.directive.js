/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
export class DragDirective {
    constructor() {
        this.DragStart = new EventEmitter();
        this.Drag = new EventEmitter();
        this.DragEnd = new EventEmitter();
        this.dragging = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMousedown(e) {
        if (e.which === 1) {
            this.dragging = true;
            this.DragStart.emit({ x: e.clientX, y: e.clientY });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onTouchstart(e) {
        /** @type {?} */
        const touch = e.touches[0];
        this.dragging = true;
        this.DragStart.emit({ x: touch.clientX, y: touch.clientY });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseup(e) {
        if (this.dragging) {
            this.DragEnd.emit({ x: e.clientX, y: e.clientY });
        }
        this.dragging = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onTouchend(e) {
        if (this.dragging) {
            /** @type {?} */
            const touch = e.changedTouches[0];
            this.DragEnd.emit({ x: touch.clientX, y: touch.clientY });
        }
        this.dragging = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMousemove(e) {
        if (this.dragging) {
            this.Drag.emit({ x: e.clientX, y: e.clientY });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onTouchmove(e) {
        if (this.dragging) {
            /** @type {?} */
            const touch = e.touches[0];
            this.Drag.emit({ x: touch.clientX, y: touch.clientY });
        }
    }
}
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[rszDragHandle]'
            },] }
];
DragDirective.propDecorators = {
    DragStart: [{ type: Output }],
    Drag: [{ type: Output }],
    DragEnd: [{ type: Output }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onTouchstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    onMouseup: [{ type: HostListener, args: ['document:mouseup', ['$event'],] }],
    onTouchend: [{ type: HostListener, args: ['document:touchend', ['$event'],] }, { type: HostListener, args: ['document:touchcancel', ['$event'],] }],
    onMousemove: [{ type: HostListener, args: ['document:mousemove', ['$event'],] }],
    onTouchmove: [{ type: HostListener, args: ['document:touchmove', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DragDirective.prototype.DragStart;
    /** @type {?} */
    DragDirective.prototype.Drag;
    /** @type {?} */
    DragDirective.prototype.DragEnd;
    /**
     * @type {?}
     * @private
     */
    DragDirective.prototype.dragging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AM2RnZW5vbWVzL25neC1yZXNpemFibGUvIiwic291cmNlcyI6WyJsaWIvcmVzaXphYmxlL2RyYWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlFLE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBS1ksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDdEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDakMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFFdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQThDM0IsQ0FBQzs7Ozs7SUEzQ0MsV0FBVyxDQUFDLENBQWE7UUFDdkIsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLENBQWE7O2NBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxDQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLENBQWE7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztrQkFDWCxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxDQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLENBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztrQkFDWCxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozt3QkFHRSxNQUFNO21CQUNOLE1BQU07c0JBQ04sTUFBTTswQkFJTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQU9wQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQU9yQyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBTzNDLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUM1QyxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBUy9DLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFNN0MsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBM0M5QyxrQ0FBZ0Q7O0lBQ2hELDZCQUEyQzs7SUFDM0MsZ0NBQThDOzs7OztJQUU5QyxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgUG9pbnQgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcnN6RHJhZ0hhbmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFBvaW50PigpO1xuICBAT3V0cHV0KCkgRHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8UG9pbnQ+KCk7XG4gIEBPdXRwdXQoKSBEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxQb2ludD4oKTtcblxuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZWRvd24oZTogTW91c2VFdmVudCkge1xuICAgIGlmIChlLndoaWNoID09PSAxKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuRHJhZ1N0YXJ0LmVtaXQoeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIG9uVG91Y2hzdGFydChlOiBUb3VjaEV2ZW50KSB7XG4gICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgdGhpcy5EcmFnU3RhcnQuZW1pdCh7IHg6IHRvdWNoLmNsaWVudFgsIHk6IHRvdWNoLmNsaWVudFkgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZXVwKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5EcmFnRW5kLmVtaXQoeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICB9XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hjYW5jZWwnLCBbJyRldmVudCddKVxuICBvblRvdWNoZW5kKGU6IFRvdWNoRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgdGhpcy5EcmFnRW5kLmVtaXQoeyB4OiB0b3VjaC5jbGllbnRYLCB5OiB0b3VjaC5jbGllbnRZIH0pO1xuICAgIH1cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICBvbk1vdXNlbW92ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuRHJhZy5lbWl0KHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNobW92ZScsIFsnJGV2ZW50J10pXG4gIG9uVG91Y2htb3ZlKGU6IFRvdWNoRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICB0aGlzLkRyYWcuZW1pdCh7IHg6IHRvdWNoLmNsaWVudFgsIHk6IHRvdWNoLmNsaWVudFkgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=