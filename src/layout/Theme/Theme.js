import React, { useEffect, useRef } from 'react';
import { node, string } from 'prop-types';
import tinycolor from 'tinycolor2';

/**
 * The property name of the primary color
 *
 * @type {string}
 */
const primaryColorProperty = `--olt-primaryColor`;

/**
 * The property name of the sidebar color
 *
 * @type {string}
 */
const sidebarColorProperty = '--olt-sidebarColor';

/**
 * @typedef Mix
 * @property name   {string}    The name of the color to mix with
 * @property color  {string}    The hex value of the color to mix with
 * @property shades {number[]}  The shades that will be mixed with that color
 */

/**
 * Color mixes that need to be defined
 *
 * @type {Mix[]}
 */
const mixes = [
  {
    name: 'white',
    color: '#fff',
    shades: [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  },
  {
    name: 'black',
    color: '#000',
    shades: [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  },
  {
    name: 'secondary',
    color: '#0d122c',
    shades: [0.3, 0.4, 0.8],
  },
];

/**
 * Generate names and values for the custom properties that will be set
 *
 * @param color {string}  The color that will be set
 * @returns {Array<{ name: string, value: string }>}
 */
const generateProperties = (color) =>
  mixes
    .map((mix) =>
      mix.shades.map((shade) => ({
        name: `${primaryColorProperty}-${mix.name}-${shade * 100}`,
        value: tinycolor.mix(mix.color, color, shade * 100).toHexString(),
      })),
    )
    .reduce((result, item) => result.concat(item), [])
    .concat([{ name: primaryColorProperty, value: color }]);

export const Theme = ({ primaryColor, sidebarColor, children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
    const { style } = elementRef.current;
    generateProperties(primaryColor).forEach(({ name, value }) => {
      return primaryColor
        ? style.setProperty(name, value)
        : style.removeProperty(name);
    });
    if (sidebarColor) {
      style.setProperty(sidebarColorProperty, sidebarColor);
    } else {
      style.removeProperty(sidebarColorProperty);
    }
  }, [elementRef, primaryColor, sidebarColor]);

  return <div ref={elementRef}>{children}</div>;
};

Theme.propTypes = {
  /**
   * Sets the primary color
   */
  primaryColor: string,
  /**
   * Sets the sidebar color
   */
  sidebarColor: string,
  /**
   * Children
   */
  children: node,
};

Theme.defaultProps = {
  primaryColor: null,
  sidebarColor: null,
  children: null,
};
