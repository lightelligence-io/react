import React from 'react';
import {
  render,
  fireEvent,
  queryAllByText,
  getByText as globalGetByText,
} from 'react-testing-library';
import { Button } from '../../components/Button/Button';

import { DataCards, DataCardsItem } from './index';

const defaultFields = [
  { key: 'name', label: 'Name', props: { align: 'center' } },
  { key: 'birthday', label: 'Birthday' },
  { key: 'removeButton', label: '' },
];
const defaultRows = [
  {
    id: '1',
    name: 'Aron',
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Karli',
    birthday: '20.01.1990',
  },
];

const getChildren = ({
  // eslint-disable-next-line react/prop-types
  renderItem = ({ row }) => <div>Name: {row.name}</div>,
  onClick = jest.fn(),
} = {}) => [
  <DataCardsItem key="1" field="name" align="center" render={renderItem} />,
  <DataCardsItem key="2" field="birthday" />,
  <DataCardsItem
    key="3"
    field="-"
    render={({ row }) => (
      <Button onClick={() => onClick(`id ${row.id}`)}>Remove {row.name}</Button>
    )}
  />,
];

const renderDataCards = ({
  rows = defaultRows,
  fields = defaultFields,
  children = getChildren(),
  ...props
} = {}) => {
  return render(
    <DataCards rows={rows} fields={fields} {...props}>
      {children}
    </DataCards>,
  );
};

describe('DataCards', () => {
  test('provides row data to render functions', async () => {
    const onClick = jest.fn();
    const { getByText, findByText } = renderDataCards({
      children: getChildren({ onClick }),
    });

    fireEvent.click(await findByText('Remove Aron'));

    expect(onClick).toHaveBeenCalledWith('id 1');
    fireEvent.click(getByText('Remove Karli'));
    expect(onClick).toHaveBeenCalledWith('id 2');

    await getByText('Name: Aron');
    await getByText('Name: Karli');
  });

  test('renders field value by default', async () => {
    const { getByText, findByText } = renderDataCards();

    await findByText('20.01.1995');
    await getByText('20.01.1990');
  });

  test('can render fragments', async () => {
    // eslint-disable-next-line react/prop-types
    const fragmentRenderItem = ({ row }) => (
      <>
        <div>Name: {row.name}</div>
      </>
    );
    const { getByText, findByText } = renderDataCards({
      children: getChildren({ renderItem: fragmentRenderItem }),
    });

    await findByText('Name: Aron');
    await getByText('Name: Karli');
  });

  test('handles row clicks, and passes correct data to callback', async () => {
    const onClick = jest.fn();
    const { getByText, findByText } = renderDataCards({
      selectable: true,
      onClick,
      children: getChildren(),
    });

    fireEvent.click(await findByText('Name: Aron'));
    expect(onClick).toHaveBeenCalledWith({ index: 0, row: defaultRows[0] });
    fireEvent.click(getByText('Name: Karli'));
    expect(onClick).toHaveBeenCalledWith({ index: 1, row: defaultRows[1] });
  });

  test('hides title when withoutTitle is set', async () => {
    const fields = [{ key: 'name', label: 'Name' }];
    const rows = [{ name: 'Peter' }];
    const { getByTestId, findByText } = render(
      <DataCards fields={fields} rows={rows}>
        <DataCardsItem withoutTitle field="name" data-testid="item" />
      </DataCards>,
    );
    await findByText('Peter');
    const item = getByTestId('item');
    expect(queryAllByText(item, 'Name').length).toBe(0);
  });

  test('renders field title by default', async () => {
    const fields = [{ key: 'name', label: 'Name' }];
    const rows = [{ name: 'Peter' }];
    const { findByTestId } = render(
      <DataCards fields={fields} rows={rows}>
        <DataCardsItem field="name" data-testid="item" />
      </DataCards>,
    );

    const item = await findByTestId('item');
    globalGetByText(item, 'Name');
  });
});
