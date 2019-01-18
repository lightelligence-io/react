"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyTextSizeProp = exports.copyTextTypeProp = exports.headlineTypeProp = exports.colorProp = exports.childrenProp = void 0;

var _propTypes = require("prop-types");

var constants = _interopRequireWildcard(require("./constants"));

// FIXME remove legacy stuff here
var childrenProp = (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.node), _propTypes.node]);
exports.childrenProp = childrenProp;
var colorProp = (0, _propTypes.oneOf)([constants.COLOR_PRIMARY, constants.COLOR_SECONDARY, constants.COLOR_ALERT, constants.COLOR_NOTIFY, constants.COLOR_SUCCESS]);
exports.colorProp = colorProp;
var headlineTypeProp = (0, _propTypes.oneOf)([constants.ELEMENT_H1, constants.ELEMENT_H2, constants.ELEMENT_H3, constants.ELEMENT_H4, constants.ELEMENT_H5, constants.ELEMENT_H6]);
exports.headlineTypeProp = headlineTypeProp;
var copyTextTypeProp = (0, _propTypes.oneOf)([constants.ELEMENT_P, constants.ELEMENT_SPAN]);
exports.copyTextTypeProp = copyTextTypeProp;
var copyTextSizeProp = (0, _propTypes.oneOf)([constants.FONT_SIZE_XXSMALL, constants.FONT_SIZE_XSMALL, constants.FONT_SIZE_SMALL, constants.FONT_SIZE_MEDIUM, constants.FONT_SIZE_LARGE, constants.FONT_SIZE_XLARGE, constants.FONT_SIZE_XXLARGE]);
exports.copyTextSizeProp = copyTextSizeProp;