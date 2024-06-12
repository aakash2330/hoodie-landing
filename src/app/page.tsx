"use client";
import { Button } from "@/components/ui/button";
import ScrollElement from "@/components/ui/scroll";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
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
import { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "@/components/marquee";
import Link from "next/link";
import { HoverBorderGradientDemo } from "@/components/buttonX";
import { img1, img2, img4 } from "@/lib/images";
import { useRecoilState } from "recoil";
import ContactPage from "./contact/page";

export default function Page() {
  const [heroText, setHeroText] = useState("ETHKL");
  const [currentPage, setCurrentPage] = useState(0);
  const [bgColor, setbgColor] = useState("#EDE5DF");
  const [isScrollToExperienceShow, setIsScrollToExperienceShow] =
    useState(true);

  const parallax = useRef<any | null>(null);

  const [ref, inView] = useInView();
  const handleScroll = () => {
    if (parallax.current) {
      const scrollTop = parallax.current.container.current.scrollTop;
      const pageHeight = window.innerHeight;
      const newCurrentPage = +(scrollTop / pageHeight).toFixed(1);
      setCurrentPage(newCurrentPage);
      if (newCurrentPage >= 1) {
        setbgColor("#EDE5DF");
        setIsScrollToExperienceShow(false);
      } else if (newCurrentPage < 1) {
        setbgColor("#EDE5DF");
        setIsScrollToExperienceShow(true);
      }
    }
  };
  useEffect(() => {
    console.log({ inView });
  }, [inView]);

  useEffect(() => {
    if (parallax.current) {
      console.log({ parallax });
    }
  }, [parallax]);

  useEffect(() => {
    if (parallax.current) {
      const parallaxElement = parallax.current.container.current;
      parallaxElement.addEventListener("scroll", handleScroll);

      return () => {
        parallaxElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Parallax ref={parallax} className="text-white" pages={6}>
      <ParallaxLayer
        style={{
          zIndex: -1,
          height: "100vh",
          width: "100%",
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
          WebkitTransition: "background-color 0.5s ease",
          MozTransition: "background-color 0.5s ease",
          OTransition: "background-color 0.5s ease",
        }}
        offset={0}
        sticky={{ start: 0, end: 2 }}
        className="flex items-center justify-center"
      >
        <div className="w-[1200px] shadow-2xl">
          <Image
            src={
              "https://aakash2330-drippy.s3.amazonaws.com/hoodie/background.jpg"
            }
            alt="asd"
            style={{ transition: "1s ease", zIndex: "-110" }}
            objectFit="cover"
            unoptimized
            fill
            priority={true}
          ></Image>
          <BlurCardComponent></BlurCardComponent>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        style={{ zIndex: 2, height: "100vh", backgroundColor: "#d3c5bb" }}
      >
        <WavyBackground backgroundFill="#EDE5DF" speed="fast">
          <h1 className="md:text-7xl text-2xl lg:text-7xl font-bold text-center text-white Permanent relative z-20 "></h1>
          <div className="flex gap-28 items-center justify-center">
            <Link href={"/hoodie/1"}>
              <DirectionAwareHoverDemo
                description="Boho Style hoodie | Floral Print"
                img={img1}
              ></DirectionAwareHoverDemo>
            </Link>
            <Link href={"/hoodie/2"}>
              <DirectionAwareHoverDemo
                description="Boho Style hoodie | Floral Print"
                img={img2}
              ></DirectionAwareHoverDemo>
            </Link>
          </div>
        </WavyBackground>
      </ParallaxLayer>

      <ParallaxLayer
        style={{ zIndex: -1, height: "100vh" }}
        offset={2}
        speed={1}
        className="flex flex-col  items-center justify-center"
        sticky={{ start: 2, end: 3 }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-full">
            <Image
              src={img4}
              alt="asd"
              style={{ transition: "1s ease" }}
              objectFit="cover"
              fill
            ></Image>
          </div>
          <div
            style={{
              zIndex: 50,
              transition: " 1s ease",
            }}
            className={cn(
              ` ${currentPage >= 2.2 ? "opacity-0" : null} gap-7 bg-[#fcf6f2] flex flex-col items-center text-center text-black font-sans text-3xl justify-center p-10 size-[40rem]`,
            )}
          >
            <div>About Us</div>
            <div className="font-extralight text-base ">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          zIndex: 3,
          height: "100vh",
        }}
        className="flex bg-transparent flex-col gap-20  items-center justify-center"
        offset={3}
      >
        {/*
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
        */}
        <Expanding></Expanding>
      </ParallaxLayer>

      <ParallaxLayer
        className="flex flex-col gap-5   items-center justify-center"
        offset={4}
        style={{ zIndex: 2, height: "100vh", backgroundColor: "#EDE5DF" }}
      >
        <div className="text-gray-700 text-4xl">Ask Our Customers</div>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        <HoverBorderGradientDemo
          onClickFn={function () {
            parallax.current.scrollTo(1);
          }}
        ></HoverBorderGradientDemo>
      </ParallaxLayer>
      <ParallaxLayer
        className="flex flex-col gap-5     items-center justify-center"
        offset={5}
        style={{ zIndex: 2, height: "100vh", backgroundColor: "#000000" }}
      >
        <ContactPage></ContactPage>
      </ParallaxLayer>
    </Parallax>
  );
}
