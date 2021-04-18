import React from 'react';
import PropTypes from 'prop-types';

/**
 * @extends React.Component<ArticlePropTypes>
 */
export default class Article extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onReady();
    }, 0);
  }

  render() {
    return (<div>{this.props.data.path}</div>);
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    hasTimeline: PropTypes.bool
  })
}

/**
 * @typedef ArticlePropTypes
 * @prop {{path: string, hasTimeline?: boolean}} data
 */
