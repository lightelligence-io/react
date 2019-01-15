import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants';
export const Paragraph = (_ref) => {
  let { className } = _ref,
    props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(
    'p',
    _extends({}, props, {
      className: classnames(`${OLT_NAMESPACE}Paragraph`, className),
    }),
  );
};
Paragraph.propTypes = {
  className: string,
};
Paragraph.defaultProps = {
  className: null,
};
