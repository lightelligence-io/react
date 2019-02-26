import React, { PureComponent } from 'react';
import { arrayOf, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

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

    return (
      <thead className={olt.TableHead}>
        <tr className={classnames(olt.TableRow, className)}>
          {labels.map((label) => (
            <th
              key={`${label}`}
              className={olt.TableHeader}
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
