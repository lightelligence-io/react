import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { arrayOf, string } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

class TableHead extends PureComponent {
  render() {
    const { labels, className } = this.props;
    const classes = classnames(`${OLT_NAMESPACE}Table-row`, className);
    return React.createElement(
      'thead',
      {
        className: `${OLT_NAMESPACE}Table-head`,
      },
      React.createElement(
        'tr',
        {
          className: classes,
        },
        labels.map((label) =>
          React.createElement(
            'th',
            {
              key: `${label}`,
              className: `${OLT_NAMESPACE}Table-header`,
              style: {
                width: 'auto',
              },
            },
            label,
          ),
        ),
      ),
    );
  }
}

_defineProperty(TableHead, 'propTypes', {
  /**
   * list of labels for the header
   */
  labels: arrayOf(string).isRequired,
  className: string,
});

_defineProperty(TableHead, 'defaultProps', {
  className: '',
});

export { TableHead };
