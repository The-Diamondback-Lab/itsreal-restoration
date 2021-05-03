import { tocData } from '../../../constants';

export default function FullNavigation() {
  let pageAnchors = tocData.map(toc => {
    return <a href={"/" + toc.path}>{toc.numeral}</a>
  });

  return (
    <div className="nav-full">
      <div className="title"><a href="/">'It's Real'</a></div>
      <div className="pages">
        <div>{pageAnchors}</div>
      </div>
    </div>
  );
}
