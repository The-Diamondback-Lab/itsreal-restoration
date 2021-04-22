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
    const { path } = this.props;
    let title = path.split('-').join(' ');

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
  onReady: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  hasTimeline: PropTypes.bool
}

/**
 * @typedef ArticlePropTypes
 * @prop {() => void} onReady
 * @prop {number} pageIndex
 * @prop {string} path
 * @prop {boolean} [hasTimeline]
 */
