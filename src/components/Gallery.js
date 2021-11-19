import React, { Component } from "react";
import "../styled-components/Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='gallery-section'>
          <div className='container gallery-container'>
            <div className='gallery-text'>
              <h2 className='gallery-heading'>The Gallery..</h2>
              <h3 className='gallery-subheading'>
                Martians Collection - An Instance
              </h3>
              {/* row 1: 3 imgs */}
              <div className='row'>
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
              </div>
              {/* row 2: 2 img */}
              <div className='row'>
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
              </div>
              {/* row 3: 3 img */}
              <div className='row'>
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
              </div>
              {/* row 4: 2 img */}
              <div className='row'>
                <div className='col-6 gallery-div'>
                  <img
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
              </div>
              {/* row 5: 3 img */}
              {/* <div className='row'>
                <div className='col-lg-4 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-14.png`}
                    alt='Martian-14'
                    width='300'
                  />
                </div>
                <div className='col-lg-4 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-15.png`}
                    alt='Martian-15'
                    width='300'
                  />
                </div>
                <div className='col-lg-4 gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-16.png`}
                    alt='Martian-16'
                    width='300'
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
