import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as olt from '@lightelligence/styles';
import { Select } from '../src/controls/Select';

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
    fetch('/react/versions_json.txt').then((response) => {
      if (response.status === 200) {
        const versionList = JSON.parse(response.text()).sort();
        createOptions(versionList);
      }
    });
  }, [createOptions]);

  return (
    <div className={olt.uMarginTop2}>
      <Select
        label="Select an option"
        value={version}
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
