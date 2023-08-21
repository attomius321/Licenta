"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_features_teachers-view_teachers-view_module_ts"],{

/***/ 7376:
/*!************************************************************************!*\
  !*** ./src/app/features/teachers-view/teachers-view-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeachersViewRoutingModule: () => (/* binding */ TeachersViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _teachers_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teachers-view.component */ 2620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _teachers_view_component__WEBPACK_IMPORTED_MODULE_0__.TeachersViewComponent
}];
class TeachersViewRoutingModule {}
_class = TeachersViewRoutingModule;
_class.ɵfac = function TeachersViewRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TeachersViewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2620:
/*!*******************************************************************!*\
  !*** ./src/app/features/teachers-view/teachers-view.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeachersViewComponent: () => (/* binding */ TeachersViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TeachersViewComponent {}
_class = TeachersViewComponent;
_class.ɵfac = function TeachersViewComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-teachers-view"]],
  decls: 3,
  vars: 0,
  template: function TeachersViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teachers-view works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nasdasdas asd ad ad d dd d dd d ddd");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9860:
/*!****************************************************************!*\
  !*** ./src/app/features/teachers-view/teachers-view.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeachersViewModule: () => (/* binding */ TeachersViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _teachers_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teachers-view.component */ 2620);
/* harmony import */ var _teachers_view_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teachers-view-routing.module */ 7376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class TeachersViewModule {}
_class = TeachersViewModule;
_class.ɵfac = function TeachersViewModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _teachers_view_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeachersViewRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TeachersViewModule, {
    declarations: [_teachers_view_component__WEBPACK_IMPORTED_MODULE_0__.TeachersViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _teachers_view_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeachersViewRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_teachers-view_teachers-view_module_ts.js.map