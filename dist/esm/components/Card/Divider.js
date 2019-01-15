import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
// TODO: Move out of here
import React from 'react';
import classnames from 'classnames';
import uniqid from 'uniqid';
import { string } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants'; // TODO check if we need an autoprefixer here
// TODO maybe we should solve the :after style otherwise

const dividerAfterStyle = (id) => `.${id}:after {
  content: '';
  width: 2px;
  background: currentColor;
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.6;
}`;

export const Divider = (_ref) => {
  let { className } = _ref,
    props = _objectWithoutProperties(_ref, ['className']);

  const id = uniqid('olt_');
  const styles = {
    display: 'inline-block',
    width: '2px',
    marginTop: '0',
    marginBottom: '0',
  };
  return React.createElement(
    'div',
    _extends({}, props, {
      style: styles,
      className: classnames(
        `${OLT_NAMESPACE}u-marginLeft3`,
        `${OLT_NAMESPACE}u-marginRight3`,
        `${OLT_NAMESPACE}u-textGray400`,
        id,
        className,
      ),
    }),
    React.createElement('style', null, dividerAfterStyle(id)),
  );
};
Divider.propTypes = {
  className: string,
};
Divider.defaultProps = {
  className: null,
};
