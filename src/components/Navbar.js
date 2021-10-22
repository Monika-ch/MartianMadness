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
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='logo-container d-none d-md-block'>
          <img src={logo} alt='Martian Madness Logo' className='logo' />
        </div>
        <Navbar dark sticky='top' expand='md' className='navBar'>
          <div className='container'>
            <NavbarBrand className='d-sm-block d-md-none mr-auto' href='/'>
              <img src={logo} alt='Martian Madness Logo' className='logo' />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className='m-auto'>
                {/* <NavItem>
                <NavLink>
                  <img src={logo} alt='planets' className='logo inline-block' />
                </NavLink>
              </NavItem> */}
                <NavItem>
                  <NavLink className='nav_link' to='/story'>
                    Story
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav_link gallery_btn' to='/gallery'>
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
                <NavItem>
                  <NavLink className='nav_link wallet' to='/wallet'>
                    Connect Wallet <i class='fas fa-wallet'></i>
                  </NavLink>
                </NavItem>
                <NavItem className='d-sm-block d-md-none'>
                  <NavLink className='nav_link nav-mint-btn' to='/wallet'>
                    Mint <i class='far fa-certificate'></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
