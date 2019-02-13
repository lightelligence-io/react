"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = date;

/**
 * generate a two char value of numeric value
 *
 * extract that if required
 * @param value
 * @returns {string}
 * @example
 *  pad(1) => 01
 *  pad(11) => 11
 */
function pad(value) {
  return (value < 10 ? '0' : '') + value;
}
/**
 * generate a simple time/date format based on string input if valiad
 *
 * @param value
 * @returns {value, dateObject, isValid, longFormat, timeFormat, dateFormat}
 * @example
 *  date('2018-10-25T14:03:28.952Z').longFormat => '25.10.2018 14:03'
 */


function date(value) {
  var dateObject = new Date(value);
  var isValid = dateObject instanceof Date && !isNaN(dateObject);
  return {
    value: value,
    dateObject: dateObject,
    isValid: isValid,

    get longFormat() {
      var dateFormat = this.dateFormat,
          timeFormat = this.timeFormat;
      return [dateFormat, timeFormat].join(' ');
    },

    get timeFormat() {
      if (isValid) {
        var hours = dateObject.getHours();
        var timezone = dateObject.getTimezoneOffset() / 60;
        return [hours + timezone, pad(dateObject.getMinutes())].join(':');
      }

      return '';
    },

    get dateFormat() {
      if (isValid) {
        return [dateObject.getDate(), dateObject.getMonth() + 1, dateObject.getFullYear()].join('.');
      }

      return '';
    },

    toString: function toString() {
      return this.dateFormat;
    }
  };
}