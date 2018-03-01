/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_scss__);




document.addEventListener("DOMContentLoaded", function () {
  var player = document.getElementById("live-player");
  var play = document.getElementById("play");
  var pause = document.getElementById("pause");
  var url = "http://dramax.out.airtime.pro:8000/dramax_a";
  var pause = document.getElementById("pause");

  play.addEventListener("click", function (evt) {
    player.src = url;
    player.play();
  });

  pause.addEventListener("click", function (evt) {
    player.pause();
  });

  var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      callback(status, xhr.response);
    };
    xhr.send();
  };

  getJSON('http://dramax.airtime.pro/api/live-info-v2', function (err, data) {
    var liveEpisodeName = data.tracks.current.name;
    checkLive(liveEpisodeName);
  });

  setInterval(function () {
    getJSON('http://dramax.airtime.pro/api/live-info-v2', function (err, data) {
      var liveEpisodeName = data.tracks.current.name;
      checkLive(liveEpisodeName);
      console.log(liveEpisodeName);
    });
  }, 10000);
});

function checkLive(liveEpisodeName) {
  var container = document.getElementById("audio-container");
  if (liveEpisodeName == "SPK - Wars of Islam" || liveEpisodeName == "Peder Mannerfelt - Nihilist 87" || liveEpisodeName == "Autechre - 9010171-121") {
    container.classList.add("red");
  } else {
    container.classList.remove("red");
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);