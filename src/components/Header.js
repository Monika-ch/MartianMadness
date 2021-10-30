import React, { Component } from "react";
import { Collapse, Jumbotron, Button, Media } from "reactstrap";
import "./Header.css";
import NavigationBar from "./Navbar";
import MintCount from "./MintCount";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <section className='header-section'>
          <Jumbotron>
            <div className='img-wrapper'>
              <h1 className='h1'>MARTiAN mADNEsS</h1>
            </div>
            <p className='header-caption'>
              A digital ocean of digital art based on science-fiction
            </p>
            <MintCount />
          </Jumbotron>
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

        {/* <section className='social-media'>
          <div className='social-media-box'>
            <i className='fab fa-discord fa-3x'></i>
          </div>
          <div className='social-media-box'>
            <i className='fab fa-instagram fa-3x'></i>
          </div>
          <div className='social-media-box'>
            <i className='fab fa-twitter fa-3x'></i>
          </div>
        </section> */}
      </React.Fragment>
    );
  }
}

export default Header;
