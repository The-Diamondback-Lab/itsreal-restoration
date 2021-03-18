import React from 'react';
import PropTypes from 'prop-types';

import tocData from '../../data/toc.json';

/**
 * Generates the navigation elements for the home page
 * @param {HomeNavigationPropTypes} props
 * @returns a `div` element whose children are anchor tags `a`
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
    return (
      <div id="navigation-elems">
        {tocData.map((data, i) =>
          <a href={'/' + data.path}
            onMouseEnter={this.onMouseEnter.bind(this, i+1)}
            onMouseLeave={this.onMouseLeave.bind(this, i+1)}
            target="_blank"
            rel="noreferrer"
            key={`nav-part-${i+1}`}>{data.numeral}</a>
        )}
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
