import React from 'react';

import '../../styles/home.scss';
import NavigationElements from '../components/NavigationElements';

import mobileBanner from '../../assets/mobile-banner.png';
import specialProjectBanner from '../../assets/special-project-banner.png';

function Home() {
  return (
    <div id="home-container">
      <img className="special-projects-banner" src={specialProjectBanner} alt="Special Project Logo"></img>
      <div id="home-content">
        <img className="mobile-banner" src={mobileBanner} alt="&quot;It's Real&quot; Banner"></img>
        <h1>&lsquo;It&rsquo;s real&rsquo;</h1>
        <p>A seven-part look at how sexual assault is handled at the University
          of Maryland.</p>
        <NavigationElements />
      </div>
    </div>
  );
}

export default Home;
