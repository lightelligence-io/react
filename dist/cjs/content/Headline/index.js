"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Headline = require("./Headline");

Object.keys(_Headline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Headline[key];
    }
  });
});