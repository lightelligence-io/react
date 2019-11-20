import React from 'react';
import {
  render,
  fireEvent,
  queryAllByText,
  getByText as globalGetByText,
} from '@testing-library/react';
import { Button } from '../../components/Button/Button';

import { CardTable, CardTableItem } from './index';

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
  <CardTableItem key="1" field="name" align="center" render={renderItem} />,
  <CardTableItem key="2" field="birthday" />,
  <CardTableItem
    key="3"
    field="-"
    render={({ row }) => (
      <Button onClick={() => onClick(`id ${row.id}`)}>Remove {row.name}</Button>
    )}
  />,
];

const renderCardTable = ({
  rows = defaultRows,
  fields = defaultFields,
  children = getChildren(),
  ...props
} = {}) => {
  return render(
    <CardTable rows={rows} fields={fields} {...props}>
      {children}
    </CardTable>,
  );
};

describe('CardTable', () => {
  test('provides row data to render functions', async () => {
    const onClick = jest.fn();
    const { getByText, findByText } = renderCardTable({
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
    const { getByText, findByText } = renderCardTable();

    await findByText('20.01.1995');
    await getByText('20.01.1990');
  });

  test('can render fragments', async () => {
    // eslint-disable-next-line react/prop-types
    const fragmentRenderItem = ({ row }) => (
      <>
        {/* eslint-disable-next-line react/prop-types */}
        <div>Name: {row.name}</div>
      </>
    );
    const { getByText, findByText } = renderCardTable({
      children: getChildren({ renderItem: fragmentRenderItem }),
    });

    await findByText('Name: Aron');
    await getByText('Name: Karli');
  });

  test('handles row clicks, and passes correct data to callback', async () => {
    const onClick = jest.fn();
    const { getByText, findByText } = renderCardTable({
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
      <CardTable fields={fields} rows={rows}>
        <CardTableItem withoutTitle field="name" data-testid="item" />
      </CardTable>,
    );
    await findByText('Peter');
    const item = getByTestId('item');
    expect(queryAllByText(item, 'Name').length).toBe(0);
  });

  test('renders field title by default', async () => {
    const fields = [{ key: 'name', label: 'Name' }];
    const rows = [{ name: 'Peter' }];
    const { findByTestId } = render(
      <CardTable fields={fields} rows={rows}>
        <CardTableItem field="name" data-testid="item" />
      </CardTable>,
    );

    const item = await findByTestId('item');
    globalGetByText(item, 'Name');
  });
});
