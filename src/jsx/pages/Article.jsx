import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {ArticlePropTypes} props
 */
export default class Article extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onReady();
    }, 0);
  }

  render() {
    return (<div>{this.props.part}</div>);
  }
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
