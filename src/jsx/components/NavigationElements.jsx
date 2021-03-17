import React from 'react';

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
  // Text used for the anchor tags
  let anchorText = [ 'I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.' ];
  // Links for the anchor tags (this should be a parallel-array with anchorText)
  let links = [
    'on-her-own', 'inside-the-culture', 'care-granted', 'i-can-never-escape',
    'work-in-progress', 'insufficient-evidence', 'first-line-of-defense'
  ];

  return (
    <div id="navigation-elems">
      {links.map((link, i) =>
        <a href={'/' + link}
          key={`nav-part-${i}`}
          target="_blank"
          rel="noreferrer">{anchorText[i]}</a>
      )}
    </div>
  );
}
