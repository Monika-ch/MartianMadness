import React, { Component } from "react";
import "./GameMechanics.css";

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
            <div className='game-mechanics-text'>
              <h2 className='game-mechanics-heading'>The Game Mechanics..</h2>
              <h3 className='game-mechanics-subheading'>
                A Battle on Martians Collection
              </h3>
              {/* row 1: 3 imgs */}
              <div className='row'>
                <div className='col-lg-4 game-mechanics-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-4.png`}
                    alt='Martian-4'
                    width='300'
                  />
                </div>
                <div className='col-lg-4 game-mechanics-div'>
                  <p className='text-info'>
                    Madness Madness NFT is a generative art project designed to
                    give token holders a chance to earn big rewards through
                    competitive games.
                  </p>
                  <h4 className='text-success'>Details coming soon !</h4>
                </div>
                <div className='col-lg-4 game-mechanics-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-6.png`}
                    alt='Martian-6'
                    width='300'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default GameMechanics;
