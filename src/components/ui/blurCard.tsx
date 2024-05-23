"use client";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const UPDATE = ({ x, y }: { x: number; y: number }) => {
  gsap.set(document.documentElement, {
    "--x": gsap.utils.mapRange(0, window.innerWidth, -0.3, 0.3, x),
    "--y": gsap.utils.mapRange(0, window.innerHeight, -0.3, 0.3, y),
  });
};

export default function BlurCardComponent({
}: {
}) {
  useEffect(() => {
    window.addEventListener("pointermove", UPDATE);
    return () => {
      window.removeEventListener("pointermove", UPDATE, true);
    };
  }, []);
  return (
    <div className="xx">
      <article className="bg-transparent">
        <Image
          src={
            "https://aakash2330-drippy.s3.amazonaws.com/hoodie/Hoddie+Poster+Breakdown-20240523T183335Z-001/Hoddie+Poster+Breakdown/sky.png"
          }
          alt="asd"
          style={{ transition: "1s ease", zIndex: "-1" }}
          objectFit="cover"
          unoptimized
          priority={true}
          width={100}
          height={100}
        ></Image>
        <h3>ETHKL</h3>
        <img
          src="https://aakash2330-drippy.s3.amazonaws.com/hoodie/Hoddie+Poster+Breakdown-20240523T183335Z-001/Hoddie+Poster+Breakdown/hoddie.png"
          alt=""
        />
        <div className="blur">
          <img src="https://aakash2330-drippy.s3.amazonaws.com/hoodie/Hoddie+Poster+Breakdown-20240523T183335Z-001/Hoddie+Poster+Breakdown/mountain.png" alt="" />
        </div>
        <div className="content">
          <p>
            <span>ETHKL</span>
          </p>
        </div>
      </article>
    </div>
  );
}
