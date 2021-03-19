import React from 'react';
import PropTypes from 'prop-types';

import HomeNavigation from '../components/HomeNavigation';

import mobileBanner from '../../assets/mobile-banner.png';
import specialProjectBanner from '../../assets/special-project-logo-black.png';
import { headers, blurbs, backgrounds } from '../../utils.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onAnchorHover = this.onAnchorHover.bind(this);
    this.onAnchorUnhover = this.onAnchorUnhover.bind(this);

    this.state = {
      rootBackground: '',
      header: headers.DEFAULT,
      blurb: blurbs.DEFAULT,
      smallHeader: false,
      smallBlurb: false,
      hideBanner: false,
      whiteTheme: false
    }
  }

  componentDidMount() {
    // Only call the ready hook if it's present
    if (this.props.onReady) {
      // This timeout mimics as if the home page was doing some asynchronous
      // work (i.e. network requests)
      setTimeout(() => {
        this.props.onReady();
      }, 0);
    }
  }

  /**
   * @param {number} anchorIndex index of anchor hovered (starts at 1)
   */
  onAnchorHover(anchorIndex) {
    console.log(`Entered ${anchorIndex}`);
    let key = 'part-' + anchorIndex;
    this.setState({
      rootBackground: `url(${backgrounds[key]})`,
      header: headers[key],
      blurb: blurbs[key],
      smallHeader: true,
      smallBlurb: true,
      hideBanner: true,
      whiteTheme: true
    });
  }

  onAnchorUnhover(anchorIndex) {
    // Reset all changes applied by onAnchorHover
    console.log(`Left ${anchorIndex}`);
    this.setState({
      rootBackground: '',
      header: headers.DEFAULT,
      blurb: blurbs.DEFAULT,
      smallHeader: false,
      smallBlurb: false,
      hideBanner: false,
      whiteTheme: false
    });
  }

  render() {
    let headerClass = this.state.smallHeader ? 'smaller' : '';
    let blurbClass = this.state.smallBlurb ? 'smaller' : '';
    let containerClass = this.state.whiteTheme
      ? 'transition white-theme'
      : 'transition';
    let rootStyle = { backgroundImage: this.state.rootBackground };
    let bannerClass = this.state.hideBanner
      ? 'transition special-projects-banner hidden'
      : 'transition special-projects-banner';

    return (
      <div id="home-root" style={rootStyle} className={containerClass}>
        <div id="home-container" className={containerClass}>
          <img className={bannerClass}
            src={specialProjectBanner}
            alt="Special Project Logo"></img>
          <div id="home-content">
            <img className="mobile-banner"
              src={mobileBanner}
              alt="&quot;It's Real&quot; Banner"></img>
            <h1 className={headerClass}>{this.state.header}</h1>
            <p className={blurbClass}>{this.state.blurb}</p>
            <HomeNavigation
              onHover={this.onAnchorHover}
              onUnhover={this.onAnchorUnhover}/>
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
