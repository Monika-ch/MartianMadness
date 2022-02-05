import React from "react";
import HomePage from "./HomePage";
import Story from "./Story";
import Gallery from "./Gallery";
import Roadmap from "./Roadmap";
import GameMechanics from "./GameMechanics";
import Teams from "./Teams";
import Faq from "./Faq";
import Footer from "./Footer";
import shuffle from "../Helper";
import images from "../data/Images";
// import Wallet from "./Wallet";

export default function Main() {
  let shuffledArr = shuffle(images);
  return (
    <div>
      <section id='home'>
        <HomePage />
      </section>
      {/* <section id='story'>
        <Story images={shuffledArr.slice(0, 3)} />
      </section> */}
      <section id='gallery'>
        <Gallery images={shuffledArr.slice(3)} />
      </section>
      {/* <section id='roadmap'>
        <Roadmap />
      </section> */}
      <section id='gameMechanics'>
        <GameMechanics />
      </section>
      <section id='teams'>
        <Teams />
      </section>
      {/* <section id='faq'>
        <Faq />
      </section>
      <Footer />*/}
    </div>
  );
}
