"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[365],{3365:(ut,R,c)=>{c.d(R,{NW:()=>_t,TU:()=>gt});var u=c(6814),e=c(5879),y=c(8645),O=c(2296),D=c(8525),g=c(9773),E=c(8180),d=c(2495),z=c(6028),S=c(2831),x=c(4300),k=c(9388),T=c(3651),A=c(9473),Y=c(8484),f=(c(6825),c(3680));const N=["tooltip"],C=new e.OlP("mat-tooltip-scroll-strategy"),Z={provide:C,deps:[T.aV],useFactory:function B(s){return()=>s.scrollStrategies.reposition({scrollThrottle:20})}},H=new e.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function G(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),L="tooltip-panel",M=(0,S.i$)({passive:!0});let Q=(()=>{var s;class l{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=(0,d.Ig)(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,d.Ig)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,d.su)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,d.su)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,i,o,n,r,h,_,P,I,b,p,w){this._overlay=t,this._elementRef=i,this._scrollDispatcher=o,this._viewContainerRef=n,this._ngZone=r,this._platform=h,this._ariaDescriber=_,this._focusMonitor=P,this._dir=b,this._defaultOptions=p,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new y.x,this._scrollStrategy=I,this._document=w,p&&(this._showDelay=p.showDelay,this._hideDelay=p.hideDelay,p.position&&(this.position=p.position),p.positionAtOrigin&&(this.positionAtOrigin=p.positionAtOrigin),p.touchGestures&&(this.touchGestures=p.touchGestures)),b.change.pipe((0,g.R)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,g.R)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,o])=>{t.removeEventListener(i,o,M)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible())return void this._tooltipInstance?._cancelPendingAnimations();const o=this._createOverlay(i);this._detach(),this._portal=this._portal||new Y.C5(this._tooltipComponent,this._viewContainerRef);const n=this._tooltipInstance=o.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe((0,g.R)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(t)}hide(t=this.hideDelay){const i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){const n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof e.SBq)return this._overlayRef;this._detach()}const i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),o=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin&&t||this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return o.positionChanges.pipe((0,g.R)(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:o,panelClass:`${this._cssClassPrefix}-${L}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,g.R)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,g.R)(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe((0,g.R)(this._destroyed)).subscribe(n=>{this._isTooltipVisible()&&n.keyCode===z.hY&&!(0,z.Vb)(n)&&(n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const i=t.getConfig().positionStrategy,o=this._getOrigin(),n=this._getOverlayPosition();i.withPositions([this._addOffset({...o.main,...n.main}),this._addOffset({...o.fallback,...n.fallback})])}_addOffset(t){return t}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i||"below"==i?o={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={originX:"start",originY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={originX:"end",originY:"center"});const{x:n,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:n,originY:r}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i?o={overlayX:"center",overlayY:"bottom"}:"below"==i?o={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={overlayX:"start",overlayY:"center"});const{x:n,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:n,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,E.q)(1),(0,g.R)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return"above"===this.position||"below"===this.position?"top"===i?i="bottom":"bottom"===i&&(i="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){const{overlayY:i,originX:o,originY:n}=t;let r;if(r="center"===i?this._dir&&"rtl"===this._dir.value?"end"===o?"left":"right":"start"===o?"left":"right":"bottom"===i&&"top"===n?"above":"below",r!==this._currentPosition){const h=this._overlayRef;if(h){const _=`${this._cssClassPrefix}-${L}-`;h.removePanelClass(_+this._currentPosition),h.addPanelClass(_+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{let i;this._setupPointerExitEventsIfNeeded(),void 0!==t.x&&void 0!==t.y&&(i=t),this.show(void 0,i)}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{const i=t.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(void 0,o),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{const o=i.relatedTarget;(!o||!this._overlayRef?.overlayElement.contains(o))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,o])=>{this._elementRef.nativeElement.addEventListener(i,o,M)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const i=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const i=this._elementRef.nativeElement,o=i.style;("on"===t||"INPUT"!==i.nodeName&&"TEXTAREA"!==i.nodeName)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),("on"===t||!i.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}}return(s=l).\u0275fac=function(t){e.$Z()},s.\u0275dir=e.lG2({type:s,inputs:{position:["matTooltipPosition","position"],positionAtOrigin:["matTooltipPositionAtOrigin","positionAtOrigin"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),l})(),j=(()=>{var s;class l extends Q{constructor(t,i,o,n,r,h,_,P,I,b,p,w){super(t,i,o,n,r,h,_,P,I,b,p,w),this._tooltipComponent=q,this._cssClassPrefix="mat-mdc",this._viewportMargin=8}_addOffset(t){const o=!this._dir||"ltr"==this._dir.value;return"top"===t.originY?t.offsetY=-8:"bottom"===t.originY?t.offsetY=8:"start"===t.originX?t.offsetX=o?-8:8:"end"===t.originX&&(t.offsetX=o?8:-8),t}}return(s=l).\u0275fac=function(t){return new(t||s)(e.Y36(T.aV),e.Y36(e.SBq),e.Y36(A.mF),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(S.t4),e.Y36(x.$s),e.Y36(x.tE),e.Y36(C),e.Y36(k.Is,8),e.Y36(H,8),e.Y36(u.K0))},s.\u0275dir=e.lG2({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){2&t&&e.ekj("mat-mdc-tooltip-disabled",i.disabled)},exportAs:["matTooltip"],features:[e.qOj]}),l})(),K=(()=>{var s;class l{constructor(t,i){this._changeDetectorRef=t,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new y.x,this._animationsDisabled="NoopAnimations"===i}show(t){null!=this._hideTimeoutId&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){null!=this._showTimeoutId&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){null!=this._showTimeoutId&&clearTimeout(this._showTimeoutId),null!=this._hideTimeoutId&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const i=this._tooltip.nativeElement,o=this._showAnimation,n=this._hideAnimation;if(i.classList.remove(t?n:o),i.classList.add(t?o:n),this._isVisible=t,t&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const r=getComputedStyle(i);("0s"===r.getPropertyValue("animation-duration")||"none"===r.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}}return(s=l).\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(e.QbO,8))},s.\u0275dir=e.lG2({type:s}),l})(),q=(()=>{var s;class l extends K{constructor(t,i,o){super(t,o),this._elementRef=i,this._isMultiline=!1,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide"}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){const t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>24&&t.width>=200}}return(s=l).\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(e.QbO,8))},s.\u0275cmp=e.Xpm({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(1&t&&e.Gf(N,7),2&t){let o;e.iGM(o=e.CRH())&&(i._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,i){1&t&&e.NdJ("mouseleave",function(n){return i._handleMouseLeave(n)}),2&t&&e.Udp("zoom",i.isVisible()?1:null)},features:[e.qOj],decls:4,vars:4,consts:[[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"ngClass","animationend"],["tooltip",""],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("animationend",function(n){return i._handleAnimationEnd(n)}),e.TgZ(2,"div",2),e._uU(3),e.qZA()()),2&t&&(e.ekj("mdc-tooltip--multiline",i._isMultiline),e.Q6J("ngClass",i.tooltipClass),e.xp6(3),e.Oqu(i.message))},dependencies:[u.mk],styles:['.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - (2 * 8px));margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - (2 * 8px));align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip{--mdc-plain-tooltip-container-shape:4px;--mdc-plain-tooltip-supporting-text-line-height:16px}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0}),l})(),W=(()=>{var s;class l{}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[Z],imports:[x.rt,u.ez,T.U8,f.BQ,f.BQ,A.ZD]}),l})();var tt=c(9157);function et(s,l){if(1&s&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&s){const a=l.$implicit;e.Q6J("value",a),e.xp6(1),e.hij(" ",a," ")}}function it(s,l){if(1&s){const a=e.EpF();e.TgZ(0,"mat-form-field",16)(1,"mat-select",17),e.NdJ("selectionChange",function(i){e.CHM(a);const o=e.oxw(2);return e.KtG(o._changePageSize(i.value))}),e.YNc(2,et,2,2,"mat-option",18),e.qZA()()}if(2&s){const a=e.oxw(2);e.Q6J("appearance",a._formFieldAppearance)("color",a.color),e.xp6(1),e.Q6J("value",a.pageSize)("disabled",a.disabled)("aria-labelledby",a._pageSizeLabelId)("panelClass",a.selectConfig.panelClass||"")("disableOptionCentering",a.selectConfig.disableOptionCentering),e.xp6(1),e.Q6J("ngForOf",a._displayedPageSizeOptions)}}function ot(s,l){if(1&s&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&s){const a=e.oxw(2);e.xp6(1),e.Oqu(a.pageSize)}}function st(s,l){if(1&s&&(e.TgZ(0,"div",12)(1,"div",13),e._uU(2),e.qZA(),e.YNc(3,it,3,8,"mat-form-field",14),e.YNc(4,ot,2,1,"div",15),e.qZA()),2&s){const a=e.oxw();e.xp6(1),e.s9C("id",a._pageSizeLabelId),e.xp6(1),e.hij(" ",a._intl.itemsPerPageLabel," "),e.xp6(1),e.Q6J("ngIf",a._displayedPageSizeOptions.length>1),e.xp6(1),e.Q6J("ngIf",a._displayedPageSizeOptions.length<=1)}}function at(s,l){if(1&s){const a=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.firstPage())}),e.O4$(),e.TgZ(1,"svg",7),e._UZ(2,"path",22),e.qZA()()}if(2&s){const a=e.oxw();e.Q6J("matTooltip",a._intl.firstPageLabel)("matTooltipDisabled",a._previousButtonsDisabled())("matTooltipPosition","above")("disabled",a._previousButtonsDisabled()),e.uIk("aria-label",a._intl.firstPageLabel)}}function nt(s,l){if(1&s){const a=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.lastPage())}),e.O4$(),e.TgZ(1,"svg",7),e._UZ(2,"path",24),e.qZA()()}if(2&s){const a=e.oxw();e.Q6J("matTooltip",a._intl.lastPageLabel)("matTooltipDisabled",a._nextButtonsDisabled())("matTooltipPosition","above")("disabled",a._nextButtonsDisabled()),e.uIk("aria-label",a._intl.lastPageLabel)}}let v=(()=>{var s;class l{constructor(){this.changes=new y.x,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(t,i,o)=>{if(0==o||0==i)return`0 of ${o}`;const n=t*i;return`${n+1} \u2013 ${n<(o=Math.max(o,0))?Math.min(n+i,o):n+i} of ${o}`}}}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),l})();const rt={provide:v,deps:[[new e.FiY,new e.tp0,v]],useFactory:function lt(s){return s||new v}},pt=new e.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),dt=(0,f.Id)((0,f.dB)(class{}));let ht=(()=>{var s;class l extends dt{get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max((0,d.su)(t),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(t){this._length=(0,d.su)(t),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max((0,d.su)(t),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(i=>(0,d.su)(i)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(t){this._hidePageSize=(0,d.Ig)(t)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(t){this._showFirstLastButtons=(0,d.Ig)(t)}constructor(t,i,o){if(super(),this._intl=t,this._changeDetectorRef=i,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.selectConfig={},this.page=new e.vpe,this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),o){const{pageSize:n,pageSizeOptions:r,hidePageSize:h,showFirstLastButtons:_}=o;null!=n&&(this._pageSize=n),null!=r&&(this._pageSizeOptions=r),null!=h&&(this._hidePageSize=h),null!=_&&(this._showFirstLastButtons=_)}}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const t=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(t)}previousPage(){if(!this.hasPreviousPage())return;const t=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(t)}firstPage(){if(!this.hasPreviousPage())return;const t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}lastPage(){if(!this.hasNextPage())return;const t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const t=this.getNumberOfPages()-1;return this.pageIndex<t&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){const o=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/t)||0,this.pageSize=t,this._emitPageEvent(o)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._initialized&&(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,i)=>t-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}return(s=l).\u0275fac=function(t){e.$Z()},s.\u0275dir=e.lG2({type:s,inputs:{color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",selectConfig:"selectConfig"},outputs:{page:"page"},features:[e.qOj]}),l})(),mt=0,_t=(()=>{var s;class l extends ht{constructor(t,i,o){super(t,i,o),this._pageSizeLabelId="mat-paginator-page-size-label-"+mt++,this._formFieldAppearance=o?.formFieldAppearance||"outline"}}return(s=l).\u0275fac=function(t){return new(t||s)(e.Y36(v),e.Y36(e.sBO),e.Y36(pt,8))},s.\u0275cmp=e.Xpm({type:s,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[e.qOj],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],["class","mat-mdc-paginator-page-size",4,"ngIf"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button","class","mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-page-size-label",3,"id"],["class","mat-mdc-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-mdc-paginator-page-size-value",4,"ngIf"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],["hideSingleSelectionIndicator","",3,"value","disabled","aria-labelledby","panelClass","disableOptionCentering","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-mdc-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,st,5,4,"div",2),e.TgZ(3,"div",3)(4,"div",4),e._uU(5),e.qZA(),e.YNc(6,at,3,5,"button",5),e.TgZ(7,"button",6),e.NdJ("click",function(){return i.previousPage()}),e.O4$(),e.TgZ(8,"svg",7),e._UZ(9,"path",8),e.qZA()(),e.kcU(),e.TgZ(10,"button",9),e.NdJ("click",function(){return i.nextPage()}),e.O4$(),e.TgZ(11,"svg",7),e._UZ(12,"path",10),e.qZA()(),e.YNc(13,nt,3,5,"button",11),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",!i.hidePageSize),e.xp6(3),e.hij(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),e.xp6(1),e.Q6J("ngIf",i.showFirstLastButtons),e.xp6(1),e.Q6J("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),e.uIk("aria-label",i._intl.previousPageLabel),e.xp6(3),e.Q6J("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),e.uIk("aria-label",i._intl.nextPageLabel),e.xp6(3),e.Q6J("ngIf",i.showFirstLastButtons))},dependencies:[u.sg,u.O5,O.RK,tt.KE,D.gD,f.ey,j],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0}),l})(),gt=(()=>{var s;class l{}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[rt],imports:[u.ez,O.ot,D.LD,W]}),l})()}}]);