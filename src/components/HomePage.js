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
              <div className='head-wrapper'>
                <h1 className='h1'>MARTiAN mADNEsS</h1>
                <h2 className='h2'>Mint your Martian NFT</h2>
                <MintCount />
              </div>
            </Jumbotron>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomePage;
