import React from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const TextFieldLabel = ({ htmlFor, label, readOnly, required }) => (
  <label
    className={classnames(olt.Label, olt.TextFieldLabel)}
    htmlFor={htmlFor}
  >
    {label}
    {required && !readOnly ? '*' : null}
  </label>
);

TextFieldLabel.propTypes = {
  label: string.isRequired,
  readOnly: bool.isRequired,
  required: bool.isRequired,
  htmlFor: string.isRequired,
};

export { TextFieldLabel };
