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

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='logo-container'>
          <img src={logo} alt='planets' className='logo' />
        </div>

        <Navbar sticky='top' expand='md' className='navBar'>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='m-auto'>
              {/* <NavItem>
                <NavLink>
                  <img src={logo} alt='planets' className='logo inline-block' />
                </NavLink>
              </NavItem> */}
              <div className='nav-btns d-flex'>
                <NavItem>
                  <NavLink className='nav_link' to='/story'>
                    Story
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav_link gallery_btn' to='/story'>
                    Gallery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav_link' to='/roadmap'>
                    Roadmap
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav_link' to='/game-mechanics'>
                    Game Mechanics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav_link' to='/faq'>
                    FAQ
                  </NavLink>
                </NavItem>
              </div>
              <div className='nav-wallet'>
                <NavItem>
                  <NavLink className='nav_link wallet' to='/wallet'>
                    Connect Wallet <i class='fas fa-wallet'></i>
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
