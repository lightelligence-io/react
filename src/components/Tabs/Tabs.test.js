import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { Tabs, Tab } from '.';
import { oltStyles } from '../..';

const renderTabs = (onSelect) =>
  render(
    <Tabs value="tab1" onSelect={onSelect} data-testid="Tabs">
      <Tab label="Tab A" value="tab1" />
      <Tab label="Tab B" value="tab2" />
      <Tab label="Tab C" value="tab3" />
      <Tab label="Tab D" value="tab4" />
      <Tab label="Tab E" value="tab5" />
      <Tab label="Tab F" value="tab6" />
    </Tabs>,
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
    expect(tabA.classList.contains(oltStyles.TabsLink)).toBe(true);
    expect(tabA.classList.contains(oltStyles.isActive)).toBe(true);
    const tabB = getByText('Tab B');
    expect(tabB.classList.contains(oltStyles.TabsLink)).toBe(true);
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
    expect(tab.classList.contains(oltStyles.isActive)).toBe(false);
    fireEvent.click(tab);
    expect(onSelect).toHaveBeenCalled();
  });
});

describe('Tabs render gradient when scrolled', () => {
  Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', {
    value: 100,
  });
  Object.defineProperty(window.HTMLElement.prototype, 'scrollWidth', {
    value: 200,
  });

  test('renders gradient right', async () => {
    Object.defineProperty(window.HTMLElement.prototype, 'scrollLeft', {
      writable: true,
      value: 0,
    });

    const onSelect = jest.fn();
    const { getByTestId } = renderTabs(onSelect);
    const tabs = getByTestId('Tabs').firstChild;
    await wait(() =>
      expect(tabs.classList.contains(oltStyles.hasGradientRight)).toBe(true),
    );
    await wait(() =>
      expect(tabs.classList.contains(oltStyles.hasGradientLeft)).toBe(false),
    );
  });

  test('renders gradient left and right', async () => {
    Object.defineProperty(window.HTMLElement.prototype, 'scrollLeft', {
      value: 50,
    });

    const onSelect = jest.fn();
    const { getByTestId } = renderTabs(onSelect);
    const tabs = getByTestId('Tabs').firstChild;
    await wait(() =>
      expect(tabs.classList.contains(oltStyles.hasGradientRight)).toBe(true),
    );
    await wait(() =>
      expect(tabs.classList.contains(oltStyles.hasGradientLeft)).toBe(true),
    );
  });

  test('renders gradient left', async () => {
    Object.defineProperty(window.HTMLElement.prototype, 'scrollLeft', {
      value: 100,
    });

    const onSelect = jest.fn();
    const { getByTestId } = renderTabs(onSelect);
    const tabs = getByTestId('Tabs').firstChild;
    await wait(() =>
      expect(tabs.classList.contains(oltStyles.hasGradientRight)).toBe(false),
    );
    await wait(() =>
      expect(tabs.classList.contains(oltStyles.hasGradientLeft)).toBe(true),
    );
  });
});
