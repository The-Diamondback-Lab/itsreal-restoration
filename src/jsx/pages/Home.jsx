import React from 'react';
import PropTypes from 'prop-types';

import HomeNavigation from '../components/HomeNavigation';

import mobileBanner from '../../assets/mobile-banner.png';
import specialProjectBanner from '../../assets/special-project-logo-black.png';
import { headers, blurbs } from '../../utils.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onAnchorHover = this.onAnchorHover.bind(this);
    this.onAnchorUnhover = this.onAnchorUnhover.bind(this);

    this.state = {
      header: headers.DEFAULT,
      blurb: blurbs.DEFAULT,
      hideBanner: false,
      background: ''
    }
  }

  componentDidMount() {
    // Only call the ready hook if it's present
    if (this.props.onReady) {
      // This timeout mimics as if the home page was doing some asynchronous
      // work (i.e. network requests)
      setTimeout(() => {
        this.props.onReady();
      }, 1000);
    }
  }

  /**
   * @param {number} anchorIndex index of anchor hovered (starts at 1)
   */
  onAnchorHover(anchorIndex) {
    console.log(`Entered ${anchorIndex}`);
    this.setState({
      header: headers['part-' + anchorIndex],
      blurb: blurbs['part-' + anchorIndex],
      smallHeader: true,
      smallBlurb: true
    });
    // Apply ".part-x" class to #home-container; this will set the background
    // image to something else
    // Apply ".hidden" class to .special-projects-banner
    // Apply ".white-bg" class to #home-content: this will set the background
    // white with some slight transparency, remove the white boarder, and make
    // all text black (title, blurb, nav elems and their underline).
    // Apply ".smaller" class to header to make it smaller...
  }

  onAnchorUnhover(anchorIndex) {
    // Reset all changes applied by onAnchorHover
    console.log(`Left ${anchorIndex}`);
    this.setState({
      header: headers.DEFAULT,
      blurb: blurbs.DEFAULT,
      smallHeader: false,
      smallBlurb: false
    });
  }

  render() {
    let headerClass = this.state.smallHeader ? 'smaller' : '';
    let blurbClass = this.state.smallBlurb ? 'smaller' : '';

    return (
      <div id="home-root">
        <div id="home-container">
          <img className="special-projects-banner" src={specialProjectBanner} alt="Special Project Logo"></img>
          <div id="home-content">
            <img className="mobile-banner" src={mobileBanner} alt="&quot;It's Real&quot; Banner"></img>
            <h1 className={headerClass}>{this.state.header}</h1>
            <p className={blurbClass}>{this.state.blurb}</p>
            <HomeNavigation onHover={this.onAnchorHover} onUnhover={this.onAnchorUnhover}/>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  /**
   * An optional hook that indicates to the parent component that this component
   * is ready
   */
  onReady: PropTypes.func
}
