/**
 * @param {ArticleContentPropTypes} props
 */
export default function ArticleContent(props) {
  return (
    <div id="article-container">
      <h1>{props.title}</h1>
        <p className="byline">By John Doe</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur officiis obcaecati labore molestiae ratione atque, optio sequi cum omnis quis, facilis eaque? Id vitae quam officiis repellat voluptatum quis.</p>
    </div>
  )
}

/**
 * @typedef ArticleContentPropTypes
 * @prop {string} title
 */
