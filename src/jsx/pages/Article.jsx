import React from 'react';
import PropTypes from 'prop-types';

import ArticleContent from '../components/ArticleContent';
import ShortNavigation from '../components/ShortNavigation';
import Footer from '../components/Footer';

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
    const { path, pageNumber, prevPagePath, nextPagePath } = this.props;
    let title = path.split('-').join(' ');

    return (
      <React.Fragment>
        <img className="article-cover" src="/assets/part1-bg.jpg" />
        <div id="page-container">
          <ArticleContent title={title} />
          <ShortNavigation
            pageNumber={pageNumber}
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath} />
          <div className="divider" />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  onReady: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  hasTimeline: PropTypes.bool,
  prevPagePath: PropTypes.string,
  nextPagePath: PropTypes.string
}

/**
 * @typedef ArticlePropTypes
 * @prop {() => void} onReady
 * @prop {string} path
 * @prop {number} pageNumber
 * @prop {boolean} [hasTimeline]
 * @prop {string} [prevPagePath]
 * @prop {string} [nextPagePath]
 */
