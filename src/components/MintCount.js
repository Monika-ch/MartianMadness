import React, { Component } from "react";
import "../styled-components/MintCount.css";

class MintCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isNavOpen: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='header-mint-count'>
          <button className='mint-btn'>
            Mint <i class='far fa-certificate'></i>
          </button>
          <p className='count'>0/10000</p>
        </div>
      </React.Fragment>
    );
  }
}

export default MintCount;
