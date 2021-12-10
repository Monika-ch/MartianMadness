import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import NavigationBar from "./Navbar";
import MintCount from "./MintCount";
import "../styled-components/HomePage.css";

class HomePage extends Component {
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
      </React.Fragment>
    );
  }
}

export default HomePage;
