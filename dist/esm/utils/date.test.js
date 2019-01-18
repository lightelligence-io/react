import { date } from './date';
test('Test date formater', () => {
  // by string
  const value = '2018-10-25T14:03:28.952Z';
  expect(date(value).toString()).toBe('25.10.2018'); // default string t

  expect(date(value).dateFormat).toBe('25.10.2018');
  expect(date(value).timeFormat).toBe('14:03');
  expect(date(value).longFormat).toBe('25.10.2018 14:03');
});