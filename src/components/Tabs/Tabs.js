import React, { useEffect, useState, useCallback, useRef } from 'react';
import { func, string, node, shape } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const Tabs = ({ value, onSelect, children, tabsProps, ...props }) => {
  const tabBar = useRef(null);
  const [gradient, setGradient] = useState({ left: false, right: false });

  const handleScroll = useCallback(() => {
    if (!tabBar || !tabBar.current) return;
    const left = tabBar.current.scrollLeft > 0;
    const right =
      tabBar.current.scrollWidth -
        tabBar.current.scrollLeft -
        tabBar.current.clientWidth >
      0;
    setGradient({ left, right });
  }, [tabBar]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, [tabBar, handleScroll]);

  const { className: tabsClassName, ...otherTabsProps } = tabsProps;

  return (
    <div style={{ position: 'relative' }} onScroll={handleScroll} {...props}>
      <div
        className={classnames(
          !gradient.right && olt.Tabs,
          gradient.right && olt.TabsForceScroll,
          gradient.left && olt.hasGradientLeft,
          gradient.right && olt.hasGradientRight,
          tabsClassName,
        )}
        ref={tabBar}
        {...otherTabsProps}
      >
        {React.Children.map(children, (element) =>
          React.cloneElement(element, {
            onSelect,
            active: value === element.props.value,
          }),
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  /**
   * The currently selected tab
   */
  value: string.isRequired,
  /**
   * The callback when selecting a tab
   */
  onSelect: func.isRequired,
  /**
   * The tabs to render
   */
  children: node.isRequired,
  /**
   * additinal classes for the container component
   */
  className: string,
  /**
   * Props for tabs
   */
  tabsProps: shape({ className: string }),
};

Tabs.defaultProps = {
  className: null,
  tabsProps: {},
};
