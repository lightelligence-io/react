'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Modal = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
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

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/getPrototypeOf'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/inherits'),
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/defineProperty'),
);

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

var _Button = require('../Button');

var _types = require('./types');

var Modal =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Modal, _PureComponent);

    function Modal() {
      (0, _classCallCheck2.default)(this, Modal);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Modal).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Modal, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            title = _this$props.title,
            type = _this$props.type,
            open = _this$props.open,
            closable = _this$props.closable,
            fullscreen = _this$props.fullscreen,
            footer = _this$props.footer,
            onClose = _this$props.onClose,
            className = _this$props.className,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'title',
              'type',
              'open',
              'closable',
              'fullscreen',
              'footer',
              'onClose',
              'className',
            ]);
          var base = ''.concat(_constants.OLT_NAMESPACE, 'Modal');
          document.documentElement.style.overflow = open ? 'hidden' : '';
          return _react.default.createElement(
            'section',
            (0, _extends2.default)(
              {
                className: (0, _classnames.default)(
                  base,
                  fullscreen && ''.concat(base, '--fullscreen'),
                  type !== 'none' && ''.concat(base, '--').concat(type),
                  open && 'is-open',
                  className,
                ),
              },
              closable
                ? {
                    onClick: function onClick(e) {
                      return e.target === e.currentTarget && onClose();
                    },
                  }
                : undefined,
            ),
            _react.default.createElement(
              'div',
              (0, _extends2.default)(
                {
                  className: ''.concat(base, '-dialog'),
                },
                props,
              ),
              closable &&
                !fullscreen &&
                _react.default.createElement(_Button.Button, {
                  icon: 'close',
                  className: ''.concat(base, '-close'),
                  onClick: onClose,
                }),
              title &&
                _react.default.createElement(
                  'div',
                  {
                    className: ''.concat(base, '-header'),
                  },
                  title,
                ),
              children &&
                _react.default.createElement(
                  'div',
                  {
                    className: ''.concat(base, '-content'),
                  },
                  children,
                ),
              footer &&
                _react.default.createElement(
                  'div',
                  {
                    className: ''.concat(base, '-footer'),
                  },
                  footer,
                ),
            ),
            fullscreen &&
              closable &&
              _react.default.createElement(_Button.Button, {
                icon: 'close',
                className: ''.concat(base, '-close'),
                onClick: onClose,
              }),
          );
        },
      },
    ]);
    return Modal;
  })(_react.PureComponent);

exports.Modal = Modal;
(0, _defineProperty2.default)(Modal, 'propTypes', {
  children: _propTypes.node,
  title: _propTypes.node,
  type: (0, _propTypes.oneOf)([
    _types.MODAL_TYPE_ERROR,
    _types.MODAL_TYPE_SUCCESS,
    _types.MODAL_TYPE_INFO,
    _types.MODAL_TYPE_NONE,
  ]),
  open: _propTypes.bool.isRequired,
  footer: _propTypes.node,
  fullscreen: _propTypes.bool,
  onClose: _propTypes.func,
  closable: _propTypes.bool,
  className: _propTypes.string,
});
(0, _defineProperty2.default)(Modal, 'defaultProps', {
  title: null,
  children: null,
  type: _types.MODAL_TYPE_NONE,
  fullscreen: false,
  footer: null,
  onClose: null,
  closable: false,
  className: null,
});
