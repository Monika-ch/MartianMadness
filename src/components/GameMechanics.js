import React, { Component } from "react";
import "../styled-components/GameMechanics.css";

class GameMechanics extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='game-mechanics-section'>
          <div className='container game-mechanics-container'>
            <h2 className='game-mechanics-heading section-heading'>The Game Mechanics..</h2>
            <h3 className='game-mechanics-subheading section-subheading'>
              A Battle on Martians Collection
            </h3>
            <div className='row'>
              <div className='col mx-2 m-lg-0 col-lg-4 ufo-1 game-mechanics-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/UFO.webp`}
                  alt=''
                  width='300'
                  height='300'
                />
              </div>
              <div className='col col-lg-4 game-mechanics-div'>
                <p className='text-info mt-lg-5'>
                  Madness Madness NFT is a generative art project designed to
                  give token holders a chance to earn big rewards through
                  competitive games.
                </p>
                <h4 className='text-warning'>Details coming $oon !</h4>
              </div>
              <div className='d-none d-lg-block col-lg-4 ufo-2 game-mechanics-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/UFO.webp`}
                  alt=''
                  width='300'
                  height='300'
                />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default GameMechanics;
