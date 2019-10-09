import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';

import {
  H500,
  H400,
  H300,
  H200,
  H100,
  Content,
  Description,
  Support,
  Code,
} from '.';

describe('Fonts', () => {
  test('H500', () => {
    const { getByText } = render(<H500>H500</H500>);
    const button = getByText('H500');
    expect(button.classList.contains(oltStyles.uH500)).toBe(true);
  });
  test('H400', () => {
    const { getByText } = render(<H400>H400</H400>);
    const button = getByText('H400');
    expect(button.classList.contains(oltStyles.uH400)).toBe(true);
  });
  test('H300', () => {
    const { getByText } = render(<H300>H300</H300>);
    const button = getByText('H300');
    expect(button.classList.contains(oltStyles.uH300)).toBe(true);
  });
  test('H200', () => {
    const { getByText } = render(<H200>H200</H200>);
    const button = getByText('H200');
    expect(button.classList.contains(oltStyles.uH200)).toBe(true);
  });
  test('H100', () => {
    const { getByText } = render(<H100>H100</H100>);
    const button = getByText('H100');
    expect(button.classList.contains(oltStyles.uH100)).toBe(true);
  });
  test('Content', () => {
    const { getByText } = render(<Content>Content</Content>);
    const button = getByText('Content');
    expect(button.classList.contains(oltStyles.uContent)).toBe(true);
  });
  test('Description', () => {
    const { getByText } = render(<Description>Description</Description>);
    const button = getByText('Description');
    expect(button.classList.contains(oltStyles.uDescription)).toBe(true);
  });
  test('Support', () => {
    const { getByText } = render(<Support>Support</Support>);
    const button = getByText('Support');
    expect(button.classList.contains(oltStyles.uSupport)).toBe(true);
  });
  test('Code', () => {
    const { getByText } = render(<Code>Code</Code>);
    const button = getByText('Code');
    expect(button.classList.contains(oltStyles.uCode)).toBe(true);
  });
});
