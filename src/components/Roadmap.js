import React, { Component } from "react";
import "./Roadmap.css";

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
            <div className='roadmap-text'>
              <h2 className='roadmap-heading'>The Roadmap..</h2>

              <div className='row'>
                {/* roadmap timeline */}
                <div className='col-md-5 roadmap-box1'>
                  <div className='roadmap-timeline'>
                    <h3 className='roadmap-subheading mt-md-3'>
                      Timed Releases
                    </h3>
                    <div className='roadmap-div'>
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
                        Game release date announced! This starts the pot for
                        first tournament winnings!
                      </p>
                      <h4 className='roadmap-phases'>Phase 4</h4>
                      <p className='roadmap-timeline-para'>
                        Game release day! Start the 1st Martian Madness
                        Tournament.
                      </p>
                      <h4 className='roadmap-phases'>Phase 5</h4>
                      <p className='roadmap-timeline-para'>Equipment!</p>
                    </div>
                  </div>
                </div>

                <br />

                {/* roadmap rewards */}
                <div className='col-md-6 roadmap-box2'>
                  <div className='roadmap-rewards'>
                    <h3 className='roadmap-subheading mt-md-3'>Sales Reward</h3>

                    <div className='roadmap-rewards-para'>
                      <h4 className='roadmap-percent'>
                        25%<span>-Early adopters’ giveaway..</span>
                      </h4>
                      <p>
                        Raffle 15 Martian mints to anyone who purchased within
                        the first 25% of sales.
                      </p>
                    </div>

                    <div className='roadmap-rewards-para'>
                      <h4 className='roadmap-percent'>
                        50%-<span>Bring a friend..</span>
                      </h4>
                      <p>
                        Refer a friend in the Discord channel and we will enter
                        them for a raffle.
                        <br />3 lucky referrals will be awarded a full 4 Martian
                        team!
                        <br /> Reserved for referrals who DO NOT currently own
                        any Martians.
                      </p>
                    </div>

                    <div className='roadmap-rewards-para'>
                      <h4 className='roadmap-percent'>
                        75% <span> - Almost there.. All holders raffle!</span>
                      </h4>
                      <p>
                        Anyone currently holding a Martian will be entered into
                        a raffle of 15 Martian mints! 1 per winner!
                      </p>
                    </div>

                    <div className='roadmap-rewards-para'>
                      <h4 className='roadmap-percent'>
                        100% <span> - We made it! ETHEREUM GIVEAWAY!</span>
                      </h4>
                      <p>
                        20 lucky Martian holders will be awarded 0.1 Ethereum!!!
                      </p>
                    </div>
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
