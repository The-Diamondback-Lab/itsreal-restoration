import React from 'react';

import tocData from '../../data/toc.json';

/**
 * Gives a list of hyperlinked elements for navigating to different pages of
 * the project. The list of elements **are hardcoded**; however the returning
 * element has no specific or custom styles already applied to it. This allows
 * for the navigation elements to be used throughout the codebase; in the case
 * of adding or removing navigation, only this component will have to be
 * modified.
 * @returns a `div` element whose children are anchor tags `a`
 */
export default function NavigationElements() {
  console.log(tocData);

  return (
    <div id="navigation-elems">
      {tocData.map((data, i) =>
        <a href={'/' + data.path}
          key={`nav-part-${i+1}`}
          target="_blank"
          rel="noreferrer">{data.numeral}</a>
      )}
    </div>
  );
}
