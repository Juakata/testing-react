import React from 'react';

import Logo from '../../assets/logo.png';
import './styles.scss';

const Header = () => (
    <header data-test="header">
      <div className="wrap">
        <div className="logo">
          <img data-test="logo-header" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
);

export default Header;
