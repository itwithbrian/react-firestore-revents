import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import "./navbar.css";

function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: "0.5rem" }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item name='Events' />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content='Create Event'
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: "0.5rem" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
