"use client";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const UPDATE = ({ x, y }: { x: number; y: number }) => {
  gsap.set(document.documentElement, {
    "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
    "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
  });
};

export default function BlurCardComponent({}: {}) {
  useEffect(() => {
    window.addEventListener("pointermove", UPDATE);
    return () => {
      window.removeEventListener("pointermove", UPDATE, true);
    };
  }, []);
  return (
    <div className="xx">
      <article className="bg-transparent">
        <h3>ETHKL</h3>
        <Image
          src={
            "https://aakash2330-drippy.s3.amazonaws.com/hoodie/Hoddie+Poster+Breakdown-20240523T183335Z-001/Hoddie+Poster+Breakdown/hoddie.png"
          }
          alt="asd"
          style={{ transition: "1s ease", zIndex: "-1" }}
          objectFit="cover"
          unoptimized
          priority={true}
          width={100}
          height={100}
        ></Image>
        <div className="blur">
          <Image
            src={
              "https://aakash2330-drippy.s3.amazonaws.com/hoodie/Hoddie+Poster+Breakdown-20240523T183335Z-001/Hoddie+Poster+Breakdown/mountain.png"
            }
            alt="asd"
            style={{ transition: "1s ease", zIndex: "-1" }}
            objectFit="cover"
            unoptimized
            priority={true}
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="content">
          <p>
            <span className="-translate-y-12">ETHKL</span>
          </p>
        </div>
      </article>
    </div>
  );
}
