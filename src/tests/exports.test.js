import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
  Avatar,
  Button,
  Card,
  Divider,
  Dropdown,
  Icon,
  Menu,
  Modal,
  Navbar,
  Snackbar,
  Stepper,
  Tabs,
  Tab,
  Tag,
  Tooltip,
  Table,
  TableCell,
  Headline,
  List,
  Paragraph,
  Image,
  Link,
  Checkbox,
  Label,
  Radio,
  RadioGroup,
  Select,
  SelectField,
  TextField,
  Container,
  Frame,
  Grid,
  oltStyles,
  theme,
} from '..';

import oltStyles2, { theme as theme2 } from '../styles'; // eslint-disable-line import/no-duplicates

describe('Avatar', () => {
  it('should render without failing', () => {
    render(<Avatar type="user" name="Jim" size="l" />);
  });
});

describe('Button', () => {
  it('should render without failing', () => {
    render(<Button />);
  });
});

describe('Card', () => {
  it('should render without failing', () => {
    render(<Card />);
  });
});

describe('Checkbox', () => {
  it('should render withour failing', () => {
    render(<Checkbox />);
  });
});

describe('Container', () => {
  it('should render withour failing', () => {
    render(<Container />);
  });
});

describe('Divider', () => {
  it('should render without failing', () => {
    render(<Divider />);
  });
});

describe('Dropdown', () => {
  it('should render without failing', () => {
    render(<Dropdown label="Dropdown">Dropdown content</Dropdown>);
  });
});

describe('Frame', () => {
  it('should render withour failing', () => {
    render(<Frame />);
  });
});

describe('Grid', () => {
  it('should render withour failing', () => {
    render(<Grid />);
  });
});

describe('Headline', () => {
  it('should render without failing', () => {
    render(<Headline>Foo Bar</Headline>);
  });
});

describe('Icon', () => {
  it('should render without failing', () => {
    render(<Icon name="close" />);
  });
});

describe('Image', () => {
  it('should render without failing', () => {
    render(<Image src="" />);
  });
});

describe('Label', () => {
  it('should render withour failing', () => {
    render(<Label />);
  });
});

describe('Link', () => {
  it('should render without failing', () => {
    render(
      <Router history={createBrowserHistory()}>
        <Link to="" />
      </Router>,
    );
  });
});

describe('List', () => {
  it('should render without failing', () => {
    render(<List />);
  });
});

describe('Menu', () => {
  it('should render without failing', () => {
    render(<Menu />);
  });
});

describe('Modal', () => {
  it('should render without failing', () => {
    render(<Modal open={false} />);
  });
});

describe('Navbar', () => {
  it('should render without failing', () => {
    render(<Navbar />);
  });
});

describe('Paragraph', () => {
  it('should render without failing', () => {
    render(<Paragraph />);
  });
});

describe('Radio', () => {
  it('should render withour failing', () => {
    render(<Radio value="foo" />);
  });
});

describe('RadioGroup', () => {
  it('should render withour failing', () => {
    render(
      <RadioGroup name="radio-group" value="foo" onChange={jest.fn()}>
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
      </RadioGroup>,
    );
  });
});

describe('Select', () => {
  it('should render withour failing', () => {
    render(<Select options={[]} />);
  });
});

describe('SelectField', () => {
  it('should render withour failing', () => {
    render(<SelectField label="" options={[]} />);
  });
});

describe('Snackbar', () => {
  it('should render without failing', () => {
    render(<Snackbar />);
  });
});

describe('Stepper', () => {
  it('should render without failing', () => {
    render(<Stepper steps={[]} />);
  });
});

describe('Table', () => {
  it('should render without failing', () => {
    render(
      <Table rows={[]}>
        <TableCell field="" />
        <TableCell field="" />
      </Table>,
    );
  });
});

describe('Tabs', () => {
  it('should render without failing', () => {
    render(
      <Tabs value="tab1" onSelect={() => {}}>
        <Tab label="Tab A" value="tab1" />
      </Tabs>,
    );
  });
});

describe('Tag', () => {
  it('should render without failing', () => {
    render(<Tag />);
  });
});

describe('TextField', () => {
  it('should render withour failing', () => {
    render(<TextField />);
  });
});

describe('Tooltip', () => {
  it('should render without failing', () => {
    render(
      <Tooltip message="foo">
        <p>bar</p>
      </Tooltip>,
    );
  });
});

describe('oltStyles', () => {
  it('should be an object', () => {
    expect(oltStyles).not.toBeUndefined();
    expect(typeof oltStyles).toBe('object');
  });
  it('should have a Card property', () => {
    expect(typeof oltStyles.Card).toEqual('string');
  });
});

describe('theme', () => {
  it('should be an object', () => {
    expect(theme).not.toBeUndefined();
    expect(typeof theme).toBe('object');
  });
  it('should have a spacing property', () => {
    expect(typeof theme.spacing).toEqual('object');
  });
});

describe('oltStyles from styles', () => {
  it('should be an object', () => {
    expect(oltStyles2).not.toBeUndefined();
    expect(typeof oltStyles2).toBe('object');
  });
  it('should have a Card property', () => {
    expect(typeof oltStyles2.Card).toEqual('string');
  });
});

describe('theme from styles', () => {
  it('should be an object', () => {
    expect(theme2).not.toBeUndefined();
    expect(typeof theme2).toBe('object');
  });
  it('should have a spacing property', () => {
    expect(typeof theme2.spacing).toEqual('object');
  });
});
