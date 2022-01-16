import React, { Component } from "react";
import HomePage from "./HomePage";
import Story from "./Story";
import Gallery from "./Gallery";
import Roadmap from "./Roadmap";
import GameMechanics from "./GameMechanics";
import Teams from "./Teams";
import Faq from "./Faq";
import Footer from "./Footer";
import shuffle from "../Helper"
// import Wallet from "./Wallet";

// const randomImageGenerator = () => {
//   Math.floor(Math.random() * (images.length - 3) + 1);
// };

const images = [
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
];

// const randomImageGenerator = images.slice(0, 10).map(function () {
//   return this.splice(Math.floor(Math.random() * this.length), 1)[0];
// }, images.slice());

// console.log(randomImageGenerator);

export default function Main() {
  let shuffledArr = shuffle(images);
  return (
    <div>
      <section id='home'>
        <HomePage />
      </section>
      <section id='story'>
        <Story images={shuffledArr.slice(0, 3)} />
      </section>
      <section id='gallery'>
        <Gallery images={shuffledArr.slice(3)} />
        {/* <Gallery images={images.randomImageGenerator} /> */}
      </section>
      <section id='roadmap'>
        <Roadmap />
      </section>
      <section id='gameMechanics'>
        <GameMechanics />
      </section>
      <section id='teams'>
        <Teams />
      </section>
      <section id='faq'>
        <Faq />
      </section>
      <Footer />
    </div>
  );
}
