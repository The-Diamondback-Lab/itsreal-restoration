import PropTypes from 'prop-types';

/**
 * @param {ArticleContentPropTypes} props
 */
export default function ArticleContent(props) {
  return (
    <div id="article-container">
      <h1>{props.title}</h1>
        <p className="byline">By <a href="https://TODO.com">John Doe</a></p>
        <div dangerouslySetInnerHTML={{__html: props.content || ''}} />
    </div>
  )
}

ArticleContent.propTypes = {
  title: PropTypes.string.isRequired
}

/**
 * @typedef ArticleContentPropTypes
 * @prop {string} title
 * @prop {string} content
 */
