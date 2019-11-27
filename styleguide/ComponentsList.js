import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getHash } from 'react-styleguidist/lib/client/utils/handleHash'; // eslint-disable-line
import * as oltStyles from '@lightelligence/styles';

const ComponentsListRenderer = ({ items }) => {
  const pagePerSection = true;
  const visibleItems = items.filter((item) => item.visibleName);

  if (!visibleItems.length) {
    return null;
  }

  const { hash, pathname } = window.location;
  const windowHash = pathname + (pagePerSection ? hash : getHash(hash));
  return (
    <ul className="components-list">
      {visibleItems.map(
        ({
          sectionDepth,
          heading,
          visibleName,
          href,
          content,
          shouldOpenInNewTab,
        }) => {
          const isItemSelected = windowHash === href;
          return (
            <li key={href}>
              <a
                className={classnames(
                  oltStyles.Link,
                  'components-list--link',
                  isItemSelected && 'components-list--link-selected',
                  (heading || sectionDepth === 0) &&
                    'components-list--link-header',
                )}
                href={href}
                target={shouldOpenInNewTab ? '_blank' : undefined}
              >
                {visibleName}
              </a>
              {content}
            </li>
          );
        },
      )}
    </ul>
  );
};

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired, // eslint-disable-line
};

// eslint-disable-next-line
export default ComponentsListRenderer;
