import React, { Component } from "react";
import "../styled-components/Story.css";

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storyContents: [
        {
          id: 0,
          name: "Martian Image 1",
          imageCol: "col-md-5",
          textCol: "col-md-7 story-div",
          paraClassName: "story-para-1",
          text: "In a remote solar system, much like our own, a species of alien had separated into 5 distinct races through colonization of different planets. These aliens became pigmented by the strange atmospheres of their home worlds and now have unique coloring.",
        },
        {
          id: 1,
          name: "Martian Image 2",
          imageCol: "col-md-5 order-last",
          textCol: "col-md-7 order-first",
          paraClassName: "story-para-2 order-1",
          text: "This is where their differences end. Through technological prosperity and a bond unbroken by color, these aliens have thrived for thousands of years and now, they’re bored… But what to do?",
        },
        {
          id: 2,
          name: "Martian Image 3",
          imageCol: "col-md-5",
          textCol: "col-md-7 story-div",
          paraClassName: "story-para-1",
          text: "A council of the 5 races came together to ponder this very question. A think for the ages! In a monumental ceremony it was announced across the solar system that a tournament would be held! And the prize, a new source of endless fun from a distant solar system called . . .",
          solana: " SOLANA!!!",
          spanClassName: "solana",
        },
      ],
    };
  }

  render() {
    let images = this.props.images;
    if (images === null || images.length === 0) {
      return <div> </div>;
    }

    while (images.length !== 3) {
      images.push(images[0]);
    }

    let storyArrayWithImg = [];
    for (let i = 0; i < this.state.storyContents.length; ++i) {
      let storyContent = this.state.storyContents[i];
      storyContent.image = images[i].src;
      storyArrayWithImg.push(storyContent);
    }

    console.log(JSON.stringify(storyArrayWithImg));
    // const story = this.state.storyContents.map((storyContent) => {
    const story = storyArrayWithImg.map((storyContent) => {
      const {
        id,
        name,
        imageCol,
        textCol,
        image,
        paraClassName,
        text,
        solana,
        spanClassName,
      } = storyContent;

      return (
        <div key={id} className='row'>
          <div className={imageCol}>
            <img src={image} alt={name} height='300' width='300' />
          </div>
          <div className={textCol}>
            <p className={paraClassName}>
              {text}
              <span className={spanClassName}>{solana}</span>
            </p>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <section className='story-section' id='story'>
          <div className='container story-container'>
            <div className='story-text'>
              <h2 className='story-heading'>The Story..</h2>
              <h3 className='story-subheading'>Era of Martians</h3>
              {story}
              <div className='row'>
                <div className='col story-end-wrapper'>
                  <p>. . . Let the games begin!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Story;
