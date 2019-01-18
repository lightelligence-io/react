"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Modal: true,
  ModalContent: true,
  ModalFooter: true
};
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal.Modal;
  }
});
Object.defineProperty(exports, "ModalContent", {
  enumerable: true,
  get: function get() {
    return _ModalContent.ModalContent;
  }
});
Object.defineProperty(exports, "ModalFooter", {
  enumerable: true,
  get: function get() {
    return _ModalFooter.ModalFooter;
  }
});

var _Modal = require("./Modal");

var _ModalContent = require("./ModalContent");

var _ModalFooter = require("./ModalFooter");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});