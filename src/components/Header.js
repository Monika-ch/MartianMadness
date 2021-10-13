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
import "./Header.css";
import logo from "../logo.png";
import siteName from "../siteName.png";

class Header extends Component {
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
                            <div className='mr-auto d-flex'>
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
              {/* <div>
                <NavItem>
                  <NavLink className='nav_link wallet' to='/wallet'>
                    Wallet
                  </NavLink>
                </NavItem>
              </div> */}
            </Nav>
          </Collapse>
        </Navbar>

        <section className='header'>
          <Jumbotron>
            <div className='img-wrapper'>
              <div className='siteName'></div>
              {/* <img src={siteName} alt='planets' className='siteName' /> */}
            </div>
          </Jumbotron>
        </section>


        <section className='galaxy'>
          
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
