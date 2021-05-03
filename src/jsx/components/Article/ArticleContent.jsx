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

  let timelineContent = null;
  if (props.timelineData) {
    let timelineEvents = props.timelineData.map((x, i) => (
      <div key={`timeline-event-${i}`} className="timeline-event" style={{marginTop: x.marginOffset}}>
        <p><b>{x.date}</b></p>
        <p>{x.text}</p>
      </div>
    ));

    timelineContent = <div className="timeline">{timelineEvents}</div>
  }

  return (
    <div id="article-container">
      <h1 ref={props.observerRef}>{props.title}</h1>
      <p className="byline">By {authorContainer}</p>
      <div className="main-content">
        {timelineContent}
        <InnerHTML html={props.content || ''} />
      </div>
    </div>
  )
}

ArticleContent.propTypes = {
  title: PropTypes.string.isRequired
}

/**
 * @typedef ArticleContentPropTypes
 * @prop {string} title
 * @prop {string[]} authors
 * @prop {Object.<string, string>} authorLinks
 * @prop {string} content
 * @prop {{date: string, text: string, marginOffset: number}[]} [timelineData]
 */
