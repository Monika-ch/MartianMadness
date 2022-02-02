import React, { Component } from "react";
import "../styled-components/Roadmap.css";

class Roadmap extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='roadmap-section'>
          <div className='container roadmap-container'>
            <h2 className='roadmap-heading'>The Roadmap..</h2>

            <div className='row'>
              {/* --ROADMAP TIMELINE-- */}
              <div className='col-xl-5 col-lg-6 col-md-6 roadmap-time-release-box'>
                <div className='roadmap-timeline'>
                  <h3 className='roadmap-subheading my-md-5 mt-5 mb-4'>
                    Timed Releases
                  </h3>

                  <div>
                    <h4 className='roadmap-phases'>Phase 1</h4>
                    <p className='roadmap-timeline-para'>
                      Game rewards outlined – Breakdown the tournament and
                      rewards.
                    </p>
                    <h4 className='roadmap-phases'>Phase 2</h4>
                    <p className='roadmap-timeline-para'>
                      Game mechanics explained – Release of a detailed video
                      explaining how the game functions.
                    </p>
                    <h4 className='roadmap-phases'>Phase 3</h4>
                    <p className='roadmap-timeline-para'>
                      Game release date announced! This starts the pot for first
                      tournament winnings!
                    </p>
                    <h4 className='roadmap-phases'>Phase 4</h4>
                    <p className='roadmap-timeline-para'>
                      Game release day! Start the 1st Martian Madness
                      Tournament.
                    </p>
                    <h4 className='roadmap-phases'>Phase 5</h4>
                    <p className='roadmap-timeline-para mb-5'>
                      Equipments! Suit up your Martians with Equipments !
                    </p>
                  </div>
                </div>
              </div>
              <br />

              {/* --ROADMAP-REWARDS-- */}

              <div className='col-md-6 roadmap-rewards-box'>
                <div className='roadmap-rewards'>
                  <h3 className='roadmap-subheading my-md-5 mb-4 mt-5'>
                    Sales Reward
                  </h3>

                  <div className='roadmap-rewards-para roadmap-rewards-para-1'>
                    <h4 className='roadmap-percent'>
                      25%<span>-Early adopters’ giveaway</span>
                    </h4>
                    <p>
                      Raffle 15 Martian mints to anyone who purchased within the
                      first 25% of sales!
                    </p>
                  </div>

                  <div className='roadmap-rewards-para roadmap-rewards-para-2 my-2 mx-lg-5'>
                    <h4 className='roadmap-percent'>
                      50%<span>-Bring a friend</span>
                    </h4>
                    <p>
                      Refer a friend in the Discord channel and we will enter
                      them for a raffle! 3 lucky referrals will be awarded a
                      full 4 Martian team!
                    </p>
                  </div>

                  <div className='roadmap-rewards-para roadmap-rewards-para-3 mt-lg-4'>
                    <h4 className='roadmap-percent'>
                      75%<span>-All holders raffle</span>
                    </h4>
                    <p>
                      Anyone currently holding a Martian will be entered into a
                      raffle of 15 Martian mints! 1 per winner!
                    </p>
                  </div>

                  <div className='roadmap-rewards-para roadmap-rewards-para-4 mt-2 mb-5 mx-lg-5'>
                    <h4 className='roadmap-percent'>
                      100%
                      <span className='roadmap-solana-giveaway'>
                        -SOLANA GIVEAWAY!
                      </span>
                    </h4>
                    <p>20 lucky Martian holders will be awarded 2 Solana!!!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Roadmap;
