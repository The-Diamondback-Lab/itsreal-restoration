import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

/**
 * @param {ShortNavigationPropTypes} props
 */
export default function ShortNavigation(props) {
  const { pageNumber, prevPagePath, nextPagePath } = props;

  let prevNav = null;
  let nextNav = null;

  if (prevPagePath) {
    prevNav = (
      <a href={'/' + prevPagePath}>
        <FiChevronLeft size="3.5em" strokeWidth="1px" />
        <span>{romanNumerals[pageNumber-1]}</span>
      </a>
    );
  }

  if (nextPagePath) {
    nextNav = (
      <a href={'/' + nextPagePath}>
        <span>{romanNumerals[pageNumber+1]}</span>
        <FiChevronRight size="3.5em" strokeWidth="1px" />
      </a>
    );
  }

  return (
    <div className="nav short">
      {prevNav}
      {nextNav}
    </div>
  );
}

/**
 * @typedef ShortNavigationPropTypes
 * @prop {number} pageNumber
 * @prop {string} [prevPagePath]
 * @prop {string} [nextPagePath]
 */
