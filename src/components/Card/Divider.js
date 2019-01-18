// TODO: Move out of here
import React from 'react';
import classnames from 'classnames';
import uniqid from 'uniqid';
import { string } from 'prop-types';

import { OLT_NAMESPACE } from '../../constants';

// TODO check if we need an autoprefixer here
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

export const Divider = ({ className, ...props }) => {
  const id = uniqid('olt_');
  const styles = {
    display: 'inline-block',
    width: '2px',
    marginTop: '0',
    marginBottom: '0',
  };
  return (
    <div
      {...props}
      style={styles}
      className={classnames(
        `${OLT_NAMESPACE}u-marginLeft3`,
        `${OLT_NAMESPACE}u-marginRight3`,
        `${OLT_NAMESPACE}u-textGray400`,
        id,
        className,
      )}
    >
      <style>{dividerAfterStyle(id)}</style>
    </div>
  );
};

Divider.propTypes = {
  className: string,
};

Divider.defaultProps = {
  className: null,
};
