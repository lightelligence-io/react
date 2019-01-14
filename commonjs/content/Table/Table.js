'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Table = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
);

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/toConsumableArray'),
);

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/classCallCheck'),
);

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/createClass'),
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/possibleConstructorReturn'),
);

var _getPrototypeOf3 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/getPrototypeOf'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/inherits'),
);

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/assertThisInitialized'),
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/defineProperty'),
);

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

var Table =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Table, _PureComponent);

    function Table() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Table);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Table)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'handleRowClick',
        function(event) {
          var _this$props = _this.props,
            selectable = _this$props.selectable,
            onSelect = _this$props.onSelect,
            rows = _this$props.rows;
          var rowElement = event.target.closest('tr');
          var index = (0, _toConsumableArray2.default)(
            rowElement.parentNode.children,
          ).indexOf(rowElement);
          var row = rows[index];
          selectable && onSelect && onSelect(row);
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'renderRow',
        function(row, rowIndex) {
          var children = _this.props.children;
          return _react.default.createElement(
            'tr',
            {
              className: (0, _classnames.default)(
                ''.concat(_constants.OLT_NAMESPACE, 'Table-row'),
                ''.concat(_constants.OLT_NAMESPACE, 'Table-row--selectable'),
              ),
              key: rowIndex,
              onClick: _this.handleRowClick,
            },
            children.map(function(cell, cellIndex) {
              if (!cell) return cell;
              var field = cell.props.field;
              var key = ''
                .concat(field, '-')
                .concat(rowIndex, '-')
                .concat(cellIndex); // eslint-disable-line

              return (0, _react.cloneElement)(cell, {
                key: key,
                field: field,
                row: row,
                rowIndex: rowIndex,
                cellIndex: cellIndex,
              });
            }),
          );
        },
      );
      return _this;
    }

    (0, _createClass2.default)(Table, [
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            header = _this$props2.header,
            rows = _this$props2.rows,
            className = _this$props2.className,
            selectable = _this$props2.selectable,
            justify = _this$props2.justify,
            props = (0, _objectWithoutProperties2.default)(_this$props2, [
              'header',
              'rows',
              'className',
              'selectable',
              'justify',
            ]);
          var base = ''.concat(_constants.OLT_NAMESPACE, 'Table');
          return _react.default.createElement(
            'div',
            {
              className: ''.concat(_constants.OLT_NAMESPACE, 'u-overflowXAuto'),
            },
            _react.default.createElement(
              'table',
              (0, _extends2.default)(
                {
                  className: (0, _classnames.default)(
                    base,
                    selectable && ''.concat(base, '--selectable'),
                    justify && ''.concat(base, '--justify'),
                  ),
                },
                props,
              ),
              header,
              _react.default.createElement(
                'tbody',
                {
                  className: ''.concat(base, '-body'),
                },
                rows.map(this.renderRow),
              ),
            ),
          );
        },
      },
    ]);
    return Table;
  })(_react.PureComponent);

exports.Table = Table;
(0, _defineProperty2.default)(Table, 'propTypes', {
  header: _propTypes.element,
  className: _propTypes.string,
  selectable: _propTypes.bool,
  rows: (0, _propTypes.arrayOf)(_propTypes.object).isRequired,
  // eslint-disable-line
  children: (0, _propTypes.arrayOf)(_propTypes.element).isRequired,
  onSelect: _propTypes.func,
  justify: _propTypes.bool,
});
(0, _defineProperty2.default)(Table, 'defaultProps', {
  selectable: false,
  header: null,
  className: '',
  onSelect: null,
  justify: false,
});
