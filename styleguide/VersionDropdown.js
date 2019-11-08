import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as olt from '@lightelligence/styles';
import { V2Select } from '../src/controls/V2Select';

const VersionDropdownRenderer = ({ version }) => {
  const [options, setOptions] = useState([]);

  const createOptions = useCallback(
    (versions) =>
      setOptions(
        versions.map((v) => ({ value: v, label: `/react/releases/${v}` })),
      ),
    [],
  );

  useEffect(() => {
    fetch('/react/versions.json').then((response) => {
      if (response.status === 200) {
        const versionList = JSON.parse(response.text()).sort();
        createOptions(versionList);
      }
    });
  }, [createOptions]);

  return (
    <div className={olt.uMarginTop2}>
      <V2Select
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
