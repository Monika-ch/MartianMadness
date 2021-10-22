import React, { Component } from "react";
import { Collapse, Button, Media } from "reactstrap";
import "./MintCount.css";

class MintCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='header-mint-count'>
          <div className='count-wrapper'>
            <button className='mint-btn'>
              Mint <i class='far fa-certificate'></i>
            </button>
            <h3 className='count'>0/10000</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MintCount;
