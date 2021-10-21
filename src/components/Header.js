import React, { Component } from "react";
import { Collapse, Jumbotron, Button, Media } from "reactstrap";
import "./Header.css";
import NavigationBar from "./Navbar";
import MintCount from "./MintCount";

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
        <NavigationBar />

        <section className='header'>
          <Jumbotron>
            <div className='img-wrapper'>
              <div className='siteName'>
                <h1 className='h1'>MARTiAN mADNEsS</h1>
                <h6 className='text-light'>
                  one of the best science-fiction or action films ever made
                </h6>
              </div>
            </div>
            <MintCount />
          </Jumbotron>
        </section>

        <section className='galaxy'></section>

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
