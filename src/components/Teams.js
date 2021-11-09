import React, { Component } from "react";
import "./Teams.css";

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
                <div className='col-md-5'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-23.png`}
                    alt='Artwork-23'
                    width='450'
                  />
                </div>
                <div className='col-md-7'>
                  <p className='teams-main-content'>
                    The talent behind the Martian Madness NFT is truly a
                    collective of highly skilled individuals. Specialists in
                    their trade who came together purely by coincidence. Our
                    focus is to deliver an exciting NFT collection with emphasis
                    on rewarding the collectors. Our artist has been creating
                    digital and traditional art from an early age and aims to
                    visually tell the tale of Martian Madness. Our blockchain
                    engineer comes from a strong background in coding, marketing
                    and crypto and has handcrafted the backend functionality of
                    the Martian Madness collection. Last but not least, our web
                    developer comes from an educated design background and
                    offers a unique and critical perspective, rivaled by none.
                    We are Martian Madness!
                  </p>
                </div>
              </div>
              <div className='row team-members'>
                <div className='col-md-4'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-20.png`}
                    alt='Artwork-24'
                    width='150'
                    className='team-dp'
                  />
                  <h4>ZepherusOmega | CEO/Founder</h4>
                  <p className=''>
                    This is where their differences end. Through technological
                    prosperity and a bond unbroken by color… But what to do?
                  </p>
                </div>
                <div className='col-md-4'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-25.png`}
                    alt='Artwork-25'
                    width='150'
                    className='team-dp'
                  />
                  <h4>Gigabit.eth | SEO/Backend Mind</h4>
                  <p className=''>
                    This is where their differences end. Through technological
                    prosperity and a bond unbroken by color… But what to do?
                  </p>
                </div>
                <div className='col-md-4'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/martians512/Untitled_Artwork-21.png`}
                    alt='Artwork-26'
                    width='150'
                    className='team-dp'
                  />
                  <h4>Monika12b | DevOps/Frontend Brain</h4>
                  <p className=''>
                    This is where their differences end. Through technological
                    prosperity and a bond unbroken by color… But what to do?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Teams;
