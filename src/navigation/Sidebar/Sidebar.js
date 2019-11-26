import React from 'react';
import { func, node, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { ActionButton } from '../../components/ActionButton';

export const Sidebar = ({
  className,
  children,
  onClickMobileClose,
  bottom,
  ...props
}) => (
  <aside {...props} className={classnames(olt.Sidebar, className)}>
    <div>
      <div className={classnames(olt.SidebarMobileActions)}>
        <ActionButton
          buttonType="default"
          iconLeft="close"
          standalone
          base
          onClick={onClickMobileClose}
        />
      </div>
      {children}
    </div>
    <div>{bottom}</div>
  </aside>
);

Sidebar.propTypes = {
  /**
   * The body of the sidebar
   */
  children: node,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Bottom container
   */
  bottom: node,
  /**
   * On clicking the close button for mobile
   */
  onClickMobileClose: func,
};

Sidebar.defaultProps = {
  children: null,
  className: null,
  bottom: null,
  onClickMobileClose: null,
};
