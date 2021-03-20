import { numParts } from '../../utils';

export default function HomeBackgrounds(props) {
  let bgDivs = [];

  for (let i = 0; i < numParts; i++) {
    let classes = ['full-bg', `part${i+1}-bg`];
    if (i === props.selectedBackground-1) {
      classes.push('active');
    }

    let div = <div class={classes.join(' ')} key={`full-bg-${i+1}`}></div>;
    bgDivs.push(div);
  }

  return bgDivs;
}
