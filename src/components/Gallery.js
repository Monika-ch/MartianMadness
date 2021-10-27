import React, { Component } from "react";
import "./Gallery.css";

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
              <div className='row'>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-4.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-5.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-6.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-7.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-8.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-9.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
              </div>{" "}
              <div className='row'>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-10.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-11.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-12.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
              </div>{" "}
              <div className='row'>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-13.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-14.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
                <div className='col gallery-div'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-15.png`}
                    alt='Artwork-1'
                    width='450'
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
