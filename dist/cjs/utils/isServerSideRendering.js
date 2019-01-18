"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServerSideRendering = void 0;

var isServerSideRendering = function () {
  try {
    return !(document !== undefined);
  } catch (e) {
    return true;
  }
}();

exports.isServerSideRendering = isServerSideRendering;