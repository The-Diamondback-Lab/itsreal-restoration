/*
Generates a list of headers and blurbs for the home page
*/

import tocData from './data/toc.json';
import authorLinks from './data/author-links.json';

const DEFAULT_HEADER = "Unequal";
const DEFAULT_BLURB = "A seven-part look at the history of segregation on the University of Maryland's campus";

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

export { tocData };
export { authorLinks };
