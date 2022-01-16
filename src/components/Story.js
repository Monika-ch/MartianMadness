import React, { Component } from "react";
import storyContents from "../data/StoryContents";
import "../styled-components/Story.css";

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storyContents: storyContents,
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
