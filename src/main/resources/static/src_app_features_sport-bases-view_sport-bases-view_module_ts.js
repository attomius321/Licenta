"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_features_sport-bases-view_sport-bases-view_module_ts"],{

/***/ 1162:
/*!******************************************************************************!*\
  !*** ./src/app/features/sport-bases-view/sport-bases-view-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SportBasesViewRoutingModule: () => (/* binding */ SportBasesViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _sport_bases_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sport-bases-view.component */ 1241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _sport_bases_view_component__WEBPACK_IMPORTED_MODULE_0__.SportBasesViewComponent
}];
class SportBasesViewRoutingModule {}
_class = SportBasesViewRoutingModule;
_class.ɵfac = function SportBasesViewRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SportBasesViewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1241:
/*!*************************************************************************!*\
  !*** ./src/app/features/sport-bases-view/sport-bases-view.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SportBasesViewComponent: () => (/* binding */ SportBasesViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class SportBasesViewComponent {}
_class = SportBasesViewComponent;
_class.ɵfac = function SportBasesViewComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-sport-bases-view"]],
  decls: 2,
  vars: 0,
  template: function SportBasesViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sport-bases-view works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9388:
/*!**********************************************************************!*\
  !*** ./src/app/features/sport-bases-view/sport-bases-view.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SportBasesViewModule: () => (/* binding */ SportBasesViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _sport_bases_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sport-bases-view-routing.module */ 1162);
/* harmony import */ var _sport_bases_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sport-bases-view.component */ 1241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class SportBasesViewModule {}
_class = SportBasesViewModule;
_class.ɵfac = function SportBasesViewModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _sport_bases_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.SportBasesViewRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SportBasesViewModule, {
    declarations: [_sport_bases_view_component__WEBPACK_IMPORTED_MODULE_1__.SportBasesViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _sport_bases_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.SportBasesViewRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_sport-bases-view_sport-bases-view_module_ts.js.map