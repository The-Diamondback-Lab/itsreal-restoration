import { tocData } from '../../../constants';

export default function FullNavigation(props) {
  let pageAnchors = tocData.map((toc, i) => {
    return <a key={`page-${i}`} href={'/' + toc.path}>{toc.numeral}</a>
  });

  let opacity = props.articleTitleInView ? 0 : 1;

  return (
    <div style={{opacity}} className="nav-full">
      <div className="title"><a href="/">'It's Real'</a></div>
      <div className="pages">
        <div>{pageAnchors}</div>
      </div>
    </div>
  );
}
