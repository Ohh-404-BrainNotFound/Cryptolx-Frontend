import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

const Menubar = () => {

  return (
    <Menu size="large">
      <Menu.Item active={true}>
        <img src="/asset/svg/app-logo.svg" alt="app logo" />
      </Menu.Item>

      <Menu.Menu position="right">
        <Dropdown item text="Actions">
          <Dropdown.Menu>
            <Dropdown.Item>Buy</Dropdown.Item>
            <Dropdown.Item>Sell</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item position="right" name="About us" />
        <Menu.Item>
          <Button  style={{ backgroundColor: "rgba(247, 147, 26, 1)", color: "white" }} >Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
