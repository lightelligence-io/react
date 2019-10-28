export const getStringValue = (value, defaultValue) => {
  if (value === undefined || value === null) {
    return '';
  }

  const stringValue = `${value}`;
  if (stringValue.length === 0 && defaultValue !== undefined) {
    return getStringValue(defaultValue);
  }

  return stringValue;
};
