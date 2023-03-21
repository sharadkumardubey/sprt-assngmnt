import React from 'react';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo
} from '../styles/Header.styles';
import logo from '../assets/logo.png';

const Header = props => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
          <HeaderLogo src={logo} />
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

export default Header;
