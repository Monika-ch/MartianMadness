import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Jumbotron,
  Button,
  Media,
} from "reactstrap";
import "./Navbar.css";
import logo from "../logo.png";

class MintCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='header-mint-count'>
          <div className='count-wrapper'>
            <Button>Mint</Button>
            <h3>0/10000</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MintCount;
