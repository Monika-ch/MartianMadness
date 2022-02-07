import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Button,
} from "reactstrap";
import { HashLink, NavHashLink } from "react-router-hash-link";

import "../styled-components/Navbar.css";

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
        <section className='social-media'>
          <HashLink smooth to={"/page#home"}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.gif`}
              alt='Martian Madness Logo'
              className='logo'
            />
          </HashLink>
          <div className='social-media-box'>
            <a
              href='https://discord.gg/2QGQuBTBA7'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Discord'
            >
              <i className='fab fa-discord fa-3x'></i>
            </a>
          </div>
          <div className='social-media-box'>
            <a
              href='https://www.instagram.com/martian.madness.sol/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram fa-3x'></i>
            </a>
          </div>
          <div className='social-media-box'>
            <a
              href='https://twitter.com/MartianM_NFT'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter fa-3x'></i>
            </a>
          </div>
        </section>
        {/* <div className='logo-container d-none d-md-block'>
          <img src={logo} alt='Martian Madness Logo' className='logo' />
          </div> */}
        <Navbar dark expand='md' className='navBar'>
          <div className='container'>
            <NavbarBrand className='d-sm-block d-lg-none mr-auto'>
              <HashLink smooth to={"/page#home"}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.gif`}
                  alt='Martian Madness Logo'
                  className='logo'
                />
              </HashLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className='m-auto'>
                <NavItem>
                  <HashLink className='nav_link' smooth to={"/page#story"}>
                    Story
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
                    className='nav_link gallery_btn'
                    smooth
                    to={"/page#gallery"}
                  >
                    Gallery
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink className='nav_link' smooth to={"/page#roadmap"}>
                    Roadmap
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
                    className='nav_link'
                    smooth
                    to={"/page#gameMechanics"}
                  >
                    GameMechanics
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink className='nav_link' smooth to={"/page#teams"}>
                    Teams/Faq
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
                    className='nav_link wallet'
                    smooth
                    to={"/page#wallet"}
                  >
                    Connect Wallet <i class='fas fa-wallet'></i>
                  </HashLink>
                </NavItem>
                <NavItem className='d-sm-block d-md-none'>
                  <HashLink
                    className='nav_link nav-mint-btn'
                    smooth
                    to={"/page#wallet"}
                  >
                    Mint <i class='far fa-certificate'></i>
                  </HashLink>
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
