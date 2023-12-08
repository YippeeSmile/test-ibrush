/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

const popupOpenButton = document.querySelector('.icon_burger');
const popupOpenButtonHeader = document.querySelector('.button_place_header');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
function openPopup() {
  popup.classList.add('popup_opened');
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
popupOpenButtonHeader.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupOpenButton.addEventListener('click', openPopup);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vendor_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../vendor/fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/vendor/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/star.svg */ "./src/images/icons/star.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/star-yellow.svg */ "./src/images/icons/star-yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/arrow.svg */ "./src/images/icons/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vendor_fonts_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page {
  margin: 0 auto;
  font-family: "Onest", "sans-serif";
  background-color: #F8F8FA;
}
.page__body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 1240px;
  box-sizing: border-box;
}

.title {
  margin: 0;
  font-family: "Onest", sans-serif;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #202326;
}
.title_big {
  font-size: 52px;
}
.title_medium {
  font-size: 40px;
}
.title_small {
  font-size: 28px;
}

.blockquote {
  margin: 0;
}

.header {
  margin: 0 auto;
  padding-top: 20px;
  max-width: 738px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 650px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}
.gallery {
  margin: 0 auto;
  max-width: 738px;
  padding-top: 50px;
}
.gallery__title {
  margin: 30px 0 0;
}
.gallery__underline {
  height: 2px;
  background-color: #ECECF3;
  margin-top: 79px;
  border: none;
}

@media screen and (max-width: 767px) {
  .gallery__title {
    margin: 0 auto;
    font-family: "Onest", sans-serif;
    font-size: 34px;
    line-height: 38px;
  }
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav__list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-self: auto;
}
.nav__item {
  /* cursor: pointer;*/
  padding-right: 25px;
}
.nav__item:hover .nav__submenu {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.nav__item:last-child {
  padding-right: 50px;
}
.nav__link {
  text-decoration: none;
  color: #202326;
  color: #202326;
  font-family: "Onest", "sans-serif";
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  line-height: 18px;
  text-align: left;
}
.nav__link:hover {
  opacity: 1;
  color: grey;
}
.nav__submenu {
  list-style: none;
  padding: 0 10px;
  position: absolute;
  display: none;
  background: #FFF;
  width: 197px;
  height: 96px;
}
.nav__submenu a {
  font-family: "Onest", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.01em;
}
.nav__toggle-menu {
  display: none;
}
.nav__burger {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav__arrow-icon {
  padding-left: 5px;
}

@media screen and (max-width: 650px) {
  .nav {
    display: none;
  }
  .nav__list {
    display: none;
  }
  .nav__burger {
    display: none;
  }
}
.button {
  padding: 0;
  display: block;
  border: none;
  background: #2D1AA7;
  color: white;
  padding: 10px, 20px, 12px, 20px;
  border-radius: 100px;
  cursor: pointer;
}
.button:hover {
  opacity: 0.8;
}
.button_place_header {
  width: 145px;
  height: 40px;
}
.button_place_form {
  width: 133px;
  height: 50px;
}

.button {
  padding: 0;
  display: block;
  border: none;
  background: #2D1AA7;
  color: white;
  padding: 10px, 20px, 12px, 20px;
  border-radius: 100px;
  cursor: pointer;
}
.button:hover {
  opacity: 0.8;
}
.button_place_header {
  width: 145px;
  height: 40px;
}
.button_place_form {
  width: 133px;
  height: 50px;
}

.icon_burger {
  display: none;
}

@media screen and (max-width: 650px) {
  .icon_burger {
    display: block;
  }
}
.figure {
  margin: 36px 0 0;
  padding-top: 0;
  position: relative;
}
.figure__image {
  object-fit: cover;
  max-width: 738px;
  width: 100%;
}
.figure__calendar {
  width: 112px;
  height: 100px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.figure__calendar_date {
  padding: 0;
  margin: 0;
  font-family: "Onest", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  color: #202326;
}
.figure__calendar_month {
  padding: 0;
  margin: 0;
  font-family: "Onest", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  color: #202326;
}
.figure__text {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #202326;
  padding-top: 16px;
}

.quote {
  margin: 0 auto;
  max-width: 738px;
  padding-bottom: 50px;
  padding-top: 50px;
}
.quote__container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.quote__wrapper {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.quote__text {
  padding: 0;
  margin: 0;
  max-width: 680px;
  font-family: "Onest", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  color: #202326;
}
.quote__text_author {
  padding-top: 28px;
  font-family: "Onest", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #777777;
  display: table;
}

@media screen and (max-width: 500px) {
  .quote__container {
    flex-direction: column;
  }
}
.blockquote {
  margin: 0;
}

.advert {
  margin: 0 auto;
  margin-top: 20px;
  background-color: #F1F1F3;
  /* background-size: 1025px; */
}
.advert__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.advert__image {
  /*max-width: 610px;*/
  width: 100%;
  object-fit: cover;
}
.advert__figure {
  margin: 0;
  padding: 50px 0 70px;
  /*max-width: 1024px;*/
  max-width: 100vw;
}
.advert__figaption {
  font-family: Onest;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #202326;
}
.advert__figaption a {
  font-family: Helvetica;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #2D1AA7;
}

.conclusion {
  margin: 0 auto;
  background-color: rgba(248, 248, 248, 0.9803921569);
  max-width: 738px;
  padding: 50px 0;
}
.conclusion__text {
  margin: 0;
  font-family: "Onest", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  padding-top: 30px;
  letter-spacing: 0.01em;
}

.rating-and-comment {
  width: 738px;
  margin: 0 auto;
}
.rating-and-comment__title {
  margin: 30px 0 20px;
}

.rating {
  margin: 0 0 1em 0;
  padding: 0;
  border: none;
}
.rating__caption {
  margin-bottom: 0.5em;
  padding: 0;
  font-family: "Onest", sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #202326;
}
.rating__container {
  display: flex;
  align-items: center;
}
.rating__value {
  padding-right: 0.5em;
  font-family: "Onest", sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0px;
  color: #202326;
}
.rating__group {
  position: relative;
  width: 10em;
  height: 2em;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 2em auto;
  background-repeat: repeat-x;
}
.rating__star {
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 2em;
  font-size: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.rating__star:focus {
  outline: none;
}
.rating__star:checked {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: 2em auto;
  background-repeat: repeat-x;
}
.rating__star:hover {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: 2em auto;
  background-repeat: repeat-x;
}
.rating__star:hover ~ .rating__star {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 2em auto;
  background-repeat: repeat-x;
}
.rating__star:nth-of-type(1) {
  z-index: 5;
  width: 2em;
}
.rating__star:nth-of-type(2) {
  z-index: 4;
  width: 4em;
}
.rating__star:nth-of-type(3) {
  z-index: 3;
  width: 6em;
}
.rating__star:nth-of-type(4) {
  z-index: 2;
  width: 8em;
}
.rating__star:nth-of-type(5) {
  z-index: 1;
  width: 10em;
}

.form {
  margin-top: 20px;
}
.form__caption {
  font-family: "Onest", sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #202326;
}
.form__info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.form__input {
  width: 238px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #EDEDF1;
}
.form__input::placeholder {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  color: #777777;
  padding-left: 10px;
}
.form__select {
  width: 238px;
  border-radius: 10px;
  border: 1px solid #EDEDF1;
  color: #777777;
}
.form__select::placeholder {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.85px;
  letter-spacing: 0px;
  color: #202326;
  padding-left: 10px;
}
.form_option {
  max-width: 238px;
  max-height: 183px;
  border-radius: 6px;
  box-shadow: 0px 8px 60px 0px rgba(0, 0, 0, 0.0705882353);
  background-color: #FFFFFE;
}
.form_option:hover {
  background-color: #F1F1F3;
}
.form_option:first-child {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  color: #777777;
}
.form__textarea {
  margin: 20px 0;
  width: 100%;
  height: 146px;
  border-radius: 10px;
  border: 1px;
  overflow: auto;
  resize: none;
  box-sizing: border-box;
}
.form__textarea::placeholder {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  color: #777777;
  padding: 10px 0 0 10px;
}

@media screen and (max-width: 600px) {
  .form__info {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .form__input {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    /* width: 280px; */
    height: 50px;
    width: 100%;
  }
  .form__select {
    height: 50px;
    width: 100%;
  }
}
.select-wrapper {
  position: relative;
}
.select-wrapper::before {
  content: "";
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  display: block;
  width: 10px;
  height: 10px;
  pointer-events: none;
}

.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: #FFFFFF;
  border: none;
  /*1px solid #2D1AA7;*/
  width: 100%;
  height: 50px;
  outline: none;
  cursor: pointer;
  border: 1px solid #EDEDF1;
  border-radius: 10px;
  color: #202326;
  font-family: inherit;
  padding: 10px 35px 10px 15px;
}
.select__option {
  border: none;
}
.select:focus {
  outline: none;
  border: 1px solid #2D1AA7;
  box-shadow: 0px 8px 60px 0px rgba(0, 0, 0, 0.0705882353);
}

.same-article {
  margin: 0 auto;
  max-width: 738px;
  width: 100%;
  padding: 50px 0;
}
.same-article__card {
  max-width: 226px;
}
.same-article__wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  box-sizing: border-box;
}
.same-article__card {
  max-width: 226px;
}
.same-article__card-title {
  margin: 0;
  font-family: "Onest", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  color: #202326;
}
.same-article__card-date {
  margin: 0;
  font-family: "Onest", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #777777;
}
.same-article__card-image {
  background-color: inherit;
}
.same-article__link {
  text-decoration: none;
  cursor: pointer;
  color: #202326;
}
.same-article__link:hover {
  color: rgba(32, 35, 38, 0.8);
}

@media screen and (max-width: 500px) {
  .same-article__wrapper {
    margin: 20px auto 0;
    flex-direction: column;
    align-items: center;
  }
}
.popup {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(32, 35, 38, 0.7);
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s linear, visibility 0.5s linear;
  z-index: 1;
}
.popup__container {
  box-sizing: border-box;
  padding: 0 15px;
  background-color: rgb(255, 255, 255);
  max-width: 380px;
  max-height: 403px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: auto;
  left: auto;
  border-radius: 12px;
}
.popup__close-button {
  padding: 0;
  border: none;
  background: none;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}
.popup__title {
  margin: 20px 0 0;
  letter-spacing: -0.02em;
}
.popup__subtitle {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
}
.popup__form {
  margin: 20px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.popup__input {
  margin: 0;
  padding: 0;
  width: 328px;
  height: 50px;
  padding: 3px, 240px, 18px, 15px;
  border-radius: 10px;
  border: 1px solid #EDEDF1;
}
.popup__input[type=text] {
  padding-left: 10px;
}
.popup__link {
  color: #2D1AA7;
  text-decoration: none;
}
.popup__save-button {
  width: 328px;
  height: 50px;
  border-radius: 100px;
  padding: 10px, 20px, 12px, 20px;
  gap: 10px;
}
.popup__text-privacy {
  margin: auto;
  width: 238px;
  font-family: "Onest", sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: center;
}
.popup_opened {
  display: flex;
}

@media screen and (max-width: 350px) {
  .popup__container {
    max-width: 100vw;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/page/page.scss","webpack://./src/pages/index.scss","webpack://./src/blocks/title/title.scss","webpack://./src/blocks/blockquote/blockquote.scss","webpack://./src/blocks/header/header.scss","webpack://./src/blocks/gallery/gallery.scss","webpack://./src/blocks/nav/nav.scss","webpack://./src/blocks/button/button.scss","webpack://./src/blocks/icon/_burger/icon_burger.scss","webpack://./src/blocks/figure/figure.scss","webpack://./src/blocks/quote/quote.scss","webpack://./src/blocks/advert/advert.scss","webpack://./src/blocks/conclusion/conclusion.scss","webpack://./src/blocks/rating-and-comment/rating-and-comment.scss","webpack://./src/blocks/rating/rating.scss","webpack://./src/blocks/form/form.scss","webpack://./src/blocks/select-wrapper/select-wrapper.scss","webpack://./src/blocks/select/select.scss","webpack://./src/blocks/same-article/same-article.scss","webpack://./src/blocks/popup/popup.scss"],"names":[],"mappings":"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","sourcesContent":[".page {\n    margin: 0 auto;\n    font-family: 'Onest', 'sans-serif';\n    background-color: #F8F8FA;\n    &__body {\n        margin: 0 auto;\n        min-width: 320px;\n        max-width: 1240px;\n        box-sizing: border-box;\n    }\n}","@import \"../vendor/fonts.css\";\r\n@import \"../blocks/page/page.scss\";\r\n@import \"../blocks/title/title.scss\";\r\n@import \"../blocks/blockquote/blockquote.scss\";\r\n@import \"../blocks/header/header.scss\";\r\n@import \"../blocks/gallery/gallery.scss\";\r\n@import \"../blocks/nav/nav.scss\";\r\n@import \"../blocks/button/button.scss\";\r\n@import \"../blocks/button/button.scss\";\r\n@import \"../blocks/icon/_burger/icon_burger.scss\"; //сделать кнопкой\r\n@import \"../blocks/figure/figure.scss\";\r\n@import \"../blocks/quote/quote.scss\";\r\n@import \"../blocks/blockquote/blockquote.scss\";\r\n@import \"../blocks/advert/advert.scss\";\r\n@import \"../blocks/conclusion/conclusion.scss\";\r\n@import \"../blocks/rating-and-comment/rating-and-comment.scss\";\r\n@import \"../blocks/rating/rating.scss\";\r\n@import \"../blocks/form/form.scss\";\r\n@import \"../blocks/select-wrapper/select-wrapper.scss\";\r\n@import \"../blocks/select/select.scss\";\r\n@import \"../blocks/same-article/same-article.scss\";\r\n@import \"../blocks/popup/popup.scss\";",".title {\r\n    margin: 0;\r\n    font-family: 'Onest', sans-serif;\r\n    font-weight: 500;\r\n    line-height: 36px;\r\n    letter-spacing: -0.02em;\r\n    color: #202326;\r\n    &_big {\r\n        font-size: 52px;\r\n    }\r\n    &_medium {\r\n        font-size: 40px;\r\n    }\r\n    &_small {\r\n        font-size: 28px;\r\n    }\r\n}",".blockquote {\r\n    margin: 0;\r\n}",".header {\n    margin: 0 auto;\n    padding-top: 20px;\n    max-width: 738px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n@media screen and (max-width: 650px) {\n    .header {\n        display: flex;\n        justify-content: space-between;\n    }\n}",".gallery {\n    margin: 0 auto;\n    max-width: 738px;\n    padding-top: 50px;\n    &__title {\n        margin: 30px 0 0;\n    }\n    &__underline {\n        height: 2px;\n        background-color: #ECECF3;\n        margin-top: 79px;\n        border: none;\n    }\n}\n\n@media screen and (max-width: 767px) {\n    .gallery__title {\n        margin: 0 auto;\n        font-family: 'Onest', sans-serif;\n        font-size: 34px;\n        line-height: 38px;\n    }\n}",".nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    &__list {\n        padding: 0;\n        margin: 0;\n        list-style: none;\n        display: flex;\n        flex-direction: row;\n        /* justify-content: space-between; */\n        justify-self: auto;\n    }\n    &__item {\n        /* cursor: pointer;*/\n        padding-right: 25px;\n        &:hover .nav__submenu {\n            display: flex;\n            justify-content: space-around;\n            flex-direction: column;\n        }\n        &:last-child {\n            padding-right: 50px;\n        }\n    }\n    &__link {\n        text-decoration: none;\n        color: #202326;\n        color: #202326;\n        font-family: 'Onest', 'sans-serif';\n        font-size: 15px;\n        font-weight: 600;\n        font-style: normal;\n        line-height: 18px;\n        text-align: left;\n        &:hover {\n            opacity: 1;\n            color: grey;\n        }\n    }\n    &__submenu {\n        list-style: none;\n        padding: 0 10px;\n        position: absolute;\n        display: none;\n        background: #FFF;\n        width: 197px;\n        height: 96px;\n        & a {\n            font-family: 'Onest', sans-serif;\n            font-size: 13px;\n            font-weight: 400;\n            line-height: 13px;\n            letter-spacing: 0.01em;\n        }\n    }\n    &__toggle-menu {\n        display: none;\n    }\n    &__burger {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n    }\n    &__arrow-icon {\n        padding-left: 5px;\n    }\n}\n\n@media screen and (max-width: 650px) {\n    .nav {\n        display: none;\n        &__list {\n            display: none;\n        }\n        &__burger {\n            display: none;\n        }\n    }\n}",".button {\n    padding: 0;\n    display: block;\n    border: none;\n    background: #2D1AA7;\n    color: white;\n    padding: 10px, 20px, 12px, 20px;\n    border-radius: 100px;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.8;\n    }\n    &_place_header {\n        width: 145px;\n        height: 40px;\n    }\n    &_place_form {\n        width: 133px;\n        height: 50px;\n    }\n}",".icon_burger {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .icon_burger {\r\n        display: block;\r\n    }\r\n}",".figure {\n    margin: 36px 0 0;\n    padding-top: 0;\n    position: relative;\n    &__image {\n        object-fit: cover;\n        max-width: 738px;\n        width: 100%;\n    }\n    &__calendar {\n        width: 112px;\n        height: 100px;\n        border-radius: 18px;\n        background-color: rgba(255, 255, 255, 0.9);\n        position: absolute;\n        top: 15px;\n        right: 15px;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        &_date {\n            padding: 0;\n            margin: 0;\n            font-family: 'Onest', sans-serif;\n            font-size: 24px;\n            font-weight: 500;\n            line-height: 25px;\n            letter-spacing: 0px;\n            text-align: center;\n            color: #202326;\n        }\n        &_month {\n            padding: 0;\n            margin: 0;\n            font-family: 'Onest', sans-serif;\n            font-size: 24px;\n            font-weight: 500;\n            line-height: 25px;\n            letter-spacing: 0px;\n            text-align: center;\n            color: #202326;\n        }\n    }\n    &__text {\n        font-family: 'Onest', sans-serif;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n        color: #202326;\n        padding-top: 16px;\n    }\n}",".quote {\n    margin: 0 auto;\n    max-width: 738px;\n    padding-bottom: 50px;\n    padding-top: 50px;\n    &__container {\n        margin-top: 20px;\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        gap: 20px;\n    }\n    &__wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: baseline;\n    }\n    &__text {\n        padding: 0;\n        margin: 0;\n        max-width: 680px;\n        font-family: 'Onest', sans-serif;\n        font-size: 22px;\n        font-weight: 400;\n        line-height: 31px;\n        letter-spacing: 0em;\n        color: #202326;\n        &_author {\n            padding-top: 28px;\n            font-family: 'Onest', sans-serif;\n            font-size: 16px;\n            font-weight: 400;\n            line-height: 24px;\n            letter-spacing: 0.01em;\n            color: #777777;\n            display: table;\n        }\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .quote__container {\n        flex-direction: column;\n    }\n}",".advert {\n    margin: 0 auto;\n    margin-top: 20px;\n    background-color: #F1F1F3;\n    /* background-size: 1025px; */\n    &__wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    &__image {\n        /*max-width: 610px;*/\n        width: 100%;\n        object-fit: cover;\n    }\n    &__figure {\n        margin: 0;\n        padding: 50px 0 70px;\n        /*max-width: 1024px;*/\n        max-width: 100vw;\n    }\n    &__figaption {\n        font-family: Onest;\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 18px;\n        letter-spacing: 0px;\n        text-align: left;\n        color: #202326;\n        & a {\n            font-family: Helvetica;\n            font-size: 12px;\n            line-height: 18px;\n            letter-spacing: 0px;\n            text-align: left;\n            color: #2D1AA7;\n        }\n    }\n}",".conclusion {\r\n    margin: 0 auto;\r\n    background-color: #F8F8F8FA;\r\n    max-width: 738px;\r\n    padding: 50px 0;\r\n    &__text {\r\n        margin: 0;\r\n        font-family: 'Onest', sans-serif;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 26px;\r\n        padding-top: 30px;\r\n        letter-spacing: 0.01em;\r\n    }\r\n}",".rating-and-comment {\r\n    width: 738px;\r\n    margin: 0 auto;\r\n    &__title {\r\n        margin: 30px 0 20px;\r\n    }\r\n}",".rating {\r\n    margin: 0 0 1em 0;\r\n    padding: 0;\r\n    border: none;\r\n    &__caption {\r\n        margin-bottom: 0.5em;\r\n        padding: 0;\r\n        font-family: 'Onest', sans-serif;\r\n        font-size: 11px;\r\n        font-weight: 600;\r\n        line-height: 18px;\r\n        letter-spacing: 0.02em;\r\n        color: #202326;\r\n    }\r\n    &__container {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n    &__value {\r\n        padding-right: 0.5em;\r\n        font-family: 'Onest', sans-serif;\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 36px;\r\n        letter-spacing: 0px;\r\n        color: #202326;\r\n    }\r\n    &__group {\r\n        position: relative;\r\n        width: 10em;\r\n        height: 2em;\r\n        background-image: url(../images/icons/star.svg);\r\n        background-size: 2em auto;\r\n        background-repeat: repeat-x;\r\n    }\r\n    &__star {\r\n        margin: 0;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        height: 2em;\r\n        font-size: inherit;\r\n        //background-color: #D7D7E2;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        appearance: none;\r\n        &:focus {\r\n            outline: none;\r\n        }\r\n        &:checked {\r\n            background-image: url(../images/icons/star-yellow.svg);\r\n            background-size: 2em auto;\r\n            background-repeat: repeat-x;\r\n        }\r\n        &:hover {\r\n            background-image: url(../images/icons/star-yellow.svg);\r\n            background-size: 2em auto;\r\n            background-repeat: repeat-x;\r\n        }\r\n        &:hover~.rating__star {\r\n            background-image: url(../images/icons/star.svg);\r\n            background-size: 2em auto;\r\n            background-repeat: repeat-x;\r\n        }\r\n        &:nth-of-type(1) {\r\n            z-index: 5;\r\n            width: 2em;\r\n        }\r\n        &:nth-of-type(2) {\r\n            z-index: 4;\r\n            width: 4em;\r\n        }\r\n        &:nth-of-type(3) {\r\n            z-index: 3;\r\n            width: 6em;\r\n        }\r\n        &:nth-of-type(4) {\r\n            z-index: 2;\r\n            width: 8em;\r\n        }\r\n        &:nth-of-type(5) {\r\n            z-index: 1;\r\n            width: 10em;\r\n        }\r\n    }\r\n}",".form {\n    margin-top: 20px;\n    &__caption {\n        font-family: 'Onest', sans-serif;\n        font-size: 11px;\n        font-weight: 600;\n        line-height: 18px;\n        letter-spacing: 0.02em;\n        color: #202326;\n    }\n    &__info-container {\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n    }\n    &__input {\n        width: 238px;\n        height: 50px;\n        border-radius: 10px;\n        border: 1px solid #EDEDF1;\n        &::placeholder {\n            font-family: 'Onest', sans-serif;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 15px;\n            letter-spacing: 0px;\n            color: #777777;\n            padding-left: 10px;\n        }\n    }\n    &__select {\n        width: 238px;\n        border-radius: 10px;\n        border: 1px solid #EDEDF1;\n        color: #777777;\n        &::placeholder {\n            font-family: 'Onest', sans-serif;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 17.85px;\n            letter-spacing: 0px;\n            color: #202326;\n            padding-left: 10px;\n        }\n    }\n    &_option {\n        max-width: 238px;\n        max-height: 183px;\n        border-radius: 6px;\n        box-shadow: 0px 8px 60px 0px #00000012;\n        background-color: #FFFFFE;\n        &:hover {\n            background-color: #F1F1F3;\n        }\n        &:first-child {\n            font-family: 'Onest', sans-serif;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 15px;\n            letter-spacing: 0px;\n            color: #777777;\n        }\n    }\n    &__textarea {\n        margin: 20px 0;\n        width: 100%;\n        height: 146px;\n        border-radius: 10px;\n        border: 1px;\n        overflow: auto;\n        resize: none;\n        box-sizing: border-box;\n        &::placeholder {\n            font-family: 'Onest', sans-serif;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 15px;\n            letter-spacing: 0px;\n            color: #777777;\n            padding: 10px 0 0 10px;\n        }\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .form__info {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 10px;\n    }\n    .form__input {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 10px;\n        /* width: 280px; */\n        height: 50px;\n        width: 100%;\n    }\n    .form__select {\n        height: 50px;\n        width: 100%;\n    }\n}",".select-wrapper {\r\n    position: relative;\r\n    &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        background-image: url(../images/icons/arrow.svg);\r\n        background-repeat: no-repeat;\r\n        top: 50%;\r\n        right: 15px;\r\n        transform: translateY(-50%);\r\n        display: block;\r\n        width: 10px;\r\n        height: 10px;\r\n        pointer-events: none;\r\n    }\r\n}",".select {\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    background: #FFFFFF;\r\n    border: none;\r\n    /*1px solid #2D1AA7;*/\r\n    width: 100%;\r\n    height: 50px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #EDEDF1;\r\n    border-radius: 10px;\r\n    color: #202326;\r\n    font-family: inherit;\r\n    padding: 10px 35px 10px 15px;\r\n    &__option {\r\n        border: none;\r\n    }\r\n    &:focus {\r\n        outline: none;\r\n        border: 1px solid #2D1AA7;\r\n        box-shadow: 0px 8px 60px 0px #00000012;\r\n    }\r\n}",".same-article {\r\n    margin: 0 auto;\r\n    max-width: 738px;\r\n    width: 100%;\r\n    padding: 50px 0;\r\n    &__card {\r\n        max-width: 226px;\r\n    }\r\n    &__wrapper {\r\n        margin-top: 20px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        flex-wrap: wrap;\r\n        gap: 30px;\r\n        box-sizing: border-box;\r\n    }\r\n    &__card {\r\n        max-width: 226px;\r\n    }\r\n    &__card-title {\r\n        margin: 0;\r\n        font-family: 'Onest', sans-serif;\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 22px;\r\n        letter-spacing: 0px;\r\n        color: #202326;\r\n    }\r\n    &__card-date {\r\n        margin: 0;\r\n        font-family: 'Onest', sans-serif;\r\n        font-size: 12px;\r\n        font-weight: 400;\r\n        line-height: 16px;\r\n        letter-spacing: 0.02em;\r\n        color: #777777;\r\n    }\r\n    &__card-image {\r\n        background-color: inherit;\r\n    }\r\n    &__link {\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        color: #202326;\r\n        &:hover {\r\n            color: rgba(32, 35, 38, 0.8);\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .same-article__wrapper {\r\n        margin: 20px auto 0;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n}",".popup {\n    display: none;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: rgba(32, 35, 38, 0.7);\n    align-items: center;\n    justify-content: center;\n    transition: opacity .5s linear, visibility .5s linear;\n    z-index: 1;\n    &__container {\n        box-sizing: border-box;\n        padding: 0 15px;\n        background-color: rgba(255, 255, 255, 1);\n        max-width: 380px;\n        max-height: 403px;\n        width: 100%;\n        height: 100%;\n        position: fixed;\n        top: auto;\n        left: auto;\n        border-radius: 12px;\n    }\n    &__close-button {\n        padding: 0;\n        border: none;\n        background: none;\n        position: absolute;\n        top: 10px;\n        right: 15px;\n        cursor: pointer;\n    }\n    &__title {\n        margin: 20px 0 0;\n        letter-spacing: -0.02em;\n    }\n    &__subtitle {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 17px;\n        letter-spacing: 0.01em;\n    }\n    &__form {\n        margin: 20px 0 30px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n    &__input {\n        margin: 0;\n        padding: 0;\n        width: 328px;\n        height: 50px;\n        padding: 3px, 240px, 18px, 15px;\n        border-radius: 10px;\n        border: 1px solid #EDEDF1;\n        &[type=\"text\"] {\n            padding-left: 10px;\n        }\n    }\n    &__link {\n        color: #2D1AA7;\n        text-decoration: none;\n    }\n    &__save-button {\n        width: 328px;\n        height: 50px;\n        border-radius: 100px;\n        padding: 10px, 20px, 12px, 20px;\n        gap: 10px;\n    }\n    &__text-privacy {\n        margin: auto;\n        width: 238px;\n        font-family: 'Onest', sans-serif;\n        font-size: 10px;\n        font-weight: 400;\n        line-height: 16px;\n        letter-spacing: 0.01em;\n        text-align: center;\n    }\n    &_opened {\n        display: flex;\n    }\n}\n\n@media screen and (max-width: 350px) {\n    .popup__container {\n        max-width: 100vw;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/vendor/fonts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/vendor/fonts.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-cyrillic-ext-400.woff2 */ "./src/vendor/OnestFonts/onest-cyrillic-ext-400.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-cyrillic-400.woff2 */ "./src/vendor/OnestFonts/onest-cyrillic-400.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-latin-ext-400.woff2 */ "./src/vendor/OnestFonts/onest-latin-ext-400.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-latin-400.woff2 */ "./src/vendor/OnestFonts/onest-latin-400.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-cyrillic-ext-500.woff2 */ "./src/vendor/OnestFonts/onest-cyrillic-ext-500.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-cyrillic-500.woff2 */ "./src/vendor/OnestFonts/onest-cyrillic-500.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-latin-ext-500.woff2 */ "./src/vendor/OnestFonts/onest-latin-ext-500.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-latin-500.woff2 */ "./src/vendor/OnestFonts/onest-latin-500.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-cyrillic-ext-600.woff2 */ "./src/vendor/OnestFonts/onest-cyrillic-ext-600.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-cyrillic-600.woff2 */ "./src/vendor/OnestFonts/onest-cyrillic-600.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-latin-ext-600.woff2 */ "./src/vendor/OnestFonts/onest-latin-ext-600.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../vendor/OnestFonts/onest-latin-600.woff2 */ "./src/vendor/OnestFonts/onest-latin-600.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* cyrillic-ext */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}


/* cyrillic */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}


/* latin-ext */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}


/* latin */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


/* cyrillic-ext */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}


/* cyrillic */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}


/* latin-ext */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}


/* latin */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


/* cyrillic-ext */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}


/* cyrillic */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}


/* latin-ext */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}


/* latin */

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`, "",{"version":3,"sources":["webpack://./src/vendor/fonts.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAA6E;IAC7E,sFAAsF;AAC1F;;;AAGA,aAAa;;AAEb;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAAyE;IACzE,oEAAoE;AACxE;;;AAGA,cAAc;;AAEd;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAA0E;IAC1E,gJAAgJ;AACpJ;;;AAGA,UAAU;;AAEV;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAAsE;IACtE,iMAAiM;AACrM;;;AAGA,iBAAiB;;AAEjB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAA6E;IAC7E,sFAAsF;AAC1F;;;AAGA,aAAa;;AAEb;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAAyE;IACzE,oEAAoE;AACxE;;;AAGA,cAAc;;AAEd;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAA0E;IAC1E,gJAAgJ;AACpJ;;;AAGA,UAAU;;AAEV;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAAsE;IACtE,iMAAiM;AACrM;;;AAGA,iBAAiB;;AAEjB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAA6E;IAC7E,sFAAsF;AAC1F;;;AAGA,aAAa;;AAEb;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4DAAyE;IACzE,oEAAoE;AACxE;;;AAGA,cAAc;;AAEd;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,6DAA0E;IAC1E,gJAAgJ;AACpJ;;;AAGA,UAAU;;AAEV;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,6DAAsE;IACtE,iMAAiM;AACrM","sourcesContent":["/* cyrillic-ext */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-cyrillic-ext-400.woff2') format('woff2');\r\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n\r\n\r\n/* cyrillic */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-cyrillic-400.woff2') format('woff2');\r\n    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n\r\n\r\n/* latin-ext */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-latin-ext-400.woff2') format('woff2');\r\n    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n\r\n/* latin */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-latin-400.woff2') format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n\r\n/* cyrillic-ext */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-cyrillic-ext-500.woff2') format('woff2');\r\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n\r\n\r\n/* cyrillic */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-cyrillic-500.woff2') format('woff2');\r\n    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n\r\n\r\n/* latin-ext */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-latin-ext-500.woff2') format('woff2');\r\n    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n\r\n/* latin */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-latin-500.woff2') format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n\r\n/* cyrillic-ext */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-cyrillic-ext-600.woff2') format('woff2');\r\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n\r\n\r\n/* cyrillic */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-cyrillic-600.woff2') format('woff2');\r\n    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n\r\n\r\n/* latin-ext */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-latin-ext-600.woff2') format('woff2');\r\n    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n\r\n/* latin */\r\n\r\n@font-face {\r\n    font-family: 'Onest';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-display: swap;\r\n    src: url('../vendor/OnestFonts/onest-latin-600.woff2') format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/icons/arrow.svg":
/*!************************************!*\
  !*** ./src/images/icons/arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "643e9b30ced34db56664.svg";

/***/ }),

/***/ "./src/images/icons/star-yellow.svg":
/*!******************************************!*\
  !*** ./src/images/icons/star-yellow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06ca43d5ab38fc6fb117.svg";

/***/ }),

/***/ "./src/images/icons/star.svg":
/*!***********************************!*\
  !*** ./src/images/icons/star.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4bbe9e3d273207a2ee08.svg";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-cyrillic-400.woff2":
/*!********************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-cyrillic-400.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-cyrillic-400.f577db932d2a2c72acc6.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-cyrillic-500.woff2":
/*!********************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-cyrillic-500.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-cyrillic-500.f577db932d2a2c72acc6.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-cyrillic-600.woff2":
/*!********************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-cyrillic-600.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-cyrillic-600.f577db932d2a2c72acc6.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-cyrillic-ext-400.woff2":
/*!************************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-cyrillic-ext-400.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-cyrillic-ext-400.c4d2b386ad545ed51964.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-cyrillic-ext-500.woff2":
/*!************************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-cyrillic-ext-500.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-cyrillic-ext-500.c4d2b386ad545ed51964.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-cyrillic-ext-600.woff2":
/*!************************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-cyrillic-ext-600.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-cyrillic-ext-600.c4d2b386ad545ed51964.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-latin-400.woff2":
/*!*****************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-latin-400.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-latin-400.29b11bde024070e82d5f.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-latin-500.woff2":
/*!*****************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-latin-500.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-latin-500.29b11bde024070e82d5f.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-latin-600.woff2":
/*!*****************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-latin-600.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-latin-600.29b11bde024070e82d5f.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-latin-ext-400.woff2":
/*!*********************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-latin-ext-400.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-latin-ext-400.0aee43f382dcce3be0ea.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-latin-ext-500.woff2":
/*!*********************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-latin-ext-500.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-latin-ext-500.0aee43f382dcce3be0ea.woff2";

/***/ }),

/***/ "./src/vendor/OnestFonts/onest-latin-ext-600.woff2":
/*!*********************************************************!*\
  !*** ./src/vendor/OnestFonts/onest-latin-ext-600.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/onest-latin-ext-600.0aee43f382dcce3be0ea.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index.scss");
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/main.js */ "./src/scripts/main.js");
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_main_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=index.e80e393f7e598e9cf27c.js.map
