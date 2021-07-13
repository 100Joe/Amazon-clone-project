import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      {/* // This is the logo on the far right. */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      {/* // This will be for the search bar */}
      <div className="header__search">
        <input className="heaer__searchInput" type="text" />
        {/* Logo */}
      </div>

      {/* //This will be for the 4 navbar options */}
      <div className="header__nav">
        <div className="header__option">
          <span
            className="header__optionlineone">Hello Guest</span>
          <span
            className="header__optionlinetwo">Sign In</span>
        </div>
        <div className="header__option">
          <span
            className="header__optionlineone">Returns</span>
          <span
            className="header__optionlinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span
            className="header__optionlineone">Your</span>
          <span
            className="header__optionlinetwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header
