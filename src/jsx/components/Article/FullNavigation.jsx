import { tocData } from '../../../constants';

  let pageAnchors = tocData.map((toc, i) => {
    return <a key={`page-${i}`} href={'/' + toc.path}>{toc.numeral}</a>
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
