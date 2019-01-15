import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
// TODO: Move out of here
import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import style from './Divider.scss';
import { OLT_NAMESPACE } from '../../constants';
export const Divider = (_ref) => {
  let { className } = _ref,
    props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(
    'div',
    _extends({}, props, {
      className: classnames(
        `${OLT_NAMESPACE}u-marginLeft3`,
        `${OLT_NAMESPACE}u-marginRight3`,
        `${OLT_NAMESPACE}u-textGray400`,
        style.divider,
        className,
      ),
    }),
  );
};
Divider.propTypes = {
  className: string,
};
Divider.defaultProps = {
  className: null,
};
