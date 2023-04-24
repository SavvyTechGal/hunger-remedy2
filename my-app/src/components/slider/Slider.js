import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import img1 from '../../images/mt-0473-slide.jpg';
import img2 from '../../images/mt-0473-slide2.jpg';
import img3 from '../../images/mt-0473-slide3.jpg';
import Wrapper from "./wrapper/index";
import Title from "./title/index";
import Subtitle from "./subtitle/index";

export default function slider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Best Recipes with Best Ingredients</Title>
          <Subtitle>
            Hunger Remedy
          </Subtitle>
        </Wrapper>
      </Overlay>

      

      <Slide

        background={{
          backgroundImageSrc: img1
        }}
      />

      <Slide
        
        background={{
          backgroundImageSrc: img2
        }}
      />

      <Slide

        background={{
          backgroundImageSrc: img3
        }}
      />

  
      <MenuNav />
    </HeroSlider>
  );
}
