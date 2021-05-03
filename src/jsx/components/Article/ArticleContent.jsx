import PropTypes from 'prop-types';

import InnerHTML from 'dangerously-set-html-content';

/**
 * @param {ArticleContentPropTypes} props
 */
export default function ArticleContent(props) {
  let authorAnchors = props.authors.map((author) => {
    let authorLink = props.authorLinks[author.toLowerCase()];
    return `<a href="https://dbknews.com/author/${authorLink}">${author}</a>`
  }).join(' & ');
  let authorContainer = <span dangerouslySetInnerHTML={{__html: authorAnchors}}></span>

  return (
    <div id="article-container">
      <h1>{props.title}</h1>
        <p className="byline">By {authorContainer} </p>
        <InnerHTML html={props.content || ''} />
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
 * @prop {string[]} authors
 * @prop {Object.<string, string>} authorLinks
 */
