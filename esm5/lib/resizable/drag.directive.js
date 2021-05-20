/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
var DragDirective = /** @class */ (function () {
    function DragDirective() {
        this.DragStart = new EventEmitter();
        this.Drag = new EventEmitter();
        this.DragEnd = new EventEmitter();
        this.dragging = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    DragDirective.prototype.onMousedown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.which === 1) {
            this.dragging = true;
            this.DragStart.emit({ x: e.clientX, y: e.clientY });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DragDirective.prototype.onTouchstart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var touch = e.touches[0];
        this.dragging = true;
        this.DragStart.emit({ x: touch.clientX, y: touch.clientY });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DragDirective.prototype.onMouseup = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.dragging) {
            this.DragEnd.emit({ x: e.clientX, y: e.clientY });
        }
        this.dragging = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DragDirective.prototype.onTouchend = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.dragging) {
            /** @type {?} */
            var touch = e.changedTouches[0];
            this.DragEnd.emit({ x: touch.clientX, y: touch.clientY });
        }
        this.dragging = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DragDirective.prototype.onMousemove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.dragging) {
            this.Drag.emit({ x: e.clientX, y: e.clientY });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DragDirective.prototype.onTouchmove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.dragging) {
            /** @type {?} */
            var touch = e.touches[0];
            this.Drag.emit({ x: touch.clientX, y: touch.clientY });
        }
    };
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
    return DragDirective;
}());
export { DragDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AM2RnZW5vbWVzL25neC1yZXNpemFibGUvIiwic291cmNlcyI6WyJsaWIvcmVzaXphYmxlL2RyYWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTlFO0lBQUE7UUFLWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUN0QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNqQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUV0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBOEMzQixDQUFDOzs7OztJQTNDQyxtQ0FBVzs7OztJQURYLFVBQ1ksQ0FBYTtRQUN2QixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQURaLFVBQ2EsQ0FBYTs7WUFDbEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBR0QsaUNBQVM7Ozs7SUFEVCxVQUNVLENBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFHRCxrQ0FBVTs7OztJQUZWLFVBRVcsQ0FBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O2dCQUNYLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBR0QsbUNBQVc7Ozs7SUFEWCxVQUNZLENBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQURYLFVBQ1ksQ0FBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O2dCQUNYLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs0QkFHRSxNQUFNO3VCQUNOLE1BQU07MEJBQ04sTUFBTTs4QkFJTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOytCQU9wQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQU9yQyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBTzNDLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUM1QyxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBUy9DLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFNN0MsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQU9oRCxvQkFBQztDQUFBLEFBdkRELElBdURDO1NBcERZLGFBQWE7OztJQUV4QixrQ0FBZ0Q7O0lBQ2hELDZCQUEyQzs7SUFDM0MsZ0NBQThDOzs7OztJQUU5QyxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgUG9pbnQgPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcnN6RHJhZ0hhbmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFBvaW50PigpO1xuICBAT3V0cHV0KCkgRHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8UG9pbnQ+KCk7XG4gIEBPdXRwdXQoKSBEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxQb2ludD4oKTtcblxuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZWRvd24oZTogTW91c2VFdmVudCkge1xuICAgIGlmIChlLndoaWNoID09PSAxKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuRHJhZ1N0YXJ0LmVtaXQoeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIG9uVG91Y2hzdGFydChlOiBUb3VjaEV2ZW50KSB7XG4gICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgdGhpcy5EcmFnU3RhcnQuZW1pdCh7IHg6IHRvdWNoLmNsaWVudFgsIHk6IHRvdWNoLmNsaWVudFkgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZXVwKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5EcmFnRW5kLmVtaXQoeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICB9XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hjYW5jZWwnLCBbJyRldmVudCddKVxuICBvblRvdWNoZW5kKGU6IFRvdWNoRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgdGhpcy5EcmFnRW5kLmVtaXQoeyB4OiB0b3VjaC5jbGllbnRYLCB5OiB0b3VjaC5jbGllbnRZIH0pO1xuICAgIH1cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICBvbk1vdXNlbW92ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuRHJhZy5lbWl0KHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNobW92ZScsIFsnJGV2ZW50J10pXG4gIG9uVG91Y2htb3ZlKGU6IFRvdWNoRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICB0aGlzLkRyYWcuZW1pdCh7IHg6IHRvdWNoLmNsaWVudFgsIHk6IHRvdWNoLmNsaWVudFkgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=