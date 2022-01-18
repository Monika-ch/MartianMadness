import React, { Component } from "react";
import "../styled-components/Teams.css";

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='teams-section'>
          <div className='container teams-container'>
            <div>
              <h2 className='teams-heading'>The Teams..</h2>
              <h3 className='teams-subheading'>Martian Madness Team!</h3>
              <div className='row'>
                {/* TEAM MEMBERSDISPLAY */}
                <div className='col-md-5'>
                  <div className='container'>
                    <div className='row team-members'>
                      <div className='col mt-5 mx-md-auto'>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/Zepherus_Omega.webp`}
                          alt='Zepherus_Omega'
                          width='150'
                          className='team-dp'
                        />
                        <h4>ZepherusOmega</h4>
                        <h5>Artist/Designer</h5>
                      </div>
                    </div>
                    <div className='row team-members'>
                      <div className='col mt-5 mx-md-auto'>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/Moon12b.webp`}
                          alt='Moon12b'
                          width='150'
                          className='team-dp'
                        />
                        <h4>Monika12b</h4>
                        <h5>Front-end DevOps Engineer</h5>
                      </div>
                    </div>
                    <div className='row team-members'>
                      <div className='col mt-5 mx-md-auto'>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/IMG_32.webp`}
                          alt='Gigabit.eth'
                          width='150'
                          className='team-dp'
                        />
                        <h4>Gigabit.eth</h4>
                        <h5>Blockchain Engineer</h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEAM INTRO */}
                <div className='col-md-7 teams-main-content'>
                  <p className='p1 mb-5'>
                    The talent behind the Martian Madness NFT is truly a
                    collective of highly skilled individuals. Specialists in
                    their trade who came together purely by coincidence. Our
                    focus is to deliver an exciting NFT collection with emphasis
                    on rewarding the collectors.
                  </p>
                  <p className='p2 mb-5'>
                    Our <strong>artist</strong> has been creating digital and
                    traditional art from an early age and aims to visually tell
                    the tale of Martian Madness.
                  </p>
                  <p className='p3 mb-5'>
                    Our <strong>blockchain engineer</strong> comes from a strong
                    background in coding, marketing and crypto and has
                    handcrafted the backend functionality of the Martian Madness
                    collection.
                  </p>
                  <p className='p4 mb-5'>
                    Last but not least, our <strong>web developer</strong> comes
                    from an educated design background and offers a unique and
                    critical perspective, rivaled by none.
                  </p>
                </div>
              </div>
              <div className='row'>
                <p className='p5-together'>
                  Together.. we are MARTiAN MADNEsS !
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Teams;
