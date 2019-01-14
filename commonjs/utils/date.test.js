'use strict';

var _date = require('./date');

test('Test date formater', function() {
  // by string
  var value = '2018-10-25T14:03:28.952Z';
  expect((0, _date.date)(value).toString()).toBe('25.10.2018'); // default string t

  expect((0, _date.date)(value).dateFormat).toBe('25.10.2018');
  expect((0, _date.date)(value).timeFormat).toBe('14:03');
  expect((0, _date.date)(value).longFormat).toBe('25.10.2018 14:03');
});
