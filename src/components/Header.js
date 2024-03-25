import React from 'react';
import logoSVG from '../images/logo.svg';

const Header = () => {
  return (
    <div className='px-8 py-4 bg-gradient-to-b from-black'>
        <img src={logoSVG} alt="svg-logo" />
    </div>
  );
}

export default Header;
