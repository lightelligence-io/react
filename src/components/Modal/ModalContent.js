import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

import { Headline } from '../../content/Headline';
import { Container } from '../../layout/Container';

class ModalContent extends PureComponent {
  static propTypes = {
    className: string,
    children: node,
    headline: node,
    error: bool,
  };

  static defaultProps = {
    className: null,
    children: null,
    headline: null,
    error: false,
  };

  render() {
    const { children, className, headline, error, ...props } = this.props;

    return (
      <div className={classnames(olt.ModalInner, className)} {...props}>
        {headline && (
          <Container noPadding>
            <Headline size={6}>{headline}</Headline>
          </Container>
        )}
        <Container noPadding>{children}</Container>
      </div>
    );
  }
}

export { ModalContent };
