'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactTestingLibrary = require('react-testing-library');

var _Snackbar = require('../Snackbar');

describe('Snackbar', function() {
  test('renders without failing', function() {
    var _render = (0, _reactTestingLibrary.render)(
        _react.default.createElement(_Snackbar.Snackbar, null, 'Test'),
      ),
      getByText = _render.getByText;

    getByText('Test');
  });
});
