import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants';
export const Frame = (_ref) => {
  let { className } = _ref,
    props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(
    'div',
    _extends({}, props, {
      className: classnames(`${OLT_NAMESPACE}Frame`, className),
    }),
  );
};
Frame.propTypes = {
  className: string,
};
Frame.defaultProps = {
  className: null,
};
export default Frame; // eslint-disable-line import/no-default-export
