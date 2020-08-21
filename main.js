(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    // main => interests
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('main => interests', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // interests => main
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('interests => main', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // interests => my-groups
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('interests => my-groups', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // my-groups => interests
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('my-groups => interests', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // my-groups => main
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('my-groups => main', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // main => my-groups
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('main => my-groups', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //class-group-list => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('class-group-list => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => class-group-list
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => class-group-list', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //class-info => index
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('class-info => index', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // index => class-info
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('index => class-info', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //group-detail => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('group-detail => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => group-detail
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => group-detail', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //create-group => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('create-group => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => create-group
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => create-group', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //edit-group => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('edit-group => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => edit-group
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => edit-group', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //create-interest-group => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('create-interest-group => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => create-interest-group
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => create-interest-group', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //edit-interest-group => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('edit-interest-group => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => edit-interest-group
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => edit-interest-group', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //my-school => *
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('my-school => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // * => my-school
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => my-school', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seeAgainButton {\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-65%);\n            transform: translateY(-65%);\n    display: inline-block;\n    text-align: center;\n}\n.seeAgainButton img {\n    display: inline-block;\n    width: 210px;\n    height: auto;\n    /* position: absolute;\n    top: 15%;\n    left: 50%;\n    transform: translateX(-50%); */\n}\n.seeAgainButton span {\n    margin-top: -47px;\n    color:rgba(34,34,34,1);\n    display: inline-block;\n    font-size: 16px;\n    /* font-family: PingFangSC; */\n    font-weight: 500;\n    /* position: relative; */\n    padding: 0 20px;\n    text-align: center;\n    /* top: calc(15% + 160px); */\n    line-height: 20px;\n}\n.seeAgainButton span button {\n    margin-top: 25px;\n    color:#ffffff;\n    font-weight:600;\n    height:48px;\n    line-height: 48px;\n    border:0;\n    /* background:#FFA100; */\n    background:#FFA100;\n    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.08);\n    border-radius:25px;\n    position: relative;\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n}\n.seeAgainButton span button img{\n    width: 22px;\n    height: auto;\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    right: 6px;\n}\n.confirm-error {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 30px;\n    background: #f76808;\n    font-size: 16px;\n    line-height: 30px;\n    padding: 0 12px;\n    color: #ffffff;\n}\n.mask {position: absolute;left: 0;right: 0;top: 0;bottom: 0;background: #00000082;z-index: 999;}\n.mask .confirm-card {position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 315px;padding: 30px 20px 30px 20px;background: #ffffff;border-radius: 20px;}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:68px;}\n.mask .confirm-card .confirm-title {color: #222222;font-weight:500;font-size:20px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-content {color: #666666;font-weight:400;font-size:16px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-groups {margin-top: 19px;}\n.mask .confirm-card .confirm-groups button {display: block; font-size: 15px; padding: 12px 0;font-weight: bold;width: 100%;border-radius:8px;border: 0;}\n.mask .confirm-card .confirm-groups button.confirm {background: #FFA100;color: #ffffff;margin-bottom: 5px;}\n.mask .confirm-card .confirm-groups button.cancel {background: #ffffff;color: #999999;}\n.mask-animation {}\n.mask-animation.show {-webkit-animation:showDiv 0.25s;animation:showDiv 0.25s;z-index: 9999;display: block;}\n.mask-animation.move {-webkit-animation:hideDiv 0.25s;animation:hideDiv 0.25s;}\n@-webkit-keyframes showDiv\n{\n0%   {right: -100%;left: 100%;}\n100% {left:0;right: 0;}\n}\n@keyframes showDiv\n{\n0%   {right: -100%;left: 100%;}\n100% {left:0;right: 0;}\n}\n@-webkit-keyframes hideDiv\n{\n0%   {left:0;right: 0;}\n100% {left: 100%;right: -100%;}\n}\n@keyframes hideDiv\n{\n0%   {left:0;right: 0;}\n100% {left: 100%;right: -100%;}\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routeAnimations]=\"prepareRoute(outlet)\" *ngIf=\"status == 2\" style=\"height: 100%;background: #FFFFFF;overflow: scroll;-webkit-overflow-scrolling:touch;\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n<!-- <router-outlet   *ngIf=\"status == 2\"></router-outlet> -->\n<div *ngIf=\"status == 3\" style=\"height: 100%\">\n    <!-- <div class=\"reLogin\">\n            <img src=\"./assets/images/club/seeMore@3x.png\" (click)=\"reLogin()\" />\n            <span>重新授权</span>\n        </div> -->\n    <div class=\"seeAgainButton\">\n        <img src=\"./assets/images/berkeley/authorization@2x.png\" />\n        <span>Campus Groups does not have the required authorization from Loop.\n            <br />\n            <button (click)=\"reLogin()\">\n                <img src=\"./assets/images/berkeley/redo@2x.png\" /> Retry\n            </button>\n        </span>\n    </div>\n</div>\n\n<div *ngIf=\"status == 4\" style=\"height: 100%\">\n    <div class=\"seeAgainButton\">\n        <img src=\"./assets/images/berkeley/userError@2x.png\" />\n        <span>User information acquisition failed,\n            <br>Please retrieve.\n            <br />\n            <button (click)=\"reLogin()\">\n                <img src=\"./assets/images/berkeley/redo@2x.png\" /> Retry\n            </button>\n        </span>\n    </div>\n</div>\n<div class=\"mask\" [hidden]=\"!showUpdate\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/info.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-content\">This app requires higher versions of LoopChat. Please upgrade LoopChat via Apple Store or Android Store.</div>\n        <!-- <div class=\"confirm-groups\">\n            <button class=\"confirm\" (click)=\"toUpdate()\">To Upgrade</button>\n        </div> -->\n    </div>\n</div>\n<div class=\"confirm-error\" *ngIf=\"auth.errorInfo\">\n    {{auth.errorInfo}}\n</div>\n<div class=\"mask mask-animation\" [ngClass]=\"cache._showGroups\" *ngIf=\"cache.showGroups\" id=\"classGroupListMask\">\n    <app-class-group-list (callback)=\"callback($event)\"></app-class-group-list>\n</div>\n\n<div class=\"mask mask-animation\" *ngIf=\"cache.showGroupInfo\" [ngClass]=\"{'show' : cache._showGroupInfo, 'move' : !cache._showGroupInfo}\"\n    id=\"classGroupInfo\" style=\"z-index: 9999;\">\n    <app-group-detail (callback)=\"groupInfocallback($event)\"></app-group-detail>\n</div>\n<div class=\"mask mask-animation\" [ngClass]=\"cache._showCreateGroup\" *ngIf=\"cache.showCreateGroup\" id=\"classGroupListMask\"\n    style=\"background: #F6F6F6;z-index: 9999;\">\n    <app-create-group (callback)=\"createcallback($event)\"></app-create-group>\n</div>\n<!-- <div class=\"mask mask-animation\" [ngClass]=\"cache._showMySchool\" *ngIf=\"cache.showMySchool\" id=\"classGroupListMask\"\n    style=\"background: #F6F6F6;z-index: 9999;\">\n    <app-my-school (callback)=\"mySchoolCallback($event)\"></app-my-school>\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/cache.service */ "./src/app/service/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(cd, cache, _ngZone, route, auth, classService, deviceService) {
        this.cd = cd;
        this.cache = cache;
        this._ngZone = _ngZone;
        this.route = route;
        this.auth = auth;
        this.classService = classService;
        this.deviceService = deviceService;
        this.status = 1;
        this.authorizeCount = 0;
        this.showUpdate = false;
        var deviceInfo = this.deviceService.getDeviceInfo();
        this.device = deviceInfo.os;
    }
    AppComponent.prototype.ngOnInit = function () {
        //电脑端调试
        // sessionStorage.setItem("classRoomUserId", '0bf877a6fcc03a1cd011fbc78343a1af8057aea0cde0c59b6c81f6d802774f8f');//guoli
        // sessionStorage.setItem("classRoomUserId", '05ed9603e1f6edab7fdb06fadb61865c0671150574cf252267eabbcfff2f8e05');//dp
        // sessionStorage.setItem("loopUserName", 'Peng Du');//dp
        // this.status = 2;
        // this.checkUser();
        var _this = this;
        // let payload = {
        //     loopUid: '05ed9603e1f6edab7fdb06fadb61865c0671150574cf252267eabbcfff2f8e05',
        //     loopUserName: 'Peng Du'
        // }
        // this.authorize(payload);
        setTimeout(function () {
            loop.ready(function (status) {
                loop.setScrollEnabled(0);
                _this.getuser();
            });
        }, 500);
    };
    AppComponent.prototype.getuser = function () {
        var _this = this;
        var that = this;
        loop.getUserInfo({
            param: { appName: 'Campus Groups', appId: '16e1ef02-6bb5-406d-a67e-c97ee6d55856' },
            // param: { appName: 'gl-class', appId: '3544571e-7b68-4352-86a9-29871266563e' },//gluat
            // param: { appName: 'dp-class', appId: '2544571e-7b68-4352-86a9-29871266563c' },//dpuat
            error: function (err) {
            },
            success: function (resp) {
                var _resp;
                if (typeof resp == 'string') {
                    _resp = JSON.parse(resp);
                }
                else {
                    _resp = resp;
                }
                if (_resp && _resp.code == 1) {
                    _this.status = 2;
                    that.userInfo = _resp;
                    var id = _resp.data.id;
                    var Length = 64 - id.length;
                    if (id && id.length < 64) {
                        for (var i = 0; i < Length; i++) {
                            id += '0';
                        }
                    }
                    var loopUserId = id;
                    var loopUserName = _resp.data.name;
                    sessionStorage.setItem("classRoomUserId", id);
                    sessionStorage.setItem("loopUserName", loopUserName); //dp
                    that.auth.userInfo = _resp.data;
                    var payload = {
                        loopUid: loopUserId,
                        loopUserName: loopUserName
                    };
                    _this.checkUser();
                    _this._ngZone.run(function () { });
                    _this.cd.detectChanges();
                    //判断是否已经注册
                    loop.getVersion(function (version) {
                        if (version) {
                            var _version = JSON.parse(version);
                            if (_version.code == 1) {
                                var data = _version.data;
                                if (data.platform == 'iOS') {
                                    _this.showUpdate = _this.checkVersion(data.version, '1.0.4');
                                    _this._ngZone.run(function () { });
                                    _this.cd.markForCheck();
                                }
                                else {
                                    _this.showUpdate = _this.checkVersion(data.version, '0.0.57');
                                    _this._ngZone.run(function () { });
                                    _this.cd.markForCheck();
                                }
                            }
                            else {
                                //不支持
                                _this.showUpdate = true;
                                _this._ngZone.run(function () { });
                            }
                        }
                    });
                }
                else if (_resp && _resp.code == 0) {
                    _this.status = 3;
                    that._ngZone.run(function () { });
                }
                else if (_resp && _resp.code == 2) {
                    _this.status = 4;
                    that._ngZone.run(function () { });
                }
                _this._ngZone.run(function () { });
            }
        });
    };
    AppComponent.prototype.reLogin = function () {
        this.getuser();
    };
    AppComponent.prototype.authorize = function (payload) {
        var _this = this;
        if (this.authorizeCount > 3) {
            return;
        }
        this.authorizeCount++;
        this.auth.sendPost('user', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.cache.userInfo = _body.payload;
                    _this._ngZone.run(function () { });
                    if (!_this.cache.userInfo.schoolId) {
                        // this.route.navigateByUrl('search-school');
                        _this._ngZone.run(function () { });
                    }
                    else {
                        // this.route.navigateByUrl('search-class');
                        _this._ngZone.run(function () { });
                    }
                }
            }
            else {
                setTimeout(function () {
                    _this.authorize(payload);
                }, 500);
            }
            _this._ngZone.run(function () { });
        });
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent.prototype.checkVersion = function (current, need) {
        var _c = current.split('.');
        var _n = need.split('.');
        var c = parseInt(_c);
        var n = parseInt(_n);
        if (_c[0] < _n[0] || (_c[0] == _n[0] && _c[1] < _n[1]) || (_c[0] == _n[0] && _c[1] == _n[1] && _c[2] < _n[2])) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.toUpdate = function () {
        if (this.device == 'iOS') {
            loop.openUrlBySafari('https://itunes.apple.com/app/id1457815876');
        }
        else {
            loop.openUrl('https://play.google.com/store/apps/details?id=com.qhtech.loopchat&hl=en_US');
        }
    };
    AppComponent.prototype.callback = function (data) {
        var _this = this;
        this.cache._showGroups = 'move';
        setTimeout(function () {
            _this.cache.showGroups = false;
        }, 250);
    };
    AppComponent.prototype.groupInfocallback = function (data) {
        var _this = this;
        this.cache._showGroupInfo = false;
        setTimeout(function () {
            _this.cache.showGroupInfo = false;
        }, 250);
    };
    AppComponent.prototype.createcallback = function (data) {
        var _this = this;
        this.cache._showCreateGroup = 'move';
        setTimeout(function () {
            _this.cache.showCreateGroup = false;
        }, 250);
    };
    AppComponent.prototype.mySchoolCallback = function (data) {
        var _this = this;
        this.cache._showMySchool = 'move';
        setTimeout(function () {
            _this.cache.showMySchool = false;
        }, 250);
    };
    AppComponent.prototype.checkUser = function () {
        var _this = this;
        this.auth.sendPost('user/check', {}).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == '200') {
                var body = resp.body;
                if (body.code == 2000) {
                    _this.cache.userInfo = body.payload;
                    _this._ngZone.run(function () { });
                }
                else if (body && body.code == '3001') {
                    _this.route.navigateByUrl('search-school');
                    // this.cache.chooseSchool = true;
                    _this._ngZone.run(function () { });
                }
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _service_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _service_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _web_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/main/main.component */ "./src/app/web/main/main.component.ts");
/* harmony import */ var _web_class_list_class_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/class-list/class-list.component */ "./src/app/web/class-list/class-list.component.ts");
/* harmony import */ var _web_class_info_class_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/class-info/class-info.component */ "./src/app/web/class-info/class-info.component.ts");
/* harmony import */ var _web_class_group_list_class_group_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/class-group-list/class-group-list.component */ "./src/app/web/class-group-list/class-group-list.component.ts");
/* harmony import */ var _web_my_groups_my_groups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/my-groups/my-groups.component */ "./src/app/web/my-groups/my-groups.component.ts");
/* harmony import */ var _web_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/create-group/create-group.component */ "./src/app/web/create-group/create-group.component.ts");
/* harmony import */ var _web_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/edit-group/edit-group.component */ "./src/app/web/edit-group/edit-group.component.ts");
/* harmony import */ var _web_like_like_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/like/like.component */ "./src/app/web/like/like.component.ts");
/* harmony import */ var _web_search_class_search_class_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/search-class/search-class.component */ "./src/app/web/search-class/search-class.component.ts");
/* harmony import */ var _web_interests_groups_interests_groups_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web/interests-groups/interests-groups.component */ "./src/app/web/interests-groups/interests-groups.component.ts");
/* harmony import */ var _web_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web/select-group/select-group.component */ "./src/app/web/select-group/select-group.component.ts");
/* harmony import */ var _web_group_avatars_group_avatars_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./web/group-avatars/group-avatars.component */ "./src/app/web/group-avatars/group-avatars.component.ts");
/* harmony import */ var _web_create_interest_group_create_interest_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./web/create-interest-group/create-interest-group.component */ "./src/app/web/create-interest-group/create-interest-group.component.ts");
/* harmony import */ var _web_edit_interest_group_edit_interest_group_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./web/edit-interest-group/edit-interest-group.component */ "./src/app/web/edit-interest-group/edit-interest-group.component.ts");
/* harmony import */ var _web_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./web/group-detail/group-detail.component */ "./src/app/web/group-detail/group-detail.component.ts");
/* harmony import */ var ngx_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-dropdown */ "./node_modules/ngx-dropdown/index.js");
/* harmony import */ var ngx_dropdown__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_dropdown__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _web_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./web/loading/loading.component */ "./src/app/web/loading/loading.component.ts");
/* harmony import */ var _web_select_school_select_school_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./web/select-school/select-school.component */ "./src/app/web/select-school/select-school.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_group_list_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./service/group-list.service */ "./src/app/service/group-list.service.ts");
/* harmony import */ var _service_interest_list_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/interest-list.service */ "./src/app/service/interest-list.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _web_my_school_my_school_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./web/my-school/my-school.component */ "./src/app/web/my-school/my-school.component.ts");
/* harmony import */ var _web_search_interest_group_search_interest_group_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./web/search-interest-group/search-interest-group.component */ "./src/app/web/search-interest-group/search-interest-group.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _web_add_course_add_course_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./web/add-course/add-course.component */ "./src/app/web/add-course/add-course.component.ts");
/* harmony import */ var _web_connect_group_course_connect_group_course_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./web/connect-group-course/connect-group-course.component */ "./src/app/web/connect-group-course/connect-group-course.component.ts");
/* harmony import */ var _web_create_interest_group2_create_interest_group2_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./web/create-interest-group2/create-interest-group2.component */ "./src/app/web/create-interest-group2/create-interest-group2.component.ts");
/* harmony import */ var _directive_click_outside_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./directive/click-outside.directive */ "./src/app/directive/click-outside.directive.ts");
/* harmony import */ var _pipe_like_num_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipe/like-num.pipe */ "./src/app/pipe/like-num.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _web_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _web_class_list_class_list_component__WEBPACK_IMPORTED_MODULE_9__["ClassListComponent"],
                _web_class_info_class_info_component__WEBPACK_IMPORTED_MODULE_10__["ClassInfoComponent"],
                _web_class_group_list_class_group_list_component__WEBPACK_IMPORTED_MODULE_11__["ClassGroupListComponent"],
                _web_my_groups_my_groups_component__WEBPACK_IMPORTED_MODULE_12__["MyGroupsComponent"],
                _web_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_13__["CreateGroupComponent"],
                _web_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_14__["EditGroupComponent"],
                _web_like_like_component__WEBPACK_IMPORTED_MODULE_15__["LikeComponent"],
                _web_search_class_search_class_component__WEBPACK_IMPORTED_MODULE_16__["SearchClassComponent"],
                _web_interests_groups_interests_groups_component__WEBPACK_IMPORTED_MODULE_17__["InterestsGroupsComponent"],
                _web_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_18__["SelectGroupComponent"],
                _web_group_avatars_group_avatars_component__WEBPACK_IMPORTED_MODULE_19__["GroupAvatarsComponent"],
                _web_create_interest_group_create_interest_group_component__WEBPACK_IMPORTED_MODULE_20__["CreateInterestGroupComponent"],
                _web_edit_interest_group_edit_interest_group_component__WEBPACK_IMPORTED_MODULE_21__["EditInterestGroupComponent"],
                _web_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_22__["GroupDetailComponent"],
                _web_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__["LoadingComponent"],
                _web_select_school_select_school_component__WEBPACK_IMPORTED_MODULE_25__["SelectSchoolComponent"],
                _web_my_school_my_school_component__WEBPACK_IMPORTED_MODULE_32__["MySchoolComponent"],
                _web_search_interest_group_search_interest_group_component__WEBPACK_IMPORTED_MODULE_33__["SearchInterestGroupComponent"],
                _web_add_course_add_course_component__WEBPACK_IMPORTED_MODULE_35__["AddCourseComponent"],
                _web_connect_group_course_connect_group_course_component__WEBPACK_IMPORTED_MODULE_36__["ConnectGroupCourseComponent"],
                _web_create_interest_group2_create_interest_group2_component__WEBPACK_IMPORTED_MODULE_37__["CreateInterestGroup2Component"],
                _directive_click_outside_directive__WEBPACK_IMPORTED_MODULE_38__["ClickOutsideDirective"],
                _pipe_like_num_pipe__WEBPACK_IMPORTED_MODULE_39__["likeNumPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["Routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ngx_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_34__["ClipboardModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorModule"].forRoot()
            ],
            providers: [
                _service_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"],
                _service_class_service__WEBPACK_IMPORTED_MODULE_27__["ClassService"],
                _service_cache_service__WEBPACK_IMPORTED_MODULE_28__["CacheService"],
                _service_group_list_service__WEBPACK_IMPORTED_MODULE_29__["GroupListService"],
                _service_interest_list_service__WEBPACK_IMPORTED_MODULE_30__["InterestListService"],
                _service_school_service__WEBPACK_IMPORTED_MODULE_31__["SchoolService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/main/main.component */ "./src/app/web/main/main.component.ts");
/* harmony import */ var _web_class_info_class_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/class-info/class-info.component */ "./src/app/web/class-info/class-info.component.ts");
/* harmony import */ var _web_class_group_list_class_group_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/class-group-list/class-group-list.component */ "./src/app/web/class-group-list/class-group-list.component.ts");
/* harmony import */ var _web_my_groups_my_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/my-groups/my-groups.component */ "./src/app/web/my-groups/my-groups.component.ts");
/* harmony import */ var _web_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/create-group/create-group.component */ "./src/app/web/create-group/create-group.component.ts");
/* harmony import */ var _web_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/edit-group/edit-group.component */ "./src/app/web/edit-group/edit-group.component.ts");
/* harmony import */ var _web_search_class_search_class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/search-class/search-class.component */ "./src/app/web/search-class/search-class.component.ts");
/* harmony import */ var _web_interests_groups_interests_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/interests-groups/interests-groups.component */ "./src/app/web/interests-groups/interests-groups.component.ts");
/* harmony import */ var _web_create_interest_group2_create_interest_group2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/create-interest-group2/create-interest-group2.component */ "./src/app/web/create-interest-group2/create-interest-group2.component.ts");
/* harmony import */ var _web_edit_interest_group_edit_interest_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/edit-interest-group/edit-interest-group.component */ "./src/app/web/edit-interest-group/edit-interest-group.component.ts");
/* harmony import */ var _web_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/group-detail/group-detail.component */ "./src/app/web/group-detail/group-detail.component.ts");
/* harmony import */ var _web_select_school_select_school_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/select-school/select-school.component */ "./src/app/web/select-school/select-school.component.ts");
/* harmony import */ var _web_my_school_my_school_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/my-school/my-school.component */ "./src/app/web/my-school/my-school.component.ts");
/* harmony import */ var _web_search_interest_group_search_interest_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/search-interest-group/search-interest-group.component */ "./src/app/web/search-interest-group/search-interest-group.component.ts");
/* harmony import */ var _web_add_course_add_course_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/add-course/add-course.component */ "./src/app/web/add-course/add-course.component.ts");
/* harmony import */ var _web_connect_group_course_connect_group_course_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/connect-group-course/connect-group-course.component */ "./src/app/web/connect-group-course/connect-group-course.component.ts");

















var childRoutes = [
    { path: '', component: _web_interests_groups_interests_groups_component__WEBPACK_IMPORTED_MODULE_8__["InterestsGroupsComponent"], data: { animation: 'main' } },
    { path: 'search-class', component: _web_search_class_search_class_component__WEBPACK_IMPORTED_MODULE_7__["SearchClassComponent"], data: { animation: 'main' } },
    { path: 'search-school', component: _web_select_school_select_school_component__WEBPACK_IMPORTED_MODULE_12__["SelectSchoolComponent"], data: { animation: 'main' } },
    { path: 'interests-groups', component: _web_interests_groups_interests_groups_component__WEBPACK_IMPORTED_MODULE_8__["InterestsGroupsComponent"], data: { animation: 'interests' } },
    { path: 'my-groups-list', component: _web_my_groups_my_groups_component__WEBPACK_IMPORTED_MODULE_4__["MyGroupsComponent"], data: { animation: 'my-groups' } },
];
// 定义常量 路由
var appRoutes = [
    { path: '', component: _web_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], children: childRoutes, data: { animation: 'index' } },
    // {path: '',component: MainComponent},
    { path: 'class-info', component: _web_class_info_class_info_component__WEBPACK_IMPORTED_MODULE_2__["ClassInfoComponent"], data: { animation: 'class-info' } },
    { path: 'class-group-list', component: _web_class_group_list_class_group_list_component__WEBPACK_IMPORTED_MODULE_3__["ClassGroupListComponent"], data: { animation: 'class-group-list' } },
    { path: 'group-detail', component: _web_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_11__["GroupDetailComponent"], data: { animation: 'group-detail' } },
    { path: 'create-group', component: _web_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateGroupComponent"], data: { animation: 'create-group' } },
    { path: 'edit-group', component: _web_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_6__["EditGroupComponent"], data: { animation: 'edit-group' } },
    { path: 'create-interest-group', component: _web_create_interest_group2_create_interest_group2_component__WEBPACK_IMPORTED_MODULE_9__["CreateInterestGroup2Component"], data: { animation: 'create-interest-group' } },
    { path: 'edit-interest-group', component: _web_edit_interest_group_edit_interest_group_component__WEBPACK_IMPORTED_MODULE_10__["EditInterestGroupComponent"], data: { animation: 'edit-interest-group' } },
    { path: 'my-school', component: _web_my_school_my_school_component__WEBPACK_IMPORTED_MODULE_13__["MySchoolComponent"] },
    { path: 'search-interest', component: _web_search_interest_group_search_interest_group_component__WEBPACK_IMPORTED_MODULE_14__["SearchInterestGroupComponent"], data: { animation: 'my-school' } },
    { path: 'add-course', component: _web_add_course_add_course_component__WEBPACK_IMPORTED_MODULE_15__["AddCourseComponent"], data: { animation: 'my-school' } },
    { path: 'connect-group-course', component: _web_connect_group_course_connect_group_course_component__WEBPACK_IMPORTED_MODULE_16__["ConnectGroupCourseComponent"], data: { animation: 'my-school' } },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
    // { path: 'login', component: LoginComponent },
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });
// export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
//     exports: [RouterModule]
// })
// export class Routing { }


/***/ }),

/***/ "./src/app/directive/click-outside.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directive/click-outside.directive.ts ***!
  \******************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/pipe/like-num.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipe/like-num.pipe.ts ***!
  \***************************************/
/*! exports provided: likeNumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeNumPipe", function() { return likeNumPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var likeNumPipe = /** @class */ (function () {
    function likeNumPipe() {
    }
    likeNumPipe.prototype.transform = function (value) {
        if (!value) {
            return 0;
        }
        var num;
        if (value === 0) {
            num = '';
        }
        else if (value > 99999 && value <= 9999999) {
            num = value / 1000;
            num = num.toFixed(1) + "K";
        }
        else if (value > 9999999) {
            num = value / 1000000;
            num = num.toFixed(1) + "M";
        }
        else {
            num = value;
        }
        return num;
    };
    likeNumPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'likeNumPipe' }),
        __metadata("design:paramtypes", [])
    ], likeNumPipe);
    return likeNumPipe;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const BSAE_URL = "/"
var BSAE_URL = "/api/";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // IMG_URL: any = '';
        this.IMG_URL = '/api';
    }
    AuthService.prototype.getUserId = function () {
        return sessionStorage.getItem("classRoomUserId");
    };
    AuthService.prototype.getImageUrlByID = function (id) {
        return this.http.get(this.IMG_URL + 'static/clubphoto/' + id, {
            observe: "response",
        }).catch(function (e) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(e); });
    };
    AuthService.prototype.sendPost = function (url, payload) {
        return this.http.post(BSAE_URL + url, payload, {
            observe: "response",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "user-id": this.getUserId()
            })
        }).catch(function (e) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(e); });
    };
    AuthService.prototype.sendPut = function (url, payload) {
        return this.http.put(BSAE_URL + url, payload, {
            observe: "response",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "user-id": this.getUserId()
            })
        }).catch(function (e) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(e); });
    };
    AuthService.prototype.sendGet = function (url) {
        return this.http.get(BSAE_URL + url, {
            observe: "response",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "user-id": this.getUserId()
            })
        }).catch(function (e) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(e); });
    };
    AuthService.prototype.sendDelete = function (url) {
        return this.http.delete(BSAE_URL + url, {
            observe: "response",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "user-id": this.getUserId()
            })
        }).catch(function (e) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(e); });
    };
    AuthService.prototype.error = function (errorInfo) {
        var _this = this;
        this.errorInfo = errorInfo;
        setTimeout(function () {
            _this.errorInfo = '';
        }, 2000);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/cache.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/cache.service.ts ***!
  \******************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CacheService = /** @class */ (function () {
    function CacheService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.userInfo = {};
        this.currentNavigate = 'interests';
        this.searchStr = '';
        this.showGroups = false;
        this._showGroups = '';
        this.createStatus = '';
        this.showGroupInfo = false;
        this._showGroupInfo = false;
        this.showCreateGroup = false;
        this._showCreateGroup = '';
        this.showMySchool = false;
        this._showMySchool = '';
        this.courseToAdd = {};
        this.chooseSchool = false;
    }
    CacheService.prototype.getCachePopularClasses = function (callBack) {
        var _this = this;
        this.auth.sendGet('class/popular?page=' + 1 + '&pageSize=' + 20).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.popularClass = _body.payload;
                    // for (let data of _body.payload) {
                    //     this.popularClass.push(data);
                    // }
                    callBack(_body.payload);
                }
            }
        });
    };
    CacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/service/class.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/class.service.ts ***!
  \******************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassService = /** @class */ (function () {
    function ClassService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ClassService.prototype.getClassList = function (page, page_size, name, schoolId, callBack) {
        this.auth.sendGet('class/search?page=' + page + '&pageSize=' + page_size + '&name=' + name + '&schoolId=' + schoolId).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    callBack(_body.payload);
                }
            }
        });
    };
    ClassService.prototype.getPopularClasses = function (page, page_size, schoolId, callBack) {
        this.auth.sendGet('class/popular?page=' + page + '&pageSize=' + page_size + '&schoolId=' + schoolId).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    callBack(_body.payload);
                }
            }
        });
    };
    ClassService.prototype.groupLike = function (group_id, callBack) {
        this.auth.sendPost('group/like', { id: group_id }).subscribe(function (resp) {
            callBack(resp);
        });
    };
    ClassService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "./src/app/service/group-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/group-list.service.ts ***!
  \***********************************************/
/*! exports provided: GroupListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListService", function() { return GroupListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupListService = /** @class */ (function () {
    function GroupListService(auth) {
        this.auth = auth;
        this.groupsMap = {};
        this.page = 1;
        this.cacheGroups = [];
        this.cachePage = 1;
    }
    // init
    GroupListService.prototype.getGroupsByClassID = function (id, page, schoolId, callback) {
        var _this = this;
        // if (this.groupsMap[id]) {
        //     callback(this.groupsMap[id])
        // } else {
        this.groupsMap[id] = [];
        var url = 'class/group/list?classId=' + id + '&page=' + 1 + '&pageSize=10' + '&schoolId=' + schoolId;
        this.auth.sendGet(url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    _this.groupsMap[id] = _body.payload;
                    // if (this.cachePage < page) {
                    //     this.cachePage++;
                    //     this.page = this.cachePage;
                    //     this.getGroupsByClassID(id, page, () => { });
                    // } else {
                    _this.cachePage = 1;
                    _this.groupsMap[id] = _this.cacheGroups;
                    callback(_body.payload);
                    // }
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
        // }
    };
    // 分页查询
    GroupListService.prototype.getGroupsByClassIDAndPage = function (id, page, schoolId, callback) {
        var _this = this;
        this.page = page;
        var url = 'class/group/list?classId=' + id + '&page=' + page + '&pageSize=10' + '&schoolId=' + schoolId;
        this.auth.sendGet(url).subscribe(function (resp) {
            if (!_this.groupsMap[id]) {
                _this.groupsMap[id] = [];
            }
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    var getAllDone = datas.length == 10 ? false : true;
                    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
                        var data = datas_1[_i];
                        _this.groupsMap[id].push(data);
                    }
                    callback({
                        getAllDone: getAllDone,
                        datas: datas
                    });
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    GroupListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], GroupListService);
    return GroupListService;
}());



/***/ }),

/***/ "./src/app/service/interest-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/interest-list.service.ts ***!
  \**************************************************/
/*! exports provided: InterestListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestListService", function() { return InterestListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterestListService = /** @class */ (function () {
    function InterestListService(auth) {
        this.auth = auth;
        this.interestGroups = [];
        this.page = 1;
        this.cache_page = 1;
        this.cacheInterestGroups = [];
    }
    // init
    InterestListService.prototype.getInterestList = function (page, schoolId, callback) {
        var _this = this;
        // if (this.interestGroups.length > 0) {
        //     callback(this.interestGroups)
        // } else {
        this.interestGroups = [];
        var url = 'page=' + 1 + '&pageSize=10' + '&schoolId=' + schoolId;
        this.auth.sendGet('interest/group/list?' + url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    // for (let data of datas) {
                    //     this.interestGroups.push(data);
                    // }
                    // if (this.cache_page < page) {
                    //     this.cache_page++;
                    //     this.getInterestList(page, () => { })
                    // } else {
                    _this.cache_page = 1;
                    callback(_body.payload);
                    // }
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
        // }
    };
    // 分页查询
    InterestListService.prototype.getInterestListByPage = function (page, schoolId, callback) {
        var _this = this;
        this.page = page;
        var url = 'page=' + page + '&pageSize=10' + '&schoolId=' + schoolId;
        this.auth.sendGet('interest/group/list?' + url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    var getAllDone = datas.length == 10 ? false : true;
                    // for (let data of datas) {
                    //     this.interestGroups.push(data);
                    // }
                    callback({
                        getAllDone: getAllDone,
                        datas: datas
                    });
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    //查询
    InterestListService.prototype.searchInterestList = function (page, schoolId, inputStr, callback) {
        var _this = this;
        // if (this.interestGroups.length > 0) {
        //     callback(this.interestGroups)
        // } else {
        this.interestGroups = [];
        var url = 'page=' + 1 + '&pageSize=10' + '&schoolId=' + schoolId + '&name=' + inputStr;
        this.auth.sendGet('interest/group/list?' + url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    // for (let data of datas) {
                    //     this.interestGroups.push(data);
                    // }
                    // if (this.cache_page < page) {
                    //     this.cache_page++;
                    //     this.getInterestList(page, () => { })
                    // } else {
                    _this.cache_page = 1;
                    callback(_body.payload);
                    // }
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
        // }
    };
    // 分页查询
    InterestListService.prototype.searchInterestListByPage = function (page, schoolId, inputStr, callback) {
        var _this = this;
        this.page = page;
        var url = 'page=' + page + '&pageSize=10' + '&schoolId=' + schoolId + '&name=' + inputStr;
        this.auth.sendGet('interest/group/list?' + url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    var getAllDone = datas.length == 10 ? false : true;
                    // for (let data of datas) {
                    //     this.interestGroups.push(data);
                    // }
                    callback({
                        getAllDone: getAllDone,
                        datas: datas
                    });
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    InterestListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], InterestListService);
    return InterestListService;
}());



/***/ }),

/***/ "./src/app/service/my-groups.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/my-groups.service.ts ***!
  \**********************************************/
/*! exports provided: MyGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGroupsService", function() { return MyGroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyGroupsService = /** @class */ (function () {
    function MyGroupsService(auth) {
        this.auth = auth;
    }
    MyGroupsService.prototype.getAllMyGroups = function (groups, page, schoolId, callback) {
        var _this = this;
        if (!groups) {
            groups = [];
        }
        ;
        var url = 'page=' + page + '&pageSize=100' + '&schoolId=' + schoolId;
        this.auth.sendGet('user/group/list?' + url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
                        var data = datas_1[_i];
                        groups.push(data);
                    }
                    if (datas && datas.length == 100) {
                        page++;
                        _this.getAllMyGroups(groups, page, schoolId, callback);
                    }
                    else {
                        _this.myGroups = groups;
                        callback(true);
                    }
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    MyGroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MyGroupsService);
    return MyGroupsService;
}());



/***/ }),

/***/ "./src/app/service/school.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/school.service.ts ***!
  \*******************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchoolService = /** @class */ (function () {
    function SchoolService() {
        this.schoolList = [];
        this.schoolMap = {};
    }
    SchoolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "./src/app/web/add-course/add-course.component.css":
/*!*********************************************************!*\
  !*** ./src/app/web/add-course/add-course.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.submit-form {\n    margin: 15px 16px;\n    padding: 0 15px 44px 15px;\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n}\n.submit-form .form-group {\n    padding-top: 15px;\n}\n.submit-form .form-group .label {\n    color: #404040;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 19px;\n}\n.submit-form .form-group .form-content {\n    padding-top: 6px;\n    position: relative;\n}\n.submit-form .form-group .form-content input {\n    width: 100%;\n    height: 37px;\n    background: #ffffff;\n    border-radius: 10px;\n    border: 1px solid #F3F3F3;\n    font-size: 16px;\n    padding: 0 10px;\n}\n.submit-form .form-group .form-content textarea {\n    width: 100%;\n    height: 107px;\n    background: #ffffff;\n    border-radius: 10px;\n    border: 1px solid #F3F3F3;\n    font-size: 16px;\n    padding: 10px 10px;\n}\n.submit-form .form-group .form-content input:focus,\n.submit-form .form-group .form-content textarea:focus {\n    border: 1px solid #F5A623;\n}\n.submit-form .form-group .form-content.error input,\n.submit-form .form-group .form-content.error textarea {\n    border: 1px solid #f76808;\n}\n.submit-form .form-group .form-content .description {\n    position: absolute;\n    right: 10px;\n    bottom: -17px;\n    font-weight: normal;\n    color: #404040;\n}\n.submit-form .submit {\n    text-align: center;\n    padding-top: 28px;\n}\n.submit-form .submit button {\n    width: 158px;\n    height: 40px;\n    background: #f5a623;\nbox-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);\n    border-radius: 22px;\n    font-size: 16px;\n    color: #FFFFFF;\n    font-weight: 600;\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: #00000082;}\n.mask .confirm-card {position: absolute;left: 50%;top: calc(40% + 20px);-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 315px;padding: 36px 20px 31px 20px;background: #ffffff;border-radius: 20px;}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width: 46px;}\n.mask .confirm-card .confirm-title {color: #404040;font-weight: 500;font-size: 18px;margin-top: 6px;text-align: center;}\n.mask .confirm-card .confirm-groups {margin-top: 31px;padding: 0 20px;}\n.mask .confirm-card .confirm-groups button {display: block; font-size: 16px; padding: 12px 0;font-weight: 500;width: 100%;border-radius:22px;border: 0;}\n.mask .confirm-card .confirm-groups button.confirm {box-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);background: #FFA100;color: #ffffff;margin-bottom: 5px;}\n.mask .confirm-card .confirm-groups button.cancel {box-shadow: 3px 4px 8px 0px rgba(134, 134, 134, 0.7);background: #868686;color: #ffffff;margin-bottom: 14px;}"

/***/ }),

/***/ "./src/app/web/add-course/add-course.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web/add-course/add-course.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; overflow: hidden;background: #ffffff;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Add Course\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\"\n                class=\"school-avatar\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n        <div class=\"submit-form\">\n            <form action=\"\">\n                <div class=\"form-group\">\n                    <label class=\"label\">Course Title</label>\n                    <div class=\"form-content\" [ngClass]=\"{'error': titleError}\">\n                        <input type=\"text\" name=\"course.title\" [(ngModel)]=\"course.title\"\n                            (ngModelChange)=\"titleChange($event)\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"label\">Course Abbreviation</label>\n                    <div class=\"form-content\" [ngClass]=\"{'error': abbreviationError}\">\n                        <input type=\"text\" name=\"course.abbreviation\" [(ngModel)]=\"course.abbreviation\"\n                            (ngModelChange)=\"abbreviationChange($event)\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"label\">Course Code</label>\n                    <div class=\"form-content\" [ngClass]=\"{'error': courseNumberError}\">\n                        <input type=\"text\" name=\"course.courseNumber\" [(ngModel)]=\"course.courseNumber\"\n                            (ngModelChange)=\"courseNumberChange($event)\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"label\">Course Details</label>\n                    <div class=\"form-content\" [ngClass]=\"{'error': descriptionError}\">\n                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" name=\"course.description\"\n                            [(ngModel)]=\"course.description\" (ngModelChange)=\"descriptionChange($event)\"></textarea>\n                        <span class=\"description\">{{course.description.length}}/120</span>\n                    </div>\n                </div>\n                <div class=\"submit\">\n                    <button (click)=\"submit()\">\n                        <i class=\"bicon icon-plus\" style=\"right: 8px;\"></i>ADD</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"confirmConnect\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Course added Successfully</div>\n        <div class=\"confirm-groups\">\n            <button class=\"cancel\" (click)=\"cancelConnect()\">No, Thank you</button>\n            <button class=\"confirm\" (click)=\"connect()\">Connect this course group</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/add-course/add-course.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web/add-course/add-course.component.ts ***!
  \********************************************************/
/*! exports provided: AddCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseComponent", function() { return AddCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCourseComponent = /** @class */ (function () {
    function AddCourseComponent(router, cache, schoolService, auth) {
        this.router = router;
        this.cache = cache;
        this.schoolService = schoolService;
        this.auth = auth;
        this.course = {
            id: '',
            schoolId: '',
            title: '',
            abbreviation: '',
            courseNumber: '',
            description: '',
            likeNum: 0
        };
        this.titleError = false;
        this.abbreviationError = false;
        this.courseNumberError = false;
        this.descriptionError = false;
        this.confirmConnect = false;
    }
    AddCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    AddCourseComponent.prototype.goBack = function () {
        history.go(-1);
    };
    AddCourseComponent.prototype.titleChange = function (event) {
        var _this = this;
        if (this.course.title.trim() != '') {
            this.titleError = false;
        }
        if (this.course.title.length > 50) {
            this.auth.error('Can only enter up to 50 characters.');
            setTimeout(function () {
                _this.course.title = _this.course.title.substring(0, 50);
            });
        }
    };
    AddCourseComponent.prototype.abbreviationChange = function (event) {
        var _this = this;
        if (this.course.abbreviation.trim() != '') {
            this.abbreviationError = false;
        }
        if (this.course.abbreviation.length > 25) {
            this.auth.error('Can only enter up to 25 characters.');
            setTimeout(function () {
                _this.course.abbreviation = _this.course.abbreviation.substring(0, 25);
            });
        }
    };
    AddCourseComponent.prototype.courseNumberChange = function (event) {
        var _this = this;
        if (this.course.courseNumber.trim() != '') {
            this.courseNumberError = false;
        }
        if (this.course.courseNumber.length > 25) {
            this.auth.error('Can only enter up to 25 characters.');
            setTimeout(function () {
                _this.course.courseNumber = _this.course.courseNumber.substring(0, 25);
            });
        }
    };
    AddCourseComponent.prototype.descriptionChange = function (event) {
        var _this = this;
        if (this.course.description.trim() != '') {
            this.descriptionError = false;
        }
        if (this.course.description.length > 120) {
            this.auth.error('Can only enter up to 120 characters.');
            setTimeout(function () {
                _this.course.description = _this.course.description.substring(0, 120);
            });
        }
    };
    AddCourseComponent.prototype.submit = function () {
        if (!this.course.title || this.course.title.trim() == '') {
            this.titleError = true;
        }
        else {
            this.titleError = false;
        }
        if (!this.course.abbreviation || this.course.abbreviation.trim() == '') {
            this.abbreviationError = true;
        }
        else {
            this.abbreviationError = false;
        }
        if (!this.course.courseNumber || this.course.courseNumber.trim() == '') {
            this.courseNumberError = true;
        }
        else {
            this.courseNumberError = false;
        }
        if (!this.course.description || this.course.description.trim() == '') {
            // this.descriptionError = true;
            this.course.description = '';
        }
        else {
            this.descriptionError = false;
        }
        if (this.titleError || this.abbreviationError || this.courseNumberError || this.descriptionError) {
            return;
        }
        this.submitAdd();
    };
    AddCourseComponent.prototype.submitAdd = function () {
        var _this = this;
        var payload = {
            schoolId: this.cache.userInfo.schoolId,
            title: this.course.title,
            abbreviation: this.course.abbreviation,
            courseNumber: this.course.courseNumber,
            description: this.course.description,
        };
        this.auth.sendPost('class', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.confirmConnect = true;
                    var data = _body.payload;
                    _this.updateCourse(data);
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    AddCourseComponent.prototype.updateCourse = function (data) {
        for (var key in this.course) {
            if (data.hasOwnProperty(key)) {
                this.course[key] = data[key];
            }
        }
    };
    AddCourseComponent.prototype.cancelConnect = function () {
        this.confirmConnect = false;
        history.go(-1);
    };
    AddCourseComponent.prototype.connect = function () {
        this.cache.courseToAdd = this.course;
        this.router.navigateByUrl('/connect-group-course');
    };
    AddCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-course',
            template: __webpack_require__(/*! ./add-course.component.html */ "./src/app/web/add-course/add-course.component.html"),
            styles: [__webpack_require__(/*! ./add-course.component.css */ "./src/app/web/add-course/add-course.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"], _service_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AddCourseComponent);
    return AddCourseComponent;
}());



/***/ }),

/***/ "./src/app/web/class-group-list/class-group-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/web/class-group-list/class-group-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n.input {\n    height: 45px;\n    background: rgba(255,255,255,1);\n    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.08);\n    line-height: 45px;\n    position: relative;\n    padding-left: 15px;\n    text-align: center;\n}\n.input button {\n    border: 0;\n    background: white;\n    color: #404040;\n    font-size:17px;\n    font-weight:bold;\n}\n.input button img {\n    display: inline-block;\n    width: 11px;\n    position: absolute;\n    left: 20px;\n}\n.scroll {\n    padding-top: 15px;\n    height: calc(100% - 45px);\n    overflow: auto;\n    overflow-x: hidden;\n    -webkit-overflow-scrolling:touch;\n}\n.classInfo {\n    margin: 0 20px 15px 20px;\n    background: linear-gradient(134deg,rgba(250,217,97,1) 0%,rgba(247,107,28,1) 97%,rgba(250,217,97,1) 100%);\n    box-shadow: 0px 10px 20px 0px rgba(255,142,9,0.5);\n    border-radius: 16px;\n    position: relative;\n    height: 101px;\n    padding-left: 108px;\n    padding-right: 15px;\n    color: white;\n}\n.classInfo img {\n    width: 84px;\n    position: absolute;\n    left: 16px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.classInfo .description {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: calc(100% - 115px);\n}\n.classInfo h2 {\n    font-size:22px;\n    font-weight:bold;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.classInfo p {\n    margin-top: 4px;\n    font-size:15px;\n    font-weight:500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n}\n.classList {\n    padding: 10px 20px 0 20px;\n    /* overflow-y: auto;\n    overflow-x: hidden; */\n}\n.classList ul li {\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 16px;\n    padding: 17px 15px 17px 15px;\n    position: relative;\n    margin-top: 10px;\n}\n.classList ul li:first-child {\n    margin-top: 0;\n}\n.classList ul li h2 {\n    font-size:18px;\n    font-weight:500;\n    color:rgba(64,64,64,1);\n    padding-right: 45px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.classList ul li .usersNum {\n    margin-top: 5px;\n    padding-right: 45px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.classList ul li .usersNum span {\n    font-weight: 500;\n    font-size: 13px;\n}\n.classList ul li .usersNum img {\n    display: inline-block;\n    width: 18px;\n    margin-right: 6px;\n    vertical-align: -1.5px;\n}\n.classList ul li p {\n    font-size: 15px;\n    font-weight: 400;\n    color: rgba(102,102,102,1);\n    margin-top: 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    word-break: break-all;\n    color: #666666;\n}\n.classList ul li .applaud {\n    position: absolute;\n    top: 7px;\n    right: 4px;\n    text-align: center;\n}\n.classList ul li .li:active~.applaud {\n    opacity: 0.5;\n}\n.classList ul li .applaud span {\n    font-size: 12px;\n    font-weight: bold;\n    color: #FFA100;\n}\n.classList ul li img {\n    display: block;\n    width: 32px;\n}\n.classList ul li span {\n    font-size: 12px;\n    font-weight: bold;\n    color: #838383;\n}\n.empty {\n    margin: 0 26px;\n    text-align: center;\n}\n.add-button {\n    margin: 0 20px;\n    text-align: center;\n}\n.empty img {\n    margin-top: 20px;\n    width: calc(100% - 120px);\n    display: inline-block;\n}\n.empty p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(102,102,102,1);\n    padding: 0 6px;\n}\ndiv.create-button {\n    width: 100%;\n    position: relative;\n    height: 50px;\n    line-height: 50px;\n    background: #ffffff;\n    box-shadow: 0px 2px 15px 0px rgba(204,204,204,0.5);\n    border-radius: 10px;\n    color: #454545;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    padding-left: 44px;\n}\ndiv.create-button .navigate{\n    position: absolute;\n    width: 9px;\n    right: 20px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\ndiv.create-button .icon {\n    position: absolute;\n    width: 18px;\n    left: 13px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.m {\n\twidth: 750px;\n    height: 200px;\n    margin-left: auto;\n    margin-right: auto;\n    background-size: 100% 100%;\n    background: aqua;\n    position: relative;\n    top: 100px;\n}\n\n"

/***/ }),

/***/ "./src/app/web/class-group-list/class-group-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/web/class-group-list/class-group-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; overflow: hidden;background:#ffffff;\">\n    <!-- <div class=\"input\">\n        <button (click)=\"goBack()\" >\n            <img class=\"search\" src=\"./assets/images/berkeley/Navbar-Return@2x.png\" />\n            Course Groups\n        </button>\n    </div> -->\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Course Groups\n    </div>\n    <div class=\"scroll\" (scroll)=\"searchMore($event)\" style=\"padding-bottom: 16px;\">\n        <div class=\"classInfo\">\n            <img src=\"./assets/images/berkeley/Class111@2x.png\" />\n            <div class=\"description\">\n                <h2 class=\"white\">{{classInfo.abbreviation + ' ' + classInfo.courseNumber}}</h2>\n                <p style=\"-webkit-box-orient: vertical;\">{{classInfo.title}}\n                </p>\n            </div>\n\n        </div>\n        <div class=\"add-button\">\n            <div class=\"create-button\" (click)=\"create()\">\n                <img class=\"icon\" src=\"./assets/images/berkeley/add-course@3x.png\" alt=\"\">\n                Add Class Groups\n                <img class=\"navigate\" src=\"./assets/images/berkeley/right.png\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"classList\" *ngIf=\"groups && groups.length != 0\">\n            <ul>\n                <li (click)=\"showGroupDetail(group)\" *ngFor=\"let group of groups; let idx = index\">\n                    <div class=\"li\">\n                        <h2>{{group.name}}</h2>\n                        <div class=\"usersNum\">\n                            <img src=\"./assets/images/berkeley/Droup-1@2x.png\" />\n                            <span>{{group.loopGroup ? (group.loopGroup.membersNum || 0) : 0}}</span>\n                        </div>\n                        <p style=\"-webkit-box-orient: vertical;\">{{group.notice}}</p>\n                    </div>\n                    <div class=\"applaud\">\n                        <span style=\"float: right;\">\n                            <app-like [id]=\"'classGroupList' + idx\" [group]=\"group\" [class]=\"\"\n                                (loved)=\"loved($event, group)\"></app-like>\n                        </span>\n                        <!-- <img src=\"./assets/images/berkeley/zan-1@2x.png\" /> -->\n                        <span style=\"float: right;line-height: 46px;margin-right: -11px;\">{{group.likeNum | likeNumPipe}}</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"empty\" *ngIf=\"groups && groups.length == 0\">\n            <img src=\"./assets/images/berkeley/Class-0@2x.png\" />\n            <div class=\"description\" style=\"position: relative;top: -60px;\">\n                <p>\n                    <!-- No groups related to <span style=\"color: #FFA100\">{{searchStr}}</span>\n                    were found. <br>You can try another keyword. -->\n                    Sorry, there are currently no group chats available for this course.\n                </p>\n            </div>\n        </div>\n        <app-loading *ngIf=\"!groups\"></app-loading>\n    </div>\n</div>\n<!-- <div>\n    <div class=\"m\">\n        <app-like [id]=\"'test001'\"></app-like>\n    </div>\n    <div class=\"m\">\n        <app-like [id]=\"'test002'\"></app-like>\n    </div>\n    <div class=\"m\">\n        <app-like [id]=\"'test003'\"></app-like>\n    </div>\n    <div class=\"m\">\n        <app-like [id]=\"'test004'\"></app-like>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/web/class-group-list/class-group-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/web/class-group-list/class-group-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ClassGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassGroupListComponent", function() { return ClassGroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_group_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/group-list.service */ "./src/app/service/group-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassGroupListComponent = /** @class */ (function () {
    function ClassGroupListComponent(router, cache, auth, groupList) {
        var _this = this;
        this.router = router;
        this.cache = cache;
        this.auth = auth;
        this.groupList = groupList;
        this.getAllDone = false;
        this.loading = false;
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classInfo = cache.selectedClass;
        // this.page = groupList.page;
        this.page = 1;
        this.groupList.cacheGroups = [];
        this.groupList.cachePage = 1;
        // this.getMyGroups(1);
        this.groupList.getGroupsByClassID(this.classInfo.id, this.page, this.cache.userInfo.schoolId, function (datas) {
            _this.groups = datas;
        });
    }
    ClassGroupListComponent.prototype.ngOnInit = function () {
    };
    ClassGroupListComponent.prototype.getMyGroups = function (page) {
        var _this = this;
        this.page = page;
        this.lastDataLength = this.groups ? this.groups.length : 0;
        var url = 'group/list?id=' + this.classInfo.id + '&type=CLASS&page=' + page + '&pageSize=10' + '&schoolId=' + this.cache.userInfo.schoolId;
        this.auth.sendGet(url).subscribe(function (resp) {
            if (!_this.groups) {
                _this.groups = [];
            }
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    _this.getAllDone = datas.length == 10 ? false : true;
                    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
                        var data = datas_1[_i];
                        _this.groups.push(data);
                    }
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    ClassGroupListComponent.prototype.goBack = function () {
        this.callback.emit({ type: 'close' });
    };
    ClassGroupListComponent.prototype.showGroupDetail = function (group) {
        this.cache.selectedGroup = group;
        this.cache.showGroupInfo = true;
        this.cache._showGroupInfo = true;
    };
    ClassGroupListComponent.prototype.create = function () {
        this.cache.selectedClass = this.classInfo;
        this.cache.createStatus = 'groupList';
        this.cache.showCreateGroup = true;
        this.cache._showCreateGroup = 'show';
        // this.router.navigateByUrl("/create-group");
    };
    ClassGroupListComponent.prototype.loved = function (event, group) {
        if (event == 'clicked') {
            group.likeNum++;
        }
    };
    ClassGroupListComponent.prototype.searchMore = function (event) {
        var _this = this;
        var box = event.target;
        if (this.loading) {
            return;
        }
        if (box.scrollHeight - box.offsetHeight - box.scrollTop < 200) {
            this.page++;
            this.loading = true;
            this.groupList.getGroupsByClassIDAndPage(this.classInfo.id, this.page, this.cache.userInfo.schoolId, function (resp) {
                _this.getAllDone = resp.getAllDone;
                if (_this.getAllDone && resp.datas.length <= 0) {
                    _this.page--;
                    _this.groupList.page--;
                }
                for (var _i = 0, _a = resp.datas; _i < _a.length; _i++) {
                    var data = _a[_i];
                    _this.groups.push(data);
                }
                _this.loading = false;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClassGroupListComponent.prototype, "callback", void 0);
    ClassGroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-class-group-list',
            template: __webpack_require__(/*! ./class-group-list.component.html */ "./src/app/web/class-group-list/class-group-list.component.html"),
            styles: [__webpack_require__(/*! ./class-group-list.component.css */ "./src/app/web/class-group-list/class-group-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _service_group_list_service__WEBPACK_IMPORTED_MODULE_4__["GroupListService"]])
    ], ClassGroupListComponent);
    return ClassGroupListComponent;
}());



/***/ }),

/***/ "./src/app/web/class-info/class-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/web/class-info/class-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n.input {\n    height: 60px;\n    /* background: #ffffff; */\n    /* box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.08); */\n    line-height: 60px;\n    position: relative;\n    padding: 0 15px;\n}\n.input i {\n    line-height: normal;\n    font-size: 15px;\n    position: absolute;\n    top: 20.5px;\n    left: 30px;\n    color: #D7D7D7;\n}\n.input img.close {\n    width: 19px;\n    position: absolute;\n    top: 21px;;\n    right: 30px;\n}\n.input form {\n    width: 100%;\n    display: inline-block;\n}\n.input input {\n    height: 37px;\n    background:#ECEDEE;\n    border-radius: 19px;\n    border: 0;\n    width: 100%;\n    padding-left: 40px;\n    padding-right: 35px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #000000;\n    /* border:1px solid rgba(239,239,239,1) */\n}\n.input input::-webkit-input-placeholder {\n    color: #B3B3B3;\n    font-size: 15px;\n}\n.input input::-moz-placeholder {\n    color: #B3B3B3;\n    font-size: 15px;\n}\n.input input::-ms-input-placeholder {\n    color: #B3B3B3;\n    font-size: 15px;\n}\n.input input::placeholder {\n    color: #B3B3B3;\n    font-size: 15px;\n}\n/* .input input:focus {\n    border:1px solid rgba(245,166,35,1);\n} */\n.input button {\n    border: 0;\n    background: white;\n    color: #000000;\n    font-size: 15px;\n    font-weight: 500;\n    margin-left: 8px;\n}\n.classList {\n    padding: 5px 20px;\n    padding-top: 0;\n    height: calc(100% - 169px);\n    background: #ffffff;\n    overflow: auto;\n    overflow-x: hidden;\n}\n.classList ul li {\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 16px;\n    padding: 17px 15px 17px 15px;\n    position: relative;\n    margin-top: 10px;\n}\n.classList ul li:first-child {\n    margin-top: 0;\n}\n.classList ul li h2 {\n    font-size: 18px;\n    font-weight: 500;\n    color: rgba(34,34,34,1);\n    padding-right: 45px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.classList ul li p {\n    font-size: 15px;\n    font-weight: 400;\n    color: #666666;\n    margin-top: 7px;\n    padding-right: 45px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n}\n.classList ul li .applaud {\n    position: absolute;\n    top: 7px;\n    /* transform: translateY(-50%); */\n    right: 4px;\n    text-align: center;\n}\n.classList ul li .li:active~.applaud {\n    opacity: 0.5;\n}\n.classList ul li img {\n    display: block;\n    width: 32px;\n}\n.classList ul li span {\n    font-size: 12px;\n    font-weight: bold;\n    color: #FFA100;\n}\n.empty {\n    padding: 100px 53px 0 53px;\n    text-align: center;\n}\n.empty img {\n    width: 80%;\n    margin: auto;\n}\n.empty p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(102,102,102,1);\n    padding: 0 6px;\n}\n.empty button {\n    width: 100%;\n    font-size:18px;\n    color: white;\n    border: 0;\n    margin-top: 43px;\n    height:44px;\n    background:#FFA100;\n    box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);\n    border-radius:22px;\n}\n.empty button img {\n    display: inline-block;\n    width: 16px;\n    vertical-align: -1.5px;\n    margin-right: 2px;\n}\n.create-course {\n    width: 100%;\n    position: relative;\n    height: 50px;\n    line-height: 50px;\n    background: #ffffff;\n    box-shadow: 0px 2px 15px 0px rgba(204,204,204,0.5);\n    border-radius: 10px;\n    margin-top: 4px;\n    margin-bottom: 10px;\n    color: #454545;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    padding-left: 44px;\n}\n.create-course .navigate{\n    position: absolute;\n    width: 9px;\n    right: 20px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.create-course .icon {\n    position: absolute;\n    width: 18px;\n    left: 13px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}"

/***/ }),

/***/ "./src/app/web/class-info/class-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web/class-info/class-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; overflow: hidden;background: rgba(252,252,252,1);\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        View Course\n    </div>\n    <div class=\"input\">\n        <form action=\"#\">\n            <input type=\"search\" [(ngModel)]=\"inputStr\" (keyup)=\"search($event)\" name=\"search\"\n                (ngModelChange)=\"delaySearch()\" placeholder=\"Please Enter the Course Code\" id=\"classInfoInput\" />\n        </form>\n        <img alt=\"\" class=\"search-icon\" src=\"./assets/images/berkeley/search@2x.png\"\n            style=\"width: 17px;position: absolute;top: 22px;left: 31px;\">\n        <!-- <i class=\"bicon icon-search\"></i> -->\n        <img class=\"close\" (click)=\"deleteInputStr()\" *ngIf=\"inputStr\" src=\"./assets/images/berkeley/clear2@3x.png\" />\n        <!-- <button (click)=\"goBack()\">Cancel</button> -->\n    </div>\n    <div style=\"padding: 0 20px 0 20px;\">\n        <div class=\"create-course\" (click)=\"gorCreate()\">\n            <img class=\"icon\" src=\"./assets/images/berkeley/add-course@3x.png\" alt=\"\">\n            Add Course\n            <img class=\"navigate\" src=\"./assets/images/berkeley/right.png\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"classList\" *ngIf=\"classes && classes.length != 0\" (scroll)=\"searchMore($event)\">\n        <ul>\n            <li (click)=\"toClassGroups(class)\" *ngFor=\"let class of classes; let idx = index\">\n                <div class=\"li\">\n                    <h2 [innerHTML]=\"class._abbreviation + ' ' + class._courseNumber\"></h2>\n                    <!-- <p style=\"-webkit-box-orient: vertical;font-size: 13px;\" [innerHTML]=\"class._title\" style=\"-webkit-box-orient: vertical;-webkit-line-clamp: 1;color: rgba(102,102,102,1);\">\n                        </p> -->\n                    <p style=\"-webkit-box-orient: vertical;margin-top: 12px;\" [innerHTML]=\"class._title\"></p>\n                </div>\n                <div class=\"applaud\">\n                    <span style=\"float: right;\">\n                        <app-like [id]=\"'searched' + idx\" [group]=\"\" [class]=\"class\" (loved)=\"loved($event, class)\">\n                        </app-like>\n                    </span>\n                    <span style=\"float: right;line-height: 46px;margin-right: -11px;\">{{class.likeNum | likeNumPipe}}</span>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"empty\" *ngIf=\"classes && classes.length == 0\">\n        <img src=\"./assets/images/berkeley/Search-Empty@2x.png\" />\n        <div style=\"position: relative;top: -52px;\">\n            <p>\n                No courses related to\n                <span style=\"color: #FFA100\">{{searchStr}}</span>\n                were found. You can try another keyword.\n            </p>\n            <!-- <button>\n                <img src=\"./assets/images/berkeley/+++@2x.png\" />\n                Create a Course Group\n            </button> -->\n        </div>\n    </div>\n    <app-loading *ngIf=\"!classes\"></app-loading>\n</div>"

/***/ }),

/***/ "./src/app/web/class-info/class-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web/class-info/class-info.component.ts ***!
  \********************************************************/
/*! exports provided: ClassInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassInfoComponent", function() { return ClassInfoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassInfoComponent = /** @class */ (function () {
    function ClassInfoComponent(cache, router, route, classService, zone) {
        this.cache = cache;
        this.router = router;
        this.route = route;
        this.classService = classService;
        this.zone = zone;
        this.inputStr = '';
        this.searchStr = '';
        this.page = 1; //查询到多少页了
        this.searchDone = true; //是否已经查询完当前关键字的所有class
        this.searchStr = this.cache.searchStr;
        this.inputStr = this.searchStr;
        //筛选
        this.getSearchedClasses(1);
    }
    ClassInfoComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var inputEl = document.getElementById('classInfoInput');
            inputEl.focus();
        }, 200);
    };
    ClassInfoComponent.prototype.ngAfterViewInit = function () {
        // ...
    };
    ClassInfoComponent.prototype.search = function (event) {
        if (event && event.keyCode == 13 && this.inputStr) {
            if (this.searchTimeout) {
                return;
            }
            this.searchStr = this.inputStr;
            this.cache.searchStr = this.inputStr;
            this.reset();
            this.getSearchedClasses(1);
            // this.reset();
            // this.getSearchedClasses(1);
        }
    };
    ClassInfoComponent.prototype.reset = function () {
        this.classes = null;
        this.page = 1;
        this.searchDone = true;
        this.lastScrollNum = null;
    };
    ClassInfoComponent.prototype.delaySearch = function () {
        var _this = this;
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(function () {
            _this.searchStr = _this.inputStr;
            _this.cache.searchStr = _this.inputStr;
            _this.reset();
            _this.getSearchedClasses(1);
            _this.searchTimeout = null;
        }, 500);
    };
    ClassInfoComponent.prototype.getSearchedClasses = function (page) {
        var _this = this;
        this.page = page;
        this.lastScrollNum = this.classes ? this.classes.length : 0;
        var schoolId = this.cache.userInfo ? this.cache.userInfo.schoolId : '';
        this.classService.getClassList(page, 10, this.searchStr, schoolId, function (data) {
            if (!_this.classes || page == 1) {
                _this.classes = [];
            }
            if (data.length == 10) {
                _this.searchDone = false;
            }
            else {
                _this.searchDone = true;
            }
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var _class = data_1[_i];
                _class._abbreviation = _this.html2Escape(_class.abbreviation);
                _class._courseNumber = _this.html2Escape(_class.courseNumber);
                _class._title = _this.html2Escape(_class.title);
                var tarr = _this.replaceOne(_this.searchStr, _class._title);
                if (tarr.length > 0) {
                    for (var _a = 0, tarr_1 = tarr; _a < tarr_1.length; _a++) {
                        var replaceWord = tarr_1[_a];
                        _class._title = _class._title.split(replaceWord).join('<span class="search-reg">' + replaceWord + '</span>');
                    }
                }
                //tihuan title
                var abbarr = _this.replaceOne(_this.searchStr, _class._abbreviation);
                if (abbarr.length > 0) {
                    for (var _b = 0, abbarr_1 = abbarr; _b < abbarr_1.length; _b++) {
                        var replaceWord = abbarr_1[_b];
                        _class._abbreviation = _class._abbreviation.split(replaceWord).join('<span class="search-reg">' + replaceWord + '</span>');
                    }
                }
                var carr = _this.replaceOne(_this.searchStr, _class._courseNumber);
                if (carr.length > 0) {
                    for (var _c = 0, carr_1 = carr; _c < carr_1.length; _c++) {
                        var replaceWord = carr_1[_c];
                        _class._courseNumber = _class._courseNumber.split(replaceWord).join('<span class="search-reg">' + replaceWord + '</span>');
                    }
                }
                // var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
                // var escapeReg = reg => reg.replace(escapeRegExp, '\\$&');
                // var groupLeft = '<span class="search-reg">';
                // var groupRight = '</span>';
                // var groupReg = new RegExp(escapeReg(groupRight + groupLeft), 'g');
                // var groupExtractReg = new RegExp('(' + escapeReg(groupLeft) + '[\\s\\S]+?' + escapeReg(groupRight) + ')', 'g');
                // var kr = this.KeyReg(this.searchStr);
                // if (kr.regexp.test(_class.abbreviation)) {
                //     //把结果放入result数组中
                //     _class._abbreviation = _class.abbreviation.replace(kr.regexp, kr.replacement)
                //         .replace(groupReg, '');
                // }
                // if (kr.regexp.test(_class.courseNumber)) {
                //     //把结果放入result数组中
                //     _class.courseNumber = _class.courseNumber.replace(kr.regexp, kr.replacement)
                //         .replace(groupReg, '');
                // }
                // if (kr.regexp.test(_class.title)) {
                //     //把结果放入result数组中
                //     _class._title = _class.title.replace(kr.regexp, kr.replacement)
                //         .replace(groupReg, '');
                // }
                _this.classes.push(_class);
            }
        });
    };
    //单词拆分排序
    ClassInfoComponent.prototype.filterKeyword = function (keyword) {
        // if (replaceMent) {
        //     let replaceMentArr = replaceMent.split('');
        //     for (let i = 0; i< replaceMentArr.length; i++) {
        //         if(replaceMentArr[i] && keyword.indexOf(replaceMentArr[i]) > -1) {
        //             replaceMentArr[i] = '<span class="search-reg">' + replaceMentArr[i] + '</span>';
        //         }
        //     }
        //     return replaceMentArr.join('');
        // }
        keyword.replace(/\s+/g, "");
        var arr = [];
        for (var a = 0; a < keyword.length - 1; a++) {
            for (var i = a; i < keyword.length - 1; i++) {
                var strcache = "";
                for (var j = a; j < i + 2; j++) {
                    strcache += keyword[j] ? keyword[j] : '';
                }
                arr.push(strcache);
            }
        }
        //arr排序
        arr.sort(function (a, b) { return b.length - a.length; });
        return arr;
    };
    //替换
    ClassInfoComponent.prototype.replaceOne = function (keyword, replaceMent) {
        var filteredWordArr = this.filterKeyword(keyword);
        for (var _i = 0, filteredWordArr_1 = filteredWordArr; _i < filteredWordArr_1.length; _i++) {
            var filteredWord = filteredWordArr_1[_i];
            var upperKey = filteredWord.toUpperCase();
            var upperReplaceMent = replaceMent.toUpperCase();
            if (upperReplaceMent.indexOf(upperKey) > -1) {
                var re = new RegExp(filteredWord, 'gi');
                var arr = replaceMent.match(re);
                return arr ? this.delRepeat(arr) : [];
            }
        }
        return [];
    };
    // 去重
    ClassInfoComponent.prototype.delRepeat = function (arrs) {
        var map = {};
        var _arr = [];
        for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) {
            var arr = arrs_1[_i];
            if (map[arr]) {
                map[arr] = arr;
            }
            else {
                _arr.push(arr);
                map[arr] = arr;
            }
        }
        return _arr;
    };
    ClassInfoComponent.prototype.deleteInputStr = function () {
        this.inputStr = '';
        this.delaySearch();
    };
    ClassInfoComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/search-class');
    };
    ClassInfoComponent.prototype.toClassGroups = function (_class) {
        this.cache.selectedClass = _class;
        this.cache._showGroups = 'show';
        this.cache.showGroups = true;
        // this.router.navigateByUrl('class-group-list')
    };
    ClassInfoComponent.prototype.searchMore = function (event) {
        if (this.lastScrollNum == this.classes.length || this.searchDone) {
            return;
        }
        if (event.target.scrollHeight - event.target.offsetHeight - event.target.scrollTop < 80) {
            if (!this.searchDone) {
                this.page++;
                this.getSearchedClasses(this.page);
            }
        }
    };
    ClassInfoComponent.prototype.KeyReg = function (key) {
        var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
        var src = ['(.*?)('];
        var _src;
        var ks = key.split('');
        if (ks.length) {
            while (ks.length) {
                src.push(ks.shift().replace(escapeRegExp, '\\$&'), ')(.*?)(');
            }
            src.pop();
        }
        src.push(')(.*?)');
        _src = src.join('');
        var reg = new RegExp(_src, 'gi');
        var replacer = [];
        var start = key.length;
        var begin = 1;
        while (start > 0) {
            start--;
            replacer.push('$', begin, '<span class="search-reg">$', begin + 1, '</span>');
            begin += 2;
        }
        replacer.push('$', begin);
        var info = {
            regexp: reg,
            replacement: replacer.join('')
        };
        return info;
    };
    ClassInfoComponent.prototype.loved = function (event, _class) {
        if (event == 'clicked') {
            _class.likeNum++;
        }
    };
    ClassInfoComponent.prototype.callback = function (data) {
        var _this = this;
        this.cache._showGroups = 'move';
        setTimeout(function () {
            _this.cache.showGroups = false;
        }, 250);
    };
    ClassInfoComponent.prototype.groupInfocallback = function (data) {
        var _this = this;
        this.cache._showGroupInfo = false;
        setTimeout(function () {
            _this.cache.showGroupInfo = false;
        }, 250);
    };
    ClassInfoComponent.prototype.gorCreate = function () {
        this.router.navigateByUrl('/add-course');
    };
    ClassInfoComponent.prototype.html2Escape = function (sHtml) {
        return sHtml.replace(/[<>&"]/g, function (c) {
            return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
        });
    };
    ClassInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-info',
            template: __webpack_require__(/*! ./class-info.component.html */ "./src/app/web/class-info/class-info.component.html"),
            styles: [__webpack_require__(/*! ./class-info.component.css */ "./src/app/web/class-info/class-info.component.css")]
        }),
        __metadata("design:paramtypes", [_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _service_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ClassInfoComponent);
    return ClassInfoComponent;
}());



/***/ }),

/***/ "./src/app/web/class-list/class-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/web/class-list/class-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web/class-list/class-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web/class-list/class-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  class-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/web/class-list/class-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web/class-list/class-list.component.ts ***!
  \********************************************************/
/*! exports provided: ClassListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassListComponent", function() { return ClassListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassListComponent = /** @class */ (function () {
    function ClassListComponent() {
    }
    ClassListComponent.prototype.ngOnInit = function () {
    };
    ClassListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-class-list',
            template: __webpack_require__(/*! ./class-list.component.html */ "./src/app/web/class-list/class-list.component.html"),
            styles: [__webpack_require__(/*! ./class-list.component.css */ "./src/app/web/class-list/class-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassListComponent);
    return ClassListComponent;
}());



/***/ }),

/***/ "./src/app/web/connect-group-course/connect-group-course.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/web/connect-group-course/connect-group-course.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.submit-form {\n    margin: 15px 16px;\n    padding: 0 15px 44px 15px;\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n}\n.submit-form .form-group {\n    border-bottom: 1px solid #F1F1F1;\n    height: 49px;\n    position: relative;\n}\n.submit-form .form-group .label {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #404040;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 16px;\n}\n.submit-form .form-group .content {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    right: 13px;\n    color: #858585;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 15px;\n    max-width: 130px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.submit-form .form-group .content.choose-group {\n    color: #F5A623;\n}\n.submit-form .form-group label {\n    color: #404040;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 16px;\n}\n.submit-form .form-group .form-content {\n    padding-top: 6px;\n    position: relative;\n}\n.submit-form .form-group .form-content textarea {\n    width: 100%;\n    height: 107px;\n    background: #ffffff;\n    border-radius: 10px;\n    border: 1px solid #F3F3F3;\n    font-size: 16px;\n    padding: 10px 10px;\n}\n.submit-form .form-group .form-content .description {\n    position: absolute;\n    right: 10px;\n    bottom: -17px;\n    font-weight: normal;\n    color: #404040;\n}\n.submit-form .form-group .form-content textarea:focus {\n    border: 1px solid #F5A623;\n}\n.submit-form .form-group .form-content.error textarea {\n    border: 1px solid #f76808;\n}\n.submit-form .submit {\n    text-align: center;\n    padding-top: 28px;\n}\n.submit-form .submit button {\n    width: 158px;\n    height: 40px;\n    background: #f5a623;\nbox-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);\n    border-radius: 22px;\n    font-size: 18px;\n    color: #FFFFFF;\n    font-weight: 600;\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/connect-group-course/connect-group-course.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/web/connect-group-course/connect-group-course.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; overflow: hidden;background: #ffffff;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Create\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <!-- <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\" class=\"school-avatar\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div> -->\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\" class=\"school-avatar\"\n                *ngIf=\"schoolService.userSchool\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n    \n        <div class=\"submit-form\">\n            <div class=\"form-group\">\n                <div class=\"label\">Course Title</div>\n                <div class=\"content\">{{cache.courseToAdd.title}}</div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"label\">Course Code</div>\n                <div class=\"content\">{{cache.courseToAdd.abbreviation + ' ' + cache.courseToAdd.courseNumber}}</div>\n            </div>\n            <div class=\"form-group\" style=\"border: 0;\">\n                <div class=\"label\">My Group</div>\n                <div class=\"group-container\" (click)=\"toChoose()\">\n                    <div class=\"content\" *ngIf=\"choosedGroup\" style=\"padding-right: 5px;\">{{choosedGroup.groupName}}\n                    </div>\n                    <button *ngIf=\"!choosedGroup\" class=\"content choose-group\">To Choose</button>\n                    <img src=\"./assets/images/berkeley/right.png\" alt=\"\" style=\"width: 8px;position: absolute;top: 19.5px;right: 0;\">\n                </div>\n            </div>\n            <div style=\"font-weight: 500;width: 100%;background: #ececec;border-radius: 10px;font-size: 13px;line-height: 15px;padding: 5px 14px;\">Note: You have to create the group chat in the app first. You can only select groups in which you are admin.</div>\n            <div class=\"form-group\" style=\"height: auto;margin-top: 10px;border: 0;\">\n                <label>Group Details</label>\n                <div class=\"form-content\" [ngClass]=\"{'error': descriptionError}\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\"></textarea>\n                    <span class=\"description\">{{description ? description.length : 0}}/200</span>\n                </div>\n            </div>\n            <div class=\"submit\">\n                <button (click)=\"submit()\" [disabled]=\"disabled\">Confirm</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"commitStatus == 'groupError'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/error-info.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\" style=\"text-align: center;\">You can only select groups in which you are admin.</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/connect-group-course/connect-group-course.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/web/connect-group-course/connect-group-course.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConnectGroupCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectGroupCourseComponent", function() { return ConnectGroupCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnectGroupCourseComponent = /** @class */ (function () {
    function ConnectGroupCourseComponent(router, _ngZone, cache, schoolService, auth) {
        this.router = router;
        this._ngZone = _ngZone;
        this.cache = cache;
        this.schoolService = schoolService;
        this.auth = auth;
        this.descriptionError = false;
        this.groupError = false;
        this.disabled = false;
    }
    ConnectGroupCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    ConnectGroupCourseComponent.prototype.toChoose = function () {
        var _this = this;
        loop.selectMyCreatedGroup(function (resp) {
            var _resp = JSON.parse(resp);
            if (_resp.code == 1) {
                _this.choosedGroup = _resp.data;
                _this._ngZone.run(function () { });
            }
        });
    };
    ConnectGroupCourseComponent.prototype.submit = function () {
        var _this = this;
        if (!this.description || this.description.trim() == '') {
            this.descriptionError = true;
            // this.description = '';
        }
        else {
            this.descriptionError = false;
        }
        if (!this.choosedGroup || !this.choosedGroup.groupName || !this.choosedGroup.groupId) {
            this.groupError = true;
        }
        else {
            this.groupError = false;
        }
        if (this.descriptionError || this.groupError) {
            return;
        }
        this.disabled = true;
        var payload = {
            schoolId: this.cache.userInfo.schoolId,
            classId: this.cache.courseToAdd.id,
            name: this.choosedGroup.groupName,
            notice: this.description,
            loopGroupId: this.choosedGroup.groupId,
        };
        this.auth.sendPost('class/group', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.commitStatus = 'success';
                    setTimeout(function () {
                        _this.commitStatus = '';
                        _this.disabled = false;
                        _this.toMyGroup();
                    }, 1500);
                }
                else if (_body.code == 4003) {
                    _this.commitStatus = 'groupError';
                    setTimeout(function () {
                        _this.disabled = false;
                        _this.commitStatus = '';
                    }, 1500);
                }
                else {
                    _this.disabled = false;
                }
            }
            else {
                _this.disabled = false;
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    ConnectGroupCourseComponent.prototype.goBack = function () {
        history.go(-2);
        this.cache.courseToAdd = {};
    };
    ConnectGroupCourseComponent.prototype.toMyGroup = function () {
        this.cache.currentNavigate = 'settings';
        this.router.navigateByUrl('/my-groups-list');
    };
    ConnectGroupCourseComponent.prototype.descriptionChange = function (event) {
        var _this = this;
        if (this.description.trim() != '') {
            this.descriptionError = false;
        }
        if (this.description.length > 200) {
            this.auth.error('Can only enter up to 200 characters.');
            setTimeout(function () {
                _this.description = _this.description.substring(0, 200);
            });
        }
    };
    ConnectGroupCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect-group-course',
            template: __webpack_require__(/*! ./connect-group-course.component.html */ "./src/app/web/connect-group-course/connect-group-course.component.html"),
            styles: [__webpack_require__(/*! ./connect-group-course.component.css */ "./src/app/web/connect-group-course/connect-group-course.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"], _service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ConnectGroupCourseComponent);
    return ConnectGroupCourseComponent;
}());



/***/ }),

/***/ "./src/app/web/create-group/create-group.component.css":
/*!*************************************************************!*\
  !*** ./src/app/web/create-group/create-group.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n\n.create-form {padding: 25px 21px 0px 21px;}\n.create-form .form-groups {margin-bottom: 20px;}\n.create-form .form-groups .form-label {font-size: 16px;font-weight: bold;color: #404040;padding-left: 7px;}\n.create-form .form-groups .form-label i{font-size: 19px;right: 7px;color: #0c0c0c45;}\n.create-form .form-groups .form-content {margin-top: 6px;}\n.create-form .form-groups .form-content .input {height: 37px;background: #ffffff;border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;}\n.create-form .form-groups .form-content .input.my-group {border:1px solid #FFA100;font-size:17px;font-weight:bold;color: #ffffff;background: #FFA100;text-align: center;}\n.create-form .form-groups .form-content .input.my-group i {font-size: 18px;left: 6px;}\n.create-form .form-groups .form-content .group-descript {background: #ECECEC;border-radius:12px;padding: 6px 15px;margin-top:9px;font-size:12px;color: #666666;font-weight: 500;}\n.create-form .form-groups .form-content textarea {height: 107px;background: rgba(255,255,255,1);border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;padding: 8px 13px;color: #666666;}\n.create-form .form-groups .form-button {margin-top: 10px;}\n.create-form .form-button button {background: #FFD38B;box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.1);border-radius: 22px;width: 100%;border: 0;font-weight: bold;font-size: 18px;color: #ffffff;height: 47px;}\n.create-form .form-button button.active {background:#FFA100;box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);border-radius:22px;}\n.create-form .form-groups .form-content input.input {margin-bottom: 5px;padding: 0 15px;font-size: 16px;color: #666666;}\n.create-form .form-groups .form-content .search-result {display: none;max-height: 284px;background: rgba(255,255,255,1);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.13);border-radius: 10px;border: 1px solid rgba(241,241,241,1);position: absolute;width: 100%;z-index: 1;overflow: auto;}\n.create-form .form-groups .form-content .search-result ul li {padding: 9px 15px;font-size:16px;font-weight:500;color: #666666;}\n.create-form .form-groups .form-content .search-result ul li .pp {color: #FFA100;}\n.create-form .form-groups .form-content.open .search-result {display: block;}\n.create-form .form-groups .form-content button.clear {position: absolute;right: 10px;top: 9px;}\n.create-form .form-groups .form-content button.clear img{width: 19px;}\n.error-info {background: #ffffff;height: 37px;width: 100%;position: absolute;top: 0;color: #FF5555;line-height: 37px;padding-left: 36px;font-size: 16px;border: 1px solid #FF5555;border-radius: 10px;}\n.error-info img {position: absolute;width: 13px;top: 12px;left: 14px;}\n.create-form .form-groups .form-content .input.my-group-selected {border: 0;background: #F5C677;position: relative; color: #ffffff;line-height: 37px;padding-left: 13px;font-size: 17px;}\n.create-form .form-groups .form-content .input.my-group-selected  i.icon-ok {position: absolute;right: 12px;font-size: 12px;}\n\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;} */\n.create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button i {font-size: 19px;position: absolute;left: 20px;top: 13px;}\nbutton.save {color: #FFA100;font-size:17px;position: absolute;right: 15px;top: 13px;font-weight:500;}\nbutton.save:disabled {color: #f5a62387;}\n.create-form {margin: 15px 16px;padding: 0 15px 44px 15px;box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);border-radius: 14px;}\n.create-form .form-groups {position: relative;}\n.create-form .form-groups .form-label {font-size: 16px;font-weight: 500;color: #404040;padding-top: 16px;}\n.create-form .form-groups label {display: block;font-size: 16px;font-weight: 500;color: #404040;padding-top: 16px;}\n.create-form .form-groups .form-label i{font-size: 19px;right: 7px;color: #0c0c0c45;}\n.create-form .form-groups .form-content {margin-top: 6px;}\n.create-form .form-groups .group-container {padding-right: 15px;position: absolute;top: 16px;right: 0;}\n.create-form .form-groups .group-container .content {color: #858585;font-weight: 500;line-height: 19px;font-size: 15px;max-width: 130px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}\n.create-form .form-groups .group-container .choose-group {color: #F5A623;}\n.create-form .form-groups .form-content .input {height: 37px;background: #ffffff;border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;}\n.create-form .form-groups .form-content .input.my-group {border:1px solid #FFA100;font-size:17px;font-weight:bold;color: #ffffff;background: #FFA100;text-align: center;line-height: 37px;}\n.create-form .form-groups .form-content .input.my-group i {font-size: 18px;left: 6px;}\n.create-form .form-groups .form-content .group-descript {background: #ECECEC;border-radius:12px;padding: 6px 15px;margin-top:9px;font-size:12px;color: #666666;font-weight: 500;}\n.create-form .form-groups .form-content textarea {height: 107px;background: rgba(255,255,255,1);border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;padding: 8px 13px;color: #666666;}\n.create-form .form-groups .form-content textarea:focus {border: 1px solid #F5A623;}\n.create-form .form-groups .form-content.error textarea {border: 1px solid #f76808;}\n.create-form .form-groups .form-content .description {position: absolute;right: 10px;bottom: -17px;font-weight: normal;color: #404040;}\n.create-form .submit {text-align: center;padding-top: 28px;}\n.create-form .submit button {box-shadow: 1px 2px 8px 0px rgba(245, 166, 35, 0.7);width: 158px;height: 40px;background: #f5a623;border-radius: 22px;font-size: 18px;color: #FFFFFF;font-weight: 600;}\n.create-form .form-groups .form-button {margin-top: 10px;}\n.create-form .form-button button {background: #FFD38B;box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.1);border-radius: 22px;width: 100%;border: 0;font-weight: bold;font-size: 18px;color: #ffffff;padding: 12px 0;}\n.create-form .form-button button.active {background:#FFA100;box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);border-radius:22px;}\n.create-form .form-groups .form-content input.input {padding: 0 15px;padding-right: 30px;font-size: 16px;color: #666666;}\n.create-form .form-groups .form-content input.input.error {border: 1px solid #f76808;}\n.create-form .form-groups .form-content .search-result {display: none;max-height: 284px;background: rgba(255,255,255,1);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.13);border-radius: 10px;border: 1px solid rgba(241,241,241,1);position: absolute;width: 100%;z-index: 1;overflow: auto;}\n.create-form .form-groups .form-content .search-result ul li {padding: 9px 15px;font-size:16px;font-weight:500;color: #666666;}\n.create-form .form-groups .form-content .search-result ul li .pp {color: #FFA100;}\n.create-form .form-groups .form-content.open .search-result {display: block;}\n.create-form .form-groups .form-content button.clear {position: absolute;right: 10px;top: 9px;}\n.create-form .form-groups .form-content button.clear img{width: 19px;}\n/* .create-form .form-groups .form-content input.input:focus + .search-result + button.clear {display: block;} */\n.error-info {background: #ffffff;height: 37px;width: 100%;position: absolute;top: 0;color: #FF5555;line-height: 37px;padding-left: 36px;font-size: 16px;border: 1px solid #FF5555;border-radius: 10px;}\n.error-info img {position: absolute;width: 13px;top: 12px;left: 14px;}\n.create-form .form-groups .form-content .input.my-group-selected {border: 0;background: #F5C677;position: relative; color: #ffffff;line-height: 37px;padding-left: 13px;font-size: 17px;}\n.create-form .form-groups .form-content .input.my-group-selected  i.icon-ok {position: absolute;right: 12px;font-size: 12px;}\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/create-group/create-group.component.html":
/*!**************************************************************!*\
  !*** ./src/app/web/create-group/create-group.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"create-header\">\n    <button (click)=\"goBack()\">\n        <i class=\"bicon icon-back\"></i>\n    </button>\n    Create\n</div>\n<div class=\"create-form\">\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-book\" style=\"font-size: 18px;top: 2px;\"></i>Course Title\n        </div>\n        <div class=\"form-content\" style=\"position: relative;\" [ngClass]=\"{'open' : showResult}\">\n            <input class=\"input\" id=\"courseTitle\" type=\"text\" name=\"courseTitle\" (focus)=\"courseTitleFocus()\" (blur)=\"doSomeActionOnClose()\"\n                (ngModelChange)=\"courseChange($event)\" [(ngModel)]=\"courseTitle\">\n            <div class=\"search-result\">\n                <ul>\n                    <li *ngFor=\"let course of courseList\" [innerHTML]=\"course._abbreviation + ' ' + course._course_number\" (click)=\"selectCourse(course)\"></li>\n                    <li *ngIf=\"courseList && courseList.length <= 0\" style=\"text-align: center;font-size: 15px;color: #66666685;\">No course number found</li>\n                </ul>\n            </div>\n            <button class=\"clear\" *ngIf=\"courseTitle\" (click)=\"clearTitle()\">\n                <img src=\"./assets/images/berkeley/clear@2x.png\" alt=\"\">\n            </button>\n            <div class=\"error-info\" *ngIf=\"courseTitleError\" (click)=\"closeCourseTitleError()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Course\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-group\" style=\"font-size: 18px;top: 2px;\"></i>My Group\n        </div>\n        <div class=\"form-content\" *ngIf=\"!selectedGroup\" style=\"position: relative;\">\n            <button class=\"input my-group\" (click)=\"selectGroup()\">\n                Select Group\n                <i class=\"bicon icon-go\"></i>\n            </button>\n            <div class=\"group-descript\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are admin.\n            </div>\n            <div class=\"error-info\" *ngIf=\"selectedGroupError\" (click)=\"selectGroup()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Group\n            </div>\n        </div>\n        <div class=\"form-content\" *ngIf=\"selectedGroup\">\n            <div class=\"input my-group-selected\" (click)=\"selectGroup()\">\n                {{selectedGroup.groupName}}\n                <i class=\"bicon icon-ok\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-description\" style=\"font-size: 18px;top: 2px;\"></i>Group Description\n        </div>\n        <div class=\"form-content\" style=\"position: relative;\">\n            <textarea name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\" id=\"description\" cols=\"30\"\n                rows=\"10\"></textarea>\n            <span class=\"can-put\" style=\"font-size: 12px;color: #CCCCCC;position: absolute;bottom: 4px;right: 22px;\">{{inputCount\n                < 0 ? 0 : inputCount}}</span>\n                    <button style=\"position: absolute;bottom: 6px;right: 2px;\">\n                        <img src=\"./assets/images/berkeley/@2x.png\" alt=\"\" style=\"width: 12px;\">\n                    </button>\n                    <div class=\"error-info\" *ngIf=\"descriptionError\" (click)=\"closeDescriptionError()\" style=\"height: 100%;\">\n                        <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to enter the group description\n                    </div>\n        </div>\n    </div>\n\n    <div class=\"form-button\">\n        <button class=\"active\" [disabled]=\"disabled\" (click)=\"submitCreate()\">\n            <span *ngIf=\"!disabled\">OK</span>\n            <div class=\"spinner\" *ngIf=\"disabled\">\n                <div class=\"double-bounce1\"></div>\n                <div class=\"double-bounce2\"></div>\n            </div>\n        </button>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div> -->\n<div style=\"height: 100%; overflow: hidden;background: #ffffff;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Create\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\"\n                class=\"school-avatar\" *ngIf=\"schoolService.userSchool\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n        <div class=\"create-form\">\n            <div class=\"form-groups\">\n                <div class=\"form-label\">Course Code</div>\n                <div class=\"form-content\" style=\"position: relative;\" [ngClass]=\"{'open' : showResult}\" (clickOutside)=\"showResult = false;\">\n                    <input class=\"input\" id=\"courseTitle\" type=\"text\" name=\"courseTitle\" (focus)=\"courseTitleFocus()\"\n                        (blur)=\"doSomeActionOnClose()\" (ngModelChange)=\"courseChange($event)\" [(ngModel)]=\"courseTitle\"\n                        [ngClass]=\"{'error': courseTitleError}\">\n                    <div class=\"search-result\" *ngIf=\"courseList\">\n                        <ul>\n                            <li *ngFor=\"let course of courseList\"\n                                [innerHTML]=\"course._abbreviation + ' ' + course._course_number\"\n                                (click)=\"selectCourse(course)\"></li>\n                            <li *ngIf=\"courseList && courseList.length <= 0\"\n                                style=\"text-align: center;font-size: 15px;color: #66666685;\">No course number found</li>\n                        </ul>\n                    </div>\n                    <button class=\"clear\" *ngIf=\"courseTitle\" (click)=\"clearTitle()\">\n                        <img src=\"./assets/images/berkeley/clear2@3x.png\" alt=\"\">\n                    </button>\n                    <!-- <div class=\"error-info\" *ngIf=\"courseTitleError\" (click)=\"closeCourseTitleError()\">\n                        <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Course\n                    </div> -->\n                </div>\n            </div>\n\n            <div class=\"form-groups\">\n                <div class=\"form-label\">My Group</div>\n                <div class=\"group-container\" (click)=\"selectGroup()\">\n                    <div *ngIf=\"selectedGroup\" class=\"content\">{{selectedGroup.groupName}}\n                    </div>\n                    <button *ngIf=\"!selectedGroup\" class=\"content choose-group\">To Choose</button>\n                    <img src=\"./assets/images/berkeley/right.png\" alt=\"\"\n                        style=\"width: 8px;position: absolute;top: 4px;right: 0;\">\n                </div>\n            </div>\n            <div\n                style=\"margin-top: 12px;font-weight: 500;width: 100%;background: #ececec;border-radius: 10px;font-size: 13px;line-height: 15px;padding: 5px 14px;\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are\n                admin.\n            </div>\n            <div class=\"form-groups\">\n                <label>Group Details</label>\n                <div class=\"form-content\" style=\"position: relative;\" [ngClass]=\"{'error': descriptionError}\">\n                    <textarea name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\"\n                        id=\"description\" cols=\"30\" rows=\"10\"></textarea>\n                    <span class=\"description\">{{description ? description.length : 0}}/200</span>\n                </div>\n            </div>\n            <div class=\"submit\">\n                <button (click)=\"submitCreate()\" [disabled]=\"disabled\">OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/create-group/create-group.component.ts":
/*!************************************************************!*\
  !*** ./src/app/web/create-group/create-group.component.ts ***!
  \************************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateGroupComponent = /** @class */ (function () {
    function CreateGroupComponent(schoolService, _ngZone, classService, auth, cache) {
        this.schoolService = schoolService;
        this._ngZone = _ngZone;
        this.classService = classService;
        this.auth = auth;
        this.cache = cache;
        this.commitStatus = 'init';
        this.courseTitleError = false;
        this.selectedCourse = null;
        this.selectedGroupError = false;
        this.descriptionError = false;
        this.maxCount = 200;
        this.inputCount = 200;
        this.disabled = false;
        this.showResult = false;
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.cache.selectedClass) {
            this.selectedCourse = this.cache.selectedClass;
            this.courseTitle = this.cache.selectedClass.abbreviation + ' ' + this.cache.selectedClass.courseNumber;
        }
    }
    CreateGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    CreateGroupComponent.prototype.selectGroup = function () {
        var _this = this;
        loop.selectMyCreatedGroup(function (resp) {
            var _resp = JSON.parse(resp);
            if (_resp.code == 1) {
                _this.selectedGroup = _resp.data;
                _this._ngZone.run(function () { });
            }
        });
    };
    CreateGroupComponent.prototype.descriptionChange = function (event) {
        var _this = this;
        this.inputCount = this.maxCount - event.length;
        if (this.inputCount <= 0) {
            setTimeout(function () {
                _this.inputCount = _this.maxCount - event.length;
                _this.description = _this.description.substr(0, _this.maxCount);
                _this.inputCount = 0;
            }, 100);
        }
        else {
            this.inputCount = this.maxCount - event.length;
            if (this.inputCount <= 0) {
                this.inputCount = 0;
            }
        }
    };
    CreateGroupComponent.prototype.goBack = function () {
        this.callback.emit({ type: 'close' });
    };
    CreateGroupComponent.prototype.doSomeActionOnClose = function () {
        // setTimeout(() => {
        //     if (!this.selectedCourse) {
        //         this.courseTitle = '';
        //         this.showResult = false;
        //     }
        // }, 100)
    };
    CreateGroupComponent.prototype.courseChange = function (event) {
        var _this = this;
        this.selectedCourse = null;
        if (this.courseTimeOut) {
            clearTimeout(this.courseTimeOut);
        }
        this.courseTimeOut = setTimeout(function () {
            _this.getClasses(event);
        }, 500);
    };
    CreateGroupComponent.prototype.selectCourse = function (course) {
        this.selectedCourse = course;
        this.courseTitle = course.abbreviation + ' ' + course.courseNumber;
        this.showResult = false;
    };
    CreateGroupComponent.prototype.clearTitle = function () {
        this.courseTitle = '';
        this.selectedCourse = null;
    };
    CreateGroupComponent.prototype.getClasses = function (str) {
        var _this = this;
        this.classService.getClassList(1, 30, str, this.cache.userInfo.schoolId, function (data) {
            _this.courseList = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var _class = data_1[_i];
                var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
                var escapeReg = function (reg) { return reg.replace(escapeRegExp, '\\$&'); };
                var groupLeft = '<span class="search-reg">';
                var groupRight = '</span>';
                var groupReg = new RegExp(escapeReg(groupRight + groupLeft), 'g');
                var groupExtractReg = new RegExp('(' + escapeReg(groupLeft) + '[\\s\\S]+?' + escapeReg(groupRight) + ')', 'g');
                var kr = _this.KeyReg(str);
                _class._abbreviation = _class.abbreviation;
                _class._course_number = _class.courseNumber;
                _class._title = _class.title;
                if (kr.regexp.test(_class.abbreviation)) {
                    //把结果放入result数组中
                    _class._abbreviation = _class.abbreviation.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                if (kr.regexp.test(_class.courseNumber)) {
                    //把结果放入result数组中
                    _class._course_number = _class.courseNumber.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                if (kr.regexp.test(_class.title)) {
                    //把结果放入result数组中
                    _class._title = _class.title.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                _this.courseList = data;
            }
        });
    };
    CreateGroupComponent.prototype.KeyReg = function (key) {
        var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
        var src = ['(.*?)('];
        var _src;
        var ks = key.split('');
        if (ks.length) {
            while (ks.length) {
                src.push(ks.shift().replace(escapeRegExp, '\\$&'), ')(.*?)(');
            }
            src.pop();
        }
        src.push(')(.*?)');
        _src = src.join('');
        var reg = new RegExp(_src, 'gi');
        var replacer = [];
        var start = key.length;
        var begin = 1;
        while (start > 0) {
            start--;
            replacer.push('$', begin, '<span class="search-reg">$', begin + 1, '</span>');
            begin += 2;
        }
        replacer.push('$', begin);
        var info = {
            regexp: reg,
            replacement: replacer.join('')
        };
        return info;
    };
    CreateGroupComponent.prototype.submitCreate = function () {
        var _this = this;
        if (!this.selectedCourse) {
            this.courseTitleError = true;
        }
        else {
            this.courseTitleError = false;
        }
        if (!this.selectedGroup) {
            this.selectedGroupError = true;
        }
        else {
            this.selectedGroupError = false;
        }
        if (!this.description || this.description.replace(/\s/g, "") == "") {
            this.descriptionError = true;
            this.description = "";
        }
        else {
            this.descriptionError = false;
        }
        if (this.descriptionError || this.selectedGroupError || this.courseTitleError) {
            return;
        }
        this.disabled = true;
        var payload = {
            name: this.selectedGroup.groupName,
            classId: this.selectedCourse.id,
            notice: this.description,
            loopGroupId: this.selectedGroup.groupId,
            schoolId: this.cache.userInfo.schoolId
        };
        this.auth.sendPost('class/group', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.commitStatus = 'success';
                    setTimeout(function () {
                        _this.disabled = false;
                        _this.callback.emit({ type: 'close' });
                    }, 1500);
                }
                else {
                    _this.disabled = false;
                }
            }
            else {
                _this.disabled = false;
                _this.auth.error('Network timeout, please try again later');
            }
        });
        // this.auth.sendPost('')
    };
    CreateGroupComponent.prototype.courseTitleFocus = function () {
        this.showResult = true;
        if (this.courseTitle) {
            this.getClasses(this.courseTitle);
        }
        else {
            this.courseList = null;
        }
    };
    CreateGroupComponent.prototype.closeCourseTitleError = function () {
        this.courseTitleError = false;
        var txt1 = document.getElementById("courseTitle");
        txt1.focus();
    };
    CreateGroupComponent.prototype.closeDescriptionError = function () {
        this.descriptionError = false;
        var txt1 = document.getElementById("description");
        txt1.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateGroupComponent.prototype, "callback", void 0);
    CreateGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-group',
            template: __webpack_require__(/*! ./create-group.component.html */ "./src/app/web/create-group/create-group.component.html"),
            styles: [__webpack_require__(/*! ./create-group.component.css */ "./src/app/web/create-group/create-group.component.css")]
        }),
        __metadata("design:paramtypes", [_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], CreateGroupComponent);
    return CreateGroupComponent;
}());



/***/ }),

/***/ "./src/app/web/create-interest-group/create-interest-group.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/web/create-interest-group/create-interest-group.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button i {font-size: 19px;position: absolute;left: 20px;top: 13px;}\n.create-form {padding: 25px 21px 0px 21px;}\n.create-form .form-groups {margin-bottom: 20px;}\n.create-form .form-groups .form-label {font-size: 16px;font-weight: 500;color: #404040;padding-left: 7px;}\n.create-form .form-groups .form-label i{font-size: 19px;right: 7px;color: #0c0c0c45;}\n.create-form .form-groups .form-content {margin-top: 6px;}\n.create-form .form-groups .form-content .input {height: 37px;background: #ffffff;border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;}\n.create-form .form-groups .form-content .input.my-group {border:1px solid #FFA100;font-size:17px;font-weight:bold;color: #ffffff;background: #FFA100;text-align: center;line-height: 37px;}\n.create-form .form-groups .form-content .input.my-group i {font-size: 18px;left: 6px;}\n.create-form .form-groups .form-content .group-descript {background: #ECECEC;border-radius:12px;padding: 6px 15px;margin-top:9px;font-size:12px;color: #666666;font-weight: 500;}\n.create-form .form-groups .form-content textarea {height: 107px;background: rgba(255,255,255,1);border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;padding: 8px 13px;color: #666666;}\n.create-form .form-groups .form-button {margin-top: 10px;}\n.create-form .form-button button {background: #FFD38B;box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.1);border-radius: 22px;width: 100%;border: 0;font-weight: bold;font-size: 18px;color: #ffffff;height: 47px;}\n.create-form .form-button button.active {background:#FFA100;box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);border-radius:22px;}\n.create-form .form-groups .form-content input.input {margin-bottom: 5px;padding: 0 15px;font-size: 16px;color: #666666;}\n.create-form .form-groups .form-content .search-result {display: none;height: 284px;background: rgba(255,255,255,1);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.13);border-radius: 10px;border: 1px solid rgba(241,241,241,1);position: absolute;width: 100%;z-index: 1;overflow: auto;}\n.create-form .form-groups .form-content .search-result ul li {padding: 9px 15px;font-size:16px;font-weight:500;color: #666666;}\n.create-form .form-groups .form-content .search-result ul li .pp {color: #FFA100;}\n.create-form .form-groups .form-content input.input:focus + .search-result {display: block;}\n.create-form .form-groups .form-content button.clear {position: absolute;right: 10px;top: 9px;display: none;}\n.create-form .form-groups .form-content button.clear img{width: 19px;}\n.create-form .form-groups .form-content input.input:focus + .search-result + button.clear {display: block;}\n.error-info {background: #ffffff;height: 37px;width: 100%;position: absolute;top: 0;color: #FF5555;line-height: 37px;padding-left: 36px;font-size: 16px;border: 1px solid #FF5555;border-radius: 10px;}\n.error-info img {position: absolute;width: 13px;top: 12px;left: 14px;}\n.create-form .form-groups .form-content .input.my-group-selected {border: 0;background: #F5C677;position: relative; color: #ffffff;line-height: 37px;padding-left: 13px;font-size: 17px;}\n.create-form .form-groups .form-content .input.my-group-selected  i.icon-ok {position: absolute;right: 12px;font-size: 12px;}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/create-interest-group/create-interest-group.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/web/create-interest-group/create-interest-group.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-header\">\n    <button (click)=\"goBack()\">\n        <i class=\"bicon icon-back\"></i>\n    </button>\n    Create\n</div>\n<div class=\"create-form\">\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-group\" style=\"font-size: 18px;top: 2px;\"></i>My Group\n        </div>\n        <div class=\"form-content\" *ngIf=\"!selectedGroup\" style=\"position: relative;\">\n            <button class=\"input my-group\" (click)=\"selectGroup()\">\n                Select Group\n                <i class=\"bicon icon-go\"></i>\n            </button>\n            <div class=\"group-descript\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are admin.\n            </div>\n            <div class=\"error-info\" *ngIf=\"selectedGroupError\" (click)=\"selectGroup()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Group\n            </div>\n        </div>\n        <div class=\"form-content\" *ngIf=\"selectedGroup\">\n            <div class=\"input my-group-selected\" (click)=\"selectGroup()\">\n                {{selectedGroup.groupName}}\n                <i class=\"bicon icon-ok\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-description\" style=\"font-size: 18px;top: 2px;\"></i>Group Description\n        </div>\n        <div class=\"form-content\" style=\"position: relative;\">\n            <textarea name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\" id=\"description\" cols=\"30\"\n                rows=\"10\"></textarea>\n            <span class=\"can-put\" style=\"font-size: 12px;color: #CCCCCC;position: absolute;bottom: 4px;right: 22px;\">{{inputCount\n                < 0 ? 0 : inputCount}}</span>\n                    <button style=\"position: absolute;bottom: 6px;right: 2px;\">\n                        <img src=\"./assets/images/berkeley/@2x.png\" alt=\"\" style=\"width: 12px;\">\n                    </button>\n                    <div class=\"error-info\" *ngIf=\"descriptionError\" (click)=\"closeDescriptionError()\" style=\"height: 100%;\">\n                        <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to enter the group description\n                    </div>\n        </div>\n    </div>\n\n    <div class=\"form-button\">\n        <button class=\"active\" [disabled]=\"disabled\" (click)=\"submitCreate()\">\n            <span *ngIf=\"!disabled\">OK</span>\n            <div class=\"spinner\" *ngIf=\"disabled\">\n                <div class=\"double-bounce1\"></div>\n                <div class=\"double-bounce2\"></div>\n            </div>\n        </button>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/create-interest-group/create-interest-group.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/web/create-interest-group/create-interest-group.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateInterestGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInterestGroupComponent", function() { return CreateInterestGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateInterestGroupComponent = /** @class */ (function () {
    function CreateInterestGroupComponent(_ngZone, classService, auth, cache) {
        this._ngZone = _ngZone;
        this.classService = classService;
        this.auth = auth;
        this.cache = cache;
        this.commitStatus = 'init';
        this.selectedGroupError = false;
        this.descriptionError = false;
        this.maxCount = 200;
        this.inputCount = 200;
        this.courseList = [];
        this.disabled = false;
    }
    CreateInterestGroupComponent.prototype.ngOnInit = function () {
    };
    CreateInterestGroupComponent.prototype.selectGroup = function () {
        var _this = this;
        loop.selectMyCreatedGroup(function (resp) {
            var _resp = JSON.parse(resp);
            if (_resp.code == 1) {
                _this.selectedGroup = _resp.data;
                _this._ngZone.run(function () { });
            }
        });
    };
    CreateInterestGroupComponent.prototype.descriptionChange = function (event) {
        var _this = this;
        this.inputCount = this.maxCount - event.length;
        if (this.inputCount <= 0) {
            setTimeout(function () {
                _this.description = _this.description.substr(0, _this.maxCount);
                _this.inputCount = 0;
            }, 100);
        }
        else {
            this.inputCount = this.maxCount - event.length;
            if (this.inputCount <= 0) {
                this.inputCount = 0;
            }
        }
    };
    CreateInterestGroupComponent.prototype.goBack = function () {
        history.go(-1);
    };
    CreateInterestGroupComponent.prototype.submitCreate = function () {
        var _this = this;
        if (!this.selectedGroup) {
            this.selectedGroupError = true;
            return;
        }
        if (!this.description || this.description.replace(/\s/g, "") == "") {
            this.descriptionError = true;
            this.description = "";
            return;
        }
        this.disabled = true;
        var payload = {
            name: this.selectedGroup.groupName,
            notice: this.description,
            loopGroupId: this.selectedGroup.groupId,
            schoolId: this.cache.userInfo.schoolId
        };
        this.auth.sendPost('interest/group', payload).subscribe(function (resp) {
            _this.disabled = false;
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.commitStatus = 'success';
                    setTimeout(function () {
                        _this.commitStatus = 'init';
                        history.go(-1);
                    }, 1500);
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
        // this.auth.sendPost('')
    };
    CreateInterestGroupComponent.prototype.closeDescriptionError = function () {
        this.descriptionError = false;
        var txt1 = document.getElementById("description");
        txt1.focus();
    };
    CreateInterestGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-interest-group',
            template: __webpack_require__(/*! ./create-interest-group.component.html */ "./src/app/web/create-interest-group/create-interest-group.component.html"),
            styles: [__webpack_require__(/*! ./create-interest-group.component.css */ "./src/app/web/create-interest-group/create-interest-group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], CreateInterestGroupComponent);
    return CreateInterestGroupComponent;
}());



/***/ }),

/***/ "./src/app/web/create-interest-group2/create-interest-group2.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/web/create-interest-group2/create-interest-group2.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.submit-form {\n    margin: 15px 16px;\n    padding: 0 15px 44px 15px;\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n}\n.submit-form .form-group {\n    border-bottom: 1px solid #F1F1F1;\n    height: 49px;\n    position: relative;\n}\n.submit-form .form-group .label {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #404040;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 16px;\n}\n.submit-form .form-group .content {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    right: 13px;\n    color: #858585;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 15px;\n    max-width: 130px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.submit-form .form-group .content.choose-group {\n    color: #F5A623;\n}\n.submit-form .form-group label {\n    color: #404040;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 16px;\n}\n.submit-form .form-group .form-content {\n    padding-top: 6px;\n    position: relative;\n}\n.submit-form .form-group .form-content textarea {\n    width: 100%;\n    height: 107px;\n    background: #ffffff;\n    border-radius: 10px;\n    border: 1px solid #F3F3F3;\n    font-size: 16px;\n    padding: 10px 10px;\n}\n.submit-form .form-group .form-content .description {\n    position: absolute;\n    right: 10px;\n    bottom: -17px;\n    font-weight: normal;\n    color: #404040;\n}\n.submit-form .form-group .form-content textarea:focus {\n    border: 1px solid #F5A623;\n}\n.submit-form .form-group .form-content.error textarea {\n    border: 1px solid #f76808;\n}\n.submit-form .submit {\n    text-align: center;\n    padding-top: 28px;\n}\n.submit-form .submit button {\n    width: 158px;\n    height: 40px;\n    background: #f5a623;\nbox-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);\n    border-radius: 22px;\n    font-size: 18px;\n    color: #FFFFFF;\n    font-weight: 600;\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/create-interest-group2/create-interest-group2.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/web/create-interest-group2/create-interest-group2.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; overflow: hidden;background: #ffffff;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Create\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <!-- <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\" class=\"school-avatar\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div> -->\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\" class=\"school-avatar\"\n                *ngIf=\"schoolService.userSchool\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n        <div class=\"submit-form\">\n            <div class=\"form-group\" style=\"border: 0;\">\n                <div class=\"label\">My Group</div>\n                <div class=\"group-container\" (click)=\"toChoose()\">\n                    <div *ngIf=\"choosedGroup\" class=\"content\" style=\"padding-right: 3px;\">{{choosedGroup.groupName}}\n                    </div>\n                    <button *ngIf=\"!choosedGroup\" class=\"content choose-group\">To Choose</button>\n                    <img src=\"./assets/images/berkeley/right.png\" alt=\"\" style=\"width: 8px;position: absolute;top: 19.5px;right: 0;\">\n                </div>\n            </div>\n            <div style=\"font-weight: 500;width: 100%;background: #ececec;border-radius: 10px;font-size: 13px;line-height: 15px;padding: 5px 14px;\">Note: You have to create the group chat in the app first. You can only select groups in which you are admin.</div>\n            <div class=\"form-group\" style=\"height: auto;margin-top: 10px;border: 0;\">\n                <label>Group Details</label>\n                <div class=\"form-content\" [ngClass]=\"{'error': descriptionError}\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\"></textarea>\n                    <span class=\"description\">{{description ? description.length : 0}}/200</span>\n                </div>\n            </div>\n            <div class=\"submit\">\n                <button (click)=\"submit()\" [disabled]=\"disabled\">Confirm</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"commitStatus == 'groupError'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/error-info.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\" style=\"text-align: center;\">You can only select groups in which you are admin.</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/create-interest-group2/create-interest-group2.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/web/create-interest-group2/create-interest-group2.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateInterestGroup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInterestGroup2Component", function() { return CreateInterestGroup2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateInterestGroup2Component = /** @class */ (function () {
    function CreateInterestGroup2Component(router, _ngZone, cache, schoolService, auth) {
        this.router = router;
        this._ngZone = _ngZone;
        this.cache = cache;
        this.schoolService = schoolService;
        this.auth = auth;
        this.descriptionError = false;
        this.groupError = false;
        this.disabled = false;
    }
    CreateInterestGroup2Component.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    CreateInterestGroup2Component.prototype.toChoose = function () {
        var _this = this;
        loop.selectMyCreatedGroup(function (resp) {
            var _resp = JSON.parse(resp);
            if (_resp.code == 1) {
                _this.choosedGroup = _resp.data;
                _this._ngZone.run(function () { });
            }
        });
    };
    CreateInterestGroup2Component.prototype.submit = function () {
        var _this = this;
        if (!this.description || this.description.trim() == '') {
            this.descriptionError = true;
            // this.description = '';
        }
        else {
            this.descriptionError = false;
        }
        if (!this.choosedGroup || !this.choosedGroup.groupName || !this.choosedGroup.groupId) {
            this.groupError = true;
        }
        else {
            this.groupError = false;
        }
        if (this.descriptionError || this.groupError) {
            return;
        }
        this.disabled = true;
        var payload = {
            schoolId: this.cache.userInfo.schoolId,
            name: this.choosedGroup.groupName,
            notice: this.description,
            loopGroupId: this.choosedGroup.groupId,
        };
        this.auth.sendPost('interest/group', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.commitStatus = 'success';
                    setTimeout(function () {
                        _this.commitStatus = '';
                        _this.disabled = false;
                        _this.toMyGroup();
                    }, 1500);
                }
                else if (_body.code == 4003) {
                    _this.commitStatus = 'groupError';
                    setTimeout(function () {
                        _this.disabled = false;
                        _this.commitStatus = '';
                    }, 1500);
                }
                else {
                    _this.disabled = false;
                }
            }
            else {
                _this.disabled = false;
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    CreateInterestGroup2Component.prototype.goBack = function () {
        history.go(-1);
    };
    CreateInterestGroup2Component.prototype.toMyGroup = function () {
        this.cache.currentNavigate = 'settings';
        this.router.navigateByUrl('/my-groups-list');
    };
    CreateInterestGroup2Component.prototype.descriptionChange = function (event) {
        var _this = this;
        if (this.description.trim() != '') {
            this.descriptionError = false;
        }
        if (this.description.length > 200) {
            this.auth.error('Can only enter up to 200 characters.');
            setTimeout(function () {
                _this.description = _this.description.substring(0, 200);
            });
        }
    };
    CreateInterestGroup2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-interest-group2',
            template: __webpack_require__(/*! ./create-interest-group2.component.html */ "./src/app/web/create-interest-group2/create-interest-group2.component.html"),
            styles: [__webpack_require__(/*! ./create-interest-group2.component.css */ "./src/app/web/create-interest-group2/create-interest-group2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"], _service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CreateInterestGroup2Component);
    return CreateInterestGroup2Component;
}());



/***/ }),

/***/ "./src/app/web/edit-group/edit-group.component.css":
/*!*********************************************************!*\
  !*** ./src/app/web/edit-group/edit-group.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button i {font-size: 19px;position: absolute;left: 20px;top: 13px;}\nbutton.save {color: #FFA100;font-size:17px;position: absolute;right: 15px;top: 13px;font-weight:500;}\nbutton.save:disabled {color: #f5a62387;}\n.create-form {margin: 15px 16px;padding: 0 15px 44px 15px;box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);border-radius: 14px;}\n.create-form .form-groups {position: relative;}\n.create-form .form-groups .form-label {font-size: 16px;font-weight: 500;color: #404040;padding-top: 16px;}\n.create-form .form-groups label {display: block;font-size: 16px;font-weight: 500;color: #404040;padding-top: 16px;}\n.create-form .form-groups .form-label i{font-size: 19px;right: 7px;color: #0c0c0c45;}\n.create-form .form-groups .form-content {margin-top: 6px;}\n.create-form .form-groups .group-container {padding-right: 15px;position: absolute;top: 16px;right: 0;}\n.create-form .form-groups .group-container .content {color: #858585;font-weight: 500;line-height: 19px;font-size: 15px;max-width: 130px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}\n.create-form .form-groups .group-container .choose-group {color: #F5A623;font-weight: 600;}\n.create-form .form-groups .form-content .input {height: 37px;background: #ffffff;border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;}\n.create-form .form-groups .form-content .input.my-group {border:1px solid #FFA100;font-size:17px;font-weight:bold;color: #ffffff;background: #FFA100;text-align: center;line-height: 37px;}\n.create-form .form-groups .form-content .input.my-group i {font-size: 18px;left: 6px;}\n.create-form .form-groups .form-content .group-descript {background: #ECECEC;border-radius:12px;padding: 6px 15px;margin-top:9px;font-size:12px;color: #666666;font-weight: 500;}\n.create-form .form-groups .form-content textarea {height: 107px;background: rgba(255,255,255,1);border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;padding: 8px 13px;color: #666666;}\n.create-form .form-groups .form-content textarea:focus {border: 1px solid #F5A623;}\n.create-form .form-groups .form-content.error textarea {border: 1px solid #f76808;}\n.create-form .form-groups .form-content .description {position: absolute;right: 10px;bottom: -17px;font-weight: normal;color: #404040;}\n.create-form .submit {text-align: center;padding-top: 28px;}\n.create-form .submit button {box-shadow: 1px 2px 8px 0px rgba(245, 166, 35, 0.7);width: 158px;height: 40px;background: #f5a623;border-radius: 22px;font-size: 18px;color: #FFFFFF;font-weight: 600;}\n.create-form .form-groups .form-button {margin-top: 10px;}\n.create-form .form-button button {background: #FFD38B;box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.1);border-radius: 22px;width: 100%;border: 0;font-weight: bold;font-size: 18px;color: #ffffff;padding: 12px 0;}\n.create-form .form-button button.active {background:#FFA100;box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);border-radius:22px;}\n.create-form .form-groups .form-content input.input {padding: 0 15px;padding-right: 30px;font-size: 16px;color: #666666;}\n.create-form .form-groups .form-content input.input.error {border: 1px solid #f76808;}\n.create-form .form-groups .form-content .search-result {display: none;max-height: 284px;background: rgba(255,255,255,1);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.13);border-radius: 10px;border: 1px solid rgba(241,241,241,1);position: absolute;width: 100%;z-index: 1;overflow: auto;}\n.create-form .form-groups .form-content .search-result ul li {padding: 9px 15px;font-size:16px;font-weight:500;color: #666666;}\n.create-form .form-groups .form-content .search-result ul li .pp {color: #FFA100;}\n.create-form .form-groups .form-content.open .search-result {display: block;}\n.create-form .form-groups .form-content button.clear {position: absolute;right: 10px;top: 9px;}\n.create-form .form-groups .form-content button.clear img{width: 19px;}\n/* .create-form .form-groups .form-content input.input:focus + .search-result + button.clear {display: block;} */\n.error-info {background: #ffffff;height: 37px;width: 100%;position: absolute;top: 0;color: #FF5555;line-height: 37px;padding-left: 36px;font-size: 16px;border: 1px solid #FF5555;border-radius: 10px;}\n.error-info img {position: absolute;width: 13px;top: 12px;left: 14px;}\n.create-form .form-groups .form-content .input.my-group-selected {border: 0;background: #F5C677;position: relative; color: #ffffff;line-height: 37px;padding-left: 13px;font-size: 17px;}\n.create-form .form-groups .form-content .input.my-group-selected  i.icon-ok {position: absolute;right: 12px;font-size: 12px;}\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/edit-group/edit-group.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web/edit-group/edit-group.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"create-header\">\n    <button (click)=\"goBack()\">\n        <i class=\"bicon icon-back\"></i>\n    </button>\n    Edit\n    <button class=\"save\" [disabled]=\"disabled\" (click)=\"submitEdit()\">\n        <span *ngIf=\"!disabled\">Save</span>\n        <div class=\"spinner-edit\" *ngIf=\"disabled\">\n            <div class=\"rect1\"></div>\n            <div class=\"rect2\"></div>\n            <div class=\"rect3\"></div>\n            <div class=\"rect4\"></div>\n            <div class=\"rect5\"></div>\n        </div>\n    </button>\n</div>\n<div class=\"create-form\">\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-book\" style=\"font-size: 18px;top: 2px;\"></i>Course Title\n        </div>\n        <div class=\"form-content\" style=\"position: relative;\" [ngClass]=\"{'open' : showResult}\">\n            <input class=\"input\" type=\"text\" name=\"courseTitle\" (focus)=\"courseTitleFocus()\" (blur)=\"doSomeActionOnClose()\" (ngModelChange)=\"courseChange($event)\"\n                [(ngModel)]=\"courseTitle\" id=\"courseTitle\">\n            <div class=\"search-result\">\n                <ul>\n                    <li *ngFor=\"let course of courseList\" [innerHTML]=\"course._abbreviation + ' ' + course._course_number\" (click)=\"selectCourse(course)\"></li>\n                    <li *ngIf=\"courseList && courseList.length <= 0\" style=\"text-align: center;font-size: 15px;color: #66666685;\">No course number found</li>\n                </ul>\n            </div>\n            <button class=\"clear\" *ngIf=\"courseTitle\" (click)=\"clearTitle()\">\n                <img src=\"./assets/images/berkeley/clear@2x.png\" alt=\"\">\n            </button>\n            <div class=\"error-info\" *ngIf=\"courseTitleError\" (click)=\"closeCourseTitleError()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Course\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-group\" style=\"font-size: 18px;top: 2px;\"></i>My Group\n        </div>\n        <div class=\"form-content\" *ngIf=\"!selectedGroup\" style=\"position: relative;\">\n            <button class=\"input my-group\" (click)=\"selectGroup()\">\n                Select Group\n                <i class=\"bicon icon-go\"></i>\n            </button>\n            <div class=\"group-descript\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are admin.\n            </div>\n            <div class=\"error-info\" *ngIf=\"selectedGroupError\" (click)=\"selectGroup()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Group\n            </div>\n        </div>\n        <div class=\"form-content\" *ngIf=\"selectedGroup\">\n            <div class=\"input my-group-selected\" (click)=\"selectGroup()\">\n                {{selectedGroup.groupName}}\n                <i class=\"bicon icon-ok\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-description\" style=\"font-size: 18px;top: 2px;\"></i>Group Description\n        </div>\n        <div class=\"form-content\" style=\"position: relative;\">\n            <textarea name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\" id=\"description\" cols=\"30\"\n                rows=\"10\"></textarea>\n            <span class=\"can-put\" style=\"font-size: 12px;color: #CCCCCC;position: absolute;bottom: 4px;right: 22px;\">{{inputCount\n                < 0 ? 0 : inputCount}}</span>\n                    <button style=\"position: absolute;bottom: 6px;right: 2px;\">\n                        <img src=\"./assets/images/berkeley/@2x.png\" alt=\"\" style=\"width: 12px;\">\n                    </button>\n                    <div class=\"error-info\" *ngIf=\"descriptionError\" (click)=\"closeDescriptionError()\" style=\"height: 100%;\">\n                        <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to enter the group description\n                    </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div> -->\n<div style=\"height: 100%; overflow: hidden;background: #ffffff;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Edit\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\" class=\"school-avatar\"\n                *ngIf=\"schoolService.userSchool\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n        <div class=\"create-form\">\n            <div class=\"form-groups\">\n                <div class=\"form-label\">Course Code</div>\n                <div class=\"form-content\" style=\"position: relative;\" [ngClass]=\"{'open' : showResult}\" (clickOutside)=\"clickOutside($event)\">\n                    <input class=\"input\" type=\"text\" name=\"courseTitle\" (focus)=\"courseTitleFocus()\" (keyup)=\"keyup($event)\" (blur)=\"doSomeActionOnClose()\"\n                        (ngModelChange)=\"courseChange($event)\" [(ngModel)]=\"courseTitle\" id=\"courseTitle\" [ngClass]=\"{'error': courseTitleError}\">\n                    <div class=\"search-result\" *ngIf=\"courseList\" >\n                        <ul>\n                            <li *ngFor=\"let course of courseList\" [innerHTML]=\"course._abbreviation + ' ' + course._course_number\" (click)=\"selectCourse(course)\"></li>\n                            <li *ngIf=\"courseList && courseList.length <= 0\" style=\"text-align: center;font-size: 15px;color: #66666685;\">No course number found</li>\n                        </ul>\n                    </div>\n                    <button class=\"clear\" *ngIf=\"courseTitle\" (click)=\"clearTitle()\">\n                        <img src=\"./assets/images/berkeley/clear2@3x.png\" alt=\"\">\n                    </button>\n                    <!-- <div class=\"error-info\" *ngIf=\"courseTitleError\" (click)=\"closeCourseTitleError()\">\n                        <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Course\n                    </div> -->\n                </div>\n            </div>\n\n            <div class=\"form-groups\">\n                <div class=\"form-label\">My Group</div>\n                <div class=\"group-container\" (click)=\"selectGroup()\">\n                    <div *ngIf=\"selectedGroup\" class=\"content\">{{selectedGroup.groupName}}\n                    </div>\n                    <button *ngIf=\"!selectedGroup\" class=\"content choose-group\">To Choose</button>\n                    <img src=\"./assets/images/berkeley/right.png\" alt=\"\" style=\"width: 8px;position: absolute;top: 4px;right: 0;\">\n                </div>\n            </div>\n            <div style=\"margin-top: 12px;font-weight: 500;width: 100%;background: #ececec;border-radius: 10px;font-size: 13px;line-height: 15px;padding: 5px 14px;\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are admin.\n            </div>\n            <div class=\"form-groups\">\n                <label>Group Details</label>\n                <div class=\"form-content\" [ngClass]=\"{'error': descriptionError}\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\"></textarea>\n                    <span class=\"description\">{{description ? description.length : 0}}/200</span>\n                </div>\n            </div>\n            <div class=\"submit\">\n                <button (click)=\"submitEdit()\" [disabled]=\"disabled\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/edit-group/edit-group.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web/edit-group/edit-group.component.ts ***!
  \********************************************************/
/*! exports provided: EditGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupComponent", function() { return EditGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditGroupComponent = /** @class */ (function () {
    function EditGroupComponent(_ngZone, schoolService, classService, auth, cache) {
        var _this = this;
        this._ngZone = _ngZone;
        this.schoolService = schoolService;
        this.classService = classService;
        this.auth = auth;
        this.cache = cache;
        this.commitStatus = 'init';
        this.courseTitleError = false;
        this.selectedCourse = null;
        this.selectedGroupError = false;
        this.descriptionError = false;
        this.maxCount = 200;
        this.inputCount = 200;
        this.disabled = false;
        this.showResult = false;
        if (this.cache.selectedClassGroup) {
            auth.sendGet('class/get?id=' + this.cache.selectedClassGroup.classId).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                        _this.selectedCourse = _body.payload;
                        _this.courseTitle = _this.selectedCourse.abbreviation + ' ' + _this.selectedCourse.courseNumber;
                    }
                }
            });
            this.selectedGroup = { groupName: this.cache.selectedClassGroup.name, groupId: this.cache.selectedClassGroup.id };
            this.description = this.cache.selectedClassGroup.notice;
        }
    }
    EditGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    EditGroupComponent.prototype.selectGroup = function () {
        var _this = this;
        loop.selectMyCreatedGroup(function (resp) {
            var _resp = JSON.parse(resp);
            if (_resp.code == 1) {
                _this.selectedGroup = _resp.data;
                _this._ngZone.run(function () { });
            }
        });
    };
    EditGroupComponent.prototype.descriptionChange = function (event) {
        var _this = this;
        this.inputCount = this.maxCount - event.length;
        if (this.inputCount <= 0) {
            setTimeout(function () {
                _this.inputCount = _this.maxCount - event.length;
                _this.description = _this.description.substr(0, _this.maxCount);
                _this.inputCount = 0;
            }, 100);
        }
        else {
            this.inputCount = this.maxCount - event.length;
            if (this.inputCount <= 0) {
                this.inputCount = 0;
            }
        }
    };
    EditGroupComponent.prototype.goBack = function () {
        history.go(-1);
    };
    EditGroupComponent.prototype.doSomeActionOnClose = function () {
        // setTimeout(() => {
        //     if (!this.selectedCourse) {
        //         this.courseTitle = '';
        //         this.showResult = false;
        //     }
        // }, 100)
    };
    EditGroupComponent.prototype.keyup = function (event) {
        if (event && event.keyCode == 13) {
            this.showResult = true;
        }
    };
    EditGroupComponent.prototype.courseChange = function (event) {
        var _this = this;
        this.selectedCourse = null;
        if (this.courseTimeOut) {
            clearTimeout(this.courseTimeOut);
        }
        this.courseTimeOut = setTimeout(function () {
            _this.getClasses(event);
        }, 500);
    };
    EditGroupComponent.prototype.selectCourse = function (course) {
        this.selectedCourse = course;
        this.courseTitle = course.abbreviation + ' ' + course.courseNumber;
        this.showResult = false;
    };
    EditGroupComponent.prototype.clearTitle = function () {
        this.courseTitle = '';
        this.selectedCourse = null;
    };
    EditGroupComponent.prototype.getClasses = function (str) {
        var _this = this;
        this.classService.getClassList(1, 30, str, this.cache.userInfo.schoolId, function (data) {
            _this.courseList = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var _class = data_1[_i];
                var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
                var escapeReg = function (reg) { return reg.replace(escapeRegExp, '\\$&'); };
                var groupLeft = '<span class="search-reg">';
                var groupRight = '</span>';
                var groupReg = new RegExp(escapeReg(groupRight + groupLeft), 'g');
                var groupExtractReg = new RegExp('(' + escapeReg(groupLeft) + '[\\s\\S]+?' + escapeReg(groupRight) + ')', 'g');
                var kr = _this.KeyReg(str);
                _class._abbreviation = _class.abbreviation;
                _class._course_number = _class.courseNumber;
                _class._title = _class.title;
                if (kr.regexp.test(_class.abbreviation)) {
                    //把结果放入result数组中
                    _class._abbreviation = _class.abbreviation.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                if (kr.regexp.test(_class.courseNumber)) {
                    //把结果放入result数组中
                    _class._course_number = _class.courseNumber.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                if (kr.regexp.test(_class.title)) {
                    //把结果放入result数组中
                    _class._title = _class.title.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                _this.courseList = data;
            }
        });
    };
    EditGroupComponent.prototype.KeyReg = function (key) {
        var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
        var src = ['(.*?)('];
        var _src;
        var ks = key.split('');
        if (ks.length) {
            while (ks.length) {
                src.push(ks.shift().replace(escapeRegExp, '\\$&'), ')(.*?)(');
            }
            src.pop();
        }
        src.push(')(.*?)');
        _src = src.join('');
        var reg = new RegExp(_src, 'gi');
        var replacer = [];
        var start = key.length;
        var begin = 1;
        while (start > 0) {
            start--;
            replacer.push('$', begin, '<span class="search-reg">$', begin + 1, '</span>');
            begin += 2;
        }
        replacer.push('$', begin);
        var info = {
            regexp: reg,
            replacement: replacer.join('')
        };
        return info;
    };
    EditGroupComponent.prototype.submitEdit = function () {
        var _this = this;
        if (!this.selectedCourse) {
            this.courseTitleError = true;
            this.courseTitle = '';
            return;
        }
        if (!this.selectedGroup) {
            this.selectedGroupError = true;
            return;
        }
        if (!this.description || this.description.replace(/\s/g, "") == "") {
            this.descriptionError = true;
            this.description = "";
            return;
        }
        this.disabled = true;
        var payload = {
            name: this.selectedGroup.groupName,
            classId: this.selectedCourse.id,
            notice: this.description,
            loopGroupId: this.cache.selectedClassGroup.loopGroup.groupId,
            id: this.cache.selectedClassGroup.id,
            schoolId: this.cache.userInfo.schoolId
        };
        this.auth.sendPut('group', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.commitStatus = 'success';
                    setTimeout(function () {
                        _this.commitStatus = 'init';
                        _this.disabled = false;
                        history.go(-1);
                    }, 1500);
                }
                else {
                    _this.disabled = false;
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
                _this.disabled = false;
            }
        });
        // this.auth.sendPost('')
    };
    EditGroupComponent.prototype.courseTitleFocus = function () {
        this.showResult = true;
        if (this.courseTitle) {
            this.getClasses(this.courseTitle);
        }
        else {
            this.courseList = null;
        }
    };
    EditGroupComponent.prototype.closeCourseTitleError = function () {
        this.courseTitleError = false;
        var txt1 = document.getElementById("courseTitle");
        txt1.focus();
    };
    EditGroupComponent.prototype.closeDescriptionError = function () {
        this.descriptionError = false;
        var txt1 = document.getElementById("description");
        txt1.focus();
    };
    EditGroupComponent.prototype.clickOutside = function (event) {
        this.showResult = false;
        // if (!this.selectedCourse) {
        //     this.courseTitle = '';
        // }
    };
    EditGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-group',
            template: __webpack_require__(/*! ./edit-group.component.html */ "./src/app/web/edit-group/edit-group.component.html"),
            styles: [__webpack_require__(/*! ./edit-group.component.css */ "./src/app/web/edit-group/edit-group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"], _service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], EditGroupComponent);
    return EditGroupComponent;
}());



/***/ }),

/***/ "./src/app/web/edit-interest-group/edit-interest-group.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/web/edit-interest-group/edit-interest-group.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button i {font-size: 19px;position: absolute;left: 20px;top: 13px;}\nbutton.save {color: #404040;font-size:17px;position: absolute;right: 15px;top: 13px;font-weight:500;}\n.create-form {padding: 25px 21px 0px 21px;}\n.create-form .form-groups {margin-bottom: 20px;}\n.create-form .form-groups .form-label {font-size: 16px;font-weight: bold;color: #404040;padding-left: 7px;}\n.create-form .form-groups .form-label i{font-size: 19px;right: 7px;color: #0c0c0c45;}\n.create-form .form-groups .form-content {margin-top: 6px;}\n.create-form .form-groups .form-content .input {height: 37px;background: #ffffff;border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;}\n.create-form .form-groups .form-content .input.my-group {border:1px solid #FFA100;font-size:17px;font-weight:bold;color: #ffffff;background: #FFA100;text-align: center;line-height: 37px;}\n.create-form .form-groups .form-content .input.my-group i {font-size: 18px;left: 6px;}\n.create-form .form-groups .form-content .group-descript {background: #ECECEC;border-radius:12px;padding: 6px 15px;margin-top:9px;font-size:12px;color: #666666;font-weight: 500;}\n.create-form .form-groups .form-content textarea {height: 107px;background: rgba(255,255,255,1);border-radius: 10px;border: 1px solid rgba(241,241,241,1);width: 100%;padding: 8px 13px;color: #666666;}\n.create-form .form-groups .form-button {margin-top: 10px;}\n.create-form .form-button button {background: #FFD38B;box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.1);border-radius: 22px;width: 100%;border: 0;font-weight: bold;font-size: 18px;color: #ffffff;padding: 12px 0;}\n.create-form .form-button button.active {background:#FFA100;box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);border-radius:22px;}\n.create-form .form-groups .form-content input.input {margin-bottom: 5px;padding: 0 15px;font-size: 16px;color: #666666;}\n.create-form .form-groups .form-content .search-result {display: none;height: 284px;background: rgba(255,255,255,1);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.13);border-radius: 10px;border: 1px solid rgba(241,241,241,1);position: absolute;width: 100%;z-index: 1;overflow: auto;}\n.create-form .form-groups .form-content .search-result ul li {padding: 9px 15px;font-size:16px;font-weight:500;color: #666666;}\n.create-form .form-groups .form-content .search-result ul li .pp {color: #FFA100;}\n.create-form .form-groups .form-content input.input:focus + .search-result {display: block;}\n.create-form .form-groups .form-content button.clear {position: absolute;right: 10px;top: 9px;display: none;}\n.create-form .form-groups .form-content button.clear img{width: 19px;}\n.create-form .form-groups .form-content input.input:focus + .search-result + button.clear {display: block;}\n.error-info {height: 37px;width: 100%;position: absolute;top: 0;color: #FF5555;line-height: 37px;padding-left: 36px;font-size: 16px;}\n.error-info img {position: absolute;width: 13px;top: 12px;left: 14px;}\n.create-form .form-groups .form-content .input.my-group-selected {border: 0;background: #F5C677;position: relative; color: #ffffff;line-height: 37px;padding-left: 13px;font-size: 17px;}\n.create-form .form-groups .form-content .input.my-group-selected  i.icon-ok {position: absolute;right: 12px;font-size: 12px;}\n\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: #030303;font-size:13px;} */\n\n.create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n\n.create-header button {position: absolute;left: 20px;top: 13px;}\n\n.create-header button i {font-size: 19px;}\n\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.submit-form {\n    margin: 15px 16px;\n    padding: 0 15px 44px 15px;\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n}\n\n.submit-form .form-group {\n    border-bottom: 1px solid #F1F1F1;\n    height: 49px;\n    position: relative;\n}\n\n.submit-form .form-group .label {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #404040;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 16px;\n}\n\n.submit-form .form-group .content {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    right: 13px;\n    color: #858585;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 15px;\n    max-width: 130px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.submit-form .form-group .content.choose-group {\n    color: #F5A623;\n}\n\n.submit-form .form-group label {\n    color: #404040;\n    font-weight: 500;\n    line-height: 19px;\n    font-size: 16px;\n}\n\n.submit-form .form-group .form-content {\n    padding-top: 6px;\n    position: relative;\n}\n\n.submit-form .form-group .form-content textarea {\n    width: 100%;\n    height: 107px;\n    background: #ffffff;\n    border-radius: 10px;\n    border: 1px solid #F3F3F3;\n    font-size: 16px;\n    padding: 10px 10px;\n}\n\n.submit-form .form-group .form-content .description {\n    position: absolute;\n    right: 10px;\n    bottom: -17px;\n    font-weight: normal;\n    color: #404040;\n}\n\n.submit-form .form-group .form-content textarea:focus {\n    border: 1px solid #F5A623;\n}\n\n.submit-form .form-group .form-content.error textarea {\n    border: 1px solid #f76808;\n}\n\n.submit-form .submit {\n    text-align: center;\n    padding-top: 28px;\n}\n\n.submit-form .submit button {\n    width: 158px;\n    height: 40px;\n    background: #f5a623;\nbox-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);\n    border-radius: 22px;\n    font-size: 18px;\n    color: #FFFFFF;\n    font-weight: 600;\n}\n\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n\n.mask .confirm-card .confirm-header {text-align: center;}\n\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/edit-interest-group/edit-interest-group.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/web/edit-interest-group/edit-interest-group.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"create-form\">\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-group\" style=\"font-size: 18px;top: 2px;\"></i>My Group\n        </div>\n        <div class=\"form-content\" *ngIf=\"!selectedGroup\" style=\"position: relative;\">\n            <button class=\"input my-group\" (click)=\"selectGroup()\">\n                Select Group\n                <i class=\"bicon icon-go\"></i>\n            </button>\n            <div class=\"group-descript\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are admin.\n            </div>\n            <div class=\"error-info\" *ngIf=\"selectedGroupError\" (click)=\"selectGroup()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Group\n            </div>\n        </div>\n        <div class=\"form-content\" *ngIf=\"selectedGroup\">\n            <div class=\"input my-group-selected\" (click)=\"selectGroup()\">\n                {{selectedGroup.groupName}}\n                <i class=\"bicon icon-ok\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-groups\">\n        <div class=\"form-label\">\n            <i class=\"bicon icon-description\" style=\"font-size: 18px;top: 2px;\"></i>Group Description\n        </div>\n        <div class=\"form-content\" style=\"position: relative;\">\n            <textarea name=\"description\" [(ngModel)]=\"description\" (ngModelChange)=\"descriptionChange($event)\" id=\"description\" cols=\"30\"\n                rows=\"10\"></textarea>\n            <span class=\"can-put\" style=\"font-size: 12px;color: #CCCCCC;position: absolute;bottom: 4px;right: 22px;\">{{inputCount\n                < 0 ? 0 : inputCount}}</span>\n                    <button style=\"position: absolute;bottom: 6px;right: 2px;\">\n                        <img src=\"./assets/images/berkeley/@2x.png\" alt=\"\" style=\"width: 12px;\">\n                    </button>\n                    <div class=\"error-info\" *ngIf=\"descriptionError\" (click)=\"closeDescriptionError()\" style=\"height: 100%;\">\n                        <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to enter the group description\n                    </div>\n        </div>\n    </div>\n</div> -->\n\n<div style=\"height: 100%; overflow: hidden;background: #ffffff;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        Edit\n        <!-- <button class=\"save\" [disabled]=\"disabled\" (click)=\"submitEdit()\">\n            <span *ngIf=\"!disabled\">Save</span>\n            <div class=\"spinner-edit\" *ngIf=\"disabled\">\n                <div class=\"rect1\"></div>\n                <div class=\"rect2\"></div>\n                <div class=\"rect3\"></div>\n                <div class=\"rect4\"></div>\n                <div class=\"rect5\"></div>\n            </div>\n        </button> -->\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <!-- <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\" class=\"school-avatar\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div> -->\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\"\n                class=\"school-avatar\" *ngIf=\"schoolService.userSchool\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n\n        <div class=\"submit-form\">\n            <div class=\"form-group\" style=\"border: 0;\">\n                <div class=\"label\">My Group</div>\n                <div class=\"group-container\" (click)=\"selectGroup()\">\n                    <div *ngIf=\"selectedGroup\" class=\"content\" style=\"padding-right: 15px;\">{{selectedGroup.groupName}}\n                        <img src=\"./assets/images/berkeley/right.png\" alt=\"\"\n                            style=\"width: 8px;position: absolute;top: 4px;right: 0;\">\n                    </div>\n                    <button *ngIf=\"!selectedGroup\" class=\"content choose-group\">To Choose</button>\n                </div>\n            </div>\n            <div\n                style=\"font-weight: 500;width: 100%;background: #ececec;border-radius: 10px;font-size: 13px;line-height: 15px;padding: 5px 14px;\">\n                Note: You have to create the group chat in the app first. You can only select groups in which you are\n                admin.</div>\n            <div class=\"form-group\" style=\"height: auto;margin-top: 10px;border: 0;\">\n                <label>Group Details</label>\n                <div class=\"form-content\" [ngClass]=\"{'error': descriptionError}\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" name=\"description\" [(ngModel)]=\"description\"\n                        (ngModelChange)=\"descriptionChange($event)\"></textarea>\n                    <span class=\"description\">{{description ? description.length : 0}}/200</span>\n                </div>\n            </div>\n            <div class=\"submit\">\n                <button (click)=\"submitEdit()\" [disabled]=\"disabled\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/edit-interest-group/edit-interest-group.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/web/edit-interest-group/edit-interest-group.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditInterestGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInterestGroupComponent", function() { return EditInterestGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditInterestGroupComponent = /** @class */ (function () {
    function EditInterestGroupComponent(_ngZone, schoolService, classService, auth, cache) {
        this._ngZone = _ngZone;
        this.schoolService = schoolService;
        this.classService = classService;
        this.auth = auth;
        this.cache = cache;
        this.commitStatus = 'init';
        this.selectedGroupError = false;
        this.descriptionError = false;
        this.maxCount = 200;
        this.inputCount = 200;
        this.courseList = [];
        this.disabled = false;
        if (this.cache.selectedInterestGroup) {
            this.selectedGroup = { groupName: this.cache.selectedInterestGroup.loopGroup.name, groupId: this.cache.selectedInterestGroup.loopGroup.groupId };
            this.description = this.cache.selectedInterestGroup.notice;
        }
    }
    EditInterestGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    EditInterestGroupComponent.prototype.selectGroup = function () {
        var _this = this;
        loop.selectMyCreatedGroup(function (resp) {
            var _resp = JSON.parse(resp);
            if (_resp.code == 1) {
                _this.selectedGroup = _resp.data;
                _this._ngZone.run(function () { });
            }
        });
    };
    // descriptionChange(event) {
    //     this.inputCount = this.maxCount - event.length;
    //     if (this.inputCount <= 0) {
    //         setTimeout(() => {
    //             this.description = this.description.substr(0, this.maxCount);
    //             this.inputCount = 0;
    //         }, 100)
    //     } else {
    //         this.inputCount = this.maxCount - event.length;
    //         if (this.inputCount <= 0) {
    //             this.inputCount = 0;
    //         }
    //     }
    // }
    EditInterestGroupComponent.prototype.descriptionChange = function (event) {
        var _this = this;
        if (this.description.trim() != '') {
            this.descriptionError = false;
        }
        if (this.description.length > 200) {
            this.auth.error('Can only enter up to 200 characters.');
            setTimeout(function () {
                _this.description = _this.description.substring(0, 200);
            });
        }
    };
    EditInterestGroupComponent.prototype.goBack = function () {
        history.go(-1);
    };
    EditInterestGroupComponent.prototype.getClasses = function (str) {
        var _this = this;
        this.classService.getClassList(1, 30, str, this.cache.userInfo.schoolId, function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var _class = data_1[_i];
                var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
                var escapeReg = function (reg) { return reg.replace(escapeRegExp, '\\$&'); };
                var groupLeft = '<span class="search-reg">';
                var groupRight = '</span>';
                var groupReg = new RegExp(escapeReg(groupRight + groupLeft), 'g');
                var groupExtractReg = new RegExp('(' + escapeReg(groupLeft) + '[\\s\\S]+?' + escapeReg(groupRight) + ')', 'g');
                var kr = _this.KeyReg(str);
                _class._abbreviation = _class.abbreviation;
                _class._course_number = _class.course_number;
                _class._title = _class.title;
                if (kr.regexp.test(_class.abbreviation)) {
                    //把结果放入result数组中
                    _class._abbreviation = _class.abbreviation.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                if (kr.regexp.test(_class.course_number)) {
                    //把结果放入result数组中
                    _class._course_number = _class.course_number.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                if (kr.regexp.test(_class.title)) {
                    //把结果放入result数组中
                    _class._title = _class.title.replace(kr.regexp, kr.replacement)
                        .replace(groupReg, '');
                }
                _this.courseList = data;
            }
        });
    };
    EditInterestGroupComponent.prototype.KeyReg = function (key) {
        var escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
        var src = ['(.*?)('];
        var _src;
        var ks = key.split('');
        if (ks.length) {
            while (ks.length) {
                src.push(ks.shift().replace(escapeRegExp, '\\$&'), ')(.*?)(');
            }
            src.pop();
        }
        src.push(')(.*?)');
        _src = src.join('');
        var reg = new RegExp(_src, 'gi');
        var replacer = [];
        var start = key.length;
        var begin = 1;
        while (start > 0) {
            start--;
            replacer.push('$', begin, '<span class="search-reg">$', begin + 1, '</span>');
            begin += 2;
        }
        replacer.push('$', begin);
        var info = {
            regexp: reg,
            replacement: replacer.join('')
        };
        return info;
    };
    EditInterestGroupComponent.prototype.submitEdit = function () {
        var _this = this;
        if (!this.selectedGroup) {
            this.selectedGroupError = true;
            return;
        }
        if (!this.description || this.description.replace(/\s/g, "") == "") {
            this.descriptionError = true;
            this.description = "";
            return;
        }
        this.disabled = true;
        var payload = {
            name: this.selectedGroup.groupName,
            notice: this.description,
            id: this.cache.selectedInterestGroup.id,
            loopGroupId: this.selectedGroup.groupId,
            schoolId: this.cache.userInfo.schoolId
        };
        this.auth.sendPut('group', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.commitStatus = 'success';
                    setTimeout(function () {
                        _this.commitStatus = 'init';
                        _this.disabled = false;
                        history.go(-1);
                    }, 1500);
                }
                else {
                    _this.disabled = false;
                }
            }
            else {
                _this.disabled = false;
                _this.auth.error('Network timeout, please try again later');
            }
        });
        // this.auth.sendPost('')
    };
    EditInterestGroupComponent.prototype.closeDescriptionError = function () {
        this.descriptionError = false;
        var txt1 = document.getElementById("description");
        txt1.focus();
    };
    EditInterestGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-interest-group',
            template: __webpack_require__(/*! ./edit-interest-group.component.html */ "./src/app/web/edit-interest-group/edit-interest-group.component.html"),
            styles: [__webpack_require__(/*! ./edit-interest-group.component.css */ "./src/app/web/edit-interest-group/edit-interest-group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"], _service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], EditInterestGroupComponent);
    return EditInterestGroupComponent;
}());



/***/ }),

/***/ "./src/app/web/group-avatars/group-avatars.component.css":
/*!***************************************************************!*\
  !*** ./src/app/web/group-avatars/group-avatars.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {line-height: normal;}\nul{padding:0;margin:0;list-style-type:none;width:100%;height:100%;overflow: hidden;background: #EEEEED;}\nli{background-size:100%;outline:1px solid #fff;}\nli img{width:100%;}\nbutton{margin-top:20px}\nli:only-child{height:100%}\nli:first-child:nth-last-child(2),li:first-child:nth-last-child(2)+li{width:50%;height:50%}\nli:first-child:nth-last-child(2)+li{margin-left:auto}\nli:first-child:nth-last-child(3),li:first-child:nth-last-child(3) ~ li{width:50%;height:50%;float:left}\nli:first-child:nth-last-child(3){margin-left:25%}\nli:first-child:nth-last-child(4),li:first-child:nth-last-child(4) ~ li{width:50%;height:50%;float:left}\nli:first-child:nth-last-child(5){width:33.33%;height:33.33%;float:left;top: 18%;position: relative;margin-left: 17%;}\nli:first-child:nth-last-child(5) ~ li{width:33.33%;height:33.33%;float:left;top: 18%;position: relative;}\nli:first-child:nth-last-child(6){width:33.33%;height:33.33%;float:left;top: 18%;position: relative;}\nli:first-child:nth-last-child(6) ~ li{width:33.33%;height:33.33%;float:left;top: 18%;position: relative;}\nli:first-child:nth-last-child(7){width:33.33%;height:33.33%;margin:auto}\nli:first-child:nth-last-child(7) ~ li{width:33.33%;height:33.33%;float:left}\nli:first-child:nth-last-child(8){width:33.33%;height:33.33%;margin-left:17%;float:left}\nli:first-child:nth-last-child(8) ~ li{width:33.33%;height:33.33%;float:left}\nli:first-child:nth-last-child(9),li:first-child:nth-last-child(9) ~ li{width:33.33%;height:33.33%;float:left}"

/***/ }),

/***/ "./src/app/web/group-avatars/group-avatars.component.html":
/*!****************************************************************!*\
  !*** ./src/app/web/group-avatars/group-avatars.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"group-chat\">\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n    <li>\n        <img [src]=\"'./assets/images/demo/timg.png'\" alt=\"\">\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/web/group-avatars/group-avatars.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/web/group-avatars/group-avatars.component.ts ***!
  \**************************************************************/
/*! exports provided: GroupAvatarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAvatarsComponent", function() { return GroupAvatarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupAvatarsComponent = /** @class */ (function () {
    function GroupAvatarsComponent() {
    }
    GroupAvatarsComponent.prototype.ngOnInit = function () {
    };
    GroupAvatarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-avatars',
            template: __webpack_require__(/*! ./group-avatars.component.html */ "./src/app/web/group-avatars/group-avatars.component.html"),
            styles: [__webpack_require__(/*! ./group-avatars.component.css */ "./src/app/web/group-avatars/group-avatars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupAvatarsComponent);
    return GroupAvatarsComponent;
}());



/***/ }),

/***/ "./src/app/web/group-detail/group-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/web/group-detail/group-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding: 0 100px;}\n.create-header button {position: absolute;left: 20px;top: 13px;}\n.create-header button i {font-size: 19px;}\n.close button {\n    background: none;\n    border: 0;\n    margin-left: 30px;\n    margin-top: 10px;\n}\n.close button img {\n    width: 16px;\n}\n.card {\n    width: auto;\n    text-align: center;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    padding: 25px 0 30px 0;\n    margin: 16px;\n}\n.card .avatar {\n    width: 60px;\n    border-radius: 16px;\n    overflow: hidden;\n    display: inline-block;\n}\n.card h2 {\n    font-size: 18px;\n    padding: 0 20px;\n    font-weight: 500;\n    color: #262628;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.card .createTime {\n    font-size: 13px;\n    color: #838383;\n    display: inline-block;\n    padding-left: 21px;\n    position: relative;\n    font-weight: 500;\n    text-align: left;\n}\n.card .createTime img{\n    display: inline-block;\n    width: 16px;\n    position: absolute;\n    left: 0;\n    top: -1px;\n}\n.card .description {\n    margin-top: 18px;\n    padding: 0 20px;\n    font-size: 16px;\n    line-height: 18px;\n    font-weight: 400;\n    color: #454545;\n    text-align: left;\n    word-break: break-word;\n}\n.card button.join {\n    height: 44px;\n    background: #FFA100;\n    box-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);\n    /* box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.5); */\n    border-radius: 21px;\n    border: 0;\n    font-size: 16px;\n    font-weight: 500;\n    color: rgba(255,255,255,1);\n    /* padding: 0 38px; */\n    margin-top: 30px;\n    width: 150px;\n    margin-right: 15px;\n}\n.card button.copy {\n    height: 44px;\n    background: #868686;\n    box-shadow: 3px 4px 8px 0px rgba(134, 134, 134, 0.7);\n    /* box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.3); */\n    border-radius: 21px;\n    border: 0;\n    font-size: 16px;\n    font-weight: 500;\n    color: rgba(255,255,255,1);\n    /* padding: 0 38px; */\n    margin-top: 30px;\n    width: 150px;\n}\n@media only screen and (max-width: 370px) {\n    .card button.join {\n        margin-right: 0;\n        width: 165px;\n    }\n    .card button.copy {\n        width: 165px;\n        margin-top: 20px;\n    }\n}\n.card .applaud {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 12px;\n    font-weight: 500;\n    color: rgba(204,204,204,1);\n}\n.card .applaud img {\n    width: 46px;\n    margin-bottom: 4px;\n}\n.school-card {\n    width: auto;\n    height: 100px;\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 14px;\n    margin: 20px 16px 15px 20px;\n    padding-left: 105px;\n    word-break: break-word;\n    color: #262628;\n    font-size: 18px;\n    font-weight: bold;\n    position: relative;\n}\n.school-card img.school-avatar {\n    position: absolute;\n    left: 20px;\n    top: 13px;\n    width: 75px;\n    border-radius: 50%;\n}\n.school-card .name {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 20px;\n    font-weight: 500;\n    color: #454545;\n}\n.empty {\n    padding: 53px 53px 0 53px;\n    text-align: center;\n}\n.empty img {\n    width: calc(100% - 54px);\n    margin: auto;\n}\n.empty p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(102,102,102,1);\n    padding: 0 6px;\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}"

/***/ }),

/***/ "./src/app/web/group-detail/group-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/web/group-detail/group-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; position: relative;background:#FFFFFF;\">\n    <div class=\"create-header\">\n        <button (click)=\"goBack()\">\n            <i class=\"bicon icon-back\"></i>\n        </button>\n        <!-- {{groupInfo.name}} -->\n        Group Info\n    </div>\n    <div style=\"height: calc(100% - 45px); overflow: auto;\">\n        <div class=\"school-card\">\n            <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" alt=\"\"\n                class=\"school-avatar\">\n            <div class=\"name\">{{schoolService.userSchool.name}}</div>\n        </div>\n        <div class=\"card\" *ngIf=\"groupInfo && groupInfo.loopGroup && groupInfo.loopGroup.membersNum > 0\">\n            <!-- <div class=\"avatar\"><app-group-avatars></app-group-avatars></div> -->\n            <h2>{{groupInfo.name}}</h2>\n            <div style=\"padding: 12px 15px 24px 15px;border-bottom: 1px solid #F1F1F1;margin: 0 20px;line-height: 15px;\">\n                <ul>\n                    <li class=\"createTime\">\n                        <img src=\"./assets/images/berkeley/zan4@3x.png\" alt=\"\">{{groupInfo.likeNum | likeNumPipe}}\n                    </li>\n                    <li class=\"createTime\" style=\"margin: 0px 25px;\">\n                        <img src=\"./assets/images/berkeley/group2-new.png\" alt=\"\"\n                            style=\"top: 0px;\">{{groupInfo.createTime | date:'yyyy/MM/dd'}}\n                    </li>\n                    <li class=\"createTime\">\n                        <img src=\"./assets/images/berkeley/group1-new.png\" alt=\"\"\n                            style=\"top: 1px;width: 17px;\">{{groupInfo.loopGroup ? groupInfo.loopGroup.membersNum:0}}\n                    </li>\n                </ul>\n            </div>\n            <div class=\"description\">\n                {{groupInfo.notice}}\n            </div>\n            <div>\n                <button class=\"join\" (click)=\"joinGroup(groupInfo.loopGroup ? groupInfo.loopGroup.link : '')\">Join</button>\n                <button *ngIf=\"groupInfo.loopGroup && groupInfo.loopGroup.link\" class=\"copy\" ngxClipboard (cbOnSuccess)=\"copy()\"\n                    [cbContent]=\"'https://loopchat.us/invitation/1' + groupInfo.loopGroup.link\">Copy Group Link</button>\n            </div>\n            <!-- <div class=\"applaud\">\n                <img src=\"./assets/images/berkeley/zan3@2x.png\" />\n                <span>{{groupInfo.like_num}}</span>\n            </div> -->\n        </div>\n        <div class=\"empty\" *ngIf=\"!groupInfo || !groupInfo.loopGroup || groupInfo.loopGroup.membersNum <= 0\">\n            <img src=\"./assets/images/berkeley/group-not-exist@3x.png\" />\n            <div style=\"position: relative;top: -12px;\">\n                <p>Group does not exist</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/group-detail/group-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/web/group-detail/group-detail.component.ts ***!
  \************************************************************/
/*! exports provided: GroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupDetailComponent = /** @class */ (function () {
    function GroupDetailComponent(cache, schoolService, auth) {
        this.cache = cache;
        this.schoolService = schoolService;
        this.auth = auth;
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commitStatus = '';
        this.groupInfo = cache.selectedGroup;
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    GroupDetailComponent.prototype.goBack = function () {
        this.callback.emit({ type: 'close' });
    };
    GroupDetailComponent.prototype.joinGroup = function (link) {
        var _this = this;
        if (!link) {
            alert('The group has been dissolved!');
            return;
        }
        // loop.openUrl('https://loopchat.us/invitation/1' + link);
        // loop.joinGroup('1'+link, (data) => {
        //     alert(data);
        //     if(data && data.code == '0') {
        //         this.auth.error('The group has been dissolved')
        //     }
        // })
        loop.getVersion(function (version) {
            if (version) {
                var _version = JSON.parse(version);
                if (_version.code == 1) {
                    var data = _version.data;
                    var status_1;
                    if (data.platform == 'iOS') {
                        status_1 = _this.checkVersion(data.version, '1.0.9');
                    }
                    else {
                        status_1 = _this.checkVersion(data.version, '0.1.52');
                    }
                    if (!status_1) {
                        loop.joinGroup('1' + link, function (data) {
                            if (data && data.code == '0') {
                                _this.auth.error('The group has been dissolved');
                            }
                        });
                    }
                    else {
                        loop.openUrl('https://loopchat.us/invitation/1' + link);
                    }
                }
                else {
                }
            }
        });
    };
    GroupDetailComponent.prototype.copy = function () {
        var _this = this;
        this.commitStatus = 'success';
        setTimeout(function () {
            _this.commitStatus = '';
        }, 500);
    };
    GroupDetailComponent.prototype.checkVersion = function (current, need) {
        var _c = current.split('.');
        var _n = need.split('.');
        var c = parseInt(_c);
        var n = parseInt(_n);
        if (_c[0] < _n[0] || (_c[0] == _n[0] && _c[1] < _n[1]) || (_c[0] == _n[0] && _c[1] == _n[1] && _c[2] < _n[2])) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GroupDetailComponent.prototype, "callback", void 0);
    GroupDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-detail',
            template: __webpack_require__(/*! ./group-detail.component.html */ "./src/app/web/group-detail/group-detail.component.html"),
            styles: [__webpack_require__(/*! ./group-detail.component.css */ "./src/app/web/group-detail/group-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"], _service_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());



/***/ }),

/***/ "./src/app/web/interests-groups/interests-groups.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/web/interests-groups/interests-groups.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .berkeley-header {height: 210px;background: #FFA100;border-radius: 0 0 20px 20px;padding-top: 40px;} */\n.berkeley-header img {width: 100%;}\n.create-box {text-align: center;padding: 13px 15px;padding-top: 20px;}\n.create-box .button { \n    width: 100%;\n    position: relative;\n    height: 50px;\n    line-height: 50px;\n    background: #ffffff;\n    box-shadow: 0px 2px 15px 0px rgba(204,204,204,0.5);\n    border-radius: 10px;\n    color: #454545;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    padding-left: 44px;\n}\n.create-box .icon {\n    position: absolute;\n    width: 24px;\n    top: 50%;\n    left: 13px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.create-box .navigate {\n    position: absolute;\n    width: 9px;\n    right: 20px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.create-box button i {font-size: 18px;right: 8px;}\n.create-box button:active {opacity: 0.7;}\n.group-box {padding-top: 0px;}\n.group-box .group-header .img-group{width: 36px;position: absolute;left: 20px;}\n.group-content {padding: 0px 15px 0px 15px;}\n.group-content  .group-card {background: #ffffff;border-radius: 16px;padding: 17px 15px 17px 15px;margin-bottom: 10px;position: relative;box-shadow:2px 0px 20px 4px rgba(234,234,234,0.7);}\n.group-content  .group-card .group-name {font-size:18px;font-weight:500;color: #404040;max-width: calc(100% - 100px);}\n.group-content  .group-card .group-count {font-weight: 500; min-height: 14px;font-size: 13px;color: #838383;margin-top: 7px;position: relative;padding-left: 21px;display: inline-block;margin-right: 16px;line-height: 16px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 100%;}\n.group-content  .group-card .group-count img{width: 18px;display: inline-block;position: absolute;left: 0;top: 1px;}\n.group-content  .group-card .group-descript {overflow: hidden;text-overflow: ellipsis;display: -webkit-box;font-size: 15px;color: #666666;line-height: 17px;font-weight: 400;}\n.group-content  .group-card .zan {color: #FFA100;font-size: 12px;font-weight: 400;position: absolute;top: 15px;right: 15px;text-align: center;}\n.group-content  .group-card .zan img{width: 32px;margin-bottom: 1px;}\n.group-footer {margin-top: 13px;}\n.group-footer .left{position: relative;padding-left: 20px;color: #FFA100;font-size: 12px;line-height: 18px;}\n.group-footer .left img{width: 13px;display: inline-block;position: absolute;top: 0px;left: 0px;}\n.group-footer .right button img{width: 18px;}\n.group-footer .right button.edit{margin-right: 22px;}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: #00000082;}\n.mask .confirm-card {position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 315px;padding: 30px 20px 20px 20px;background: #ffffff;border-radius: 20px;}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:68px;}\n.mask .confirm-card .confirm-title {color: #222222;font-weight:500;font-size:20px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-content {color: #666666;font-weight:400;font-size:16px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-groups {margin-top: 19px;}\n.mask .confirm-card .confirm-groups button {display: block; font-size: 15px; padding: 12px 0;font-weight: bold;width: 100%;border-radius:8px;border: 0;}\n.mask .confirm-card .confirm-groups button.confirm {background: #FFA100;color: #ffffff;margin-bottom: 5px;}\n.mask .confirm-card .confirm-groups button.cancel {background: #ffffff;color: #999999;}\n.empty {\n    margin: 0 26px;\n    text-align: center;\n}\n.empty img {\n    margin-top: 8px;\n    width: calc(100% - 120px);\n    display: inline-block;\n}\n.empty p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(102,102,102,1);\n    padding: 0 6px;\n}\n.search-box {position: relative;padding: 20px 15px;padding-bottom: 25px;}\n.search-box button {text-align: left;color: #B3B3B3;font-size: 14px;width: 100%;background: #ECEDEE;border: 1px solid #ECEDEE;border-radius: 18px;height: 37px;padding-left: 37px;font-weight: 500;}\n.search-box input::-webkit-input-placeholder {\n    color: #B3B3B3;\n}\n.search-box input::-moz-placeholder {\n    color: #B3B3B3;\n}\n.search-box input::-ms-input-placeholder {\n    color: #B3B3B3;\n}\n.search-box input::placeholder {\n    color: #B3B3B3;\n}\n.search-box .search-icon {width: 17px;position: absolute;top: 29px;left: 31px;}\n.title {\n    width: 100%;\n    /* height: 19px; */\n    font-size: 18px;\n    font-weight: 500;\n    color: #454545;\n    line-height: 19px;\n    padding: 0 20px;\n}\nli .li:active~.zan {\n    opacity: 0.5;\n}"

/***/ }),

/***/ "./src/app/web/interests-groups/interests-groups.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/web/interests-groups/interests-groups.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;overflow: auto;overflow-x: hidden;\" (scroll)=\"searchMore($event)\" *ngIf=\"!this.cache.chooseSchool\">\n    <div class=\"berkeley-header\" >\n        <img src=\"./assets/images/berkeley/groups-banner-new.png\" alt=\"\">\n    </div>\n    <div class=\"search-box\">\n        <!-- <input type=\"text\"> -->\n        <button routerLink=\"/search-interest\">Search for Interest Groups </button>\n        <img class=\"search-icon\" src=\"./assets/images/berkeley/search@2x.png\" alt=\"\">\n    </div>\n    <div class=\"title\">Popular Group Chats for {{schoolService.userSchool ? schoolService.userSchool.name : ''}}</div>\n    <div class=\"create-box\" style=\"z-index: 99999;\">\n        <div class=\"button\" routerLink=\"/create-interest-group\">\n            <img class=\"icon\" src=\"./assets/images/berkeley/group@3x.png\" alt=\"\">\n            Create Interest Group\n            <img class=\"navigate\" src=\"./assets/images/berkeley/right.png\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"group-box\">\n        <ul class=\"group-content\" *ngIf=\"groups && groups.length != 0\">\n            <!-- card -->\n            <li class=\"group-card\" *ngFor=\"let group of groups; let idx = index\" (click)=\"showGroupDetail(group)\">\n                <div class=\"li\">\n                    <div class=\"group-name\">\n                        {{group ? group.name : '--'}}\n                    </div>\n                    <div class=\"group-count\">\n                        <img src=\"./assets/images/berkeley/Droup-1@2x.png\" alt=\"\"> {{group.loopGroup ? (group.loopGroup.membersNum || 0) : 0}}\n                    </div>\n                    <div class=\"group-descript\" style=\"-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 16px;\">\n                        {{group ? group.notice : '--'}}\n                    </div>\n                </div>\n                <!-- <div class=\"zan\">\n                    <span style=\"float: right;\">\n                        <app-like [id]=\"'interestsGroupList' + idx\" [group]=\"group\" [class]=\"\" (loved)=\"loved($event, group)\"></app-like>\n                    </span>\n                    <div style=\"float: right;px;margin-right: -11px;\">{{group.likeNum}}</div>\n                </div> -->\n                <div class=\"zan\" style=\"top: 19px;right: 15px;\">\n                    <img src=\"./assets/images/berkeley/join-group.png\" alt=\"\" style=\"width: 17px;\">\n                </div>\n                <div class=\"zan\" style=\"right: 38px;top: 7px;\">\n                    <span style=\"float: right;\">\n                        <app-like [id]=\"'interestsGroupList' + idx\" [group]=\"group\" [class]=\"\" (loved)=\"loved($event, group)\">\n                        </app-like>\n                    </span>\n                    <span style=\"font-weight: bold;float: right;line-height: 46px;margin-right: -11px;\">{{group.likeNum ? (group.likeNum | likeNumPipe) : 0}}</span>\n                </div>\n            </li>\n        </ul>\n\n        <div class=\"empty\" *ngIf=\"groups && groups.length == 0\">\n            <img src=\"./assets/images/berkeley/Class-0@2x.png\" />\n            <div class=\"description\" style=\"position: relative;top: -60px;\">\n                <p>\n                    No interest groups were found. You can add an interest group.\n                </p>\n            </div>\n        </div>\n        <app-loading *ngIf=\"!groups\"></app-loading>\n    </div>\n    <!-- <div class=\"mask\">\n        <div class=\"confirm-card\">\n            <div class=\"confirm-header\">\n                <img src=\"./assets/images/berkeley/delete@2x.png\" alt=\"\">\n            </div>\n            <div class=\"confirm-title\">Confirm Deletion</div>\n            <div class=\"confirm-content\">Are you sure to remove the group chat from the list ?</div>\n            <div class=\"confirm-groups\">\n                <button class=\"confirm\">Yes</button>\n                <button class=\"cancel\">No</button>\n            </div>\n        </div>\n    </div> -->\n</div>\n<app-select-school *ngIf=\"this.cache.chooseSchool\"></app-select-school>"

/***/ }),

/***/ "./src/app/web/interests-groups/interests-groups.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/web/interests-groups/interests-groups.component.ts ***!
  \********************************************************************/
/*! exports provided: InterestsGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsGroupsComponent", function() { return InterestsGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_interest_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/interest-list.service */ "./src/app/service/interest-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InterestsGroupsComponent = /** @class */ (function () {
    function InterestsGroupsComponent(schoolService, classService, auth, cache, router, interestListService) {
        this.schoolService = schoolService;
        this.classService = classService;
        this.auth = auth;
        this.cache = cache;
        this.router = router;
        this.interestListService = interestListService;
        this.getAllDone = false;
        this.loading = false;
        this.page = 1;
        this.interestListService.cacheInterestGroups = [];
        this.getInterestList();
    }
    InterestsGroupsComponent.prototype.getInterestList = function () {
        var _this = this;
        if (!this.cache.userInfo.schoolId) {
            setTimeout(function () {
                _this.getInterestList();
            }, 100);
            return;
        }
        this.interestListService.getInterestList(this.page, this.cache.userInfo.schoolId, function (datas) {
            _this.groups = datas;
        });
    };
    InterestsGroupsComponent.prototype.ngOnInit = function () {
        this.getSchoolInfo();
    };
    InterestsGroupsComponent.prototype.getSchoolInfo = function () {
        var _this = this;
        if (!this.cache.userInfo.schoolId) {
            setTimeout(function () {
                _this.getSchoolInfo();
            }, 100);
            return;
        }
        this.auth.sendGet('school/get?id=' + this.cache.userInfo.schoolId).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.schoolService.userSchool = _body.payload;
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    InterestsGroupsComponent.prototype.getInterestGroups = function (page) {
        var _this = this;
        this.page = page;
        this.lastDataLength = this.groups ? this.groups.length : 0;
        var url = 'page=' + page + '&pageSize=10' + '&schoolId=' + this.cache.userInfo.schoolId;
        this.auth.sendGet('group/list?' + url).subscribe(function (resp) {
            if (!_this.groups) {
                _this.groups = [];
            }
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    var datas = _body.payload;
                    _this.getAllDone = datas.length == 10 ? false : true;
                    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
                        var data = datas_1[_i];
                        _this.groups.push(data);
                    }
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    InterestsGroupsComponent.prototype.loved = function (event, group) {
        if (event == 'clicked') {
            group.likeNum++;
        }
    };
    InterestsGroupsComponent.prototype.searchMore = function (event) {
        var _this = this;
        var box = event.target;
        if (this.loading) {
            return;
        }
        if (box.scrollHeight - box.offsetHeight - box.scrollTop < 80) {
            this.page++;
            this.loading = true;
            this.interestListService.getInterestListByPage(this.page, this.cache.userInfo.schoolId, function (resp) {
                _this.getAllDone = resp.getAllDone;
                if (_this.getAllDone && resp.datas.length <= 0) {
                    _this.page--;
                    _this.interestListService.page--;
                }
                for (var _i = 0, _a = resp.datas; _i < _a.length; _i++) {
                    var data = _a[_i];
                    _this.groups.push(data);
                }
                _this.loading = false;
            });
        }
    };
    InterestsGroupsComponent.prototype.showGroupDetail = function (group) {
        this.cache.selectedGroup = group;
        this.cache.showGroupInfo = true;
        this.cache._showGroupInfo = true;
    };
    InterestsGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests-groups',
            template: __webpack_require__(/*! ./interests-groups.component.html */ "./src/app/web/interests-groups/interests-groups.component.html"),
            styles: [__webpack_require__(/*! ./interests-groups.component.css */ "./src/app/web/interests-groups/interests-groups.component.css")]
        }),
        __metadata("design:paramtypes", [_service_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolService"], _service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_interest_list_service__WEBPACK_IMPORTED_MODULE_5__["InterestListService"]])
    ], InterestsGroupsComponent);
    return InterestsGroupsComponent;
}());



/***/ }),

/***/ "./src/app/web/like/like.component.css":
/*!*********************************************!*\
  !*** ./src/app/web/like/like.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: block;\n    width: 100%;\n    min-width: 46px; \n    height: 40px; \n    position: relative;\n}\n.container:active .journal-reward {\n    opacity: 0.5;\n}\n.journal-reward {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    height: 18px;\n    width: 18px;\n    display: block;\n    z-index: 21;\n}\ncanvas {\n    display: block;\n    position: absolute;\n    bottom: 17px;\n    right: -73px;\n    z-index: 20;\n    cursor: pointer;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}"

/***/ }),

/***/ "./src/app/web/like/like.component.html":
/*!**********************************************!*\
  !*** ./src/app/web/like/like.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"container\" (click)=\"likedTwo($event)\" [id]=\"id\">\n    <!-- <canvas [id]=\"id\" class=\"cvs\"></canvas> -->\n    <!-- <img src=\"./assets/images/berkeley/zan-3@3x.png\" (click)=\"liked($event)\" class=\"journal-reward\" id=\"journal-reward\" /> -->\n    <img src=\"./assets/images/berkeley/zan-3@3x.png\"  class=\"journal-reward\" id=\"journal-reward\" />\n</a>"

/***/ }),

/***/ "./src/app/web/like/like.component.ts":
/*!********************************************!*\
  !*** ./src/app/web/like/like.component.ts ***!
  \********************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LikeComponent = /** @class */ (function () {
    function LikeComponent(classService, auth) {
        this.classService = classService;
        this.auth = auth;
        this.heartList = [];
        this.heartCount = 0;
        this.loved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._requestAnimationFrame = false;
    }
    LikeComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            // let that = this;
            // that.heartList = [];
            // // var stage = new BubbleHearts();
            // let _canvas = <HTMLCanvasElement>document.getElementById(this.id);
            // if (!_canvas) { return; }
            // this.ctx = _canvas.getContext('2d'),
            //     this.ctx.canvas.width = 200;
            // this.ctx.canvas.height = 50;
            // that.ctx.clearRect(0, 0, 200, 50);
            // that.heartList.forEach(function (item) {
            //     item && item.move(that.ctx);
            // });
            // setInterval(function () {
            //     that.heartList.push(that.createHeart());
            // }, 200);
        }, 500);
    };
    LikeComponent.prototype.liked = function (event) {
        // this._setInterval = setInterval(() => {
        var _this = this;
        // },200);
        var that = this;
        this._requestAnimationFrame = false;
        event.preventDefault();
        event.stopPropagation();
        setTimeout(function () {
            _this._requestAnimationFrame = true;
            (function forloop() {
                that.ctx.clearRect(0, 0, 200, 50);
                that.heartList.forEach(function (item) {
                    item && item.move(that.ctx);
                });
                if (that._requestAnimationFrame) {
                    requestAnimationFrame(forloop);
                }
            }());
            if (_this._timeout) {
                clearTimeout(_this._timeout);
            }
            if (_this.group && _this.group.id) {
                _this.auth.sendPost('group/like', { id: _this.group.id }).subscribe(function (resp) {
                    if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                        var _body = resp.body;
                        if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                            _this.loved.emit('clicked');
                            _this.heartList.push(_this.createHeart());
                            _this._timeout = setTimeout(function () {
                                _this.heartList = [];
                                _this._requestAnimationFrame = false;
                            }, 2000);
                            _this.ctx.clearRect(0, 0, 200, 50);
                            _this.heartList.forEach(function (item) {
                                item && item.move(_this.ctx);
                            });
                        }
                    }
                    else {
                        _this.auth.error('You can only give 50 likes at most.');
                    }
                });
            }
            else if (_this.class && _this.class.id) {
                _this.auth.sendPost('class/like', { id: _this.class.id }).subscribe(function (resp) {
                    if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                        var _body = resp.body;
                        if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                            _this.loved.emit('clicked');
                            _this.heartList.push(_this.createHeart());
                            _this._timeout = setTimeout(function () {
                                _this.heartList = [];
                                _this._requestAnimationFrame = false;
                            }, 2000);
                            _this.ctx.clearRect(0, 0, 200, 50);
                            _this.heartList.forEach(function (item) {
                                item && item.move(_this.ctx);
                            });
                        }
                    }
                    else {
                        _this.auth.error('You can only give 50 likes at most.');
                    }
                });
            }
        }, 100);
    };
    LikeComponent.prototype.stopliked = function () {
        if (this._setInterval) {
            clearInterval(this._setInterval);
        }
    };
    LikeComponent.prototype.createHeart = function () {
        var that = this;
        this.heartCount++;
        var positionArray = [{
                x: 100,
                y: 50,
                endX: 200,
                endY: 0
            }];
        var img = new Image();
        // img.src = './assets/images/' + Math.ceil(Math.random() * 5) + '.png';
        img.src = './assets/images/berkeley/groups-icon2@3x.png';
        // let p1 = {
        //     x: 100 + this.getRandomDis(),
        //     y: 100 + this.getRandomDis()
        // };
        // let p2 = {
        //     x: 100 + this.getRandomDis(),
        //     y: 100 + this.getRandomDis()
        // };
        var p1 = {
            x: 100,
            y: 25 + this.getRandomDis()
        };
        var p2 = {
            x: 100,
            y: 25 + this.getRandomDis()
        };
        return new LikeHeart({
            id: this.heartCount,
            x: positionArray[0].x,
            y: positionArray[0].y,
            endX: positionArray[0].endX,
            endY: positionArray[0].endY,
            onFadeOut: function removeItem(item) {
                var array = [];
                for (var i = 0; i < that.heartList.length; i++) {
                    if (that.heartList[i].id !== item.id) {
                        array.push(that.heartList[i]);
                    }
                }
                that.heartList = [];
                that.heartList = array;
            },
            // noAngel: true,
            // noScale: true,
            width: 33,
            height: 33,
            image: img,
            bezierPoint: {
                p0: {
                    x: positionArray[0].x,
                    y: positionArray[0].y
                },
                p1: p1,
                p2: p2,
                p3: {
                    x: positionArray[0].endX,
                    y: positionArray[0].endY
                }
            }
        });
    };
    LikeComponent.prototype.getRandomDis = function () {
        // if (Math.random() > 0.5) {
        //     return -(Math.random() * 20);
        // } else {
        //     return +(Math.random() * 20);
        // }
        if (Math.random() > 0.5) {
            return -(Math.random() * 20);
        }
        else {
            return +(Math.random() * 20);
        }
    };
    LikeComponent.prototype.removeItem = function (item) {
        var array = [];
        for (var i = 0; i < this.heartList.length; i++) {
            if (this.heartList[i].id !== item.id) {
                array.push(this.heartList[i]);
            }
        }
        this.heartList = [];
        this.heartList = array;
    };
    LikeComponent.prototype.likedTwo = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var mmm = $('#' + this.id);
        if (this.group && this.group.id) {
            this.auth.sendPost('group/like', { id: this.group.id }).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                        _this.loved.emit('clicked');
                        _this.tipsBox({
                            obj: mmm,
                            str: "+1",
                            startSize: "12px",
                            endSize: "20px",
                            interval: 1000,
                            color: "red",
                        });
                    }
                }
                else {
                    _this.auth.error('You can only give 50 likes at most.');
                }
            });
        }
        else if (this.class && this.class.id) {
            this.auth.sendPost('class/like', { id: this.class.id }).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                        _this.loved.emit('clicked');
                        _this.tipsBox({
                            obj: mmm,
                            str: "+1",
                            startSize: "12px",
                            endSize: "20px",
                            interval: 1000,
                            color: "red",
                        });
                    }
                }
                else {
                    _this.auth.error('You can only give 50 likes at most.');
                }
            });
        }
    };
    LikeComponent.prototype.tipsBox = function (options) {
        $("body").append("<span class='num'>" + "<img src=\"./assets/images/berkeley/groups-icon2@3x.png\" style=\"width:100%;\">" + "</span>");
        var box = $(".num");
        var left = options.obj.offset().left + options.obj.width() / 2;
        var top = options.obj.offset().top;
        box.css({
            "position": "absolute",
            "left": left + "px",
            "top": top + "px",
            "z-index": 9999,
            "width": options.startSize,
            "line-height": options.endSize,
            "color": options.color
        });
        box.animate({
            "width": options.endSize,
            "opacity": "0",
            "top": top - parseInt(options.endSize) * 2 + "px",
            "left": left + 40 + "px"
        }, options.interval, function () {
            box.remove();
            // options.callback();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LikeComponent.prototype, "loved", void 0);
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/web/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.css */ "./src/app/web/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [_service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/web/loading/loading.component.css":
/*!***************************************************!*\
  !*** ./src/app/web/loading/loading.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-edit {\n    margin: 16px auto 0 auto;\n    width: 70px;\n    height: 50px;\n    text-align: center;\n    font-size: 10px;\n}\n\n.spinner-edit > div {\n    background-color: #FFA100;\n    height: 100%;\n    width: 4px;\n    display: inline-block;\n    margin: 0 3px 0 0;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.spinner-edit .rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n\n.spinner-edit .rect3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n}\n\n.spinner-edit .rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n.spinner-edit .rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n\n.spinner-edit .rect6 {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n    20% { -webkit-transform: scaleY(0.8) }\n}\n\n@keyframes sk-stretchdelay {\n    0%, 40%, 100% { \n        transform: scaleY(0.4);\n        -webkit-transform: scaleY(0.4);\n    }  20% { \n        transform: scaleY(0.8);\n        -webkit-transform: scaleY(0.8);\n    }\n}\n\np {\n    font-size: 16px;\n    color: #666666;\n    text-align: center;\n    margin-bottom: 16px;\n}"

/***/ }),

/***/ "./src/app/web/loading/loading.component.html":
/*!****************************************************!*\
  !*** ./src/app/web/loading/loading.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"spinner-edit\" >\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n    <div class=\"rect6\"></div>\n</div>\n<p>loading...</p> -->\n<div class=\"loader-inner ball-beat\" style=\"text-align: center;padding: 40px;\">\n    <div></div>\n    <div></div>\n    <div></div>\n</div>"

/***/ }),

/***/ "./src/app/web/loading/loading.component.ts":
/*!**************************************************!*\
  !*** ./src/app/web/loading/loading.component.ts ***!
  \**************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/web/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/web/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/web/main/main.component.css":
/*!*********************************************!*\
  !*** ./src/app/web/main/main.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {display: inline-block;width: calc(100%/2);}\n.berkeley-main {height: 100%;}\n.berkeley-content {height: calc(100% - 60px);background: #FAFAFA;overflow: auto;overflow-x: hidden;-webkit-overflow-scrolling:touch;}\n.berkeley-menu {height: 60px;background: #FFFFFF;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);position: fixed;width: 100%;bottom: 0px;}\n.berkeley-menu ul li button {\n    height: 60px;\n    width: 100%;\n    background: white;\n    border: 0;\n}\n.berkeley-content.lhp {height: calc(100% - 75px);background: #FAFAFA;overflow: auto;overflow-x: hidden;-webkit-overflow-scrolling:touch;}\n.berkeley-menu.lhp {height: 75px;background: #FFFFFF;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);position: fixed;width: 100%;bottom: 0px;}\n.berkeley-menu.lhp ul li button {\n    height: 75px;\n    width: 100%;\n    background: white;\n    border: 0;\n    padding-bottom: 10px;\n}\n.berkeley-menu ul li button.active {\n    color: #FFA100;\n}\n.berkeley-menu ul li button img {\n    display: inline-block;\n}\n.berkeley-menu ul li button img.hidden {\n    display: none;\n}\n.berkeley-menu ul li button.active i {\n    color: #FFA100;\n}\n.berkeley-menu ul li button span {\n    font-size: 12px;\n    font-weight: 500;\n    width: 55px;\n    display: inline-block;\n    color: #666666;\n    line-height: 12px;\n}\n.berkeley-menu ul li button.active span {\n    color: #FFA100;\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: #00000082;}\n.mask .confirm-card {position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 315px;padding: 36px 20px 31px 20px;background: #ffffff;border-radius: 20px;}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:46px;}\n.mask .confirm-card .confirm-title {color: #222222;font-weight:500;font-size:22px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-content {color: #666666;font-weight:400;font-size:16px;margin-top: 7px;text-align: center;}\n.mask .confirm-card .confirm-groups {margin-top: 39px;}\n.mask .confirm-card .confirm-groups button {display: block; font-size: 16px; padding: 12px 0;font-weight: 600;width: 100%;border-radius:22px;border: 0;}\n.mask .confirm-card .confirm-groups button.confirm {box-shadow: 1px 2px 8px 0px rgba(245, 166, 35, 0.7);background: #F5A623;color: #ffffff;margin-bottom: 5px;}\n.mask .confirm-card .confirm-groups button.cancel {background: #ffffff;color: #999999;}"

/***/ }),

/***/ "./src/app/web/main/main.component.html":
/*!**********************************************!*\
  !*** ./src/app/web/main/main.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"berkeley-main\" [ngClass]=\"{'lhp' : lhp}\">\n    <div class=\"berkeley-content\" [ngClass]=\"{'lhp' : lhp}\">\n        <router-outlet ></router-outlet>\n    </div>\n    <div class=\"berkeley-menu\" [ngClass]=\"{'lhp' : lhp}\">\n        <ul>\n            <!-- <li>\n                <button (click)=\"navigateTo('home')\" [ngClass]=\"{'active': navigate == 'home'}\">\n                    <img [ngClass]=\"{'hidden' : navigate == 'home'}\" style=\"width: 23px;position: relative;top: 2px;\" src=\"./assets/images/berkeley/Class@2x.png\">\n                    <img [ngClass]=\"{'hidden' : navigate != 'home'}\" style=\"width: 23px;position: relative;top: 2px;\" src=\"./assets/images/berkeley/Class2@2x.png\">\n                    <br/>\n                    <span>Class Groups</span>\n                </button>\n            </li> -->\n            <li>\n                <button (click)=\"navigateTo('interests')\" [ngClass]=\"{'active': navigate == 'interests'}\">\n                    <img [ngClass]=\"{'hidden' : navigate == 'interests'}\" style=\"width: 24px;position: relative;top: 2px;\" src=\"./assets/images/berkeley/Interest1@2x.png\">\n                    <img [ngClass]=\"{'hidden' : navigate != 'interests'}\" style=\"width: 24px;position: relative;top: 2px;\" src=\"./assets/images/berkeley/Interest2@2x.png\">\n                    <!-- <br/>\n                    <span>Interests Groups</span> -->\n                </button>\n            </li>\n            <li>\n                <button (click)=\"navigateTo('settings')\" [ngClass]=\"{'active': navigate == 'settings'}\">\n                    <img [ngClass]=\"{'hidden' : navigate == 'settings'}\" style=\"width: 23px;position: relative;top: 2px;\" src=\"./assets/images/berkeley/my@2x.png\">\n                    <img [ngClass]=\"{'hidden' : navigate != 'settings'}\" style=\"width: 23px;position: relative;top: 2px;\" src=\"./assets/images/berkeley/my2@2x.png\">\n                    <!-- <br/>\n                    <span>My Settings</span> -->\n                </button>\n            </li>\n        </ul>\n    </div>\n</div>\n<div class=\"mask\" *ngIf=\"showConfirm\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/error-info.png\" alt=\"\">\n        </div>\n        <!-- <div class=\"confirm-title\">Confirm Deletion</div> -->\n        <div class=\"confirm-content\">You have to select your school first!</div>\n        <div class=\"confirm-groups\">\n            <button class=\"confirm\" (click)=\"showConfirm = false\">Yes</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/main/main.component.ts":
/*!********************************************!*\
  !*** ./src/app/web/main/main.component.ts ***!
  \********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
var MainComponent = /** @class */ (function () {
    function MainComponent(cache, router, activatedRoute) {
        this.cache = cache;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.navigate = 'interests';
        this.lhp = false;
        this.showConfirm = false;
        // const url = this.activatedRoute.url.subscribe(url => console.log(url));
        if (window.screen.availHeight / window.screen.availWidth > 2) {
            this.lhp = true;
        }
    }
    MainComponent.prototype.ngOnInit = function () {
        this.navigate = this.cache.currentNavigate;
    };
    MainComponent.prototype.navigateTo = function (route) {
        if (!this.cache.userInfo.schoolId) {
            this.showConfirm = true;
            return;
        }
        this.navigate = route;
        this.cache.currentNavigate = route;
        var url = route == 'home' ? 'search-class' : route == 'interests' ? 'interests-groups' : 'my-groups-list';
        this.router.navigateByUrl(url);
    };
    MainComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/web/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/web/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/web/my-groups/my-groups.component.css":
/*!*******************************************************!*\
  !*** ./src/app/web/my-groups/my-groups.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".berkeley-header {background: #000000;border-radius: 0 0 20px 20px;padding: 40px 30px 30px 30px;}\n.berkeley-header .header-avatar {text-align: center;}\n.berkeley-header .header-avatar .avatar {display: inline-block;width: 110px;background: #F5A623;padding: 5px;border-radius: 31px;height: 110px;}\n.berkeley-header .header-avatar .avatar img {width: 100%;height: 100%;border-radius: 27px;}\n.berkeley-header .header-nick{font-size:32px;font-weight:bold;color: #F5A623;text-align: center;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}\n.berkeley-header .header-bio{font-size:14px;font-weight:400;color: #F5A623;text-align: center;opacity: 0.8;margin-top: 4px;padding: 0 30px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;}\n.create-box {margin-top: 24px;text-align: center;}\n.create-box button { background: #ffffff;border-radius: 22px;border: 1px solid #FFA100;font-size: 18px;color: #FFFFFF;padding: 9px 28px;font-weight: bold;background: #FFA100;box-shadow: 0px 10px 20px 0px rgba(251,182,92,0.5);border-radius: 22px;}\n.create-box button i {font-size: 18px;right: 8px;}\n.create-box button:active {opacity: 0.7;}\n.group-box {padding-top: 24px;}\n.group-box .group-header{padding: 0 20px;font-size: 18px;color: #454545;line-height: 36px;position: relative;font-weight: 500;line-height: 21px;}\n.group-box .group-header .img-group{width: 36px;position: absolute;left: 20px;}\n.group-content {padding: 14px 20px 0px 20px;}\n.group-content  .group-card {background: #ffffff;border-radius: 16px;padding: 17px 15px 36px 15px;margin-bottom: 10px;box-shadow:2px 0px 20px 4px rgba(234,234,234,0.7);}\n.group-content  .group-card .group-name {float: left;padding-right: 10px;font-size:18px;font-weight:500;color: #404040;max-width: calc(100% - 125px);}\n.group-content  .group-card .tag{background:#f5a6231f;border-radius:9px;font-size:13px;color: #FFA100;border-radius:9px;padding: 2px 6px 3px 6px;font-weight: 500;}\n.group-content  .group-card .group-descript {overflow: hidden;text-overflow: ellipsis;display: -webkit-box;font-size:15px;color: #666666;width: 100%;line-height: 17px;font-weight: 400;}\n.group-footer {margin-top: 13px;}\n.group-footer .left{position: relative;padding-left: 20px;margin-top: 6px;color: #838383;font-weight: 500;font-size: 13px;line-height: 16px;}\n.group-footer .left img{width: 16px;display: inline-block;position: absolute;top: -2px;left: 0px;}\n.group-footer .right button img{width: 18px;}\n.group-footer .right button.edit{margin-right: 22px;}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: #00000082;}\n.mask .confirm-card {position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 315px;padding: 30px 20px 20px 20px;background: #ffffff;border-radius: 20px;}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:68px;}\n.mask .confirm-card .confirm-title {color: #222222;font-weight:500;font-size:22px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-content {color: #666666;font-weight:400;font-size:16px;margin-top: 15px;text-align: center;}\n.mask .confirm-card .confirm-groups {margin-top: 19px;}\n.mask .confirm-card .confirm-groups button {display: block; font-size: 15px; padding: 12px 0;font-weight: bold;width: 100%;border-radius:8px;border: 0;}\n.mask .confirm-card .confirm-groups button.confirm {background: #FFA100;color: #ffffff;margin-bottom: 5px;}\n.mask .confirm-card .confirm-groups button.cancel {background: #ffffff;color: #999999;}\n.empty {\n    margin: 0 26px;\n    text-align: center;\n}\n.empty img {\n    margin-top: 8px;\n    width: calc(100% - 120px);\n    display: inline-block;\n}\n.empty p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(102,102,102,1);\n    padding: 0 6px;\n}\n.user-card {\n    height: 100px;\n    background: #ffffff;\n    box-shadow: 0px 10px 20px 0px #00000014;\n    border-radius: 16px;\n    margin: 20px 15px;\n    position: relative;\n}\n.user-card .avatar{\n    width: 75px;\n    height: 75px;\n    position: absolute;\n    background: #F5A623;\n    border-radius: 50%;\n    top: 13px;\n    left: 20px;\n}\n.user-card .avatar img{\n    width: 67px;\n    height: 67px;\n    border-radius: 50%;\n    display: inline-block;\n    position: absolute;\n    top: 4px;\n    left: 4px;\n}\n.user-card .header-nick{font-size: 20px;font-weight: 500;color: #454545;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-right: 20px;}\n.user-card .header-bio{line-height: 16px;font-size: 15px;font-weight: 500;color: rgba(131,131,131,1);-webkit-line-clamp: 2;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;padding-right: 20px;}\n.school-box .group-header {\n    padding: 0 20px;\n    font-size: 18px;\n    color: #454545;\n    line-height: 36px;\n    position: relative;\n    font-weight: 500;\n    line-height: 21px;\n}\n.school-box .group-card{\n    height: 50px;\n    background: rgba(255,255,255,1);\n    box-shadow: 0px 2px 15px 0px rgba(204,204,204,0.5);\n    border-radius: 16px;\n    margin: 14px 20px 0 20px;\n    position: relative;\n    line-height: 50px;\n    padding: 0 51px;\n    overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\n    font-weight: 500;\n}"

/***/ }),

/***/ "./src/app/web/my-groups/my-groups.component.html":
/*!********************************************************!*\
  !*** ./src/app/web/my-groups/my-groups.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;overflow: auto;overflow-x: hidden;\">\n    <div class=\"user-card\">\n        <div class=\"avatar\">\n            <img [src]=\"userInfo ? userInfo.pic : './assets/images/demo/timg.png'\" alt=\"\">\n        </div>\n        <div style=\"padding-top: 28px;padding-left: 114px;\">\n            <div class=\"header-nick\">{{userInfo ? userInfo.name : '--'}}</div>\n            <div class=\"header-bio\" style=\"-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 3px;\" [innerHTML]=\"userInfo ? (userInfo.bio ? userInfo.bio : 'No bio set...') : '--'\"></div>\n        </div>\n    </div>\n    <div class=\"school-box\" style=\"padding-top: 4px;\">\n        <div class=\"group-header\">\n            My School\n        </div>\n        <!-- routerLink=\"/my-school\" -->\n        <div class=\"group-card\">\n            <div style=\"width: 30px;position: absolute;top: 50%;transform: translateY(-50%);left: 15px;height: 30px;\">\n                <img [src]=\"schoolService.userSchool.schoolImage ? schoolService.userSchool.schoolImage : ''\" style=\"width: 100%;-o-object-fit: cover;object-fit: cover;height: 100%;border-radius: 50%;\"\n                    alt=\"\">\n            </div>\n            {{schoolService.userSchool ? schoolService.userSchool.name.slice(0,1).toUpperCase() + schoolService.userSchool.name.slice(1)\n            : ''}}\n            <!-- <img src=\"./assets/images/berkeley/right.png\" alt=\"\" style=\"width: 8px;position: absolute;top: 50%;transform: translateY(-50%);right: 20px;\"> -->\n        </div>\n    </div>\n    <!-- <div class=\"berkeley-header\">\n        <div class=\"header-avatar\">\n            <div class=\"avatar\">\n                <img [src]=\"userInfo ? userInfo.pic : './assets/images/demo/timg.png'\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"header-nick\">\n            {{userInfo ? userInfo.name : '--'}}\n        </div>\n        <div class=\"header-bio\" style=\"-webkit-line-clamp: 2;-webkit-box-orient: vertical;\" [innerHTML]=\"userInfo ? (userInfo.bio ? userInfo.bio : 'No bio set...') : '--'\">\n        </div>\n    </div> -->\n    <!-- <div class=\"create-box\">\n        <button (click)=\"createCourseGroup()\">\n            <i class=\"bicon icon-plus\"></i>Add Class Groups\n        </button>\n    </div> -->\n    <div class=\"group-box\">\n        <div class=\"group-header\" *ngIf=\"groups && groups.length != 0\">\n            <!-- <img src=\"./assets/images/berkeley/My Groups@2x.png\" class=\"img-group\" alt=\"\">-->My Groups\n        </div>\n        <ul class=\"group-content\" *ngIf=\"groups && groups.length != 0\">\n            <!-- card -->\n            <li class=\"group-card\" *ngFor=\"let group of groups;\">\n                <div class=\"group-name\">\n                    {{group.name}}\n\n                </div>\n                <span class=\"tag\">{{group.type == 'class' ? 'Class Group' : 'Interest Group'}}</span>\n                <div class=\"group-descript\" style=\"-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 7px;\">\n                    {{group.notice}}\n                </div>\n                <div class=\"group-footer\">\n                    <div class=\"left\">\n                        <img src=\"./assets/images/berkeley/zan4@3x.png\" alt=\"\">{{(group.likeNum | likeNumPipe) || 0}}\n                    </div>\n                    <div class=\"right\">\n                        <button class=\"edit\" (click)=\"edit(group)\">\n                            <img src=\"./assets/images/berkeley/edit2.png\" alt=\"\">\n                        </button>\n                        <button class=\"delete\" (click)=\"deleteBefore(group)\">\n                            <img src=\"./assets/images/berkeley/delete2.png\" alt=\"\" style=\"width: 20px;\">\n                        </button>\n                    </div>\n                </div>\n            </li>\n        </ul>\n\n        <div class=\"empty\" *ngIf=\"groups && groups.length == 0\">\n            <img src=\"./assets/images/berkeley/Class-0@2x.png\" />\n            <div class=\"description\" style=\"position: relative;top: -60px;\">\n                <p>\n                    You have not added any groups. If you can’t find your class groups or interest groups, feel free to add one.\n                </p>\n            </div>\n        </div>\n\n        <app-loading *ngIf=\"!groups\"></app-loading>\n    </div>\n    <div class=\"mask\" *ngIf=\"confirmDelete\">\n        <div class=\"confirm-card\">\n            <div class=\"confirm-header\">\n                <img src=\"./assets/images/berkeley/delete@2x.png\" alt=\"\">\n            </div>\n            <div class=\"confirm-title\">Confirm Deletion</div>\n            <div class=\"confirm-content\">Are you sure to remove the group chat from the list ?</div>\n            <div class=\"confirm-groups\">\n                <button class=\"confirm\" (click)=\"delete()\">Yes</button>\n                <button class=\"cancel\" (click)=\"confirmDelete = false\">No</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n        <div class=\"confirm-card\" style=\"width: auto;\">\n            <div class=\"confirm-header\">\n                <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\" style=\"width: 30px;\">\n            </div>\n            <div class=\"confirm-title\" style=\"margin-top: 3px;color: #030303;font-size: 13px;\">Success</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/my-groups/my-groups.component.ts":
/*!******************************************************!*\
  !*** ./src/app/web/my-groups/my-groups.component.ts ***!
  \******************************************************/
/*! exports provided: MyGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGroupsComponent", function() { return MyGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_my_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/my-groups.service */ "./src/app/service/my-groups.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyGroupsComponent = /** @class */ (function () {
    function MyGroupsComponent(classService, auth, cache, router, myGroups, schoolService) {
        this.classService = classService;
        this.auth = auth;
        this.cache = cache;
        this.router = router;
        this.myGroups = myGroups;
        this.schoolService = schoolService;
        this.confirmDelete = false;
        this.commitStatus = 'init';
        this.getAllDone = false;
        this.userInfo = auth.userInfo;
        if (this.userInfo && this.userInfo.bio) {
            this.userInfo.bio = this.userInfo.bio.replace(/\n/g, '<br>');
        }
    }
    MyGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groups = this.myGroups.myGroups;
        this.myGroups.getAllMyGroups([], 1, this.cache.userInfo.schoolId, function (getAllDone) {
            if (getAllDone) {
                _this.groups = _this.myGroups.myGroups;
            }
        });
        if (!this.schoolService.userSchool || !this.schoolService.userSchool.schoolImage) {
            this.auth.sendGet('file?id=' + this.schoolService.userSchool.icon).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.userSchool.schoolImage = _body.payload;
                    }
                }
                else {
                    _this.auth.error('Network timeout, please try again later');
                }
            });
        }
    };
    // getMyGroups(page) {
    //     this.page = page;
    //     this.lastDataLength = this.groups ? this.groups.length : 0;
    //     const url = 'type=USER&page=' + page + '&pageSize=10';
    //     this.auth.sendGet('group/list?' + url).subscribe(resp => {
    //         if(!this.groups) {
    //             this.groups = [];
    //         }
    //         if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
    //             let _body = resp.body;
    //             if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
    //                 let datas = _body.payload;
    //                 this.getAllDone = datas.length == 10 ? false : true;
    //                 for (let data of datas) {
    //                     this.groups.push(data);
    //                 }
    //             }
    //         } else {
    //             this.auth.error('Network timeout, please try again later')
    //         }
    //     })
    // }
    MyGroupsComponent.prototype.createCourseGroup = function () {
        this.cache.selectedClass = null;
        this.cache.createStatus = 'mySetting';
        this.cache.showCreateGroup = true;
        this.cache._showCreateGroup = 'show';
    };
    MyGroupsComponent.prototype.deleteBefore = function (group) {
        this.deleteGroup = group;
        this.confirmDelete = true;
    };
    MyGroupsComponent.prototype.delete = function () {
        var _this = this;
        this.confirmDelete = false;
        var payload = {
            id: this.deleteGroup.id
        };
        this.auth.sendDelete("group?id=" + this.deleteGroup.id).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    for (var i = 0; i < _this.groups.length; i++) {
                        if (_this.groups[i].id == _this.deleteGroup.id) {
                            _this.groups.splice(i, 1);
                            _this.commitStatus = 'success';
                            setTimeout(function () {
                                _this.commitStatus = 'init';
                            }, 1500);
                        }
                    }
                    //重新查
                    // this.groups = [];
                    // this.commitStatus = 'success';
                    // setTimeout(() => {
                    //     this.commitStatus = 'init';
                    // }, 1500)
                    // this.getMyGroups(1);
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    MyGroupsComponent.prototype.edit = function (group) {
        if (group.type == 'class') {
            this.cache.selectedClassGroup = group;
            this.router.navigateByUrl("/edit-group");
        }
        else {
            this.cache.selectedInterestGroup = group;
            this.router.navigateByUrl("/edit-interest-group");
        }
    };
    MyGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-groups',
            template: __webpack_require__(/*! ./my-groups.component.html */ "./src/app/web/my-groups/my-groups.component.html"),
            styles: [__webpack_require__(/*! ./my-groups.component.css */ "./src/app/web/my-groups/my-groups.component.css")]
        }),
        __metadata("design:paramtypes", [_service_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_my_groups_service__WEBPACK_IMPORTED_MODULE_4__["MyGroupsService"], _service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"]])
    ], MyGroupsComponent);
    return MyGroupsComponent;
}());



/***/ }),

/***/ "./src/app/web/my-school/my-school.component.css":
/*!*******************************************************!*\
  !*** ./src/app/web/my-school/my-school.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-header {background: #ffffff;color: #404040;font-size:17px;font-weight:bold;height: 45px;line-height: 45px;position: relative;text-align: center;box-shadow:0px 0px 8px 0px rgba(0,0,0,0.08);}\n.create-header button i {font-size: 19px;position: absolute;left: 20px;top: 13px;}\nbutton.save {color: #404040;font-size:17px;position: absolute;right: 15px;top: 13px;font-weight:500;}\nbutton.save:disabled {color: #f5a62387;}\n.create-form {height: calc(100% - 45px);}\n.create-form .form-groups {height: 100%;}\n.create-form .form-groups .form-content {position: relative;padding: 20px 15px;height: 100%;overflow: overlay;}\n.create-form .form-groups .form-content input {height: 37px;background: #ECEDEE;border-radius: 19px;border: 0;width: 100%;padding-left: 40px;padding-right: 16px;font-size: 15px;font-weight: 500;color: #000000;}\n.create-form .form-groups .form-content input::-webkit-input-placeholder {\n    color: #B3B3B3;\n}\n.create-form .form-groups .form-content input::-moz-placeholder {\n    color: #B3B3B3;\n}\n.create-form .form-groups .form-content input::-ms-input-placeholder {\n    color: #B3B3B3;\n}\n.create-form .form-groups .form-content input::placeholder {\n    color: #B3B3B3;\n}\n.create-form .form-groups .form-content .search-icon {width: 17px;position: absolute;top: 29px;left: 31px;}\n.search-result {\n    width: 100%;\n    box-shadow: 0px 2px 10px 0px rgba(204, 204,204,0.4);\n    border-radius: 19px;\n    margin-top: 15px;\n    overflow: overlay;\n}\n.search-result ul {\n    padding: 6px 20px;\n}\n.search-result ul li {\n    border-bottom: 1px solid #F3F3F3;\n    font-size: 16px;\n    font-weight: 500;\n    color: #454545;\n    padding: 17px 0px;\n    position: relative;\n}\n.search-result ul li:last-child {\n    border: 0px;\n}\n.search-result ul li img {\n    position: absolute;\n    width: 19px;\n    top: 22px;\n    right: 0px;\n}\n.mask {position: fixed;left: 0;right: 0;top: 0;bottom: 0;}\n.mask .confirm-card {position: absolute;left: 50%;top: 40%;-webkit-transform: translate(-50%, -40%);transform: translate(-50%, -40%);padding: 20px 18px 28px 18px;background: #ffffff;border-radius: 12px;box-shadow:0px 2px 22px 0px rgba(218,218,218,0.5);min-width: 100px;text-align: center;background: rgba(0,0,0,.9);}\n.mask .confirm-card .confirm-header {text-align: center;}\n.mask .confirm-card .confirm-header img{display: inline-block;width:30px;}\n.mask .confirm-card .confirm-title{margin-top: 3px;color: white;font-size:13px;}\n"

/***/ }),

/***/ "./src/app/web/my-school/my-school.component.html":
/*!********************************************************!*\
  !*** ./src/app/web/my-school/my-school.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-header\">\n    <button (click)=\"goBack()\">\n        <i class=\"bicon icon-back\"></i>\n    </button>\n    My School\n    <button class=\"save\" [disabled]=\"disabled\" (click)=\"submitEdit()\">\n        <span *ngIf=\"!disabled\">Done</span>\n        <!-- <div class=\"spinner-edit\" *ngIf=\"disabled\">\n            <div class=\"rect1\"></div>\n            <div class=\"rect2\"></div>\n            <div class=\"rect3\"></div>\n            <div class=\"rect4\"></div>\n            <div class=\"rect5\"></div>\n        </div> -->\n        <div class=\"loader-inner ball-beat\" *ngIf=\"disabled\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </button>\n</div>\n<div class=\"create-form\">\n    <div class=\"form-groups\">\n        <div class=\"form-content\" style=\"position: relative;\" >\n            <input class=\"input\" type=\"text\" name=\"School\" (ngModelChange)=\"schoolChange($event)\" [(ngModel)]=\"School\" id=\"School\" placeholder=\"Search\">\n            <img class=\"search-icon\" src=\"./assets/images/berkeley/search@2x.png\" alt=\"\">\n            <div class=\"search-result\">\n                <ul>\n                    <li *ngFor=\"let school of schoolList\" (click)=\"selectSchool(school)\">{{school.name ? school.name.slice(0,1).toUpperCase() + school.name.slice(1) : ''}}\n                        <img src=\"./assets/images/berkeley/is-selected.png\" alt=\"\" *ngIf=\"school && school.isSelected\">\n                    </li>\n                    <li *ngIf=\"!schoolList || schoolList.length <= 0\" style=\"text-align: center;font-size: 15px;color: #66666685;\">No school found</li>\n                </ul>\n            </div>\n            <!-- <button class=\"clear\" *ngIf=\"School\" (click)=\"clearTitle()\">\n                <img src=\"./assets/images/berkeley/clear@2x.png\" alt=\"\">\n            </button>\n            <div class=\"error-info\" *ngIf=\"SchoolError\" (click)=\"closeSchoolError()\">\n                <img src=\"./assets/images/berkeley/error-tip.png\" alt=\"\">You have to select one Course\n            </div> -->\n        </div>\n    </div>\n\n</div>\n\n<div class=\"mask\" *ngIf=\"commitStatus == 'success'\">\n    <div class=\"confirm-card\">\n        <div class=\"confirm-header\">\n            <img src=\"./assets/images/berkeley/successful@2x.png\" alt=\"\">\n        </div>\n        <div class=\"confirm-title\">Success</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/my-school/my-school.component.ts":
/*!******************************************************!*\
  !*** ./src/app/web/my-school/my-school.component.ts ***!
  \******************************************************/
/*! exports provided: MySchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySchoolComponent", function() { return MySchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MySchoolComponent = /** @class */ (function () {
    function MySchoolComponent(auth, cache, schoolService, router, title) {
        this.auth = auth;
        this.cache = cache;
        this.schoolService = schoolService;
        this.router = router;
        this.title = title;
        this.currentpage = 1;
        this.pageSize = 1000;
        this.schoolList = [];
        this.staticSchoolList = [];
        this.disabled = false;
        this.commitStatus = 'init';
        this.height = 0;
        this.School = "";
    }
    MySchoolComponent.prototype.ngOnInit = function () {
        this.getSchoolList(1, this.pageSize);
        this.height = document.body.clientHeight - 140;
    };
    MySchoolComponent.prototype.goBack = function () {
        history.go(-1);
    };
    MySchoolComponent.prototype.getSchoolList = function (page, pageSize) {
        var _this = this;
        this.auth.sendGet("school/list?page=" + page + "&&pageSize=" + pageSize).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.staticSchoolList = _body.payload;
                    _this.schoolList = _this.staticSchoolList;
                    for (var _i = 0, _a = _this.schoolList; _i < _a.length; _i++) {
                        var school = _a[_i];
                        if (school.id == _this.cache.selectedSchool.id) {
                            _this.cache.selectedSchool = school;
                            school.isSelected = true;
                        }
                    }
                }
            }
        });
    };
    MySchoolComponent.prototype.selectSchool = function (school) {
        if (this.selectedSchool) {
            this.selectedSchool.isSelected = false;
        }
        this.cache.selectedSchool.isSelected = false;
        school.isSelected = true;
        this.selectedSchool = school;
    };
    MySchoolComponent.prototype.schoolChange = function (event) {
        if (!event) {
            this.schoolList = this.staticSchoolList;
        }
        else {
            this.schoolList = [];
            var str = event.toLowerCase().trim();
            for (var _i = 0, _a = this.staticSchoolList; _i < _a.length; _i++) {
                var school = _a[_i];
                if (school.name.toLowerCase().indexOf(str) > -1) {
                    this.schoolList.push(school);
                }
            }
        }
    };
    MySchoolComponent.prototype.submitEdit = function () {
        var _this = this;
        this.cache.selectedSchool = this.selectedSchool;
        setTimeout(function () {
            _this.router.navigateByUrl('search-school');
        }, 200);
        this.disabled = true;
        // this.auth.sendPut('user',{schoolId: this.cache.selectedSchool.id}).subscribe(resp => {
        //     this.disabled = false;
        //     if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
        //         let _body = resp.body;
        //         if (_body.code == 2000) {
        //             this.schoolService.userSchool = this.cache.selectedSchool;
        //             this.cache.userInfo = resp.body.payload;
        //             if(this.cache.selectedSchool) {
        //                 this.title.setTitle(this.cache.selectedSchool.name.trim().replace(/^\S/, s => s.toUpperCase()) + ' Groups');
        //             }
        //             this.commitStatus = 'success';
        //             setTimeout(() => {
        //                 this.commitStatus = 'init';
        //                 this.goBack();
        //             }, 1500)
        //         }
        //     }else {
        //         this.auth.error('Network timeout, please try again later')
        //     }
        // });
    };
    MySchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-school',
            template: __webpack_require__(/*! ./my-school.component.html */ "./src/app/web/my-school/my-school.component.html"),
            styles: [__webpack_require__(/*! ./my-school.component.css */ "./src/app/web/my-school/my-school.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"],
            _service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], MySchoolComponent);
    return MySchoolComponent;
}());



/***/ }),

/***/ "./src/app/web/search-class/search-class.component.css":
/*!*************************************************************!*\
  !*** ./src/app/web/search-class/search-class.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header img {\n    width: 100%;\n}\n.content {\n    padding: 10px 20px;\n}\n.content .input {\n    position: relative;\n}\n.content .input i {\n    font-size: 15px;\n    position: absolute;\n    top: 9px;\n    left: 15px;\n    color: #D7D7D7;\n}\n.content .input input {\n    height: 37px;\n    background:#ECEDEE;\n    border-radius: 19px;\n    border: 0;\n    width: 100%;\n    padding-left: 40px;\n    padding-right: 16px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #000000;\n    border:1px solid rgba(239,239,239,1)\n}\n.content .input input:focus {\n    border:1px solid rgba(245,166,35,1);\n}\n.content .input input::-webkit-input-placeholder {\n    color: #B3B3B3;\n}\n.content .input input::-moz-placeholder {\n    color: #B3B3B3;\n}\n.content .input input::-ms-input-placeholder {\n    color: #B3B3B3;\n}\n.content .input input::placeholder {\n    color: #B3B3B3;\n}\n.content .mention {\n    background: #ECECEC;\n    border-radius: 12px;\n    padding: 6px 15px;\n    font-size: 12px;\n    font-weight: 500;\n    color: #666666;\n    margin-top: 10px;\n}\n.content .popular {\n    margin-top: 15px;\n}\n.content .popular .title{\n    display: flex;\n    font-size: 21px;\n    font-weight: 500;\n    color: #FFA100;\n}\n.content .popular .title img {\n    width: 36px;\n    height: 36px;\n    display: unset;\n}\n.content .popular .title span {\n    display: block;\n    margin-left: 8px;\n    line-height: 36px;\n    height: 36px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n/* .content .popular ul {\n    \n} */\n.content .popular ul li {\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 16px;\n    padding: 17px 15px 17px 15px;\n    position: relative;\n    margin-top: 10px;\n}\n.content .popular ul li .li:active {\n    opacity: 0.5;\n}\n.content .popular ul li .li:active~.applaud {\n    opacity: 0.5;\n}\n.content .popular ul li h2 {\n    font-size: 18px;\n    font-weight: bold;\n    color: rgba(34,34,34,1);\n    padding-right: 45px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.content .popular ul li p {\n    font-size: 15px;\n    font-weight: 400;\n    color: rgba(102,102,102,1);\n    margin-top: 7px;\n    padding-right: 45px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n}\n.content .popular ul li .applaud {\n    position: absolute;\n    top: 12px;\n    /* transform: translateY(-50%); */\n    right: 12px;\n    text-align: center;\n}\n/* .content .popular ul li img {\n    display: block;\n    width: 32px;\n} */\n.content .popular ul li span {\n    font-size: 12px;\n    font-weight: 400;\n    color: #FFA100;\n    position: relative;\n    top: -4px;\n}\n.group-name {font-size:18px;font-weight:500;color: #404040;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-right: 120px;}\n.group-count {font-weight: 500; min-height: 14px;font-size: 13px;color: #838383;margin-top: 7px;position: relative;padding-left: 21px;display: inline-block;margin-right: 16px;line-height: 16px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 100%;}\n.group-count img{width: 18px;display: inline-block;position: absolute;left: 0;top: 1px;}\n.group-count.groupClassName {padding-left: 21px;}\n.groupClassName img {width: 13px;left: 2.5px;}\n.group-descript {overflow: hidden;text-overflow: ellipsis;display: -webkit-box;font-size:15px;color: #666666;line-height: 17px;font-weight: 400;}\n.mention-new {\n    width: 100%;\n    background: rgba(255,255,255,1);\n    box-shadow: 0px 2px 20px 0px rgba(204,204,204,0.4);\n    border-radius: 14px;\n    font-size: 13px;\n    padding: 7px 17px 12px 17px;\n    color: #666666;\n    font-weight: 500;\n    position: relative;\n}\n.mention-new::after{\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    border: 12px solid transparent;\n    border-top-color: #ffffff;\n    border-bottom: 0;\n    margin: 0 0 -11px -11px;\n}\n.view-course {\n    width: 100%;\n    position: relative;\n    height: 50px;\n    line-height: 50px;\n    background: #ffffff;\n    box-shadow: 0px 2px 15px 0px rgba(204,204,204,0.5);\n    border-radius: 10px;\n    margin-top: 14px;\n    color: #454545;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    padding-left: 44px;\n}\n.view-course .icon {\n    position: absolute;\n    width: 20px;\n    top: 50%;\n    left: 13px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.view-course .navigate, .create-course .navigate{\n    position: absolute;\n    width: 9px;\n    right: 20px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.create-course {\n    width: 100%;\n    position: relative;\n    height: 50px;\n    line-height: 50px;\n    background: #ffffff;\n    box-shadow: 0px 2px 15px 0px rgba(204,204,204,0.5);\n    border-radius: 10px;\n    margin-top: 14px;\n    color: #454545;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    padding-left: 44px;\n}\n.create-course .icon {\n    position: absolute;\n    width: 24px;\n    left: 13px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}"

/***/ }),

/***/ "./src/app/web/search-class/search-class.component.html":
/*!**************************************************************!*\
  !*** ./src/app/web/search-class/search-class.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;overflow: auto;overflow-x: hidden;background: #ffffff;\" (scroll)=\"searchMore($event)\"\n    *ngIf=\"this.cache.userInfo.schoolId\">\n    <div class=\"header\">\n        <img src=\"./assets/images/berkeley/Home-banner-new@2x.png\" />\n    </div>\n    <div class=\"content\">\n        <!-- <div class=\"input\">\n            <form action=\"#\">\n                <input type=\"search\" [(ngModel)]=\"searchStr\" (click)=\"gorSearch()\" (keyup)=\"search($event)\" (ngModelChange)=\"searchChange($event)\"\n                    name=\"search\" placeholder=\"Please Enter the Course Code\" />\n            </form>\n            <img src=\"./assets/images/berkeley/search@2x.png\" alt=\"\" style=\"position: absolute;width: 17px;top: 10px;left: 15px;\">\n        </div>\n        <div class=\"mention\">\n            Once the course is added, different group chats will be displayed. Add one or more groups to start chatting.\n        </div> -->\n        <div class=\"mention-new\">\n            Once the course is added, different group chats will be displayed. Add one or more groups to start chatting.\n        </div>\n        <div class=\"view-course\" (click)=\"gorSearch()\">\n            <img class=\"icon\" src=\"./assets/images/berkeley/search2@3x.png\" alt=\"\">\n            View Course\n            <img class=\"navigate\" src=\"./assets/images/berkeley/right.png\" alt=\"\">\n        </div>\n        <div *ngIf=\"popularGroups && popularGroups.length == 0\">\n            <div class=\"create-course\" (click)=\"gorCreate()\">\n                <img class=\"icon\" src=\"./assets/images/berkeley/group@3x.png\" alt=\"\">\n                Create a Course Group\n                <img class=\"navigate\" src=\"./assets/images/berkeley/right.png\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"popular\" *ngIf=\"popularGroups && popularGroups.length > 0\">\n            <div class=\"title\">\n                <!-- <img src=\"./assets/images/berkeley/Home-Popular Classes@2x.png\" /> -->\n                <span style=\"color: #454545;font-size: 18px;\">Popular Class Groups</span>\n            </div>\n            <!-- <ul>\n                <li *ngFor=\"let class of cache.popularClass; let idx = index\" (click)=\"toClassGroups(class)\">\n                    <div class=\"li\">\n                        <h2>{{class.abbreviation}} {{class.course_number}}</h2>\n                        <p style=\"-webkit-box-orient: vertical;\">{{class.title}}</p>\n                    </div>\n                    <div class=\"applaud\">\n                        <app-like [id]=\"'search' + idx\" [group]=\"\" [class]=\"class\" (loved)=\"loved($event, class)\">\n                        </app-like>\n                        <span>{{class.like_num}}</span>\n                    </div>\n                </li>\n            </ul> -->\n            <ul>\n                <li *ngFor=\"let group of popularGroups; let idx = index\" (click)=\"showGroupDetail(group.group)\">\n                    <div class=\"li\">\n                        <div class=\"group-name\">\n                            {{group.group.name}}\n                        </div>\n                        <div class=\"group-count\">\n                            <img src=\"./assets/images/berkeley/Droup-1@2x.png\" alt=\"\"\n                                style=\"top: 1px;\">{{group.group.loopGroup ? (group.group.loopGroup.membersNum || 0) : 0}}\n                        </div>\n                        <div class=\"group-count groupClassName\">\n                            <img src=\"./assets/images/berkeley/class-1.png\" alt=\"\">\n                            {{(group.class.abbreviation ? group.class.abbreviation : '--') + ' ' + (group.class.courseNumber ? group.class.courseNumber: '--')}}\n                        </div>\n                        <div class=\"group-descript\"\n                            style=\"-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 16px;\">\n                            {{group.group.notice}}\n                        </div>\n                        <div style=\"display: none;\">{{group | json}}</div>\n                    </div>\n                    <div class=\"applaud\" style=\"top: 20px;right: 15px;\">\n                        <img src=\"./assets/images/berkeley/join-group.png\" alt=\"\" style=\"width: 17px;\">\n                    </div>\n                    <div class=\"applaud\" style=\"right: 35px;\">\n                        <span style=\"float: right;\">\n                            <app-like [id]=\"'search' + idx\" [group]=\"group.group\" [class]=\"\"\n                                (loved)=\"loved($event, group.group)\">\n                            </app-like>\n                        </span>\n                        <span\n                            style=\"float: right;line-height: 46px;margin-right: -11px;font-weight: 600;\">{{group.group.likeNum | likeNumPipe}}</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <app-loading *ngIf=\"!popularGroups\"></app-loading>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/web/search-class/search-class.component.ts":
/*!************************************************************!*\
  !*** ./src/app/web/search-class/search-class.component.ts ***!
  \************************************************************/
/*! exports provided: SearchClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClassComponent", function() { return SearchClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/class.service */ "./src/app/service/class.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchClassComponent = /** @class */ (function () {
    function SearchClassComponent(cd, _ngZone, auth, router, classService, cache, schoolService, title) {
        this.cd = cd;
        this._ngZone = _ngZone;
        this.auth = auth;
        this.router = router;
        this.classService = classService;
        this.cache = cache;
        this.schoolService = schoolService;
        this.title = title;
        this.popularClasses = [];
        this.getAllDone = false;
        // this.cache.getCachePopularClasses((data) => {
        //     // this.popularClasses = data;
        // })
        if (this.cache.userInfo) {
            this.getCachePopularGroups(1, this.cache.userInfo.schoolId);
        }
    }
    SearchClassComponent.prototype.ngOnInit = function () {
        // if(this.classService.allClasses.length <= 20) {
        //     this.popularClasses = this.classService.allClasses
        // } else {
        //     this.popularClasses = this.classService.allClasses.slice(0,20);
        // }
        var _this = this;
        //获取popular列表
        // this.classService.getPopularClasses(1, 20, (data) => {
        //     this.popularClasses = data || [];
        // })
        this.auth.sendGet('school/get?id=' + this.cache.userInfo.schoolId).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    _this.schoolService.userSchool = _body.payload;
                    if (_this.schoolService.userSchool) {
                        _this.title.setTitle(_this.schoolService.userSchool.name.trim().replace(/^\S/, function (s) { return s.toUpperCase(); }) + ' Groups');
                    }
                    _this._ngZone.run(function () { });
                    _this.cd.detectChanges();
                }
            }
            else {
                _this.auth.error('Network timeout, please try again later');
            }
        });
    };
    SearchClassComponent.prototype.getCachePopularGroups = function (page, schoolId) {
        var _this = this;
        this.page = page;
        this.lastDataLength = this.popularGroups ? this.popularGroups.length : 0;
        this.auth.sendGet("popular/group/list?page=" + page + "&pageSize=10&schoolId=" + schoolId).subscribe(function (resp) {
            if (!_this.popularGroups) {
                _this.popularGroups = [];
            }
            ;
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body && _body.hasOwnProperty('code') && _body.code == 2000) {
                    if (_body.payload.length == 10) {
                        _this.getAllDone = false;
                    }
                    else {
                        _this.getAllDone = true;
                    }
                    for (var _i = 0, _a = _body.payload; _i < _a.length; _i++) {
                        var data = _a[_i];
                        _this.popularGroups.push(data);
                    }
                    _this._ngZone.run(function () { });
                    _this.cd.detectChanges();
                }
            }
        });
    };
    SearchClassComponent.prototype.search = function (event) {
        if (event && event.keyCode == 13 && this.searchStr) {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            this.cache.searchStr = this.searchStr;
            this.router.navigateByUrl('/class-info');
        }
    };
    SearchClassComponent.prototype.gorSearch = function () {
        this.router.navigateByUrl('/class-info');
    };
    SearchClassComponent.prototype.toClassGroups = function (_class) {
        this.cache.selectedClass = _class;
        this.cache._showGroups = 'show';
        this.cache.showGroups = true;
        // this.router.navigateByUrl('class-group-list');
    };
    SearchClassComponent.prototype.loved = function (event, group) {
        if (event == 'clicked') {
            group.likeNum++;
        }
    };
    SearchClassComponent.prototype.callback = function (data) {
        var _this = this;
        this.cache._showGroups = 'move';
        setTimeout(function () {
            _this.cache.showGroups = false;
        }, 250);
    };
    SearchClassComponent.prototype.groupInfocallback = function (data) {
        var _this = this;
        this.cache._showGroupInfo = false;
        setTimeout(function () {
            _this.cache.showGroupInfo = false;
        }, 250);
    };
    SearchClassComponent.prototype.searchChange = function (event) {
        var _this = this;
        this.cache.searchStr = this.searchStr;
        if (this.searchStr.length >= 3) {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            this.searchTimeout = setTimeout(function () {
                _this.router.navigateByUrl('/class-info');
            }, 500);
        }
    };
    SearchClassComponent.prototype.showGroupDetail = function (group) {
        this.cache.selectedGroup = group;
        this.cache.showGroupInfo = true;
        this.cache._showGroupInfo = true;
    };
    SearchClassComponent.prototype.searchMore = function (event) {
        var box = event.target;
        if (box.scrollHeight - box.offsetHeight - box.scrollTop < 80 && this.popularGroups && this.lastDataLength != this.popularGroups.length) {
            if (!this.getAllDone) {
                this.page++;
                this.getCachePopularGroups(this.page, this.cache.userInfo.schoolId);
            }
        }
    };
    SearchClassComponent.prototype.gorCreate = function () {
        // this.cache.selectedClass = null;
        // this.cache.createStatus = 'groupList';
        // this.cache.showCreateGroup = true;
        // this.cache._showCreateGroup = 'show';
        this.router.navigateByUrl("/add-course");
    };
    SearchClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-class',
            template: __webpack_require__(/*! ./search-class.component.html */ "./src/app/web/search-class/search-class.component.html"),
            styles: [__webpack_require__(/*! ./search-class.component.css */ "./src/app/web/search-class/search-class.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"],
            _service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"],
            _service_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SearchClassComponent);
    return SearchClassComponent;
}());



/***/ }),

/***/ "./src/app/web/search-interest-group/search-interest-group.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/web/search-interest-group/search-interest-group.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n    height: 60px;\n    background: rgba(255,255,255,1);\n    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.08);\n    line-height: 60px;\n    position: relative;\n    padding-left: 15px;\n}\n.input i {\n    line-height: normal;\n    font-size: 15px;\n    position: absolute;\n    top: 20.5px;\n    left: 30px;\n    color: #D7D7D7;\n}\n.input img.close {\n    width: 19px;\n    position: absolute;\n    top: 21.5px;;\n    right: 79px;\n}\n.input form {\n    width: calc(100% - 69px);\n    display: inline-block;\n}\n.input input {\n    height: 37px;\n    background: #ECEDEE;\n    border-radius: 19px;\n    border: 0;\n    width: 100%;\n    padding-left: 40px;\n    padding-right: 31px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #000000;\n}\n.input input::-webkit-input-placeholder {\n    color: #B3B3B3;\n}\n.input input::-moz-placeholder {\n    color: #B3B3B3;\n}\n.input input::-ms-input-placeholder {\n    color: #B3B3B3;\n}\n.input input::placeholder {\n    color: #B3B3B3;\n}\n/* .input input:focus {\n    border:1px solid rgba(245,166,35,1);\n} */\n.input button {\n    border: 0;\n    background: white;\n    color: #000000;\n    font-size: 15px;\n    font-weight: 500;\n    margin-left: 8px;\n}\n.classList {\n    padding: 15px 15px;\n    padding-top: 5px;\n    height: calc(100% - 60px);\n    overflow: auto;\n    overflow-x: hidden;\n}\n.classList ul li {\n    background: rgba(255,255,255,1);\n    box-shadow: 2px 0px 20px 4px rgba(234,234,234,0.7);\n    border-radius: 16px;\n    padding: 17px 15px 17px 15px;\n    position: relative;\n    margin-top: 10px;\n}\n.classList ul li h2 {\n    font-size: 18px;\n    font-weight: 500;\n    color: #404040;\n    padding-right: 120px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.classList ul li p {\n    font-size: 15px;\n    font-weight: 400;\n    color: #666666;\n    margin-top: 7px;\n    padding-right: 45px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n}\n.classList ul li .applaud {\n    position: absolute;\n    top: 0px;\n    /* transform: translateY(-50%); */\n    right: 15px;\n    text-align: center;\n}\n.classList ul li img {\n    display: block;\n    width: 32px;\n}\n.classList ul li span {\n    font-size: 12px;\n    font-weight: bold;\n    color: #FFA100;\n}\n.empty {\n    padding: 120px 53px 0 53px;\n    text-align: center;\n}\n.empty img {\n    width: calc(100% - 54px);\n    margin: auto;\n}\n.empty p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgba(102,102,102,1);\n    padding: 0 6px;\n}\n.empty button {\n    width: 100%;\n    font-size:18px;\n    color: white;\n    border: 0;\n    margin-top: 43px;\n    height:44px;\n    background:#FFA100;\n    box-shadow:0px 10px 20px 0px rgba(251,182,92,0.5);\n    border-radius:22px;\n}\n.empty button img {\n    display: inline-block;\n    width: 16px;\n    vertical-align: -1.5px;\n    margin-right: 2px;\n}\n.classList ul li .group-count {min-height: 14px;font-size: 13px;font-weight: 500;color: #838383;margin-top: 7px;position: relative;padding-left: 21px;display: inline-block;margin-right: 16px;line-height: 16px;}\n.classList ul li .group-count img{width: 18px;display: inline-block;position: absolute;left: 0;top: 1px;}\nli .li:active~.applaud {\n    opacity: 0.5;\n}"

/***/ }),

/***/ "./src/app/web/search-interest-group/search-interest-group.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/web/search-interest-group/search-interest-group.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; overflow: hidden;background: #FFFFFF;\">\n    <div class=\"input\">\n        <form action=\"#\">\n            <input type=\"search\" [(ngModel)]=\"inputStr\" name=\"search\" (ngModelChange)=\"delaySearch()\"\n                placeholder=\"Please Enter the Group Name\" id=\"classInfoInput\" />\n        </form>\n        <!-- <i class=\"bicon icon-search\"></i> -->\n        <img alt=\"\" class=\"search-icon\" src=\"./assets/images/berkeley/search@2x.png\"\n            style=\"width: 17px;position: absolute;top: 22px;left: 31px;\">\n        <img class=\"close\" (click)=\"deleteInputStr()\" *ngIf=\"inputStr\" src=\"./assets/images/berkeley/clear2@3x.png\" />\n        <button (click)=\"goBack()\">Cancel</button>\n    </div>\n    <div class=\"classList\" *ngIf=\"interestGroupList && interestGroupList.length != 0\" (scroll)=\"searchMore($event)\">\n        <ul>\n            <li (click)=\"toClassGroups(group)\" *ngFor=\"let group of interestGroupList; let idx = index\">\n                <div class=\"li\">\n                    <h2 [innerHTML]=\"group._name\"></h2>\n                    <!-- <p style=\"-webkit-box-orient: vertical;font-size: 13px;\" [innerHTML]=\"class._title\" style=\"-webkit-box-orient: vertical;-webkit-line-clamp: 1;color: rgba(102,102,102,1);\">\n                            </p> -->\n                    <div class=\"group-count\">\n                        <img alt=\"\"\n                            src=\"./assets/images/berkeley/Droup-1@2x.png\">{{group.loopGroup ? group.loopGroup.membersNum : 0}}\n                    </div>\n                    <div></div>\n                    <p style=\"-webkit-box-orient: vertical;margin-top: 15px;\" [innerHTML]=\"group.notice\"></p>\n                </div>\n                <div class=\"applaud\" style=\"top: 20px;right: 15px;\">\n                    <img src=\"./assets/images/berkeley/join-group.png\" alt=\"\" style=\"width: 17px;\">\n                </div>\n                <div class=\"applaud\" style=\"right: 38px;top: 8px;\">\n                    <span style=\"float: right;\">\n                        <app-like [id]=\"'searched' + idx\" [group]=\"group\" [class]=\"\" (loved)=\"loved($event, group)\">\n                        </app-like>\n                    </span>\n                    <span\n                        style=\"float: right;line-height: 46px;margin-right: -11px;\">{{group.likeNum ? group.likeNum : 0}}</span>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"empty\" *ngIf=\"interestGroupList && interestGroupList.length == 0\">\n        <img src=\"./assets/images/berkeley/search-empty2@3x.png\" />\n        <div style=\"position: relative;top: -12px;\">\n            <p>\n                No courses related to\n                <span style=\"color: #FFA100\">{{inputStr}}</span>\n                were found. You can try another keyword.\n            </p>\n            <!-- <button>\n                    <img src=\"./assets/images/berkeley/+++@2x.png\" />\n                    Create a Course Group\n                </button> -->\n        </div>\n    </div>\n    <app-loading *ngIf=\"!interestGroupList\"></app-loading>\n</div>"

/***/ }),

/***/ "./src/app/web/search-interest-group/search-interest-group.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/web/search-interest-group/search-interest-group.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchInterestGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInterestGroupComponent", function() { return SearchInterestGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _service_interest_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/interest-list.service */ "./src/app/service/interest-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchInterestGroupComponent = /** @class */ (function () {
    function SearchInterestGroupComponent(auth, interestListService, cache) {
        this.auth = auth;
        this.interestListService = interestListService;
        this.cache = cache;
        this.page = 1;
        this.inputStr = '';
        this.searchDone = true;
    }
    SearchInterestGroupComponent.prototype.ngOnInit = function () {
        this.init();
    };
    SearchInterestGroupComponent.prototype.goBack = function () {
        history.go(-1);
    };
    SearchInterestGroupComponent.prototype.toClassGroups = function (group) {
        this.cache.selectedGroup = group;
        this.cache.showGroupInfo = true;
        this.cache._showGroupInfo = true;
    };
    SearchInterestGroupComponent.prototype.init = function () {
        var _this = this;
        this.interestListService.searchInterestList(1, this.cache.userInfo.schoolId, this.inputStr.trim(), function (datas) {
            _this.interestGroupList = datas || [];
            if (datas.length == 10) {
                _this.searchDone = false;
            }
            else {
                _this.searchDone = true;
            }
            for (var _i = 0, _a = _this.interestGroupList; _i < _a.length; _i++) {
                var group = _a[_i];
                group._name = _this.getStaticText(group.name);
            }
        });
    };
    SearchInterestGroupComponent.prototype.searchMore = function (event) {
        var _this = this;
        var box = event.target;
        if (box.scrollHeight - box.offsetHeight - box.scrollTop < 80 && this.interestGroupList && this.lastDataLength != this.interestGroupList.length) {
            if (!this.searchDone) {
                this.lastDataLength = this.interestGroupList ? this.interestGroupList.length : 0;
                this.page++;
                this.interestListService.searchInterestListByPage(this.page, this.cache.userInfo.schoolId, this.inputStr.trim(), function (datas) {
                    if (datas.length == 10) {
                        _this.searchDone = datas.getAllDone;
                    }
                    else {
                        _this.searchDone = datas.getAllDone;
                    }
                    for (var _i = 0, _a = datas.datas; _i < _a.length; _i++) {
                        var group = _a[_i];
                        group._name = _this.getStaticText(group.name);
                        _this.interestGroupList.push(group);
                    }
                });
            }
        }
    };
    SearchInterestGroupComponent.prototype.deleteInputStr = function () {
        if (this.inputStr) {
            this.inputStr = '';
            this.reset();
            this.init();
        }
    };
    // 自动查询
    SearchInterestGroupComponent.prototype.delaySearch = function () {
        var _this = this;
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(function () {
            _this.reset();
            _this.init();
            _this.searchTimeout = null;
        }, 500);
    };
    SearchInterestGroupComponent.prototype.reset = function () {
        this.interestGroupList = [];
        this.page = 1;
        this.searchDone = false;
        this.lastScrollNum = null;
        this.lastDataLength = 0;
    };
    SearchInterestGroupComponent.prototype.getStaticText = function (text) {
        if (!this.inputStr) {
            return text;
        }
        var htmltext = this.html2Escape(text.trim());
        var _searchText = this.regExpEscape(this.html2Escape(this.inputStr.trim())); //转义正则匹配的特殊字符
        var _text = htmltext.replace(new RegExp(_searchText, 'gi'), "<span class=\"search-reg\">$&</span>");
        return _text;
    };
    SearchInterestGroupComponent.prototype.html2Escape = function (sHtml) {
        return sHtml.replace(/[<>&"]/g, function (c) {
            return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
        });
    };
    SearchInterestGroupComponent.prototype.regExpEscape = function (text) {
        return text.replace(/[\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/]/g, function (c) {
            return { '\*': '\\*', '\.': '\\.', '\?': '\\?', '\+': '\\+', '\$': '\\$', '\^': '\\^', '\[': '\\[', '\]': '\\]', '\(': '\\(', '\)': '\\)', '\{': '\\{', '\}': '\\}', '\|': '\\|', '\/': '\\/', '\\': '\\\\' }[c];
        });
    };
    SearchInterestGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-interest-group',
            template: __webpack_require__(/*! ./search-interest-group.component.html */ "./src/app/web/search-interest-group/search-interest-group.component.html"),
            styles: [__webpack_require__(/*! ./search-interest-group.component.css */ "./src/app/web/search-interest-group/search-interest-group.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _service_interest_list_service__WEBPACK_IMPORTED_MODULE_3__["InterestListService"], _service_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], SearchInterestGroupComponent);
    return SearchInterestGroupComponent;
}());



/***/ }),

/***/ "./src/app/web/select-group/select-group.component.css":
/*!*************************************************************!*\
  !*** ./src/app/web/select-group/select-group.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-header {padding: 10px 30px;}\n.select-header button img{width: 16px;}\n.select-search {margin-top: 5px;padding: 0 15px;position: relative;}\n.select-search input {background: #FFFFFF;border-radius: 19px;border: 1px solid #F1F1F1;width: 100%;color: #B3B3B3;font-size:15px;height: 37px;padding-left: 43px;}\n.select-search input + i {color: #B3B3B3;font-size: 15px;position: absolute;top: 11px;left: 30px;}\n.select-search .descript {margin-top: 8px;background: #F5EDE0;border-radius: 12px;font-size: 12px;font-weight: 500;color: #FFA100;padding: 7px 15px;}\n.group-list {margin-top: 13px;}\n.group-group .group-title {background: #E9E9E9;font-size: 15px;padding: 3px 18px 4px 19px;}\n.group-group .group-content {position: relative;height: 50px;line-height: 50px;padding: 0 15px;}\n.group-group .group-content .group-avatar {width: 40px;height: 40px;position: absolute;top: 6px;border-radius: 14px;overflow: hidden;}\n.group-group .group-content .group-name {border-bottom: 1px solid #F1F1F1;margin-left: 56px;font-size: 16px;}\n.form-link {position: fixed;right: 5px;top: 50%;-webkit-transform: translate(-5px, -50%);transform: translate(-5px, -50%);}\n.form-link ul{ color: #545454; }\n.form-link ul li{text-align: center;}\n.form-link ul li i{ font-size: 12px; }\n.form-link ul li button { padding: 0 4px; font-size: 14px;}\n.form-link ul li button:hover {color: #ffffff;border: 0;background: #FFA100;}\n.form-link ul li button.active {color: #ffffff;border: 0;background: #FFA100;}\n"

/***/ }),

/***/ "./src/app/web/select-group/select-group.component.html":
/*!**************************************************************!*\
  !*** ./src/app/web/select-group/select-group.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-header\">\n    <button>\n        <img src=\"./assets/images/berkeley/close.png\" alt=\"\">\n    </button>\n</div>\n<div class=\"select-search\">\n    <input type=\"text\" placeholder=\"Search\">\n    <i class=\"bicon icon-search\"></i>\n    <div class=\"descript\">Note: You can only select groups in which you are admin.</div>\n</div>\n<div class=\"group-list\">\n    <div class=\"group-group\">\n        <div class=\"group-title\">A</div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n    </div>\n\n    <div class=\"group-group\">\n        <div class=\"group-title\">A</div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n    </div>\n\n    <div class=\"group-group\">\n        <div class=\"group-title\">A</div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n    </div>\n\n    <div class=\"group-group\">\n        <div class=\"group-title\">A</div>\n        <div class=\"group-content\">\n            <div class=\"group-avatar\">\n                <app-group-avatars></app-group-avatars>\n            </div>\n            <div class=\"group-name\">Group Chat</div>\n        </div>\n    </div>\n</div>\n<div class=\"form-link\">\n    <ul>\n        <li><button><i class=\"bicon icon-search\"></i></button></li>\n        <li><button>A</button></li>\n        <li><button>B</button></li>\n        <li><button>C</button></li>\n        <li><button>D</button></li>\n        <li><button>E</button></li>\n        <li><button>F</button></li>\n        <li><button>G</button></li>\n        <li><button>H</button></li>\n        <li><button>I</button></li>\n        <li><button>J</button></li>\n        <li><button>K</button></li>\n        <li><button>L</button></li>\n        <li><button>M</button></li>\n        <li><button>N</button></li>\n        <li><button>O</button></li>\n        <li><button>P</button></li>\n        <li><button>Q</button></li>\n        <li><button>R</button></li>\n        <li><button>S</button></li>\n        <li><button>T</button></li>\n        <li><button>U</button></li>\n        <li><button>V</button></li>\n        <li><button>W</button></li>\n        <li><button>X</button></li>\n        <li><button>Y</button></li>\n        <li><button>Z</button></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/web/select-group/select-group.component.ts":
/*!************************************************************!*\
  !*** ./src/app/web/select-group/select-group.component.ts ***!
  \************************************************************/
/*! exports provided: SelectGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGroupComponent", function() { return SelectGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectGroupComponent = /** @class */ (function () {
    function SelectGroupComponent() {
    }
    SelectGroupComponent.prototype.ngOnInit = function () {
    };
    SelectGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-group',
            template: __webpack_require__(/*! ./select-group.component.html */ "./src/app/web/select-group/select-group.component.html"),
            styles: [__webpack_require__(/*! ./select-group.component.css */ "./src/app/web/select-group/select-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectGroupComponent);
    return SelectGroupComponent;
}());



/***/ }),

/***/ "./src/app/web/select-school/select-school.component.css":
/*!***************************************************************!*\
  !*** ./src/app/web/select-school/select-school.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header img {\n    width: 100%;\n}\n.content {\n    padding: 10px 20px;\n}\n.content .title {\n    font-size:18px;\n    font-weight:600;\n    color:#454545;\n    line-height:21px;\n}\n.content .dropdown {\n    margin-top: 12px;\n}\n.content .dropdown button.btn-primary {\n    color: #454545;\n    height: 37px;\n    background: rgba(236,237,238,1);\n    border-radius: 19px;\n    width: 100%;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    padding: 0 15px;\n    padding-right: 30px;\n    position: relative;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.content .dropdown button.btn-primary img {\n    position: absolute;\n    right: 13px;\n    width: 13px;\n    top: 9px;\n}\n.content .dropdown .dropdown-menu {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: 0px 2px 10px 0px #cccccc66;\n    border-radius: 19px;\n    margin-top: 9px;\n    max-height: 180px;\n    overflow: overlay;\n    display: none;\n    min-height: 120px;\n}\n.content .dropdown.open .dropdown-menu {\n    display: block;\n}\n.content .dropdown .dropdown-menu li {\n    padding: 0 20px;\n    height: 60px;\n    line-height: 60px;\n    font-size: 15px;\n}\n/* .content .dropdown .dropdown-menu li:hover {\n    background: #f1f1f1;\n} */\n.content .dropdown .dropdown-menu li button{\n    width: 100%;\n    height: 100%;\n    border-bottom: 1px solid #F3F3F3;\n    text-align: left;\n}\n.content .dropdown .dropdown-menu li:last-child button{\n    border-bottom: 0px;\n}\n.content .dropdown .dropdown-menu li a{\n    color: #454545;\n}\n.content .dropdown .dropdown-menu li .input {position: relative;}\n.content .dropdown .dropdown-menu li .input input {\n    height: 37px;\n    background: #ffffff;\n    border-radius: 19px;\n    border: 0;\n    width: 100%;\n    padding: 16px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #000000;\n    border: 1px solid rgba(239,239,239,1);\n}\n.content .dropdown .dropdown-menu li .input input::-webkit-input-placeholder {\n    color: rgba(215,215,215,1);\n    font-size: 13px;\n    font-weight: 400;\n}\n.content .dropdown .dropdown-menu li .input input::-moz-placeholder {\n    color: rgba(215,215,215,1);\n    font-size: 13px;\n    font-weight: 400;\n}\n.content .dropdown .dropdown-menu li .input input::-ms-input-placeholder {\n    color: rgba(215,215,215,1);\n    font-size: 13px;\n    font-weight: 400;\n}\n.content .dropdown .dropdown-menu li .input input::placeholder {\n    color: rgba(215,215,215,1);\n    font-size: 13px;\n    font-weight: 400;\n}\n.content .dropdown .dropdown-menu li .input button {\n    position: absolute;\n    top: 21px;\n    left: 15px;\n    border: 0;\n    color: #D7D7D7;\n    width: auto;\n    height: auto;\n}\n.confirm-button {\n    color: #ffffff;\n    background: #F5A623;\nbox-shadow: 3px 4px 8px 0px rgba(245, 166, 35, 0.7);\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 19px;\n    padding: 13px 53px 12px 47px;\n    border-radius: 22px;\n}\n.confirm-button:disabled {\n    opacity: 0.5;;\n}\ndiv.email {\n    height: 37px;\n    background: #ECEDEE;\n    border-radius: 19px;\n    margin-top: 15px;\n}\ndiv.email input {\n    float: left;\n    width: calc(100% - 132px);\n    height: 37px;\n    background: none;\n    border: 0;\n    padding-left: 15px;\n    font-size:16px;\n    color: #454545;\n    font-weight: 500;\n}\ndiv.email div.email-text {\n    float: left;\n    width: 132px;\n    height: 37px;\n    line-height: 37px;\n    padding-left: 5px;\n    font-size: 14px;\n    color: #454545;\n    font-weight:500;\n    position: relative;\n}\ndiv.email div.email-text::before {\n    content: \"\";\n    width: 2px;\n    height: 15px;\n    background: #CCCCCC;\n    position: absolute;\n    left: 0;\n    top: 11px;\n}\n.email-code {\n    margin-top: 15px;\n}\n.email-code input {\n    float: left;\n    width: calc(100% - 107px);\n    height: 37px;\n    border: 0;\n    padding-left: 15px;\n    font-size:16px;\n    color: #454545;\n    font-weight: 500;\n    background: #ECEDEE;\n    border-radius: 19px;\n}\n.email-code button {\n    height: 37px;\n    font-size: 14px;\n    font-weight: bold;\n    color: #F5A623;\n    margin-left: 12px;\n}\n.email-code button:disabled{\n    color: #F5A623;\n    opacity: 0.5;\n}\n.code-error {\n    font-size: 13px;\n    color: #E21818;\n    font-weight: 400;\n    padding-left: 15px;\n    margin-top: 5px;\n}"

/***/ }),

/***/ "./src/app/web/select-school/select-school.component.html":
/*!****************************************************************!*\
  !*** ./src/app/web/select-school/select-school.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;overflow: auto;overflow-x: hidden;background: #ffffff;\">\n    <div class=\"header\">\n        <img src=\"./assets/images/berkeley/Home-banner-new@2x.png\" />\n    </div>\n    <div class=\"content\">\n        <div class=\"title\">Select Your School</div>\n        <div class=\"dropdown\" dropdown>\n            <button class=\"btn btn-primary\" dropdown-open (click)=\"selectSchoolClick()\">{{cache.selectedSchool ? cache.selectedSchool.name : 'Select Your School'}}\n                <img src=\"./assets/images/berkeley/right.png\" alt=\"\">\n            </button>\n            <!-- <ul class=\"dropdown-menu\"> -->\n            <!-- <li dropdown-not-closable-zone style=\"height: 40px;\">\n                    <div class=\"input\">\n                        <form action=\"#\">\n                            <input type=\"search\" [(ngModel)]=\"searchStr\" name=\"search\" (keyup)=\"search($event)\" placeholder=\"Please Enter the School Name\" />\n                        </form>\n                        <button>\n                            <i class=\"bicon icon-search\"></i>\n                        </button>\n                    </div>\n                </li> -->\n            <!-- <li *ngFor=\"let school of schoolList\">\n                    <button (click)=\"selectSchool(school)\">{{school.name ? school.name.slice(0,1).toUpperCase() + school.name.slice(1) : ''}}</button>\n                </li> -->\n            <!-- </ul> -->\n        </div>\n        <div class=\"email\">\n            <input type=\"text\" name=\"schoolEmail\" [(ngModel)]=\"schoolEmail\" placeholder=\"Enter School email\">\n            <div class=\"email-text\">{{cache.selectedSchool ? cache.selectedSchool.email_suffix : '@**.*'}}</div>\n        </div>\n        <div class=\"email-code\">\n            <input type=\"text\" name=\"code\" [(ngModel)]=\"code\" placeholder=\"Enter verification code\">\n            <button [disabled]=\"!canSend || !schoolEmail\" (click)=\"sendCode()\">\n                <span>{{sendText}}</span>\n            </button>\n        </div>\n        <div class=\"code-error\" *ngIf=\"codeError\">Verification code error</div>\n        <div style=\"text-align: center;margin-top: 63px;\">\n            <button class=\"confirm-button\" (click)=\"confirm()\" [disabled]=\"!cache.selectedSchool || !schoolEmail || !code\">Confirm</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/web/select-school/select-school.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/web/select-school/select-school.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSchoolComponent", function() { return SelectSchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/school.service */ "./src/app/service/school.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/cache.service */ "./src/app/service/cache.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectSchoolComponent = /** @class */ (function () {
    function SelectSchoolComponent(cd, _ngZone, auth, schoolService, cache, router, title) {
        this.cd = cd;
        this._ngZone = _ngZone;
        this.auth = auth;
        this.schoolService = schoolService;
        this.cache = cache;
        this.router = router;
        this.title = title;
        this.codeError = false;
        this.canSend = true;
        this.interval = 0;
        this.sendText = 'Send';
        // this.cache.selectedSchool = this.schoolService.userSchool;
        var payload = {
            currentPage: 1,
            pageSize: 1000
        };
        this.getSchoolList(payload);
    }
    SelectSchoolComponent.prototype.ngOnInit = function () {
    };
    SelectSchoolComponent.prototype.ngAfterViewInit = function () { };
    SelectSchoolComponent.prototype.getSchoolList = function (payload) {
        var _this = this;
        var url = "school/list?page=" + payload.currentPage + "&pageSize=" + payload.pageSize;
        this.auth.sendGet(url).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.schoolService.schoolList = _body.payload;
                    _this.schoolList = _body.payload;
                    for (var _i = 0, _a = _this.schoolService.schoolList; _i < _a.length; _i++) {
                        var school = _a[_i];
                        _this.schoolService.schoolMap[school.id] = school;
                        if (_this.cache.userInfo && _this.cache.userInfo.schoolId && _this.cache.userInfo.schoolId == school.id) {
                            _this.schoolService.userSchool = school;
                            _this.userSchool = school;
                        }
                    }
                    if (!_this.cache.selectedSchool) {
                        _this.cache.selectedSchool = _this.schoolService.schoolList[0];
                    }
                    _this.cd.detectChanges();
                }
            }
        });
    };
    SelectSchoolComponent.prototype.selectSchool = function (school) {
        this.cache.selectedSchool = school;
        this.cd.detectChanges();
    };
    SelectSchoolComponent.prototype.search = function (event) {
        var _this = this;
        if (event && event.keyCode == 13 && this.searchStr) {
            this.auth.sendGet("school/search?page=1&pageSize=1000&name=" + this.searchStr).subscribe(function (resp) {
                if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                    var _body = resp.body;
                    if (_body.code == 2000) {
                        _this.schoolService.schoolList = _body.payload;
                        _this.schoolService.schoolMap = {};
                        for (var _i = 0, _a = _this.schoolService.schoolList; _i < _a.length; _i++) {
                            var school = _a[_i];
                            _this.schoolService.schoolMap[school.id] = school;
                        }
                    }
                }
            });
        }
        else if (event && event.keyCode == 13 && !this.searchStr) {
            var payload = {
                currentPage: 1,
                pageSize: 1000
            };
            this.getSchoolList(payload);
        }
    };
    SelectSchoolComponent.prototype.confirm = function () {
        var _this = this;
        var loopUid = sessionStorage.getItem("classRoomUserId");
        var loopUserName = sessionStorage.getItem("loopUserName");
        var payload = {
            loopUid: loopUid,
            loopUserName: loopUserName,
            school_id: this.cache.selectedSchool.id,
            email: this.schoolEmail + this.cache.selectedSchool.email_suffix,
            code: this.code
        };
        this.auth.sendPost('user', payload).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.cache.userInfo = resp.body.payload;
                    _this.schoolService.userSchool = _this.cache.selectedSchool;
                    if (_this.cache.selectedSchool) {
                        _this.title.setTitle(_this.cache.selectedSchool.name.trim().replace(/^\S/, function (s) { return s.toUpperCase(); }) + ' Groups');
                    }
                    _this.router.navigateByUrl("/interests-groups");
                }
                else {
                    _this.codeError = true;
                }
            }
        });
    };
    SelectSchoolComponent.prototype.selectSchoolClick = function () {
        this.router.navigateByUrl('my-school');
    };
    SelectSchoolComponent.prototype.sendCode = function () {
        var _this = this;
        if (!this.schoolEmail) {
            return;
        }
        this.canSend = false;
        this.auth.sendPost('email/send', { email: this.schoolEmail + this.cache.selectedSchool.email_suffix }).subscribe(function (resp) {
            if (resp && resp.hasOwnProperty('status') && resp.status == 200) {
                var _body = resp.body;
                if (_body.code == 2000) {
                    _this.canSend = false;
                    _this.interval = 30;
                    var _interval_1 = setInterval(function () {
                        _this.sendText = _interval_1 + 's';
                        _this.interval--;
                        if (_this.interval <= 0) {
                            _this.canSend = true;
                            _this.sendText = 'Resend';
                            _this.interval = 0;
                            clearInterval(_interval_1);
                        }
                    }, 1000);
                    setTimeout(function () {
                        _this.canSend = true;
                    }, 30000);
                }
                else {
                    _this.canSend = true;
                    _this.auth.error('Frequent operation, please try again later');
                }
            }
        });
    };
    SelectSchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-school',
            template: __webpack_require__(/*! ./select-school.component.html */ "./src/app/web/select-school/select-school.component.html"),
            styles: [__webpack_require__(/*! ./select-school.component.css */ "./src/app/web/select-school/select-school.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"],
            _service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SelectSchoolComponent);
    return SelectSchoolComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bi.xyz/develop/berkeley-class-room/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map