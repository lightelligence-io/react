import React from 'react';
import { string, node, shape } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';

import * as olt from '@lightelligence/styles';

const getElement = (tag, type) => {
  if (tag) return tag;
  switch (type) {
    case 'H500':
      return 'h1';
    case 'H400':
      return 'h2';
    case 'H300':
      return 'h3';
    case 'H200':
      return 'h4';
    case 'H100':
      return 'h5';
    default:
      return 'p';
  }
};

const H = (type, params) => {
  const { tag, children, className, color, style, ...rest } = params;

  const Element = getElement(tag, type);

  return (
    <Element
      {...rest}
      className={classnames(
        olt[`u${type}`],
        color && olt[`uColor${pascalize(color)}`],
        className,
      )}
      style={{
        margin: 0,
        ...style,
      }}
    >
      {children}
    </Element>
  );
};

const H500 = (props) => H('H500', props);
H500.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
H500.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const H400 = (props) => H('H400', props);
H400.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
H400.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const H300 = (props) => H('H300', props);
H300.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
H300.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const H200 = (props) => H('H200', props);
H200.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
H200.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const H100 = (props) => H('H100', props);
H100.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
H100.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const Content = (props) => H('Content', props);
Content.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
Content.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const Description = (props) => H('Description', props);
Description.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
Description.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const Support = (props) => H('Support', props);
Support.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
Support.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

const Code = (props) => H('Code', props);
Code.propTypes = {
  tag: string,
  children: node.isRequired,
  color: string,
  className: string,
  style: shape({}),
};
Code.defaultProps = {
  tag: null,
  style: undefined,
  color: null,
  className: null,
};

export { H500, H400, H300, H200, H100, Content, Description, Support, Code };
