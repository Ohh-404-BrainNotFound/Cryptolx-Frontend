import React from 'react';
import { Menu, Dropdown, Form, Button, Icon } from 'semantic-ui-react';
import './Navbar.scss';
const Navbar = () => {
  return (
    <Menu stackable>
      <Menu.Item>{/* <img src="/images/logo.svg" alt="logo" /> */}</Menu.Item>
      <Menu.Item name='features'>Cryptolx</Menu.Item>

      <Menu.Item position='right'>
        <Menu.Item name='features' position='right'>
          Features
        </Menu.Item>

        <Menu.Item name='sign-in' position='right'>
          Sign-in
        </Menu.Item>
        <Menu.Item position='right'>
          <Button primary content='Register'></Button>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
