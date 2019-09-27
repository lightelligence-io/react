import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';

import { V2Tabs, V2Tab } from '.';
import { oltStyles } from '../..';

const renderTabs = (onSelect) =>
  render(
    <V2Tabs value="tab1" onSelect={onSelect}>
      <V2Tab label="Tab A" value="tab1" />
      <V2Tab label="Tab B" value="tab2" />
      <V2Tab label="Tab C" value="tab3" />
      <V2Tab label="Tab D" value="tab4" />
      <V2Tab label="Tab E" value="tab5" />
      <V2Tab label="Tab F" value="tab6" />
    </V2Tabs>,
  );

describe('Tabs render correctly', () => {
  test('renders Tabs with active Tab', () => {
    const { getByText } = renderTabs(() => {});
    getByText('Tab A');
    getByText('Tab B');
    getByText('Tab C');
    getByText('Tab D');
    getByText('Tab E');
    getByText('Tab F');
    const tabA = getByText('Tab A');
    expect(tabA.classList.contains(oltStyles.V2TabsLink)).toBe(true);
    expect(tabA.classList.contains(oltStyles.isActive)).toBe(true);
    const tabB = getByText('Tab B');
    expect(tabB.classList.contains(oltStyles.V2TabsLink)).toBe(true);
    expect(tabB.classList.contains(oltStyles.isActive)).toBe(false);
  });
  test('renders inactive Tab', () => {
    const onSelect = jest.fn();
    const { getByText } = renderTabs(onSelect);
    getByText('Tab A');
  });
});
describe('Tabs can be clicked', () => {
  test('clicks active Tab', () => {
    const onSelect = jest.fn();
    const { getByText } = renderTabs(onSelect);
    const tab = getByText('Tab A');
    fireEvent.click(tab);
    expect(onSelect).toHaveBeenCalled();
    expect(tab.classList.contains(oltStyles.isActive)).toBe(true);
  });
  test('clicks inactive Tab', () => {
    const onSelect = jest.fn();
    const { getByText } = renderTabs(onSelect);
    const tab = getByText('Tab B');
    expect(!tab.classList.contains(oltStyles.isActive)).toBe(true);
    fireEvent.click(tab);
    expect(onSelect).toHaveBeenCalled();
    wait(() => expect(tab.classList.contains(oltStyles.isActive)).toBe(true));
  });
});

describe('Tabs render gradient when scrolled', () => {
  Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', {
    value: 100,
  });
  Object.defineProperty(window.HTMLElement.prototype, 'scrollWidth', {
    value: 200,
  });
  test('renders gradient right', () => {
    Object.defineProperty(window.HTMLElement.prototype, 'scrollLeft', {
      writable: true,
      value: 0,
    });

    const onSelect = jest.fn();
    const { getByTestId } = renderTabs(onSelect);
    const tabs = getByTestId('Tabs');
    expect(tabs.classList.contains(oltStyles.hasGradientRight)).toBe(true);
    expect(!tabs.classList.contains(oltStyles.hasGradientLeft)).toBe(true);
  });

  test('renders gradient left and right', () => {
    Object.defineProperty(window.HTMLElement.prototype, 'scrollLeft', {
      value: 50,
    });

    const onSelect = jest.fn();
    const { getByTestId } = renderTabs(onSelect);
    const tabs = getByTestId('Tabs');
    expect(tabs.classList.contains(oltStyles.hasGradientRight)).toBe(true);
    expect(tabs.classList.contains(oltStyles.hasGradientLeft)).toBe(true);
  });

  test('renders gradient left', () => {
    Object.defineProperty(window.HTMLElement.prototype, 'scrollLeft', {
      value: 100,
    });

    const onSelect = jest.fn();
    const { getByTestId } = renderTabs(onSelect);
    const tabs = getByTestId('Tabs');
    expect(!tabs.classList.contains(oltStyles.hasGradientRight)).toBe(true);
    expect(tabs.classList.contains(oltStyles.hasGradientLeft)).toBe(true);
  });
});
