import React, { Component } from "react";
import "../styled-components/Gallery.css";
class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: 0,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_1.webp`,
        },
        {
          id: 1,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_2.webp`,
        },
        {
          id: 2,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_3.webp`,
        },
        {
          id: 3,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_4.webp`,
        },
        {
          id: 4,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_5.webp`,
        },
        {
          id: 5,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_6.webp`,
        },
        {
          id: 6,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_7.webp`,
        },
        {
          id: 7,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_8.webp`,
        },
        {
          id: 8,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_9.webp`,
        },
        {
          id: 9,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_10.webp`,
        },
        {
          id: 10,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_11.webp`,
        },
        {
          id: 11,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_12.webp`,
        },
        {
          id: 12,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_13.webp`,
        },
        {
          id: 13,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_14.webp`,
        },
        {
          id: 14,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_15.webp`,
        },
        {
          id: 15,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_16.webp`,
        },
        {
          id: 16,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_17.webp`,
        },
        {
          id: 17,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_18.webp`,
        },
        {
          id: 18,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_19.webp`,
        },
        {
          id: 19,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_20.webp`,
        },
        {
          id: 20,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_21.webp`,
        },
        {
          id: 21,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_22.webp`,
        },
        {
          id: 22,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_23.webp`,
        },
        {
          id: 23,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_24.webp`,
        },
        {
          id: 24,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_25.webp`,
        },
        {
          id: 25,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_26.webp`,
        },
        {
          id: 26,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_27.webp`,
        },
        {
          id: 27,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_28.webp`,
        },
        {
          id: 28,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_29.webp`,
        },
        {
          id: 29,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_30.webp`,
        },
        {
          id: 30,
          src: `${process.env.PUBLIC_URL}/assets/images/IMG_31.webp`,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className='gallery-section'>
          <div className='container gallery-container'>
            <h2 className='gallery-heading'>The Gallery..</h2>
            <h3 className='gallery-subheading'>
              Martians Collection - An Instance
            </h3>
            <div className='row'>
              {this.state.images.slice(0, 3).map((img) => (
                <div className='col-lg-4 gallery-div'>
                  <img id={img.id} name='Martian' src={img.src} width='300' />
                </div>
              ))}
            </div>
            <div className='row'>
              {this.state.images.slice(3, 5).map((img) => (
                <div className='col-lg-6 gallery-div'>
                  <img id={img.id} name='Martian' src={img.src} width='420' />
                </div>
              ))}
            </div>
            <div className='row'>
              {this.state.images.slice(5, 8).map((img) => (
                <div className='col-lg-4 gallery-div'>
                  <img id={img.id} name='Martian' src={img.src} width='300' />
                </div>
              ))}
            </div>
            <div className='row'>
              {this.state.images.slice(8, 10).map((img) => (
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
