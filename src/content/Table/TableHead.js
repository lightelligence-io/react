import React, { PureComponent } from 'react';
import { arrayOf, string } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

class TableHead extends PureComponent {
  static propTypes = {
    /**
     * list of labels for the header
     */
    labels: arrayOf(string).isRequired,

    className: string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { labels, className } = this.props;
    const classes = classnames(`${OLT_NAMESPACE}Table-row`, className);

    return (
      <thead className={`${OLT_NAMESPACE}Table-head`}>
        <tr className={classes}>
          {labels.map((label) => (
            <th
              key={`${label}`}
              className={`${OLT_NAMESPACE}Table-header`}
              style={{ width: 'auto' }}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export { TableHead };
