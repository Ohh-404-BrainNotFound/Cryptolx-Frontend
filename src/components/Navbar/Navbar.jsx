import React from "react";
import { Menu, Dropdown, Form, Button, Icon } from "semantic-ui-react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <Menu stackable>
      <Menu.Item>
        <img src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>

      <Menu.Item name="features">Features</Menu.Item>

      <Menu.Item name="sign-in">Sign-in</Menu.Item>
      <Menu.Item position="right">
        <Form>
          <Form.Field>
            <input type="text" name="search" placeholder="Search..." />
          </Form.Field>
        </Form>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
