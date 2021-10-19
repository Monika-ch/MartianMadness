import React, { Component } from 'react';
import './Story.css'

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


    render() {
      return (
        <React.Fragment>
          <section className='story-section'>
            <div className='container story-container'>
              <div className='story-text'>
                <h2 className='story-heading'>The Story..</h2>
                <h3 className='story-subheading'>Era of Aliens</h3>
                <p className='story-paragraph'>
                  In a remote solar system, much like our own, a species of
                  alien had separated into 5 distinct races through colonization
                  of different planets. These aliens became pigmented by the
                  strange atmospheres of their home worlds and now have unique
                  coloring.{" "}
                </p>
                <p className='story-paragraph'>
                  This is where their differences end. Through technological
                  prosperity and a bond unbroken by color, these aliens have
                  thrived for thousands of years and now, they’re bored… But
                  what to do?
                </p>
                <p className='story-paragraph'>
                  A council of the 5 races came together to ponder this very
                  question. A think for the ages! In a monumental ceremony it
                  was announced across the solar system that a tournament would
                  be held! And the prize, a new source of endless fun from a
                  distant solar system called . . . ETHEREUM. Let the games
                  begin!
                </p>
                {/* <p className='story-para p1'>
                In a remote solar system, much like our own, a species of alien had separated into 5 distinct races through colonization of different planets . .
              </p><p className='story-para p2'>
                . . These aliens became pigmented by the strange atmospheres of their home worlds and now have unique coloring . .
              </p><p className='story-para p3'>
                This is where their differences end! Through technological prosperity and a bond unbroken by color, these aliens have thrived for thousands of years and now... they’re bored! 
              </p>
              <p className='story-para p4'>
                But what to do? A council of the 5 races came together to ponder
                this very question . .
              </p>
              <p className='story-para p5'>A think for the ages !!</p>
              <p className='story-para p6'>
                In a monumental ceremony it was announced across the solar
                system that a tournament would be held . .
              </p>
              <p className='story-para p7'>
                And the prize, a new source of endless fun from a distant solar
                system called. . . ETHEREUM!!!
              </p>
              <p className='story-para p8'>LET THE GAMES BEGIN!!!!!!</p> */}
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    }
}

export default Story;