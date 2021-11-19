import React, { Component } from "react";
import { Collapse, Jumbotron, Button, Media } from "reactstrap";
import NavigationBar from "./Navbar";
import MintCount from "./MintCount";
import "../styled-components/Header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <section className='header-section'>
          <div className='header-content'>
            <Jumbotron>
              <div className='heading-wrapper'>
                <h1 className='h1'>MARTiAN mADNEsS</h1>
              </div>

              <MintCount />
            </Jumbotron>
          </div>
        </section>

        {/* <div>
          <img
            className='ufo'
            src={`${process.env.PUBLIC_URL}/ufo.png`}
            alt='ufo'
            width='450'
          />
        </div> */}

        {/* <section className='galaxy1'></section>
        <section className='galaxy2'></section> */}

        {/* <div className='logo-container d-none d-md-block'>
          <img src={logo} alt='Martian Madness Logo' className='logo' />
        </div> */}
      </React.Fragment>
    );
  }
}

export default Header;
