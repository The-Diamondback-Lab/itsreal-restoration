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
      <div>
        <FiChevronLeft size="4em" />
        <a href={'/' + prevPagePath}>{romanNumerals[pageNumber-1]}</a>
      </div>
    );
  }

  if (nextPagePath) {
    nextNav = (
      <div>
        <a href={'/' + nextPagePath}>{romanNumerals[pageNumber+1]}</a>
        <FiChevronRight size="4em" />
      </div>
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
