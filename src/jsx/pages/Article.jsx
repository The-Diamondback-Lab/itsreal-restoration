import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ArticleContent from '../components/Article/ArticleContent';
import ShortNavigation from '../components/Article/ShortNavigation';
import Footer from '../components/Footer';

/**
 * @extends React.Component<ArticlePropTypes>
 */
export default class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    try {
      let resp = await axios.get(`/data/part${this.props.pageNumber+1}.html`);
      let content = resp.data
        .split(/\r?\n/gi)
        .filter(x => x.length)
        .map(x => `<p>${x}</p>`)
        .join('');

      this.setState({
        content
      });
      this.props.onReady();
    } catch (err) {
      this.setState({ err }, this.props.onReady);
    }
  }

  render() {
    const { path, pageNumber, prevPagePath, nextPagePath, authors, authorLinks } = this.props;
    const { content } = this.state;

    let title = path.split('-').join(' ');
    let imgCoverMobilePath = `/assets/part${pageNumber+1}-cover-mobile.jpg`;

    return (
      <React.Fragment>
        <div className="article-cover">
          <img src={imgCoverMobilePath} />
          <div></div>
        </div>
        <div id="page-container">
          <ArticleContent
            title={title}
            content={content}
            authors={authors}
            authorLinks={authorLinks} />
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
