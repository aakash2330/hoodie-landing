"use client";
import { Button } from "@/components/ui/button";
import ScrollElement from "@/components/ui/scroll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { SparklesPreview } from "@/components/ui/sparklesText";
import { DirectionAwareHoverDemo } from "@/components/ui/direction-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { LampDemo } from "@/components/ui/lamp";
const img1 =require('../../public/DSC00074.JPG') 
const img2 =require('../../public/DSC00090.JPG') 


export default function Page() {
  return (
    <Parallax className="text-white" pages={3}>
      <ParallaxLayer
        className="flex flex-col items-center  justify-center"
        speed={0}
        offset={0}
      >
        <SparklesPreview></SparklesPreview>
        <ScrollElement></ScrollElement>
      </ParallaxLayer>
      <ParallaxLayer className="" offset={1} speed={0.5}>
        <WavyBackground className="max-w-4xl mx-auto pb-40">

      <h1 className="md:text-7xl text-2xl lg:text-7xl font-bold text-center text-white Permanent relative z-20 ">
            Pick your Side
      </h1>
          <div className="flex gap-28 items-center justify-center">

            <DirectionAwareHoverDemo
              img={ img1 }
            ></DirectionAwareHoverDemo>
            <DirectionAwareHoverDemo
              img={ img2 } ></DirectionAwareHoverDemo>
          </div>
        </WavyBackground>
      </ParallaxLayer>
      <ParallaxLayer
        className="flex flex-col gap-20  items-center justify-center"
        offset={2}
        speed={0}
      >

      </ParallaxLayer>
    </Parallax>
  );
}
