import React, { Component } from 'react';
import linkedin from '../../../assets/images/linkedin.png';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <h1 className="header__welcome">Welcome to My Portfolio!</h1>
        <a target="_blank" href="https://www.linkedin.com/in/accardosteven" className="header__link">
          <img src={linkedin} alt="linkedin icon" className="header__icon" />
        </a>
      </div>
    );
  }
}

export default Header;
