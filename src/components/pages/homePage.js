import React, { Component } from 'react';

import './HomepageAsset/homepage.css';
import pic from './HomepageAsset/pic.png';

class Footer extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>
          Welcome to the Chuck Jones Administrative Homepage!
        </h1>
        <h2>
          <img src={pic} className="App-logo" alt="logo" />
        </h2>
      </div>
    );
  }
}

export default Footer;
