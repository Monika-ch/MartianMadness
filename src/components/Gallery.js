import React, { Component } from "react";
import shuffle from "../Helper";
import "../styled-components/Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: this.props.images,
    };
  }

  render() {
    let images = this.state.imageArray;
    if (images === null || images.length === 0) {
      return <div> </div>;
    }

    while (images.length <= 10) {
      images.push(images[0]);
    }

    let onclickImage = () => {
      let shuffledArr = shuffle(this.state.imageArray);
      this.setState({ imageArray: shuffledArr });
    };

    return (
      <React.Fragment>
        <section className='gallery-section'>
          <div className='container gallery-container'>
            <h2 className='gallery-heading'>The Gallery..</h2>
            <h3 className='gallery-subheading'>
              Martians Collection - An Instance
            </h3>
            <div className='row'>
              {images.slice(0, 3).map((img) => (
                <div className='col-lg-4 gallery-div'>
                  <img
                    id={img.id}
                    name='Martian'
                    src={img.src}
                    width='300'
                    onClick={onclickImage}
                  />
                </div>
              ))}
            </div>
            <div className='row'>
              {images.slice(3, 5).map((img) => (
                <div className='col-lg-6 gallery-div'>
                  <img
                    id={img.id}
                    name='Martian'
                    src={img.src}
                    width='420'
                    onClick={onclickImage}
                  />
                </div>
              ))}
            </div>
            <div className='row'>
              {images.slice(5, 8).map((img) => (
                <div className='col-lg-4 gallery-div'>
                  <img
                    id={img.id}
                    name='Martian'
                    src={img.src}
                    width='300'
                    onClick={onclickImage}
                  />
                </div>
              ))}
            </div>
            <div className='row'>
              {images.slice(8, 10).map((img) => (
                <div className='col-lg-6 gallery-div'>
                  <img
                    id={img.id}
                    name='Martian'
                    src={img.src}
                    width='420'
                    onClick={onclickImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
