webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".watch-history {\r\n\theight: 220px;\r\n    width: 100%;\r\n    background: whitesmoke;\r\n    margin: 3em 0 2em 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding:15px;\r\n}\r\n.transform {  \r\n  transition: all 1.5s ease;\r\n}\r\n.transform-active {\r\n  min-height: 80vh;\r\n  overflow: auto;\r\n}\r\n.expand-icon {\r\n  position: absolute;\r\n  bottom: 7px;\r\n  left: 49%;\r\n  border: none;\r\n  border-radius: 50%;\r\n  background: #FDD877;\r\n  outline: none;\r\n}\r\n.arrow {\r\n\tcolor: white;\r\n}\r\n.card {\r\n\theight: 130px;\r\n\tpadding: 0.5%;\r\n\tmargin-top: 0.9em;\r\n\tmargin-bottom: 1em;\r\n}\r\n.card-content {\r\n\t\r\n\theight: 99%;\r\n}\r\n.card-image {\r\n\tborder: 1px solid black;\r\n\theight: 99%;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n.card-description {\r\n\theight: 99%;\r\n\tbackground: white;\r\n}\r\n/*.card-wrapper {\r\n\theight: 100px;\r\n}*/\r\n.card-description {\r\n\r\n    padding: 10px 15px 15px 20px;\r\n}\r\n.tab-content {\r\n\tpadding: 1em 0 1em 0;\r\n}\r\n\r\n.container-fluid {\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n.all-course {\r\n  padding:15px;\r\n}\r\n\r\n#tab1 {\r\n  min-height:890px;\r\n}\r\n\r\n#tab2 {\r\n\tmin-height:820px;\r\n\tpadding: 1em;\r\n\tmargin-top:3em;\r\n}\r\n\r\ndiv.gallery {\r\n    border: 1px solid #ccc;\r\n}\r\n\r\ndiv.gallery:hover {\r\n    border: 1px solid #777;\r\n    z-index: 10000;\r\n    width: 107%;\r\n    position: relative;\r\n}\r\ndiv.gallery:hover > .course-text {\r\n    display: block;\r\n}\r\n\r\ndiv.gallery img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\ndiv.desc {\r\n    padding: 13px;\r\n    text-align: center;\r\n}\r\n.course-text {\r\n\tdisplay: block;\r\n}\r\n.course-text: hover {\r\n\tdisplay: block;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.responsive {\r\n    padding: 0 6px;\r\n    float: left;\r\n    width: 24.99999%;\r\n}\r\n.carousel-control {\r\n\ttop: 5em !important;\r\n}\r\n\r\n@media only screen and (max-width: 700px){\r\n    .responsive {\r\n        width: 49.99999%;\r\n        margin: 5.5px 0;\r\n    }\r\n    .carousel-control {\r\n      top: 8em !important;\r\n\t  font-size: 15px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px){\r\n    .responsive {\r\n        width: 100%;\r\n    }\r\n    .carousel-control {\r\n      font-size: 16px;\r\n\t  top: 8em !important;\r\n    }\r\n}\r\n\r\n\r\n.card-wrapper {\r\n\tmargin: 50px;\r\n}\r\n\r\n.card-wrapper > img {\r\n\theight: 200px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n.cardContent {\r\n\twidth: 300px;\r\n\theight: 200px;\r\n\tbackground: lightgrey;\r\n\tpadding: 20px;\r\n\tbox-shadow: border-box;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.carousel-control {\r\n\tz-index: 10000000;\r\n}\r\n\r\n.course-text {\r\n   display:none;  \r\n }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse header navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <ul class=\"nav nav-pills\">\n      <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Tab 1</a></li>\n      <li><a href=\"#tab2\" data-toggle=\"tab\">Tab 2</a></li>\n    </ul>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"tab1\">\n      <div class=\"watch-history transform\">\n        <div class=\"content\">\n          <h4 style=\"margin-bottom:0;margin-left:0.5em\">Continue Watching</h4>\n          <div *ngFor=\"let watchItem of watchHistoryItems\" class=\"card col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"card-content\">\n              <div class=\"card-image col-xs-5 col-sm-5 col-md-5\">\n                <img src=\"../assets/images/course.jpg\" style=\"height:100%;width:100%\"/>\n              </div>\n              <div class=\"card-description col-xs-7 col-sm-7 col-md-7\">\n                <h5 style=\"margin-top:5px\">{{watchItem.title}}</h5>\n                <p style=\"height:50px;font-size:12px;overflow: hidden;\">{{watchItem.description}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <button class=\"expand-icon\" (click)=\"resizeWatchHistory()\"><span class=\"glyphicon glyphicon-chevron-down arrow\" aria-hidden=\"true\"></span></button>\n      </div>\n      <div class=\"all-courses\">\n        <h4 style=\"margin-left:1.3em\">All My Courses</h4>\n        <div *ngFor=\"let course of allCourses; let k = index\" class=\"col-md-12\">\n          <h5 style=\"margin-left:0.5em\">{{course.title}}</h5>\n          <div [attr.id]=\"'carousel-example-generic-' + k\" style=\"margin-top:1em;margin-bottom:1em\" class=\"carousel slide\" data-interval=\"false\" data-ride=\"carousel\">\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n              <li [attr.data-target]=\"'#carousel-example-generic-' + k\" data-slide-to=\"0\" class=\"active\"></li>\n              <li [attr.data-target]=\"'#carousel-example-generic-' + k\" data-slide-to=\"1\"></li>\n              <li [attr.data-target]=\"'#carousel-example-generic-' + k\" data-slide-to=\"2\"></li>\n            </ol>\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div *ngFor=\"let item of course.calculatedValues; let i = index\" class=\"item\" [ngClass]=\"{'active': i === 0}\">\n                <!--<div class=\"row\">-->\n                <div *ngFor=\"let slide of item\" class=\"responsive\">\n                  <div class=\"gallery\">\n                    <a target=\"_blank\" href=\"img_fjords.jpg\">\n                      <img src=\"../assets/images/course.jpg\" alt=\"Trolltunga Norway\" width=\"300\" height=\"200\">\n                    </a>\n                    <div class=\"desc\">\n                      <h4>{{slide.name}}</h4>\n                      <p class=\"course-text\" style=\"margin-right:1em; padding-left: 7px;\n                      padding-right: 6px\">{{slide.description}}</p>\n                    </div>\n                  </div>\n                </div>\n                <!-- Controls -->\n                <a class=\"left carousel-control\" [attr.href]=\"'#carousel-example-generic-' + k\" role=\"button\" data-slide=\"prev\">\n                  <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"right carousel-control\" [attr.href]=\"'#carousel-example-generic-' + k\" role=\"button\" data-slide=\"next\">\n                  <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-pane\" id=\"tab2\">\n      <p>{{dummyText}}</p>\n    </div>\n  </div>\n  <div class=\"navbar navbar-inverse footer navbar-fixed-bottom\" role=\"navigation\">\n    <div class=\"container\">\n      <p> </p>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.resizeWatchHistory = function () {
        $('.transform').toggleClass('transform-active');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.watchHistoryItems = [{
                'title': 'Workplace attitude',
                'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }, {
                'title': 'Lorem Ipsum',
                'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }, {
                'title': 'Workplace attitude',
                'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }, {
                'title': 'Lorem Ipsum',
                'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }];
        this.allCourses = [{
                'title': 'Topic 1',
                'values': [{
                        'name': 'Course 1',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 2',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 3',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 4',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 5',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 6',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }]
            }, {
                'title': 'Topic 2',
                'values': [{
                        'name': 'Course 5',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 2',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 6',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 4',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 5',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }, {
                        'name': 'Course 6',
                        'description': 'This course will provide an overview of processes and problems common in biological development'
                    }]
            }];
        this.dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
        var width = $(window).width(), self = this;
        self.allCourses.forEach(function (elem, ind) {
            elem['calculatedValues'] = self.calculateSlideItems(width, elem.values);
        });
        $(window).on('resize', function () {
            var width = $(window).width();
            self.allCourses.forEach(function (elem, ind) {
                elem['calculatedValues'] = self.calculateSlideItems(width, elem.values);
            });
        });
        setTimeout(function () {
            $(".gallery").hover(function () {
                $(this).children('.desc').children('.course-text').css({ 'display': 'block' });
            }, function () {
                $(this).children('.desc').children('.course-text').css({ 'display': 'none' });
            });
        }, 1000);
    };
    AppComponent.prototype.calculateSlideItems = function (width, values) {
        if (width > 700) {
            // desktop
            return this.buildSlide(4, values);
        }
        else if (width <= 700 && width > 480) {
            // tablet
            return this.buildSlide(2, values);
        }
        else {
            // phone
            return this.buildSlide(1, values);
        }
    };
    AppComponent.prototype.buildSlide = function (size, values) {
        var collection = [], slide = [], index;
        for (index = 0; index < values.length; index++) {
            if (slide.length === size) {
                collection.push(slide);
                slide = [];
            }
            slide.push(values[index]);
        }
        collection.push(slide);
        return collection;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map