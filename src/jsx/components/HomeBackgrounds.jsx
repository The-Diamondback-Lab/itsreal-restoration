import PropTypes from 'prop-types';

import { numParts } from '../../constants';

export default function HomeBackgrounds(props) {
  let bgDivs = [];

  for (let i = 0; i < numParts; i++) {
    let classes = ['full-bg', `part${i+1}-bg`];
    if (i === props.selectedBackground-1) {
      classes.push('active');
    }

    let div = <div className={classes.join(' ')} key={`full-bg-${i+1}`}></div>;
    bgDivs.push(div);
  }

  return bgDivs;
}

HomeBackgrounds.propTypes = {
  /** Which background is selected to show (indexed at 1) */
  selectedBackground: PropTypes.number
}
