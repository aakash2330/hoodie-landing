"use client";
import { Button } from "@/components/ui/button";
import ScrollElement from "@/components/ui/scroll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { SparklesPreview } from "@/components/ui/sparklesText";
import { DirectionAwareHoverDemo } from "@/components/ui/direction-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { LampDemo } from "@/components/ui/lamp";
import Expanding from "@/components/expanding";
import ParallaxGrid from "@/components/parallaxGrid";
import { InfiniteMovingCardsDemo } from "@/components/ui/infiniteCards";
import { SpotlightPreview } from "@/components/spotlightDemo";
import BlurCardComponent from "@/components/ui/blurCard";
import InfiniteText from "@/components/infiniteText";
const img1 = require("../../public/DALL·E 2024-05-14 13.30.01 - A men's hippie-style hoodie in a rich palette of earth tones including terracotta, moss green, and sandy beige, featuring an abstract tie-dye pattern.webp");
const img2 = require("../../public/DALL·E 2024-05-14 13.30.04 - A men's hippie-style hoodie in subdued earth tones of clay red, forest green, and beige, displaying a gentle swirl tie-dye effect. This hoodie offers .webp");

export default function Page() {
  return (
    <Parallax className="text-white" pages={5}>
      <ParallaxLayer
        className="flex flex-col gap-20  items-center justify-center"
        offset={0}
      >
        <SparklesPreview></SparklesPreview>
        <ScrollElement></ScrollElement>
      </ParallaxLayer>

      <ParallaxLayer  offset={1} speed={0.5}>
        <WavyBackground className="max-w-4xl mx-auto pb-20">
          <h1 className="md:text-7xl text-2xl lg:text-7xl font-bold text-center text-white Permanent relative z-20 "></h1>
          <div className="flex gap-28 items-center justify-center">
            <DirectionAwareHoverDemo img={img1}></DirectionAwareHoverDemo>
            <DirectionAwareHoverDemo img={img2}></DirectionAwareHoverDemo>
          </div>
        </WavyBackground>
      </ParallaxLayer>

      <ParallaxLayer
        className="flex flex-col gap-20  items-center justify-center"
        offset={2}
        speed={0}
        style={{paddingBottom:"10rem"}}
      >
        <h1
          style={{ WebkitTextStroke: "2px white" }}
          className="md:text-7xl text-black text-2xl lg:text-7xl font-bold text-center  Permanent relative z-20 "
        >
          WHAT'S TRENDING
        </h1>
        <InfiniteText></InfiniteText>
      </ParallaxLayer>

      <ParallaxLayer
        className="flex flex-col gap-20  items-center justify-center"
        offset={3}
        speed={1}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <div className="flex gap-5">
            <div>Explore The</div>
            <h1
              style={{ WebkitTextStroke: "2px white" }}
              className="md:text-7xl text-black text-2xl lg:text-7xl font-bold text-center  Permanent relative z-20 "
            >
              ETHKL
            </h1>

            <div>Trend</div>
          </div>
        </h1>
        <Expanding></Expanding>
      </ParallaxLayer>


      <ParallaxLayer
        className="flex flex-col gap-10  items-center justify-center"
        offset={4}
        speed={0.5}
      >
<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <div className="flex gap-5">
            <div>Ask Our Customers</div>
          </div>
        </h1>

        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      </ParallaxLayer>
        

      
    </Parallax>
  );
}
