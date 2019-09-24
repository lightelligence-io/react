import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { V2Tab } from '.';
import { oltStyles } from '../..';

describe('Notifications Render Correctly', () => {
  test('renders active Tab', () => {
    const { getByText } = render(
      <V2Tab active label="tab label" value="tab1" />,
    );
    getByText('tab label');
    const tab = getByText('tab label');
    expect(tab.classList.contains(oltStyles.V2TabsLink)).toBeTruthy();
    expect(tab.classList.contains(oltStyles.isActive)).toBeTruthy();
  });
  test('renders inactive Tab', () => {
    const { getByText } = render(
      <V2Tab active={false} label="tab label" value="tab1" />,
    );
    getByText('tab label');
    const tab = getByText('tab label');
    expect(tab.classList.contains(oltStyles.V2TabsLink)).toBeTruthy();
    expect(!tab.classList.contains(oltStyles.isActive)).toBeTruthy();
  });
  test('clicks active Tab', () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <V2Tab active label="tab label" value="tab1" onSelect={onSelect} />,
    );
    const tab = getByText('tab label');
    fireEvent.click(tab);
    expect(onSelect).toHaveBeenCalled();
  });
  test('clicks inactive Tab', () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <V2Tab
        active={false}
        label="tab label"
        value="tab1"
        onSelect={onSelect}
      />,
    );
    const tab = getByText('tab label');
    fireEvent.click(tab);
    expect(onSelect).toHaveBeenCalled();
  });
});
