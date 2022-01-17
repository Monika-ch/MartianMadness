import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import "../styled-components/Faq.css";

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='faq-section'>
          <div className='container faq-container'>
            <h2 className='faq-heading'>The Faqs..</h2>
            <div className='faq-content'>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    How do I mint a Martian?
                  </Accordion.Header>
                  <Accordion.Body>
                    You will need a Solana compatible wallet, our recommended
                    choice is Phantom. You will need to fund your Solana wallet
                    with enough SOL to mint the amount of Martians you would
                    like to acquire and to cover transaction costs. Once minted
                    Martians will display within your Phantom wallet under the
                    collectibles tab. Here’s a great introductory video tutorial
                    on getting started with Solana wallet.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>How much are Martians?</Accordion.Header>
                  <Accordion.Body>
                    Each martian will cost TBD SOL
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    How many Maritans will be minted?
                  </Accordion.Header>
                  <Accordion.Body>
                    There are only going to be 10,000 martians minted on the
                    Solana blockchain.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    When Is Martian Madness Dropping?
                  </Accordion.Header>
                  <Accordion.Body>To be announced!</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>
                    When Are My Martians Revealed?
                  </Accordion.Header>
                  <Accordion.Body>
                    Your Martians are instantly revealed upon minting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                  <Accordion.Header>
                    Where Can I Find The Rarities Of My Martians?
                  </Accordion.Header>
                  <Accordion.Body>
                    Martian rarities can be found on HowRare.is
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                  <Accordion.Header>
                    Why Was The Solana Blockchain Chosen?
                  </Accordion.Header>
                  <Accordion.Body>
                    We chose Solana based on faster confirmation times, and
                    lower transaction costs than Ethereum. In addition the
                    soon-to-be launched Martian Madness game will be a much more
                    enjoyable experience on the Solana blockchain.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                  <Accordion.Header>
                    How Many Martians Can I Mint?
                  </Accordion.Header>
                  <Accordion.Body>
                    As many as you would like, unlike Ethereum where batch mints
                    were introduced to overcome the rising gas fees, Solana is
                    not hampered by the same limitations.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Faq;
