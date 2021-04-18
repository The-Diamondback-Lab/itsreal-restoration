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
    const { data } = this.props;
    let title = data.path.split('-').join(' ');

    return (
      <React.Fragment>
        <img className="article-cover" src="/assets/part1-bg.jpg" />
        <div id="article-container">
          <h1>{title}</h1>
          <p className="byline">By John Doe</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur officiis obcaecati labore molestiae ratione atque, optio sequi cum omnis quis, facilis eaque? Id vitae quam officiis repellat voluptatum quis.</p>
        </div>
      </React.Fragment>
    );

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
