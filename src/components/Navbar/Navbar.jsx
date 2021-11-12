import React from "react";
import { Menu, Dropdown, Form, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../Provider/userCheck";
import { signOut } from "../../Services/auth";
import { useHistory } from "react-router";

const Navbar = () => {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const history = useHistory();

  useEffect(() => {
    if (!user || isLoading) {
      history.push("/");
    }
  }, [user, isLoading]);

  const logOutUser = () => {
    try {
      signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Menu stackable>
      <Menu.Item>
        <img src="/images/logo.svg" alt="logo" />
      </Menu.Item>
      <Menu.Item name="features">Cryptolx</Menu.Item>

      <Menu.Item position="right">
        <Menu.Item name="products">
          <Link activeClassName="current" to="/listing">
            Products
          </Link>
        </Menu.Item>
        {!!user ? (
          <>
            <Menu.Item name="sign-in" position="right">
              <Link activeClassName="current" to="/dashboard">
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item name="sign-in" position="right">
              <Link activeClassName="current" to="/dashboard/cart">
                <Icon name="shopping bag" /> My cart
              </Link>
            </Menu.Item>
            <Menu.Item name="sign-in" position="right">
              <Link activeClassName="current" to="/dashboard/sold">
                <Button icon="shopping bag" content="My Orders" positive />
              </Link>
            </Menu.Item>
            <Menu.Item name="sign-in" position="right">
              <Link activeClassName="current" to="/dashboard/orders">
                <Button icon="shopping bag" content="Your orders" primary />
              </Link>
            </Menu.Item>

            <Menu.Item
              name="sign-in"
              position="right"
              onClick={() => logOutUser()}
            >
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
