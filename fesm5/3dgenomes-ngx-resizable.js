import { ɵɵdefineInjectable, Injectable, Component, ViewEncapsulation, ElementRef, HostBinding, Input, Output, EventEmitter, Directive, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxResizableService = /** @class */ (function () {
    function NgxResizableService() {
    }
    NgxResizableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxResizableService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxResizableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxResizableService_Factory() { return new NgxResizableService(); }, token: NgxResizableService, providedIn: "root" });
    return NgxResizableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getWindow() {
    return window;
}
var NgxResizeableWindowRef = /** @class */ (function () {
    function NgxResizeableWindowRef() {
    }
    Object.defineProperty(NgxResizeableWindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    NgxResizeableWindowRef.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NgxResizeableWindowRef.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxResizeableWindowRef_Factory() { return new NgxResizeableWindowRef(); }, token: NgxResizeableWindowRef, providedIn: "root" });
    return NgxResizeableWindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = window;
var ResizableComponent = /** @class */ (function () {
    function ResizableComponent(regionElement, windowRef) {
        this.regionElement = regionElement;
        this.windowRef = windowRef;
        this.resizable = true;
        this.noTransition = false;
        this.rFlex = false;
        this.resizeStart = new EventEmitter();
        this.resizing = new EventEmitter();
        this.resizeEnd = new EventEmitter();
        this.vx = 1;
        this.vy = 1;
        this.info = {};
        this.nativeElement = this.regionElement.nativeElement;
    }
    /**
     * @return {?}
     */
    ResizableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.rFlex) {
            this.resizable = false;
        } // Added to permit use of component for all cells
        this.flexBasis = 'flexBasis' in this.nativeElement.style ? 'flexBasis' :
            'webkitFlexBasis' in this.nativeElement.style ? 'webkitFlexBasis' :
                'msFlexPreferredSize' in this.nativeElement.style ? 'msFlexPreferredSize' : 'flexBasis';
    };
    /**
     * @return {?}
     */
    ResizableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.style = this.windowRef.nativeWindow.getComputedStyle(this.nativeElement);
    };
    /**
     * @private
     * @param {?} p
     * @return {?}
     */
    ResizableComponent.prototype.updateInfo = /**
     * @private
     * @param {?} p
     * @return {?}
     */
    function (p) {
        this.info['width'] = false;
        this.info['height'] = false;
        if (this.axis === 'x') {
            this.info['width'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'width'], 10);
        }
        else {
            this.info['height'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'height'], 10);
        }
        this.info['id'] = this.nativeElement.id;
        this.info['point'] = p;
    };
    /**
     * @param {?} p
     * @param {?} direction
     * @return {?}
     */
    ResizableComponent.prototype.dragStart = /**
     * @param {?} p
     * @param {?} direction
     * @return {?}
     */
    function (p, direction) {
        this.dragDir = direction;
        this.axis = (this.dragDir === 'left' || this.dragDir === 'right') ? 'x' : 'y';
        this.start = (this.axis === 'x' ? p.x : p.y);
        this.w = parseInt(this.style.getPropertyValue('width'), 10);
        this.h = parseInt(this.style.getPropertyValue('height'), 10);
        this.resizeStart.emit({ info: this.info });
        // prevent transition while dragging
        this.noTransition = true;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    ResizableComponent.prototype.dragEnd = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        this.updateInfo(p);
        this.resizeEnd.emit({ info: this.info });
        this.noTransition = false;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    ResizableComponent.prototype.dragging = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        /** @type {?} */
        var offset = (this.axis === 'x') ? this.start - p.x : this.start - p.y;
        /** @type {?} */
        var operand = 1;
        switch (this.dragDir) {
            case 'top':
                operand = -1;
            /* falls through */
            case 'bottom':
                /** @type {?} */
                var height = (this.h - offset * this.vy * operand) + 'px';
                if (this.rFlex) {
                    this.flexBasis = height;
                }
                else {
                    this.height = height;
                }
                break;
            case 'left':
                operand = -1;
            /* falls through */
            case 'right':
                /** @type {?} */
                var width = (this.w - offset * this.vx * operand) + 'px';
                if (this.rFlex) {
                    this.flexBasis = width;
                }
                else {
                    this.width = width;
                }
                break;
        }
        this.updateInfo(p);
        this.resizing.emit({ info: this.info });
    };
    ResizableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rsz-layout',
                    template: "<ng-content></ng-content>\n\n<div *ngFor='let direction of directions'\n     [class]=\"'rg-' + direction\"\n     rszDragHandle\n     (DragStart)=\"dragStart($event, direction);\"\n     (DragEnd)=\"dragEnd($event)\"\n     (Drag)=\"dragging($event)\">\n    <span></span>\n</div>",
                    providers: [{ provide: 'Window', useValue: ɵ0 }],
                    encapsulation: ViewEncapsulation.None,
                    styles: [".content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap}.row{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap}.row.resizable{-webkit-box-flex:0;flex:0 0 360px}.cell{box-sizing:border-box;background:#fff;border:4px solid #f0f0f0;-webkit-box-flex:1;flex:1;min-height:60px}.cell.resizable{-webkit-box-flex:0;flex:0 0 360px}.resizable{position:relative}.resizable.no-transition{-webkit-transition:none!important;transition:none!important}.rg-none{display:none}.rg-bottom,.rg-left,.rg-right,.rg-top{display:block;width:8px;height:8px;line-height:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:0 0;position:absolute;z-index:1}.rg-bottom span,.rg-left span,.rg-right span,.rg-top span{position:absolute;box-sizing:border-box;display:block;border:1px solid #ccc}.rg-left span,.rg-right span{border-width:0 1px;top:50%;margin:-10px 0 0 2px;height:20px;width:4px}.rg-bottom span,.rg-top span{border-width:1px 0;left:50%;margin:2px 0 0 -10px;width:20px;height:4px}.rg-top{cursor:row-resize;width:100%;top:0;left:0;margin-top:-4px}.rg-right{cursor:col-resize;height:100%;right:0;top:0;margin-right:-8px}.rg-bottom{cursor:row-resize;width:100%;bottom:0;left:0;margin-bottom:-4px}.rg-left{cursor:col-resize;height:100%;left:0;top:0;margin-left:-8px}.content.cols{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap}.content.cols .row{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap}.content.cols .cell{min-width:60px}.content.cols .rg-top{margin-top:-8px}.content.cols .rg-right{margin-right:-4px}.content.cols .rg-bottom{margin-bottom:-8px}.content.cols .rg-left{margin-left:-4px}"]
                }] }
    ];
    /** @nocollapse */
    ResizableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgxResizeableWindowRef }
    ]; };
    ResizableComponent.propDecorators = {
        resizable: [{ type: HostBinding, args: ['class.resizable',] }],
        noTransition: [{ type: HostBinding, args: ['class.no-transition',] }],
        width: [{ type: HostBinding, args: ['style.width',] }],
        height: [{ type: HostBinding, args: ['style.height',] }],
        flexBasis: [{ type: HostBinding, args: ['style.flex-basis',] }],
        directions: [{ type: Input }],
        rFlex: [{ type: Input }],
        resizeStart: [{ type: Output }],
        resizing: [{ type: Output }],
        resizeEnd: [{ type: Output }]
    };
    return ResizableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxResizableModule = /** @class */ (function () {
    function NgxResizableModule() {
    }
    NgxResizableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ResizableComponent,
                        DragDirective
                    ],
                    exports: [
                        ResizableComponent,
                        DragDirective
                    ]
                },] }
    ];
    return NgxResizableModule;
}());

export { NgxResizableModule, NgxResizableService, ResizableComponent, NgxResizeableWindowRef as ɵa, DragDirective as ɵb };
//# sourceMappingURL=3dgenomes-ngx-resizable.js.map
