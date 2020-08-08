(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"default~home-home-module~pages-pages-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"default~home-home-module~pages-pages-module",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout/layout.component */ "./src/app/layout/layout/layout.component.ts");




var routes = [
    { path: '', component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], loadChildren: './pages/pages.module#PagesModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\r\n.router-outlet {\r\n  max-width: 100%;\r\n}\r\n* {\r\n  max-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SjtBQUM1SjtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet class=\"router-outlet\"></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dorsin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _responsibilities_responsibilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./responsibilities/responsibilities.component */ "./src/app/responsibilities/responsibilities.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _responsibilities_responsibilities_component__WEBPACK_IMPORTED_MODULE_7__["ResponsibilitiesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-3 margin-t-20\">\r\n              <h4>Digital Alpha Advisors</h4>\r\n              <div class=\"text-muted margin-t-20\">\r\n                  <ul class=\"list-unstyled footer-list\">\r\n                      <li><a href=\"#\">Home</a></li>\r\n                      <li>    <a data=\"id_services\"  routerLink=\"/strategy\"  >Strategy</a></li>\r\n\r\n\r\n                      <li><a href=\"https://www.dalpha1.com/#/dalphaportfolio\">Portfolio</a></li>\r\n                     \r\n                  </ul>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 margin-t-20\">\r\n              <h4>Information</h4>\r\n              <div class=\"text-muted margin-t-20\">\r\n                  <ul class=\"list-unstyled footer-list\">\r\n                      <li><a href=\"https://www.dalpha1.com/#/disclaimers\">Disclaimers</a></li>\r\n                      <li><a href=\"https://www.dalpha1.com/#/dalphateam\">Our Team</a></li>\r\n                      \r\n                  </ul>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 margin-t-20\">\r\n              <h4>Support</h4>\r\n              <div class=\"text-muted margin-t-20\">\r\n                  <ul class=\"list-unstyled footer-list\">\r\n                      <li><a href=\"https://www.dalpha1.com/contactus\">Contact</a></li>\r\n                  </ul>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-3 margin-t-20\">\r\n              <h4>Contact Us</h4>\r\n              <div class=\"text-muted margin-t-20\">\r\n              </div>\r\n              <form class=\"form subscribe\">\r\n                  <input placeholder=\"Email\" class=\"form-control\" required>\r\n                  <a href=\"#\" class=\"submit\"><i class=\"pe-7s-paper-plane\"></i></a>\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</footer>\r\n\r\n<div class=\"footer-alt\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n\r\n              <div class=\"float-left pull-none \">\r\n                \r\n              </div>\r\n              <div class=\"float-right pull-none \">\r\n                  \r\n             </div>\r\n             <h6>© 2019 by Digital Alpha Advisors</h6>\r\n\r\n              <div class=\"clearfix\"></div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--\r\n\r\n<div id=\"style-switcher\"  [style.left] = \"switch == 0 ? '0px' : '-189px'\">\r\n  <div>\r\n      <h3>Select your color </h3>\r\n      <ul class=\"pattern\">\r\n          <li>\r\n              <a (click)=\"onChangeColor('red')\" class=\"color1\" routerLink=\"#\"></a>\r\n          </li>\r\n          <li>\r\n              <a class=\"color2\" (click)=\"onChangeColor('green')\" routerLink=\"#\"></a>\r\n          </li>\r\n          <li>\r\n              <a class=\"color3\"  (click)=\"onChangeColor('pink')\" routerLink=\"#\"></a>\r\n          </li>\r\n          <li>\r\n              <a class=\"color4\"  (click)=\"onChangeColor('cyan')\"  routerLink=\"#\"></a>\r\n          </li>\r\n          <li>\r\n              <a class=\"color5\"  (click)=\"onChangeColor('purple')\"  routerLink=\"#\"></a>\r\n          </li>\r\n          <li>\r\n              <a class=\"color6\"  (click)=\"onChangeColor('blue')\"  routerLink=\"#\"></a>\r\n          </li> \r\n          <li>\r\n              <a class=\"color7\"  (click)=\"onChangeColor('orange')\"  routerLink=\"#\"></a>\r\n          </li>\r\n          <li>\r\n              <a class=\"color8\" (click)=\"onChangeColor('yellow')\"   routerLink=\"#\"></a>\r\n          </li>                    \r\n      </ul>\r\n  </div>\r\n\r\n  <div class=\"bottom\">\r\n      <a routerLink=\"#\" class=\"settings\" (click)=\"onChangeSwitch()\"><i class=\"mdi mdi-settings mdi-spin\"></i></a>\r\n  </div>\r\n-->\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.switch = 1;
        this.cur_year = 0;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.cur_year = new Date().getFullYear();
    };
    FooterComponent.prototype.onChangeSwitch = function () {
        this.switch == 1 ? this.switch = 0 : this.switch = 1;
    };
    FooterComponent.prototype.onChangeColor = function (color) {
        document.getElementById("theme_id").className = "";
        document.getElementById('theme_id').classList.add('theme-' + color);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a\r\n{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhXG57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0EsZ1NBQWdTIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar1\" data-toggle=\"collapse\" class=\"navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand logo text-uppercase\" routerLink=\"/\">\r\n          Digital Alpha\r\n      </a>\r\n      <button id=\"menu_button\" class=\"navbar-toggler\" (click)=\"toggleMenu()\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <i class=\"mdi mdi-menu\"></i>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" data-toggle=\"collapse\" id=\"navbarCollapse\" scrollSpy>\r\n          <ul class=\"navbar-nav navbar-center\" id=\"mySidenav\" data-toggle=\"collapse\">\r\n              <li class=\"nav-item\">\r\n                  <a data=\"id_home\"   href=\"https://www.digitalalpha.net\" class=\"nav-link\" >Home</a>\r\n              </li>\r\n              <li class=\"nav-item\"  >\r\n                  <a data=\"id_services\" (click)=\"toggleMenu()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"routerLink=\"/strategy\" class=\"nav-link\">Strategy </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a data=\"id_features\" class=\"navbar-toggler\" (click)=\"toggleMenu()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLink=\"/dalphaportfolio\"  class=\"nav-link\" >Portfolio</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a data=\"id_features\" class=\"navbar-toggler\" (click)=\"toggleMenu()\"  data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLink=\"/dalphateam\"  class=\"nav-link\" >Our Team</a>\r\n            </li>\r\n              <!--\r\n              <li class=\"nav-item\">\r\n                  <a data=\"id_pricing\" [ngx-scroll-to]=\"'#pricing'\" class=\"nav-link\">Pricing</a>\r\n              </li>\r\n            -->\r\n\r\n            <!---\r\n              <li class=\"nav-item\">\r\n                  <a data=\"id_team\"  routerLink=\"ourteam\" class=\"nav-link\">Team</a>\r\n              </li>\r\n            -->\r\n              <!--\r\n              <li class=\"nav-item\">\r\n                  <a data=\"id_blog\"  [ngx-scroll-to]=\"'#blog'\" class=\"nav-link\">Blog</a>\r\n              </li>\r\n            -->\r\n            <li class=\"nav-item\">\r\n                    <a  data=\"id_contact\"  class=\"navbar-toggler\" (click)=\"toggleMenu()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"routerLink=\"/contactus\"  class=\"nav-link\">Contact Us</a>\r\n                </li>\r\n    \r\n            <li class=\"nav-item\">\r\n                <a  data=\"id_contact\" class=\"navbar-toggler\" (click)=\"toggleMenu()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLink=\"/disclaimers\"  class=\"nav-link\">Disclaimers</a>\r\n            </li>\r\n\r\n              \r\n          </ul>\r\n\r\n          <!---\r\n          <div class=\"nav-button ml-auto\">\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li>\r\n                      <button type=\"button\" class=\"btn btn-custom navbar-btn btn-rounded waves-effect waves-light\">Our Work</button>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n        -->\r\n      </div>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(scrollSpyService, router) {
        this.scrollSpyService = scrollSpyService;
        this.router = router;
        this.sections = {};
    }
    HeaderComponent.prototype.linkClick = function () {
        this.toggleMenu();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.router.url == "/index4") {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#f85f89!important');
        }
        else {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#ffffff!important');
        }
        window.onscroll = function () { myFunction(); };
        var navbar1 = document.getElementById("navbar1");
        function myFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                navbar1.style.backgroundColor = "#272a33";
                navbar1.style.padding = "10px";
            }
            else {
                navbar1.style.backgroundColor = "";
                navbar1.style.padding = "20px";
            }
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        document.getElementById('navbarCollapse').classList.toggle('show');
        document.getElementById('menu_button').classList.toggle('collapsed');
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var sections = document.querySelectorAll(".section");
        var self = this;
        Array.prototype.forEach.call(sections, function (e) {
            self.sections[e.id] = parseFloat(e.offsetTop);
        });
        this.scrollSpyService.getObservable('window').subscribe(function (e) {
            var scrollPosition = document.documentElement.scrollTop;
            for (var menu in _this.sections) {
                if (_this.sections[menu] <= scrollPosition) {
                    if (menu == "testi" || menu == "") { }
                    else {
                        _this.clearMenu();
                        if (_this.router.url == "/index4") {
                            document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#f85f89!important');
                        }
                        else {
                            document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#ffffff!important');
                        }
                        document.getElementById('navbarCollapse').classList.remove('show');
                    }
                }
            }
        });
    };
    HeaderComponent.prototype.clearMenu = function () {
        if (this.router.url == "/index4") {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#393f4f !important');
            document.querySelector('a[data="id_services"]').setAttribute('style', 'color:#393f4f!important');
            document.querySelector('a[data="id_features"]').setAttribute('style', 'color:#393f4f!important');
            document.querySelector('a[data="id_pricing"]').setAttribute('style', 'color:#393f4f!important');
            document.querySelector('a[data="id_team"]').setAttribute('style', 'color:#393f4f!important');
            document.querySelector('a[data="id_blog"]').setAttribute('style', 'color:#393f4f!important');
            document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:#393f4f!important');
        }
        else {
            document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#ffffff99!important');
            document.querySelector('a[data="id_services"]').setAttribute('style', 'color:#ffffff99!important');
            document.querySelector('a[data="id_features"]').setAttribute('style', 'color:#ffffff99!important');
            document.querySelector('a[data="id_pricing"]').setAttribute('style', 'color:#ffffff99!important');
            document.querySelector('a[data="id_team"]').setAttribute('style', 'color:#ffffff99!important');
            document.querySelector('a[data="id_blog"]').setAttribute('style', 'color:#ffffff99!important');
            document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:#ffffff99!important');
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout/layout.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ngx_scrollspy__WEBPACK_IMPORTED_MODULE_10__["ScrollSpyModule"].forRoot(),
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__["ScrollToModule"].forRoot()
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout/layout.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/layout/layout.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */\r\n.app-layout {\r\n  max-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLO0FBQ2hLO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout/layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/layout/layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"theme_id\" class=\"app-layout\">\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var appLayout = document.querySelector('app-layout');
        console.log('appLayout is ', appLayout);
        if (appLayout) {
            console.log('if statement appLayout is ', appLayout);
            // appLayout.style['max-width'] = '100%';
        }
        document.getElementById('theme_id').classList.remove('theme-red');
        if (this.router.url == '/') {
            document.getElementById('theme_id').classList.add('theme-red');
        }
        if (this.router.url == '/index1') {
            document.getElementById('theme_id').classList.add('theme-red');
        }
        else if (this.router.url == '/index2') {
            document.getElementById('theme_id').classList.add('theme-red');
        }
        else if (this.router.url == '/index3') {
            document.getElementById('theme_id').classList.add('theme-green');
        }
        else if (this.router.url == '/index4') {
            document.getElementById('theme_id').classList.add('theme-pink');
        }
        else if (this.router.url == '/index5') {
            document.getElementById('theme_id').classList.add('theme-blue');
        }
        else if (this.router.url == '/index6') {
            document.getElementById('theme_id').classList.add('theme-purple');
        }
        else if (this.router.url == '/index7') {
            document.getElementById('theme_id').classList.add('theme-cyan');
        }
        else if (this.router.url == '/index8') {
            document.getElementById('theme_id').classList.add('theme-orange');
        }
        else if (this.router.url == '/index9') {
            document.getElementById('theme_id').classList.add('theme-yellow');
        }
        else { }
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/responsibilities/responsibilities.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/responsibilities/responsibilities.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3BvbnNpYmlsaXRpZXMvcmVzcG9uc2liaWxpdGllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/responsibilities/responsibilities.component.html":
/*!******************************************************************!*\
  !*** ./src/app/responsibilities/responsibilities.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  responsibilities works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/responsibilities/responsibilities.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/responsibilities/responsibilities.component.ts ***!
  \****************************************************************/
/*! exports provided: ResponsibilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibilitiesComponent", function() { return ResponsibilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResponsibilitiesComponent = /** @class */ (function () {
    function ResponsibilitiesComponent() {
    }
    ResponsibilitiesComponent.prototype.ngOnInit = function () {
    };
    ResponsibilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-responsibilities',
            template: __webpack_require__(/*! ./responsibilities.component.html */ "./src/app/responsibilities/responsibilities.component.html"),
            styles: [__webpack_require__(/*! ./responsibilities.component.css */ "./src/app/responsibilities/responsibilities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResponsibilitiesComponent);
    return ResponsibilitiesComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris\digitalalpha\dalphaprod6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map