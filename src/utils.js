/*
Generates a list of headers and blurbs for the home page
*/

import tocData from './data/toc.json';

const DEFAULT_HEADER = "‘It’s real’";
const DEFAULT_BLURB = "A seven-part look at how sexual assault is handled at the University of Maryland.";

/**
 * @type {Object<string, string>}
 */
export const headers = { DEFAULT: DEFAULT_HEADER };
/**
 * @type {Object<string, string>}
 */
export const blurbs = { DEFAULT: DEFAULT_BLURB };

tocData.forEach((x, i) => {
  let header = x.path.replace(/-/gi, ' ');
  let blurb = x.blurb;

  let key = `part-${i+1}`;
  headers[key] = header;
  blurbs[key] = blurb;
});
