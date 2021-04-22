import React from 'react';
import PropTypes from 'prop-types';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ArticleContent from '../components/ArticleContent';

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
    const { data } = this.props;
    let title = data.path.split('-').join(' ');

    return (
      <React.Fragment>
        <img className="article-cover" src="/assets/part1-bg.jpg" />
        <div id="page-container">
          <ArticleContent title={title} />
        </div>
      </React.Fragment>
    );
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
