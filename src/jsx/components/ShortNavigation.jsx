import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * @param {ShortNavigationPropTypes} props
 */
export default function ShortNavigation(props) {
  let prevNav = null;
  let nextNav = null;

  if (props.prevPagePath) {
    prevNav = (
      <div>
        <FiChevronLeft size="4em" />
        <a>{props.pageNumber-1}</a>
      </div>
    );
  }

  if (props.nextPagePath) {
    nextNav = (
      <div>
        <a>{props.pageNumber+1}</a>
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
