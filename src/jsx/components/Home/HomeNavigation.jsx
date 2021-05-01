import React from 'react';
import PropTypes from 'prop-types';

import { tocData } from '../../../constants';

/**
 * @extends React.Component<HomeNavigationPropTypes>
 */
export default class HomeNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(anchorIndex) {
    this.props.onHover(anchorIndex);
  }

  onMouseLeave(anchorIndex) {
    this.props.onUnhover(anchorIndex);
  }

  render() {
    let links = tocData.map((data, i) =>
      <a href={'/' + data.path}
        className="transition"
        onMouseEnter={this.onMouseEnter.bind(this, i+1)}
        onMouseLeave={this.onMouseLeave.bind(this, i+1)}
        rel="noreferrer"
        key={`nav-part-${i+1}`}>{data.numeral}</a>
    );

    return (
      <div id="navigation-elems">
        {links}
      </div>
    );
  }
}

HomeNavigation.propTypes = {
  /** Callback for `onmouseenter` event for anchor elements */
  onHover: PropTypes.func.isRequired,
  /** Callback for `onmouseleave` event for anchor elements */
  onUnhover: PropTypes.func.isRequired
}

/**
 * @typedef HomeNavigationPropTypes
 * @prop {(number) => void} onHover Callback for `onmouseenter` event for anchor
 * elements
 * @prop {(number) => void} onUnhover Callback for `onmouseleave` event for
 * anchor elements
 */
