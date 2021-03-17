import React from 'react';
import PropTypes from 'prop-types';

import NavigationElements from '../components/NavigationElements';

import mobileBanner from '../../assets/mobile-banner.png';
import specialProjectBanner from '../../assets/special-project-banner.png';

export default class Home extends React.Component {
  componentDidMount() {
    // Only call the ready hook if it's present
    if (this.props.onReady) {
      // This timeout mimics as if the home page was doing some asynchronous
      // work (i.e. network requests)
      setTimeout(() => {
        this.props.onReady();
      }, 2000);
    }
  }

  render() {
    return (
      <div id="home-root">
        <div id="home-container">
          <img className="special-projects-banner" src={specialProjectBanner} alt="Special Project Logo"></img>
          <div id="home-content">
            <img className="mobile-banner" src={mobileBanner} alt="&quot;It's Real&quot; Banner"></img>
            {/* lsquo and rsquo are "fancy" single quotes */}
            <h1>&lsquo;It&rsquo;s real&rsquo;</h1>
            <p>A seven-part look at how sexual assault is handled at the University
              of Maryland.</p>
            <NavigationElements />
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
