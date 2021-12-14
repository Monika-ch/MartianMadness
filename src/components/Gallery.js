import React, { Component } from "react";
import "../styled-components/Gallery.css";
class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = this.props.images;
    if (images === null || images.length === 0) {
      return <div> </div>;
    }

    while (images.length != 10) {
      images.push(images[0]);
    }

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
                  <img id={img.id} name='Martian' src={img.src} width='300' />
                </div>
              ))}
            </div>
            <div className='row'>
              {images.slice(3, 5).map((img) => (
                <div className='col-lg-6 gallery-div'>
                  <img id={img.id} name='Martian' src={img.src} width='420' />
                </div>
              ))}
            </div>
            <div className='row'>
              {images.slice(5, 8).map((img) => (
                <div className='col-lg-4 gallery-div'>
                  <img id={img.id} name='Martian' src={img.src} width='300' />
                </div>
              ))}
            </div>
            <div className='row'>
              {images.slice(8, 10).map((img) => (
                <div className='col-lg-6 gallery-div'>
                  <img id={img.id} name='Martian' src={img.src} width='420' />
                </div>
              ))}
            </div>
            {/* _____________row 1: 3 imgs */}
            {/* <div className='row'>
              <div className='col-lg-4 gallery-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/IMG_4.webp`}
                  alt='Martian-4'
                  width='300'
                />
              </div>
              <div className='col-lg-4 gallery-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/IMG_5.webp`}
                  alt='Martian-5'
                  width='300'
                />
              </div>
              <div className='col-lg-4 gallery-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/IMG_6.webp`}
                  alt='Martian-6'
                  width='300'
                />
              </div> 
            </div> */}
            {/* ____________row 2: 2 img */}
            {/*<div className='row'>
              <div className='col-6 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_7.webp`}
                    alt='Martian-7'
                    width='420'
                  /> 
              </div>
              <div className='col-6 gallery-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/IMG_8.webp`}
                  alt='Martian-8'
                  width='420'
                />
              </div> 
            </div>*/}
            {/* _______________row 3: 3 img */}
            {/*<div className='row'>
                <div className='col-lg-4 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_9.webp`}
                    alt='Martian-9'
                    width='300'
                  />
                </div>
                <div className='col-lg-4 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_10.webp`}
                    alt='Martian-10'
                    width='300'
                  />
                </div>
                <div className='col-lg-4 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/IMG_11.webp`}
                    alt='Martian-11'
                    width='300'
                  />
                </div> 
            </div>*/}
            {/* ___________________row 4: 2 img */}
            {/* <div className='row'>
              <div className='col-6 gallery-div'>
                {/* <img
                  src={`${process.env.PUBLIC_URL}/assets/images/IMG_12.webp`}
                  alt='Martian-12'
                  width='420'
                />
              </div>
              <div className='col-6 gallery-div'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/IMG_13.webp`}
                  alt='Martian-13'
                  width='420'
                />
              </div> 
            </div>*/}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
