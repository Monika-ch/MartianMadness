import React, { Component } from "react";
import { Accordion, AccordionItem, AccordionHeader } from "reactstrap";
import "./Faq.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div class='accordion accordion-flush' id='accordionFlushExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='flush-headingOne'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              class='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='flush-headingTwo'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              class='accordion-collapse collapse'
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='flush-headingThree'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              class='accordion-collapse collapse'
              aria-labelledby='flush-headingThree'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
        {/* <Accordion flush toggle={function noRefCheck() {}}>
          <AccordionItem>
            <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
            <AccordionItem accordionId='1'>
              <strong>This is the first item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionItem>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
            <AccordionItem accordionId='2'>
              <strong>This is the second item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionItem>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
            <AccordionItem accordionId='3'>
              <strong>This is the third item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionItem>
          </AccordionItem>
        </Accordion> */}

        <section className='faq-section'>
          <div className='container faq-container'>
            <div>
              <h2 className='faq-heading'>The Faqs..</h2>

              <h3 className='faq-subheading'>Martian Madness Team!</h3>

              <div class='accordion accordion-flush' id='accordionFlushFaq'>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='flush-headingOne'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseOne'
                      aria-expanded='false'
                      aria-controls='flush-collapseOne'
                    >
                      How do I mint a Martian?
                    </button>
                  </h2>
                  <div
                    id='flush-collapseOne'
                    class='accordion-collapse collapse'
                    aria-labelledby='flush-headingOne'
                    data-bs-parent='#accordionFlushFaq'
                  >
                    <div class='accordion-body'>
                      You will need a Solana compatible wallet, our recommended
                      choice is Phantom. You will need to fund your Solana
                      wallet with enough SOL to mint the amount of Martians you
                      would like to acquire and to cover transaction costs. Once
                      minted Martians will display within your Phantom wallet
                      under the collectibles tab. Here’s a great introductory
                      video tutorial on getting started with Solana wallet.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='flush-headingTwo'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseTwo'
                      aria-expanded='false'
                      aria-controls='flush-collapseTwo'
                    >
                      How much are Martians?
                    </button>
                  </h2>
                  <div
                    id='flush-collapseTwo'
                    class='accordion-collapse collapse'
                    aria-labelledby='flush-headingTwo'
                    data-bs-parent='#accordionFlushFaq'
                  >
                    <div class='accordion-body'>
                      Each martian will cost TBD SOL
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='flush-headingThree'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseThree'
                      aria-expanded='false'
                      aria-controls='flush-collapseThree'
                    >
                      How many Maritans will be minted?
                    </button>
                  </h2>
                  <div
                    id='flush-collapseThree'
                    class='accordion-collapse collapse'
                    aria-labelledby='flush-headingThree'
                    data-bs-parent='#accordionFlushFaq'
                  >
                    <div class='accordion-body'>
                      There are only going to be 10,000 martians minted on the
                      Solana blockchain.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='flush-headingFour'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseFour'
                      aria-expanded='false'
                      aria-controls='flush-collapseFour'
                    >
                      When Is Martian Madness Dropping?
                    </button>
                  </h2>
                  <div
                    id='flush-collapseFour'
                    class='accordion-collapse collapse'
                    aria-labelledby='flush-headingFour'
                    data-bs-parent='#accordionFlushFaq'
                  >
                    <div class='accordion-body'>TBD</div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='flush-headingFive'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseFive'
                      aria-expanded='false'
                      aria-controls='flush-collapseFive'
                    >
                      When Are My Martians Revealed?
                    </button>
                  </h2>
                  <div
                    id='flush-collapseFive'
                    class='accordion-collapse collapse'
                    aria-labelledby='flush-headingFive'
                    data-bs-parent='#accordionFlushFaq'
                  >
                    <div class='accordion-body'>
                      Your Martians are instantly revealed upon minting.
                    </div>
                  </div>
                </div>

                <div class='accordion accordion-flush' id='accordionFlushFaq'>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='flush-headingSix'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseSix'
                        aria-expanded='false'
                        aria-controls='flush-collapseSix'
                      >
                        Where Can I Find The Rarities Of My Martians?
                      </button>
                    </h2>
                    <div
                      id='flush-collapseSix'
                      class='accordion-collapse collapse'
                      aria-labelledby='flush-headingSix'
                      data-bs-parent='#accordionFlushFaq'
                    >
                      <div class='accordion-body'>
                        Martian rarities can be found on HowRare.is
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='flush-headingSeven'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseSeven'
                        aria-expanded='false'
                        aria-controls='flush-collapseSeven'
                      >
                        Why Was The Solana Blockchain Chosen?
                      </button>
                    </h2>
                    <div
                      id='flush-collapseSeven'
                      class='accordion-collapse collapse'
                      aria-labelledby='flush-headingSeven'
                      data-bs-parent='#accordionFlushFaq'
                    >
                      <div class='accordion-body'>
                        We chose Solana based on faster confirmation times, and
                        lower transaction costs than Ethereum. In addition the
                        soon-to-be launched Martian Madness game will be a much
                        more enjoyable experience on the Solana blockchain.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='flush-headingEight'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseEight'
                        aria-expanded='false'
                        aria-controls='flush-collapseEight'
                      >
                        How Many Martians Can I Mint?
                      </button>
                    </h2>
                    <div
                      id='flush-collapseEight'
                      class='accordion-collapse collapse'
                      aria-labelledby='flush-headingEight'
                      data-bs-parent='#accordionFlushFaq'
                    >
                      <div class='accordion-body'>
                        As many as you would like, unlike Ethereum where batch
                        mints were introduced to overcome the rising gas fees,
                        Solana is not hampered by the same limitations.
                      </div>
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

export default Faq;
