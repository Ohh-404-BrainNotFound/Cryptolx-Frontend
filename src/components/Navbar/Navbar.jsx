import React from 'react';
import { Menu, Dropdown, Form, Button, Icon } from 'semantic-ui-react';
import './Navbar.scss';
function Navbar() {
  return (
    <div className='ui menu'>
      <div className='item left-flex'>
        <span className='ui '>CRYPTOLX</span>
        <span className='ui '>Reinventing Crypto</span>
      </div>
      <div class='item '>
        <div class='ui icon input '>
          <i class='search icon'></i>
          <input type='text' placeholder='Search...' />
        </div>
        <div className='item'>
          <img class='ui mini image' src='/images/favicon.ico' alt='img' />
        </div>
        <div className='item'>
          <span>Featured</span>
        </div>
        <div className='item'>
          <img class='ui mini image' src='/images/favicon.ico' alt='img' />
        </div>
        <div className='item'>
          <img class='ui mini image' src='/images/favicon.ico' alt='img' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
