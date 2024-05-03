"use client";
import { Button } from "@/components/ui/button";
import ScrollElement from "@/components/ui/scroll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { SparklesPreview } from "@/components/ui/sparklesText";
import { DirectionAwareHoverDemo } from "@/components/ui/direction-card";
import { WavyBackground } from "@/components/ui/wavy-background";

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
          <div className="flex gap-28 items-center justify-center">
            <DirectionAwareHoverDemo
              img={
                "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            ></DirectionAwareHoverDemo>
            <DirectionAwareHoverDemo
              img={
                "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            ></DirectionAwareHoverDemo>
          </div>
        </WavyBackground>
      </ParallaxLayer>
      <ParallaxLayer
        className="flex flex-col gap-20  items-center justify-center"
        offset={2}
        speed={0}
      >
        <div className="text-5xl">Sustainable. Beautiful. Ethical.</div>
        <Button className="bg-white text-black w-36 hover:bg-white">
          Shop Now
        </Button>
      </ParallaxLayer>
    </Parallax>
  );
}
