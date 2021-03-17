import PropTypes from 'prop-types';

/**
 * @param {ArticlePropTypes} props
 */
export default function Article(props) {
  return <div>{props.part}</div>;
}

Article.propTypes = {
  /** Indicates which part of the project to load */
  part: PropTypes.string.isRequired,
  /** Whether or not the article has a timeline */
  hasTimeline: PropTypes.bool
}

/**
 * @typedef ArticlePropTypes
 * @prop {string} part Indicates which part of the project to load
 * @prop {bool} [hasTimeline] Whether or not the article has a timeline
 */
