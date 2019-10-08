import { oneOfType, oneOf, arrayOf, node } from 'prop-types';
import * as constants from './constants';

// FIXME remove legacy stuff here

const childrenProp = oneOfType([arrayOf(node), node]);

const colorProp = oneOf([
  constants.COLOR_PRIMARY,
  constants.COLOR_SECONDARY,
  constants.COLOR_LIGHT,
  constants.COLOR_DARK,
  constants.COLOR_ALERT,
  constants.COLOR_NOTIFY,
  constants.COLOR_SUCCESS,
]);

const headlineTypeProp = oneOf([
  constants.ELEMENT_H1,
  constants.ELEMENT_H2,
  constants.ELEMENT_H3,
  constants.ELEMENT_H4,
  constants.ELEMENT_H5,
  constants.ELEMENT_H6,
]);

const copyTextTypeProp = oneOf([constants.ELEMENT_P, constants.ELEMENT_SPAN]);

const copyTextSizeProp = oneOf([
  constants.FONT_SIZE_XXSMALL,
  constants.FONT_SIZE_XSMALL,
  constants.FONT_SIZE_SMALL,
  constants.FONT_SIZE_MEDIUM,
  constants.FONT_SIZE_LARGE,
  constants.FONT_SIZE_XLARGE,
  constants.FONT_SIZE_XXLARGE,
]);

export {
  childrenProp,
  colorProp,
  headlineTypeProp,
  copyTextTypeProp,
  copyTextSizeProp,
};
