"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_features_universities-view_universities-view_module_ts"],{

/***/ 3439:
/*!***************************************************************************!*\
  !*** ./src/app/features/universities-view/universities-view.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniversitiesViewComponent: () => (/* binding */ UniversitiesViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class UniversitiesViewComponent {}
_class = UniversitiesViewComponent;
_class.ɵfac = function UniversitiesViewComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-universities-view"]],
  decls: 2,
  vars: 0,
  template: function UniversitiesViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "universitites-view works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8839:
/*!************************************************************************!*\
  !*** ./src/app/features/universities-view/universities-view.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniversitiesViewModule: () => (/* binding */ UniversitiesViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _universities_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universities-view.component */ 3439);
/* harmony import */ var _universitites_view_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universitites-view-routing.module */ 6069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class UniversitiesViewModule {}
_class = UniversitiesViewModule;
_class.ɵfac = function UniversitiesViewModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _universitites_view_routing_module__WEBPACK_IMPORTED_MODULE_1__.UniversitiesViewRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UniversitiesViewModule, {
    declarations: [_universities_view_component__WEBPACK_IMPORTED_MODULE_0__.UniversitiesViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _universitites_view_routing_module__WEBPACK_IMPORTED_MODULE_1__.UniversitiesViewRoutingModule]
  });
})();

/***/ }),

/***/ 6069:
/*!*********************************************************************************!*\
  !*** ./src/app/features/universities-view/universitites-view-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniversitiesViewRoutingModule: () => (/* binding */ UniversitiesViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _universities_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universities-view.component */ 3439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _universities_view_component__WEBPACK_IMPORTED_MODULE_0__.UniversitiesViewComponent
}];
class UniversitiesViewRoutingModule {}
_class = UniversitiesViewRoutingModule;
_class.ɵfac = function UniversitiesViewRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UniversitiesViewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_universities-view_universities-view_module_ts.js.map