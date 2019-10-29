import React, { useRef, useEffect } from 'react';
import { string, bool, number, func, node, arrayOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
// import { Description } from '../../content/Fonts';
import { V2Button } from '../V2Button';
import { Card } from '../Card';

const Filter = ({
  count,
  active,
  buttonLabel,
  content,
  open,
  toggleOpen,
  actions,
  onApply,
  ...props
}) => {
  const popup = useRef();

  // if (typeof toggleOpen !== 'function')
  // console.warn('@lighttelligence: Filter: toggleOpen is not a Function')

  // const handleApply = () => {
  //   if (onApply && typeof onApply === 'function') onApply()
  // }
  const handleOpen = () => {
    if (toggleOpen && typeof toggleOpen === 'function') toggleOpen();
  };

  const handleClickOutside = (event) => {
    if (open && popup.current && !popup.current.contains(event.target)) {
      handleOpen();
      event.preventDefault();
    }
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape' && open) {
      handleOpen();
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscKey, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscKey, false);
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <V2Button
        iconRight={open ? 'arrows-chevron-up' : 'arrows-chevron-down'}
        emphasis="secondary"
        className={active ? olt.V2ButtonDark : undefined}
        onClick={handleOpen}
      >
        {buttonLabel}
      </V2Button>
      {open && (
        <Card popup ref={popup}>
          {content}
          <Card className={classnames(olt.uBorderTop, olt.uMarginTop2)}>
            {actions}
          </Card>
        </Card>
      )}
    </div>
  );
};

Filter.propTypes = {
  /**
   * ...
   */
  count: number,
  /**
   * ...
   */
  active: bool,
  /**
   * ...
   */
  buttonLabel: string,
  /**
   * ...
   */
  content: node.isRequired,
  /**
   * ...
   */
  open: bool.isRequired,
  /**
   * Callback, ...
   * @param a ...
   */
  toggleOpen: func.isRequired,
  /**
   * ...
   */
  actions: arrayOf(node),
  /**
   * Callback, ...
   * @param a ...
   */
  onApply: func,
};

Filter.defaultProps = {
  count: -1,
  active: false,
  buttonLabel: 'Filter',
  actions: null,
  onApply: () => {},
};

export { Filter };
