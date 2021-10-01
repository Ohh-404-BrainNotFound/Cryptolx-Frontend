import React from "react";
import { Menu, Dropdown, Form, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router-dom";
import { signOut } from "../../Services/auth";

const Navbar = () => {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    console.log(user);
    if (user && !isLoading) {
      setredirect("/");
    } else {
      setredirect("/dashboard");
    }
  }, [user, isLoading]);

  return (
    <Menu stackable>
      <Menu.Item>
        <img src="/images/logo.svg" alt="logo" />
      </Menu.Item>
      <Menu.Item name="features">Cryptolx</Menu.Item>

      <Menu.Item position="right">
        <Menu.Item name="features" position="right">
          Features
        </Menu.Item>
        {!!user ? (
          <>
            <Menu.Item name="sign-in" position="right" onClick={signOut}>
              <Icon name="shopping bag" /> My cart
            </Menu.Item>
            <Menu.Item name="sign-in" position="right" onClick={signOut}>
              <Button icon="shopping bag" content="My Orders" positive />
            </Menu.Item>
            <Menu.Item name="sign-in" position="right" onClick={signOut}>
              <Button icon="shopping bag" content="Your orders" primary />
            </Menu.Item>

            <Menu.Item name="sign-in" position="right" onClick={signOut}>
              Sign out
            </Menu.Item>
          </>
        ) : (
          <Menu.Item name="sign-in" position="right">
            <Link activeClassName="current" to="/login">
              Get Involved
            </Link>
          </Menu.Item>
        )}
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
