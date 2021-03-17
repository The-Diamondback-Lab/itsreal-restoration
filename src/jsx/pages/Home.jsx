import React from 'react';

import NavigationElements from '../components/NavigationElements';

import mobileBanner from '../../assets/mobile-banner.png';
import specialProjectBanner from '../../assets/special-project-banner.png';
import LoadingLogo from '../components/LoadingLogo';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      fadedOut: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
      fadedOut: false
    }, () => {
      setTimeout(() => {
        this.setState({
          loading: false,
          fadedOut: true
        });
      }, 1500);
    });
  }

  render() {
    if (this.state.loading || !this.state.fadedOut) {
      return <LoadingLogo loading={this.state.loading}/>
    }

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
