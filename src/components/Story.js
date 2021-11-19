import React, { Component } from "react";
import "./Story.css";

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='story-section' id='story'>
          <div className='container story-container'>
            <div className='story-text'>
              <h2 className='story-heading'>The Story..</h2>
              <h3 className='story-subheading'>Era of Martians</h3>
              <div className='row'>
                <div className='col-md-5'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_1.webp`}
                    alt='Artwork-1'
                    height='300'
                    width='300'
                  />
                </div>
                <div className='col-md-7 story-div'>
                  <p className='story-para-1'>
                    In a remote solar system, much like our own, a species of
                    alien had separated into 5 distinct races through
                    colonization of different planets. These aliens became
                    pigmented by the strange atmospheres of their home worlds
                    and now have unique coloring.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-7 story-div'>
                  <p className='story-para-2'>
                    This is where their differences end. Through technological
                    prosperity and a bond unbroken by color, these aliens have
                    thrived for thousands of years and now, they’re bored… But
                    what to do?
                  </p>
                </div>
                <div className='col-md-5'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_2.webp`}
                    alt='Artwork-2'
                    height='300'
                    width='300'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-5'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_3.webp`}
                    alt='Artwork-3'
                    height='300'
                    width='300'
                  />
                </div>
                <div className='col-md-7 story-div'>
                  <p className='story-para-3'>
                    A council of the 5 races came together to ponder this very
                    question. A think for the ages! In a monumental ceremony it
                    was announced across the solar system that a tournament
                    would be held! And the prize, a new source of endless fun
                    from a distant solar system called . . .
                    <span className='solana'> SOLANA!!!</span>
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col story-end-wrapper'>
                  <p>. . . Let the games begin!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className='guide-container'>
          <img
            className='guide'
            src={`${process.env.PUBLIC_URL}/guide.png`}
            alt='guide'
          />
        </div> */}
      </React.Fragment>
    );
  }
}

export default Story;
