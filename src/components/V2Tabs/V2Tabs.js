import React, { useEffect, useState, useCallback, useRef } from 'react';
import { func, string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const V2Tabs = (props) => {
  const tabBar = useRef(null);
  const [gradient, setGradient] = useState({ left: false, right: false });

  const handleScroll = useCallback(() => {
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
  }, [tabBar, handleScroll]);

  const { value, onSelect, className, children, ...rest } = props;

  return (
    <div {...rest} style={{ position: 'relative' }} onScroll={handleScroll}>
      <div
        className={classnames(
          !gradient.right && olt.V2Tabs,
          gradient.right && olt.V2TabsForceScroll,
          gradient.left && olt.hasGradientLeft,
          gradient.right && olt.hasGradientRight,
        )}
        ref={tabBar}
        data-testid="Tabs"
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

V2Tabs.propTypes = {
  value: string.isRequired,
  onSelect: func.isRequired,
  children: node.isRequired,
  className: string,
};

V2Tabs.defaultProps = {
  className: null,
};
