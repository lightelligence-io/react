import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as olt from '@lightelligence/styles';
import { V2Select } from '../src/controls/V2Select';

const VersionDropdownRenderer = ({ version }) => {
  const [options, setOptions] = useState([]);

  const createOptions = useCallback(
    (versions) =>
      setOptions(
        versions.map((v) => ({ value: `/react/releases/${v}`, label: v })),
      ),
    [],
  );

  useEffect(() => {
    fetch('/react/versions_json.txt')
      .then((response) => (response.status === 200 ? response.text() : '[]'))
      .then((versions) => {
        const versionList = JSON.parse(versions).sort();
        createOptions(versionList);
      });
  }, [createOptions]);

  return (
    <div className={olt.uMarginTop2}>
      <V2Select
        label="Select an option"
        value={`/react/releases/${version}`}
        onChange={(v) => {
          window.location.href = v.target.value;
        }}
        options={options}
        className={olt.uMarginBottom0}
      />
    </div>
  );
};

VersionDropdownRenderer.propTypes = {
  version: PropTypes.node.isRequired,
};

// eslint-disable-next-line
export default VersionDropdownRenderer;
