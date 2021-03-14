import React from 'react';

import mobileBanner from '../assets/mobile-banner.png';

function Home() {
  return (
    <React.Fragment>
      <div id="home-bg" />
      <div id="home-container">
        <img className="banner" src={mobileBanner} alt="&quot;It's Real&quot; Banner"></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          rutrum urna, in semper purus.</p>
      </div>
    </React.Fragment>
  );
}

export default Home;
