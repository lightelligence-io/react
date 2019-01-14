'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _Table = require('./Table');

Object.keys(_Table).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Table[key];
    },
  });
});

var _TableCell = require('./TableCell');

Object.keys(_TableCell).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableCell[key];
    },
  });
});

var _TableHead = require('./TableHead');

Object.keys(_TableHead).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableHead[key];
    },
  });
});
